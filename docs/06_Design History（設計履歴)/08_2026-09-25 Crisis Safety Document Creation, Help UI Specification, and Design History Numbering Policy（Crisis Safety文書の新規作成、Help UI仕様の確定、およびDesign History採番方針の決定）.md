# 08_2026-09-25 Crisis Safety Document Creation, Help UI Specification, and Design History Numbering Policy（Crisis Safety文書の新規作成、Help UI仕様の確定、およびDesign History採番方針の決定）

※本entryの番号`08`は、開発者により実リポジトリへ採用されました（2026-09-25、コミット`c7238b5`。この時点のpush内容はフォルダ／ファイル名がスペースなし「CrisisSafety」表記）。その後、開発者が実リポジトリ上のフォルダ名・ファイル名をVS Code上で手作業でrenameし、`docs/06_Design History（設計履歴)/`・`docs/10_Crisis Safety（安全のためのアクセス手段）/`（いずれもスペースあり）へ統一した（詳細はDiscussion Process 16）。

※表記についての注記：本entry内では、現在のパス・現在の名称を指す箇所は「Design History」「Crisis Safety」（いずれもスペースあり、現行表記）を用いる。一方、2026-08-28当時の原決定で使われた`10_CrisisSafety.md`という表記や、Claude（くう）が2026-09-22に草案として作成した`07_CrisisSafety.md`という表記は、当時の事実として記録されていたものであり、変更していない。

※本entryは2026-09-25中に複数回の追記修正を経ています：(a)(4)節を実際の対応結果に合わせて修正、(b)表記・日付表現・記述の主体に関するFact First補正4点、(c)フォルダ名・ファイル名表記の開発者最終決定（スペースあり統一）、(d)実リポジトリ側のrename完了の反映（詳細はDiscussion Process 11〜16）。

## Changes（変更内容）

### (1) Crisis Safety Document Creation（Crisis Safety文書の新規作成）

Crisis Safety文書を新規作成した。これは2026-08-28のDesign History「02_2026-08-28 Project Background Revision and Related Decisions」のAffected Filesに記載されていた「`10_CrisisSafety.md`（新規ファイルとして今後作成予定）」を実行したものである（この`10_CrisisSafety.md`という表記は2026-08-28当時の原決定文書の記載そのものであり、当時の事実として変更していない）。

文書内では、原則部分（1章）の引用元を「00_Constitutionより」ではなく「共通指示書ドラフトの⑦Crisis Safety相当部分より（00_Constitutionへの反映状況はUnknown）」と明記した。現在の実際の`00_Constitution`には`Crisis Safety`・`Change Rules`の節が存在しないことを確認済みのため。

フォルダ名・ファイル名の表記については、以下の経緯を経て2026-09-25時点で「Crisis Safety」（スペースあり）に統一され、実リポジトリへも反映済みとなった。

1. 2026-08-28の原決定：`10_CrisisSafety.md`（スペースなし）
2. 2026-09-22の草案作成：フォルダ名・ファイル名・タイトルすべて「Crisis Safety」（スペースあり）
3. 2026-09-25（SE提案・三者確認）：ChatGPT（チャム）が実リポジトリとの整合性からフォルダ／ファイル名のみ「CrisisSafety」（スペースなし）、タイトルは「Crisis Safety」（スペースあり）と区別する案を提案し、三者で確認の上、一旦採用
4. 2026-09-25（開発者の最終決定）：開発者（まき）が、表記の一貫性を優先し、フォルダ名・ファイル名・タイトルすべてを「Crisis Safety」（スペースあり）に統一することを最終決定
5. 2026-09-25（実リポジトリへの反映完了）：開発者がVS Code上で手作業によりrenameを実施し、実リポジトリの現行パスは`docs/10_Crisis Safety（安全のためのアクセス手段）/10_Crisis Safety（安全のためのアクセス手段）.md`となった

また実ファイルは「番号付きフォルダ＋その中の文書」という現行のdocs構成に合わせて配置した（Crisis SafetyをDesign History配下へ移動したものではなく、番号`10`も変更していない）。

### (2) Help UI Specification（Help UI仕様の確定）

画面UIモックアップ（Canva「innarva Help button UI mockup」参照）をもとに、以下を三者合意した。

- 常設表示：「記録する」ボタンの左隣、小さい正方形、白背景、赤枠・赤文字、現在使用中のフォント
- 記録操作時の通知：「記録する」ボタン押下を契機に、位置・サイズは変えず赤枠等の明暗変化のみで1回だけ視覚的に知らせ、その後通常表示へ完全に戻す。気分・体調の選択内容やコメント内容によって動作の有無・強さを変えない固定的UI動作とする
- 未確定のまま残す項目：具体的なpxサイズ、点滅の秒数、明暗の変化量、Help押下後の画面内容

Help UI仕様の三者合意日は2026-09-22であり、2026-09-25はCrisis Safety文書およびDesign Historyへの反映・記録日として扱う（Help UIのcode実装日ではない）。

### (3) Design History Numbering and Legacy Record Handling Policy（Design History採番・過去記録の扱い方の運用原則）

本entryの番号を検討する過程で、`docs/06_Design History（設計履歴)/`配下の実ファイルが`00`〜`07`（うち`06`は"Step10 Range Unification"、`07`は"Record Mode Storage"）までである一方、索引`00_Design History（設計履歴).md`には別系統の内容を持つ`06`・`07`・`08`（analysis.js Specification Review）・`09`（analysis.js Implementation Design）の記載が残っており、索引自身がこれらについて「実ファイル未確認」「Git全履歴でも実在未確認」「現行analysis.jsとの不一致あり」「正式決定として確定しているかどうかもUnknown」「削除しない」としていることを確認した（この調査時点ではフォルダ・索引名は`06_DesignHistory`表記だったが、同一の実体であり、現行名で記載する）。

なお、Crisis Safety文書・Design Historyへの反映過程での再確認により、索引記載の`07_Analysis Policy Recovery and Adoption`についてはDesign History個別ファイルとしては確認できなかったが、同名内容を含む文書が`docs/04_AnalysisPolicy (分析)/`配下に存在することを確認した。この事実についても、過去の決定状態を推測で補完せず、Unknownとして扱う。

この状況を踏まえ、以下をDesign Historyの運用原則として決定した。

1. 新規entryの番号は、**実ファイルとして現在確認できる番号**を基準に決める。索引にのみ存在し実ファイルが確認できない番号（今回の08・09）は「予約済み」とは扱わず、新規entryに使用してよい。
2. 実ファイルが確認できない過去の索引記載は、削除せず事実として残す。「過去に確認できた記載」以上の意味（三者合意済み、正式採用済み等）を推測で付与しない。
3. 過去の記載内容が後から実在・詳細が判明した場合は、現在のConstitution・doce・codeと照合し、現在も同意できる内容を現在の正式な記録として改めて残す。過去の内容をそのまま現在の仕様として復元する必要はない。
4. 過去と現在の内容が異なる、または過去の位置づけが不明な場合も、履歴自体は失わない。「過去にはこう記載されていた／議論されていた」「現在はこの理由でこう決定した」という関係を追記すればよい。
5. 番号は永久に固定された意味を持つものではない。将来、探索性等の理由で若い番号への変更が必要と開発者が判断した場合は、⑥Change Rulesの手続き（三者合意・履歴記録）を経て再編できる。将来使うかもしれないという理由だけで、空いている番号を温存する必要はない。

### (4) Annotation on Legacy Index Entries 08/09（旧索引記載08・09への対応 — 当初案と実施結果）

上記(3)の運用に基づき、今回`08`を新規entryに使用した。

**当初案（不採用・議論履歴として記録）**：索引`00_Design History（設計履歴).md`の旧`08`・`09`記載それぞれに、個別の注記を追加する案を検討した。当初案の文言は以下の通り（2026-09-25時点の起草時の表記のまま、変更せず記録する）。

> 注：本記載（08_analysis.js Specification Review／09_analysis.js Implementation Design）は、実ファイルとして確認できず、Git全履歴でも実在が確認できていない。正式な決定として確定していたかどうか自体がUnknown。2026-09-25の運用原則（DesignHistory「08_2026-09-25 Crisis Safety Document Creation, Help UI Specification, and DesignHistory Numbering Policy」参照）に基づき、番号`08`は実ファイル未確認を理由に新規entryへ再利用した。本記載の内容自体は削除せず、過去の記録として残す。新しい`08`（Crisis Safety関連）とは内容が異なる別entryである。

**実施結果**：開発者・ChatGPT（チャム）・Claude（くう）で再確認した結果、旧`08`・`09`の個別記載そのものは変更せず、索引`00_Design History（設計履歴).md`の**末尾に2026-09-25の採番方針についての一括注記を追加する**形で対応した。旧`08`・`09`の記載内容自体は、当初案・実施結果のいずれにおいても変更していない。

当初案と実施結果が異なる理由は、索引側を（過去に検討した案に合わせて）追加変更するのではなく、Design History側を実際に行った変更内容に合わせて記録する方が③Fact First（記録された事実は事実として扱う）に合致すると、2026-09-25の追加確認で判断したためである。この末尾一括注記が、現時点での正式な実施結果である。

## Reasons（理由）

**(1)について**：2026-08-28に三者合意済みのファイル番号決定を実行するものであり、新たな判断は伴わない。引用元の訂正は、③Fact Firstに基づき、現在の実際の00_Constitutionに存在しない節を存在するかのように書かないための修正。フォルダ名・ファイル名表記については、2026-08-28原決定（スペースなし）→2026-09-22草案（スペースあり）→2026-09-25 SE提案・三者確認（フォルダ/ファイル名のみスペースなし、タイトルはスペースあり）→2026-09-25開発者最終決定（すべてスペースあり）→2026-09-25実リポジトリへのrename反映、という経緯を辿った。最終的な表記判断は⑫Agreement Processに定める「最終的な決定権は開発者にある」に基づき、開発者の判断を正式なものとして記録する。

**(2)について**：共通指示書ドラフト⑦Crisis Safety（「記録するを押すたびにHelpボタンの所在を一度だけ視覚的に知らせる」「固定的なUI動作」）および④No Influence（一律の誘導・評価的な強調を避ける）との整合性を確認した上での決定。連続点滅や常時強調を避けることで、Help機能が「警告」ではなく「常にそこにある選択肢」という位置づけを保つ。なお、Help UI仕様の三者合意自体は2026-09-22であり、本entryが記録する2026-09-25の作業は、その内容をCrisis Safety文書・Design Historyへ反映・記録する日である（Help UIのcode実装が行われた日ではない）。

**(3)・(4)について**：③Fact First・Unknown Means Unknown（記録されていない情報・確認できていない情報はUnknownとして扱い、推測で埋めない）と、⑥Change Rules（既存doceの無断削除・再構成の禁止、変更理由の明示、三者合意の原則）の両方を満たす運用を目指した。実ファイルの有無という客観的事実を基準にすることで「Unknownな痕跡を確認済みの予約番号として扱ってしまう」リスクを避けつつ、過去の記載も消さずに残すことで、将来過去の経緯を辿れる状態を維持する。(4)節を当初案から実施結果ベースの記録に修正したのも、同じくFact Firstの適用である。

## Proposers（提案者）

開発者（まき）（Help UI仕様の提案、採番不整合の発見、運用原則の提案、フォルダ名・ファイル名表記の最終決定、実リポジトリへのrename実施）→ ChatGPT（チャム）（Help UI精緻化案の提案、採番方針への同意、実リポジトリとの整合性を踏まえたフォルダ／ファイル名表記の提案、2026-09-25のFact First補正4点の提示）→ Claude（くう）（Crisis Safety文書草案の作成・訂正、Help UI仕様および採番方針の憲法・doce整合性確認、反映結果とのFact First整合性確認）

## Discussion Process（議論の経緯）

1. 開発者がinnarvaの画面モックアップ（Help機能ボタン）を共有し、「記録する」押下時に赤枠を1回だけ点滅させる案を提示
2. Claude（くう）が共通指示書ドラフト⑦Crisis Safety・④No Influenceとの整合性を確認し、記録内容によって動作を変えないことの重要性を指摘
3. Canvaに保存されたモックアップ「innarva Help button UI mockup」を参照資料としつつ、ChatGPT（チャム）が「点滅は1回のみ」「位置・サイズは変えず明暗のみ変化」「終了後は通常表示に戻す」の3点を精緻化案として提示し、開発者が同意
4. Claudeが草案（`07_CrisisSafety.md`）を作成したが、開発者が実際の`00_Constitution`にはCrisis Safety・Change Rules節が存在しないことを確認し、引用元の誤りを指摘
5. 開発者が`grep`でリポジトリを確認し、2026-08-28のDesign Historyでファイル番号が`10_`に確定済みであったことが判明。Claudeが草案を訂正
6. 開発者が`CLAUDE.md`の「配置未確定」記述とDesign Historyの「10_に確定」記述の食い違いを指摘し、Fact Firstに基づき「Unknown」ではなく「Design Historyで確定済み、CLAUDE.md側が未更新」という表現に訂正
7. 今回のCrisis Safety決定をDesign Historyへ記録するにあたり、個別ファイルの採番方法を検討する過程で、実ファイル（00〜07）と索引記載（06・07・08・09に別系統の内容）の不整合を発見
8. 開発者・ChatGPT（チャム）が、採番・過去記録の扱い方について5原則を提案
9. Claude（くう）が本原則の憲法・doce整合性を確認し、同意
10. ChatGPT（チャム）・開発者が実リポジトリを確認しながらCrisis Safety文書を作成し、フォルダ構成でフォルダ名・ファイル名をスペースなし表記として配置（文書タイトル・見出しはスペースありのまま維持）。索引へ本entryを追加し、末尾に採番方針の注記を追加。Git commit `c7238b5`としてpush
11. Claude（くう）が反映結果全体を確認し、(a)フォルダ／ファイル名表記の食い違い、(b)当初案と実施結果（索引注記の位置）の食い違い、(c)`04_AnalysisPolicy (分析)/`の発見、の3点を指摘
12. 開発者・ChatGPT（チャム）が3点について方針を確認：(a)フォルダ／ファイル名表記のみスペースなし「CrisisSafety」を正式採用し、文書タイトル・概念名は「Crisis Safety」のまま維持、(b)Design History側を実施結果に合わせて修正、(c)AnalysisPolicyの4論点は実ファイル確認後に判定。開発者が同意
13. Claude（くう）が(a)(b)の反映内容を提示し、本entryおよびCrisis Safety文書を更新
14. ChatGPT（チャム）が、実リポジトリへの反映前の最終確認として、Fact First上の4点の補正を提示：(i)CrisisSafetyはフォルダ／ファイル名表記に限定し、文書タイトル・概念名は「Crisis Safety」のまま変更しない、(ii)2026-09-25は「Help UIのcode実装日」ではなく「Crisis Safety文書およびDesign Historyへの反映・記録日」である、(iii)フォルダ／ファイル名表記の統一は「チャム単独のSE判断」ではなく「チャムが実リポジトリとの整合性から提案し、三者で確認した」経緯として記録する、(iv)Affected Filesの省略表記（`（...）.md`）を正式なフルパスへ戻す。開発者が同意し、Claude（くう）が本entryおよびCrisis Safety文書へ反映した
15. 開発者（まき）が最終判断として、12(a)・14(i)で確認したフォルダ／ファイル名表記（スペースなし「CrisisSafety」）とタイトル表記（スペースあり「Crisis Safety」）の区別を解消し、フォルダ名・ファイル名・タイトルすべてを「Crisis Safety」（スペースあり）に統一することを決定。あわせて`06_DesignHistory`も将来`06_Design History`へ同様に統一する方針を開発者・ChatGPT（チャム）間で確認。Claude（くう）が本entryおよびCrisis Safety文書へこの決定を反映した
16. 開発者（まき）が実リポジトリ上で、VS Code上の手作業により`06_DesignHistory（設計履歴)`→`06_Design History（設計履歴)`、`10_CrisisSafety（安全のためのアクセス手段）`→`10_Crisis Safety（安全のためのアクセス手段）`のrenameを実施し、フォルダ名・ファイル名の表記統一を完了。ただし2026-08-28当時の原決定文書中の`10_CrisisSafety.md`という記載や、Claude（くう）が2026-09-22に作成した草案`07_CrisisSafety.md`という記載は、当時の事実であるため変更しないことを確認。Claude（くう）が本entry・Crisis Safety文書の現在参照箇所をすべて現行表記（Design History／Crisis Safety、いずれもスペースあり）へ更新した

## Final Decision（最終決定）

開発者（まき）・Claude・ChatGPTの三者が、「この決定で進めることに同意する」状態に到達（共通指示書⑫Agreement Process）。Crisis Safety文書（`10_`。フォルダ名・ファイル名・文書タイトルすべて「Crisis Safety」スペースあり表記で統一）の新規作成、Help UI仕様（2.1・2.2）、Design History採番・過去記録の扱い方の運用原則（上記5点）、(4)節の実施結果ベースへの修正、2026-09-25のFact First補正4点、フォルダ名・ファイル名表記の最終統一（スペースあり）、および実リポジトリへのrename実施を、いずれも正式な決定・完了事項として記録する。本entryの番号には`08`を使用する。

`06_DesignHistory` → `06_Design History`、`10_CrisisSafety` → `10_Crisis Safety`のrenameは、いずれも2026-09-25中に開発者により実施済み。過去の事実（2026-08-28原決定文書中の`10_CrisisSafety.md`、Claudeの2026-09-22草案`07_CrisisSafety.md`）はそれぞれ当時の記載のまま変更しない。

Analysis Policyの4論点（比較結果の提示方針、extractKeywordsの頻度限定、Step3ラベルの由来、匿名集計データの範囲）については、`docs/04_Analysis Policy (分析)/`の実ファイル内容を確認してから改めて判定することとし、本entryでは決定しない（Unknownのまま維持）。

## Affected Files（影響するファイル）

- `docs/10_Crisis Safety（安全のためのアクセス手段）/10_Crisis Safety（安全のためのアクセス手段）.md`（新規作成後、開発者によりrename実施済み。現行の正式パス）
- `docs/06_Design History（設計履歴)/08_2026-09-25 Crisis Safety Document Creation, Help UI Specification, and Design History Numbering Policy（Crisis Safety文書の新規作成、Help UI仕様の確定、およびDesign History採番方針の決定）.md`（本entry自体。複数回の追記修正を経て、フォルダ名・タイトルとも現行表記へ更新済み）
- `docs/06_Design History（設計履歴)/00_Design History（設計履歴).md`（索引更新：本entryの行追加、末尾に2026-09-25採番方針の一括注記追加。旧08・09の個別記載は変更なし。開発者によりフォルダ・ファイル名もrename済み）
- `CLAUDE.md`（L140・L485の記述更新が必要かどうかは別途確認。本entryでは未実施、別変更として扱う）
- 今回未着手：`analysis.js`、`experiments/`配下（形態素解析実験関係）、`docs/04_Analysis Policy (分析)/`の内容反映（実ファイル確認後に別途判定）、`docs/06_Design History（設計履歴)/`配下の他entry（06_Step10 Range Unification・07_Record Mode Storage等）のAffected Filesに残る旧パス表記の修正、`docs/00_Design History（設計履歴).md`本文中に残る旧表記の修正、`docs/CLAUDE.md`・ルート`CLAUDE.md`の現在参照の修正（いずれも開発者・ChatGPT側の別作業として進行中）
