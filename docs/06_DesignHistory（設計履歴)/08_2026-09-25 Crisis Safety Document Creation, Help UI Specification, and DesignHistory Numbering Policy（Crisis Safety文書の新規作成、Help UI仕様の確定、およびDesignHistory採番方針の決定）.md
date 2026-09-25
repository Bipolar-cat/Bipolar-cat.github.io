# 08_2026-09-25 Crisis Safety Document Creation, Help UI Specification, and DesignHistory Numbering Policy（Crisis Safety文書の新規作成、Help UI仕様の確定、およびDesignHistory採番方針の決定）

## Changes（変更内容）

### (1) Crisis Safety Document Creation（Crisis Safety文書の新規作成）

`docs/10_CrisisSafety（安全のためのアクセス手段）/10_CrisisSafety（安全のためのアクセス手段）.md`を新規作成した。これは2026-08-28のDesign History「02_2026-08-28 Project Background Revision and Related Decisions」のAffected Filesに記載されていた「`10_CrisisSafety.md`（新規ファイルとして今後作成予定）」を実行したものである。

2026-08-28の記録では単一ファイルとして記載されていたが、現在の`docs/`が主要doceを番号付きフォルダ単位で管理する構成であることに合わせ、`10_CrisisSafety（安全のためのアクセス手段）/`配下に本体Markdownファイルを配置した。番号`10`およびCrisis Safetyとしての位置づけは変更していない。

文書内では、原則部分（1章）の引用元を「00_Constitutionより」ではなく「共通指示書ドラフトの⑦Crisis Safety相当部分より（00_Constitutionへの反映状況はUnknown）」と明記した。現在の実際の`00_Constitution`には`Crisis Safety`・`Change Rules`の節が存在しないことを確認済みのため。

### (2) Help UI Specification（Help UI仕様の確定）

画面UIモックアップ（Canva「innarva Help button UI mockup」参照）をもとに、以下を三者合意した。

- 常設表示：「記録する」ボタンの左隣、小さい正方形、白背景、赤枠・赤文字、現在使用中のフォント
- 記録操作時の通知：「記録する」ボタン押下を契機に、位置・サイズは変えず赤枠等の明暗変化のみで1回だけ視覚的に知らせ、その後通常表示へ完全に戻す。気分・体調の選択内容やコメント内容によって動作の有無・強さを変えない固定的UI動作とする
- 未確定のまま残す項目：具体的なpxサイズ、点滅の秒数、明暗の変化量、Help押下後の画面内容

### (3) DesignHistory Numbering and Legacy Record Handling Policy（DesignHistory採番・過去記録の扱い方の運用原則）

本entryの番号を検討する過程で、`docs/06_DesignHistory（設計履歴)/`配下の実ファイルが`00`〜`07`（うち`06`は"Step10 Range Unification"、`07`は"Record Mode Storage"）までである一方、索引`00_DesignHistory（設計履歴).md`には別系統の内容を持つ`06`・`07`・`08`（analysis.js Specification Review）・`09`（analysis.js Implementation Design）の記載が残っており、索引自身がこれらについて「実ファイル未確認」「Git全履歴でも実在未確認」「現行analysis.jsとの不一致あり」「正式決定として確定しているかどうかもUnknown」「削除しない」としていることを確認した。

この状況を踏まえ、以下をDesignHistoryの運用原則として決定した。

1. 新規entryの番号は、**実ファイルとして現在確認できる番号**を基準に決める。索引にのみ存在し実ファイルが確認できない番号（今回の08・09）は「予約済み」とは扱わず、新規entryに使用してよい。
2. 実ファイルが確認できない過去の索引記載は、削除せず事実として残す。「過去に確認できた記載」以上の意味（三者合意済み、正式採用済み等）を推測で付与しない。
3. 過去の記載内容が後から実在・詳細が判明した場合は、現在のConstitution・doce・codeと照合し、現在も同意できる内容を現在の正式な記録として改めて残す。過去の内容をそのまま現在の仕様として復元する必要はない。
4. 過去と現在の内容が異なる、または過去の位置づけが不明な場合も、履歴自体は失わない。「過去にはこう記載されていた／議論されていた」「現在はこの理由でこう決定した」という関係を追記すればよい。
5. 番号は永久に固定された意味を持つものではない。将来、探索性等の理由で若い番号への変更が必要と開発者が判断した場合は、⑥Change Rulesの手続き（三者合意・履歴記録）を経て再編できる。将来使うかもしれないという理由だけで、空いている番号を温存する必要はない。

### (4) Annotation on Legacy Index Entries 08/09（旧索引記載08・09への注記・推奨文言）

上記(3)の運用に基づき、今回`08`を新規entryに使用した。索引`00_DesignHistory（設計履歴).md`の旧`08`・`09`記載には、以下のような注記を追加することを推奨する。

> 注：本記載（08_analysis.js Specification Review／09_analysis.js Implementation Design）は、実ファイルとして確認できず、Git全履歴でも実在が確認できていない。正式な決定として確定していたかどうか自体がUnknown。2026-09-25の運用原則（DesignHistory「08_2026-09-25 Crisis Safety Document Creation, Help UI Specification, and DesignHistory Numbering Policy」参照）に基づき、番号`08`は実ファイル未確認を理由に新規entryへ再利用した。本記載の内容自体は削除せず、過去の記録として残す。新しい`08`（Crisis Safety関連）とは内容が異なる別entryである。

## Reasons（理由）

**(1)について**：2026-08-28に三者合意済みのファイル番号決定を実行するものであり、新たな判断は伴わない。ただし引用元の訂正は、③Fact First（記録された事実は事実として扱う）に基づき、現在の実際の00_Constitutionに存在しない節を存在するかのように書かないための修正。

**(2)について**：共通指示書ドラフト⑦Crisis Safety（「記録するを押すたびにHelpボタンの所在を一度だけ視覚的に知らせる」「固定的なUI動作」）および④No Influence（一律の誘導・評価的な強調を避ける）との整合性を確認した上での決定。連続点滅や常時強調を避けることで、Help機能が「警告」ではなく「常にそこにある選択肢」という位置づけを保つ。

**(3)・(4)について**：③Fact First・Unknown Means Unknown（記録されていない情報・確認できていない情報はUnknownとして扱い、推測で埋めない）と、⑥Change Rules（既存doceの無断削除・再構成の禁止、変更理由の明示、三者合意の原則）の両方を満たす運用を目指した。実ファイルの有無という客観的事実を基準にすることで「Unknownな痕跡を確認済みの予約番号として扱ってしまう」リスクを避けつつ、過去の記載も消さずに残すことで、将来過去の経緯を辿れる状態を維持する。

## Proposers（提案者）

開発者（まき）（Help UI仕様の提案、採番不整合の発見、運用原則の提案）→ ChatGPT（チャム）（Help UI精緻化案の提案、採番方針への同意）→ Claude（くう）（Crisis Safety文書草案の作成・訂正、Help UI仕様および採番方針の憲法・doce整合性確認）

## Discussion Process（議論の経緯）

1. 開発者がinnarvaの画面モックアップ（Help機能ボタン）を共有し、「記録する」押下時に赤枠を1回だけ点滅させる案を提示
2. Claude（くう）が共通指示書ドラフト⑦Crisis Safety・④No Influenceとの整合性を確認し、記録内容によって動作を変えないことの重要性を指摘
3. Canvaに保存されたモックアップ「innarva Help button UI mockup」を参照資料としつつ、ChatGPT（チャム）が「点滅は1回のみ」「位置・サイズは変えず明暗のみ変化」「終了後は通常表示に戻す」の3点を精緻化案として提示し、開発者が同意
4. Claudeが`07_CrisisSafety.md`として草案を作成したが、開発者が実際の`00_Constitution`にはCrisis Safety・Change Rules節が存在しないことを確認し、引用元の誤りを指摘
5. 開発者が`grep`でリポジトリを確認し、2026-08-28のDesign Historyでファイル番号が`10_`に確定済みであったことが判明。Claudeが草案の番号を`10_`に訂正。その後、現在の`docs/`の主要doceが番号付きフォルダ単位で管理されている実構成に合わせ、`docs/10_CrisisSafety（安全のためのアクセス手段）/10_CrisisSafety（安全のためのアクセス手段）.md`として配置した。
6. 開発者が`CLAUDE.md`の「配置未確定」記述とDesign Historyの「10_に確定」記述の食い違いを指摘し、Fact Firstに基づき「Unknown」ではなく「Design Historyで確定済み、CLAUDE.md側が未更新」という表現に訂正
7. 今回のCrisis Safety決定をDesign Historyへ記録するにあたり、個別ファイルの採番方法を検討する過程で、実ファイル（00〜07）と索引記載（06・07・08・09に別系統の内容）の不整合を発見
8. 開発者・ChatGPT（チャム）が、採番・過去記録の扱い方について5原則を提案
9. Claude（くう）が本原則の憲法・doce整合性を確認し、同意

## Final Decision（最終決定）

開発者（まき）・Claude・ChatGPTの三者が、「この決定で進めることに同意する」状態に到達（共通指示書⑫Agreement Process）。Crisis Safety文書（`10_`）の新規作成、Help UI仕様（2.1・2.2）、DesignHistory採番・過去記録の扱い方の運用原則（上記5点）を、いずれも正式な決定として記録する。本entryの番号には`08`を使用する。

## Affected Files（影響するファイル）

- `docs/10_CrisisSafety（安全のためのアクセス手段）/10_CrisisSafety（安全のためのアクセス手段）.md`（新規作成）
- `docs/06_DesignHistory（設計履歴)/08_2026-09-25 Crisis Safety Document Creation, Help UI Specification, and DesignHistory Numbering Policy（...）.md`（本entry自体、新規作成）
- `docs/06_DesignHistory（設計履歴)/00_DesignHistory（設計履歴).md`（索引更新：本entryの行追加、旧08・09記載への注記追加）
- `CLAUDE.md`（L140・L485の記述更新が必要かどうかは別途確認。本entryでは未実施）