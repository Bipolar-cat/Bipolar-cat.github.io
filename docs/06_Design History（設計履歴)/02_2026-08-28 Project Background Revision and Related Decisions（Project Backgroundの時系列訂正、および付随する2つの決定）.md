## 02_2026-08-28 Project Background Revision and Related Decisions（Project Backgroundの時系列訂正、および付随する2つの決定）

### Changes（変更内容）

#### (1) Project Background Timeline Revision（Project Backgroundの時系列訂正）

変更前（旧文）：
> 当初は「InnerNote」として、利用者の内面（Inner）を記録する「Note」という考えのもと、気分・体調・コメントなどの日々の記録を残すことを中心に開発されました。

変更後：
> Innarvaは、開発者（まき）が2025年10月頃からChatGPT上で続けていた「毎日の記録」から始まりました。開発者（まき）には、それ以前から体調管理のためのアプリを作りたいという考えがありました。実際に「毎日の記録」を続ける中で、「もっと使いやすいアプリにしたい」という思いが、具体的なアプリ開発へとつながりました。その開発過程で「InnerNote」という名称が付きましたが、これは開発者（まき）が理念を込めて最初から命名したものではありません。作業を進めるうちに、InnerNoteという言葉と、開発者（まき）が表現しようとしていたものとの一致が感じられるようになりました。一方で「InnerNote」は他でも広く使われている名称であったため、独自の名称を検討することになりました。

#### (2) Developer Naming Rule（「開発者」表記ルールの新設・08_Glossary.mdへ追加）

- `開発者` — Innarvaプロジェクト上の役割・権限を指す用語。最終的な決定権を持つ主体として、制度的な文脈（Agreement Processなど）で使用する。
- `開発者（まき）` — 現在・初代の開発者である特定の人物を指す表記。プロジェクトの成立経緯など、固有の人物としての記述が必要な箇所（Project Backgroundなど）で使用する。

#### (3) Crisis Safety Document Number（Crisis Safety文書の番号確定）

`10_CrisisSafety.md（安全のためのアクセス手段）`として確定。既存の`00〜09`（`09_Research/`のサブ階層を含む）は変更しない。共通指示書ドラフトにあった「07_CrisisSafety.md」は、実ディレクトリでは`07`をRoadmapが使用しているため採用しない。

### Reasons（理由）

**(1)について**：旧文は「InnerNoteという理念（Inner＋Noteという語源的な考え）が先にあり、その考えのもとで記録を始めた」という順序で書かれていたが、開発者（まき）本人の一次証言により、実際の順序は「毎日の記録（ChatGPT上、2025年10月頃〜）→ アプリ化の思い → InnerNoteという名称の（意図せぬ）発生 → 名称と表現したいことの一致を後から発見 → 独自名称の検討 → Innarva」であったことが判明した。Fact Firstの原則に基づき、因果関係が逆転していた記述を訂正した。

**(2)について**：まき個人を指す記述と、プロジェクトの制度上の役割を指す記述を区別しないと、将来開発者が交代した際に「最終的な決定権は開発者（まき）にあります」のような記述が制度的な意味を失う。人物としての記述と役割としての記述を明確に分離するため、Glossaryに定義を追加した。

**(3)について**：以前CLAUDE.mdでは配置をUnknownとして保留していた。今回、実際の`docs/`ディレクトリ構成（`09_Research/`が単独ファイルではなく複数階層を持つサブフォルダ構造であること等）を画像で確認したうえで、既存番号を一切動かさない最小変更の配置として`10_`を確定した。

### Proposers（提案者）
Claude（Project Background文章案、Glossary構造の提案）→ ChatGPT（実ディレクトリ構成との照合、番号確定、共通指示書全体の階層整理）→ 開発者（まき）（一次証言の提供、表記ルールの提案）

### Discussion Process（議論の経緯）
1. ChatGPTが過去doce（InnerNote時代のMission/Specification/UI_Spec/AnalysisPolicy/DesignGuide/DesignHistory/Roadmap/Glossary/Research Question、計9文書）と共通指示書0章を照合し、継承済み／未反映／異なる／Unknownの4区分で整理
2. Claudeが過去doceの照合を独自に先行実施し、ChatGPTの結果と突き合わせ
3. 「InnerNoteという名称の由来」についてUnknownとされていた部分に対し、開発者（まき）が一次証言（名称は偶発的に付いた、ChatGPT上の「毎日の記録」が先にあった等）を提供
4. Claudeがこの証言に基づき、Project Backgroundの時系列を訂正した文章案を作成
5. 開発者（まき）が、文章中の呼称を「開発者（まき）」に固定することを提案
6. 開発者（まき）が、人物としての表記と役割としての表記を区別するルールを提案。Claudeが同意し、Glossaryへの追加を提案
7. ChatGPTが、共通指示書全体の階層構造を整理したうえで、開発者表記ルールをGlossaryに置く構造上の妥当性を確認し、あわせて実ディレクトリ構成の画像からCrisis Safetyの番号を`10_`に確定

### Final Decision（最終決定）
開発者（まき）・Claude・ChatGPTの三者が、「この決定で進めることに同意する」状態に到達（共通指示書⑫ Agreement Process）。0. Project Backgroundは確定し、次項の①Essenceの照合へ進む。

### Affected Files（影響するファイル）
- 共通指示書（0. Project Backgroundの本文改訂）
- `08_Glossary.md`（「開発者」「開発者（まき）」の項目追加、実施は次回文書化時）
- `10_CrisisSafety.md`（新規ファイルとして今後作成予定。番号のみ今回確定）