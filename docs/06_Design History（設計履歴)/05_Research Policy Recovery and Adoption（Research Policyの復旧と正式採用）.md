# 05_Research Policy Recovery and Adoption（Research Policyの復旧と正式採用）

## Changes（変更内容）

- 2026-08-09頃に作成されていたInnerNote時代のResearch Policy・History Policy・Questions一覧・個別Research Question群・Peer Voice・Developer Notes等を、開発者（まき）が回収・共有。
- これらを現行`00_Constitution.md`・共通指示書⑩Research・現行のResearch構造（`09_Research/01_Lived_Experience`等）と照合し、継承済み／未反映／異なる／Unknownに区分。
- 照合結果を踏まえ、`00_Research_Policy.md`の正式本文を作成・採用。
- あわせて、02（`Life_After_Disability_and_Crime`）の出典確認実務から生まれた「確認できた／一部確認できた／確認できなかった」の3段階事実確認方式を、Research全体の運用原則として正式採用。
- 「Historyは最も慎重に作るResearch」という位置づけを復活。History固有の調査原則（一次資料優先、複数資料確認、事実／解釈／問いの分離、未確認情報を事実として記録しない、時代背景確認、現代倫理観の単純適用回避）を明記。ただし具体的な調査方法は、今後作成する独立した`History（歴史）`文書に委ねる。

## Reasons（理由）

`00_Research_Policy`は、CLAUDE.md（旧版）で「Claude Codeが独自変更してはいけない重要文書」として言及されていたにもかかわらず、本文が長らく所在不明であった。今回、開発者（まき）が保有していた過去記録を回収したことで、InnerNote時代からのResearch思想（事実と解釈の分離、出典保存、結論を急がない、Unknownを問いとして残す、個人経験を一般化しない）が、現行のFact First / No Speculation / Unknown Means Unknownへどう継承されたかを、具体的な文書同士の照合によって確認できた。

また、3段階確認方式は、既に02のMiyaguchi (2019)出典確認で実際に運用され機能していたが、明文化されたルールとしては存在していなかった。今回、Research Policy本文に正式に組み込むことで、今後のResearch全体（Papers・International・Peer Voices・Family Voices・History）で一貫して適用できるようにした。

## Proposers（提案者）

開発者（まき）（過去資料の回収・提示）→ ChatGPT（現行文書との照合、Research Areasの物理構成との分離、Anonymous Comparisonの保留、Historyの位置づけの表現修正等の提案）→ Claude（構成案の作成、正式本文の文章化）

## Discussion Process（議論の経緯）

1. 開発者（まき）が、8/9頃のResearch Policy・History Policy・Questions一覧・複数の個別Research Question（国際比較、日本の精神保健史、自殺念慮と他殺念慮、動物の自殺等）・Peer Voice・Developer Notesを順次回収・共有。あわせてInnerNote Constitution Ver.1.0、CLAUDE.md（当時版）も比較資料として提示。
2. Claudeが、回収された資料をもとに`00_Research_Policy`核心部分（目的・基本原則・Research構成・History方針）の第一次照合結果を提示。
3. ChatGPTが、①旧Purposeの対象領域の扱い、②「Historyは最も慎重に作るResearch」の復活、③旧History Policyの独立文書化の是非、④3段階確認方式のPolicyへの正式採用、の4論点を整理して提示。
4. 開発者（まき）・ChatGPTが④に同意。Claudeも同意し、3段階確認方式の三者合意が成立。
5. 「Research History」という語が「Researchの一分野としての歴史研究」を指すことを開発者（まき）が確定。これを受け、①③についてChatGPTが「History Policyを独立文書化せず、歴史研究分野の入口文書へ統合する」案を提示し、三者で方向性が一致。
6. ChatGPTが、歴史研究文書の名称を`History（歴史）`と提案（`Research_History`は「Researchの変更履歴」との混同を招くため不採用）。番号・フォルダ配置は、未回収資料との照合が終わるまで保留。
7. Claudeが、上記を反映した`00_Research_Policy`構成案を作成し提示。
8. ChatGPTが、構成案について3点の修正（Research Areasの見出しを「対象領域」とし物理構成と分離／Anonymous ComparisonをUnknownとして保留／「利用者自身が考える余白を残す」の復元）を提案。開発者（まき）・Claudeが同意し反映。
9. ChatGPTが、Historyの位置づけの記述について、未確定の`History（歴史）`文書を確定済み規範として参照する表現の修正を提案。Claudeが同意し反映。
10. 開発者（まき）・Claude・ChatGPTの三者が、修正済み構成案について「この決定で進めることに同意する」状態に到達し、**構成**を確定。
11. Claudeが、確定した構成に基づき`00_Research_Policy（調査方針・研究倫理）.md`の正式本文を作成。この時点では、構成についての三者合意は成立していたが、**本文そのもの**についての三者合意はまだ成立していなかった。
12. ChatGPTが正式本文を最終レビューし、以下2点を条件として採用に同意した。
    - Design History側の記述が「正式本文まで既に三者合意済み」と読める時系列になっていたため、実際の合意経緯（構成の合意→本文作成→本文の最終レビュー）に合わせて修正すること
    - `09_Research/00_Research_Policy（調査方針・研究倫理）`が空のディレクトリのままだったため、`00_Research_Policy（調査方針・研究倫理）.md`として実ファイル化すること
    本文の内容自体（Purpose以下の条文）は変更対象に含まれない。
13. Claudeが上記2点を反映。開発者（まき）・Claude・ChatGPTの三者が、正式本文について「この決定で進めることに同意する」状態に到達。

## Final Decision（最終決定）

2026-09-02、開発者（まき）・Claude・ChatGPTの三者が、まず**構成**（Purpose・Research Areas・Fundamental Principles・Anonymous Comparisonについて・Historyの位置づけ・3段階確認方式の6ブロック構成）について「この決定で進めることに同意する」状態に到達（共通指示書⑫ Agreement Process）。

その後、Claudeが確定した構成に基づき正式本文を作成。ChatGPTが本文を最終レビューし、Design History側の時系列記述の修正、および空ディレクトリの実ファイル化の2点を条件として採用に同意。Claudeが2点を反映したことにより、**正式本文**についても三者合意が成立した。

`09_Research/00_Research_Policy（調査方針・研究倫理）.md`を正式本文として採用。採用済み・リポジトリ反映待ち。

## Affected Files（影響するファイル）

- `09_Research/00_Research_Policy（調査方針・研究倫理）.md`（新規正式採用。従来、空のディレクトリとして存在していたものを実ファイル化）
- 影響なし（今回は文書のみ、コード変更は伴わない）

## Unresolved（今後の課題）

- `History（歴史）`文書の本文作成・番号・フォルダ配置の決定
- 旧`Anonymous Comparison`と現行`Anonymous Data Analysis`の対応関係の整理
- Research Areasの各項目名と現在のフォルダ構成上の正式名称との対応関係の照合
- 個別Research Question群（国際比較、日本の精神保健史、自殺念慮と他殺念慮、動物の自殺、Peer Voice、Developer Notes等）の、現行Research構造への正式な配置・照合
