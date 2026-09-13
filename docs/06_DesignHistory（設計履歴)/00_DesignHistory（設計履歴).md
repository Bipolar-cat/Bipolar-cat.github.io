# 00_Design History（設計履歴）

Innarvaにおけるdoce・codeの変更、追加、削除、および重要な設計判断の経緯を記録します。

各履歴は、変更内容を識別しやすくするため、`docs/06_DesignHistory/`配下の個別ファイルとして保存します。ファイル数のコンパクトさよりも、誰が見ても目的の履歴を見つけられることを優先します。

ファイル名の命名規則は、現時点では固定しません（Unknown Means Unknown）。既存ファイル（`Change History of CLAUDE.md`など）は、規則統一のためだけに改名しません。

Markdownファイルは、`番号_English Title（日本語タイトル）.md`の形式を基本とします。`.md`はファイル形式を示す拡張子であり、タイトルの一部ではないため、必ずファイル名全体の末尾に置きます（2026-09-02、探索性・統一性を考慮し確定）。

ファイル名には拡張子`.md`を付けます。文書タイトル（各ファイル冒頭の見出し）には`.md`を付けません（例：ファイル名`Essence Review.md`／文書タイトル`Essence Review（Essenceの照合）`）。文書タイトルの見出しは、Innarva全体の文書ルールに従い英語（日本語）形式、本文は日本語のみとします。

このファイル（`00_DesignHistory.md`）自体は、個別履歴ファイルの一覧・入口として機能します。本文（変更内容・理由・提案者・議論の経緯・最終決定など）は各個別ファイルに記載します。

---

## History Index（履歴一覧）

| 日付 | ファイル名 | 文書タイトル（見出し） | 概要 |
| --- | --- | --- | --- |
| 2026-08-21 | `Change History of CLAUDE.md` | Change History of CLAUDE（CLAUDE.mdを今回なぜ変更したのか、その議論・決定の履歴） | CLAUDE.md本体（プロジェクトルート直下）の全面採用・見出し英語（日本語）統一についての変更履歴 |
| 2026-08-28 | `2026-08-28 Project Background Revision and Related Decisions.md` | 2026-08-28 Project Background Revision and Related Decisions（Project Backgroundの時系列訂正、および付随する2つの決定） | 共通指示書0章の時系列訂正、開発者表記ルール新設、Crisis Safety番号確定 |
| 2026-08-28 | `Essence Review.md` | 2026-08-28 Essence Review（Essenceの照合） | 共通指示書①Essenceの照合（変更なし・現行維持） |
| 2026-09-02 | `Research Structure Change - Mental Disorder Recovery and Future Outlook Independence.md` | Research Structure Change: Mental Disorder Recovery and Future Outlook Independence（Research構成変更：精神障害における回復と将来への見通しの独立化） | `02_Life_After_Disability_and_Crime`内の記録を独立Research `03_Mental_Disorder_Recovery_and_Future_Outlook`として切り出し、`01_Lived_Experience`配下を01・02・03の3件構成として正式確定 |
| 2026-09-02 | `05_Research Policy Recovery and Adoption（Research Policyの復旧と正式採用）.md` | 05_Research Policy Recovery and Adoption（Research Policyの復旧と正式採用） | 8/9頃のInnerNote時代Research Policyを回収・照合し、Research Policyの構成・基本原則を三者合意。3段階事実確認方式の正式採用、Historyの位置づけ復活を含む。正式本文はその後の最終レビューを経て確定。 |
| 2026-09-02 | `06_Filename Convention and Top-Level Docs Structure（ファイル命名規則とトップレベルdocs構成の確定）.md` | 06_Filename Convention and Top-Level Docs Structure（ファイル命名規則とトップレベルdocs構成の確定） | トップレベル`docs/`構成を00〜10で確定（11以降は必要性確認まで新設しない）。Markdownファイル名を`番号_English Title（日本語タイトル）.md`形式に統一 |
| 2026-09-05 | `07_Analysis Policy Recovery and Adoption（Analysis Policyの復旧と正式採用）.md` | 07_Analysis Policy Recovery and Adoption（Analysis Policyの復旧と正式採用） | 8/9頃のInnerNote時代Analysis Policy Ver.0.2（11項目）を回収・照合し、`04_Analysis Policy（分析方針）.md`を正式採用。長い時間軸で見ることと将来予測の分離、☆付き記録の復元、Step3/Step10の確認等を含む |

※ この一覧は個別履歴ファイルが追加されるたびに更新します。
※ `CLAUDE.md`本体はプロジェクトルート直下にあり、`docs/06_DesignHistory/`配下にはその変更履歴ファイルのみが置かれます。