import { buildFetchTokenizer } from "../node_modules/@nazo-site/kuromoji.ts/dist/index.browser.js";

const DICTIONARY_PATH =
  "../node_modules/@nazo-site/kuromoji.ts/dict/";

const TARGET_POS = new Set([
  "名詞",
  "動詞",
  "形容詞",
  "副詞"
]);

const STOP_WORDS = new Set([
  "今日",
  "昨日",
  "一昨日",
  "こと",
  "もの",
  "する",
  "これ",
  "それ",
  "あれ",
  "ここ",
  "そこ",
  "あそこ",
  "ため",
  "ところ",
  "よう"
]);

const input = document.getElementById("input");
const runButton = document.getElementById("run");
const tokensOutput = document.getElementById("tokens");
const wordsOutput = document.getElementById("words");
const bunsetsuOutput = document.getElementById("bunsetsu");

let tokenizer = null;

async function getTokenizer() {
  if (tokenizer) {
    return tokenizer;
  }

  tokensOutput.textContent = "辞書を読み込み中です...";

  tokenizer = await buildFetchTokenizer({
    dictionaryPath: DICTIONARY_PATH
  });

  return tokenizer;
}

function getBasicForm(token) {
  if (
    token.basicForm &&
    token.basicForm !== "*"
  ) {
    return token.basicForm;
  }

  return token.surfaceForm;
}

function extractFrequentWordCandidates(tokens) {
  return tokens
    .filter((token) => TARGET_POS.has(token.pos))
    .map((token) => ({
      surface: token.surfaceForm,
      basic: getBasicForm(token),
      pos: token.pos
    }))
    .filter((item) => !STOP_WORDS.has(item.basic));
}

/*
  文節候補:
  自立語で新しい文節を開始し、
  後続する助詞・助動詞を同じ文節へ含める。

  現時点では検証用の最小ルール。
  意味判断による補正は行わない。
*/
function buildBunsetsuCandidates(tokens) {
  const bunsetsuList = [];
  let current = "";

  const isAttachedWord = (token) =>
    token.pos === "助詞" ||
    token.pos === "助動詞";

  for (const token of tokens) {
    const surface = token.surfaceForm;

    if (isAttachedWord(token)) {
      if (current) {
        current += surface;
      } else {
        current = surface;
      }
      continue;
    }

    if (current) {
      bunsetsuList.push(current);
    }

    current = surface;
  }

  if (current) {
    bunsetsuList.push(current);
  }

  return bunsetsuList;
}

function formatTokens(tokens) {
  return tokens
    .map((token, index) => {
      return [
        `${index + 1}. ${token.surfaceForm}`,
        `品詞: ${token.pos}`,
        `細分類1: ${token.posDetail1}`,
        `基本形: ${getBasicForm(token)}`,
        `活用形: ${token.conjugatedForm}`,
        `未知語: ${token.wordType}`
      ].join(" | ");
    })
    .join("\n");
}

function formatWords(words) {
  if (words.length === 0) {
    return "対象語なし";
  }

  return words
    .map(
      (item) =>
        `${item.basic}  [${item.pos}]  ← 表層形: ${item.surface}`
    )
    .join("\n");
}

function formatBunsetsu(bunsetsuList) {
  if (bunsetsuList.length === 0) {
    return "文節候補なし";
  }

  return bunsetsuList
    .map((item) => `[${item}]`)
    .join(" ");
}

async function runAnalysisTest() {
  const text = input.value;

  if (!text.trim()) {
    tokensOutput.textContent = "入力がありません。";
    wordsOutput.textContent = "";
    bunsetsuOutput.textContent = "";
    return;
  }

  try {
    const currentTokenizer = await getTokenizer();

    const tokens =
      currentTokenizer.tokenize(text);

    const words =
      extractFrequentWordCandidates(tokens);

    const bunsetsu =
      buildBunsetsuCandidates(tokens);

    tokensOutput.textContent =
      formatTokens(tokens);

    wordsOutput.textContent =
      formatWords(words);

    bunsetsuOutput.textContent =
      formatBunsetsu(bunsetsu);

    console.log("tokens:", tokens);
    console.log("frequent word candidates:", words);
    console.log("bunsetsu candidates:", bunsetsu);
  } catch (error) {
    console.error(error);

    tokensOutput.textContent =
      "解析エラー:\n" + error.message;

    wordsOutput.textContent = "";
    bunsetsuOutput.textContent = "";
  }
}

runButton.addEventListener(
  "click",
  runAnalysisTest
);