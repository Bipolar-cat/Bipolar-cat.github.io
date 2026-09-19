# 07 Record Mode Storage（記録時Stepモードの保存）

## Date（日付）

2026-09-19

## Changes（変更内容）

新規に保存する記録（log）に、入力時のStepモード（`mode`）を保存する仕様を決定する。

```
{
  ts,
  date,
  mood,
  cond,
  note,
  mode
}
```

`mode`には、その記録を入力した時点の設定として、`"step3"`または`"step10"`のいずれかを保存する。

既存のlog（`mode`を持たないもの）は変更しない。

- `mode`が存在するlog：保存されている`mode`をそのまま使用する。
- `mode`が存在しないlog：入力時モードは「Unknown」として扱う。

`mood` / `cond`の値や、現在の設定（`storage.js`の`MODE_KEY`）から、既存logの過去の`mode`を推測しない。既存データへの`mode`一括補完・データ移行も行わない。

Unknownを画面上でどう表示するかは、本記録の対象外とする。別途「過去記録のStep3/Step10表示」で決定する。

## Reason（変更理由）

現行のデータ構造では、各logに入力時のStepモードが保存されておらず、`storage.js`の`MODE_KEY`（`"innernote_mode"`）としてグローバルな現在設定のみが保存されている。そのため、「この記録がStep3で入力されたのか、Step10で入力されたのか」という情報が、記録ごとに残っていない。

Stepモードを変更した前後で記録を正確に区別できないため、過去記録を入力当時のStepで表示する、Step3とStep10を区別して集計・分析する、といった今後の実装の前提が成立していなかった。

既存logに`mood` / `cond`の値からモードを逆算することはできない。Step10でも0・5・10は入力可能であり、値だけからStep3だったと確認することはできないためである。したがって、既存logのモードが不明な場合は、推測によって補完せず「Unknown」として扱う。

## Discussion（確認・議論の経緯）

1. ChatGPTが、現行の記録構造（`{ ts, date, mood, cond, note }`）とStepモードの保存方法（`storage.js`の`MODE_KEY`によるグローバル設定）を確認し、記録ごとの入力時モードが保持されていないという問題を指摘した。
2. ChatGPTが、新規記録に`mode`を追加する仕様案（新規logのみ`mode`を保存、既存logは変更せずUnknownとして扱う、表示仕様は別議題とする）を提示した。
3. Claudeが、`04_Analysis Policy`のStep3・Step10に関する既存の記述（原記録として扱う原則）と、今回の仕様案との整合性を確認した。
4. Claudeが、既存logのモードを値から逆算しないという方針を、Fact First・No Speculation・Unknown Means Unknownの観点から確認した。
5. Claudeが、Unknownの表示方法をこの段階で決定するか分離するかについて、`04_Analysis Policy`のAnalysis Quality（データ構造の確定と表示仕様は階層が異なる）を根拠に、分離することを提案した。
6. 開発者・Claude・ChatGPTの三者が、この仕様（新規logへの`mode`保存、既存logは変更せずUnknown扱い、表示仕様は別途協議）について、この決定で進めることに同意した。

## Final Decision（最終決定）

新規に保存する記録に、入力時のStepモード（`mode`：`"step3"`または`"step10"`）を保存する。

既存logは変更しない。`mode`が存在しない既存logは「Unknown」として扱い、推測による補完・データ移行は行わない。

Unknownの画面表示方法は、本決定の対象外とし、別途「過去記録のStep3/Step10表示」で協議する。

`04_Analysis Policy`3章（Analysis Targets）への`mode`追記は、別途三者確認のうえ反映する。

コード実装は、本記録の時点ではまだ行っていない。実装完了後、同じファイルに実装結果を追記する（新規ファイルは作成しない）。

## Affected Files（影響するファイル）

- （実装時）`js/script.js`（記録保存時に`mode`を追加）
- （実装時）`js/logs.js`（`mode`の参照方法、必要な場合）
- 変更なし：既存の保存済みlogデータ
- `docs/06_DesignHistory（設計履歴）/07_Record Mode Storage（記録時Stepモードの保存）.md`（本ファイル）
- `docs/06_DesignHistory（設計履歴）/00_DesignHistory（設計履歴).md`（索引追記）
- （別途確認）`docs/04_AnalysisPolicy (分析)/04_Analysis Policy（分析方針）.md`3章への`mode`追記
