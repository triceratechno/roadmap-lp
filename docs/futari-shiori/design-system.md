# ふたりのしおり — デザインシステム（現行版から抽出）

彼女のお気に入りの雰囲気を引き継ぐための記録。
出典は公開中アプリの `index.html` と `app.js`。**`style.css` は未入手のため、具体的な数値は未確定。**

## 基調

やわらかい・まるい・あたたかい。絵文字を多用し、文章は話し言葉。
シャープ／ミニマル／クールの逆方向。ここを外すと別のアプリになる。

## フォント

```
Zen Maru Gothic (weight 400 / 500 / 700)
https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@400;500;700&display=swap
```

角が丸いゴシック体。**この書体がやわらかさの中心**なので変更しない。

## テーマ配色（4種・端末ごとに選択、同期しない）

`app.js` の `THEMES` より。値は背景色かつ `<meta name="theme-color">` に入る。

| id | ラベル | 背景 | body class |
|---|---|---|---|
| `pink` | 💗 ピンク（既定） | `#fff7f2` | （なし） |
| `blue` | 💙 ブルー | `#f2f7fc` | `theme-blue` |
| `green` | 💚 グリーン | `#f2faf5` | `theme-green` |
| `gray` | 🩶 グレー | `#f5f5f6` | `theme-gray` |

いずれも彩度が非常に低い、ほぼ白のパステル。**背景は主張しない。**

## CSSカスタムプロパティ

`app.js` 中から参照が確認できたもの（値は `style.css` 待ち）。

- `--accent` … 主役色
- `--accent-deep` … 濃いアクセント（日付・見出しに使用）
- `--ink-light` … 薄い文字色（補足・空状態）
- `--card` … カード背景

## 固定の意味づけ

- 彼女 = ピンク 💗 / 彼氏 = ネイビー 💙（設定画面で「色は固定」と明記）
- カテゴリ色は `gourmet` `drive` `sports` `music` `shopping` `other` の6種
  自作カテゴリは `other` の色を借りる

## コンポーネント語彙

現行のクラス名。React化してもこの語彙を保てば見た目が揃う。

**骨格** `app-header` `app-title` `icon-btn` `tab-bar` `tab-btn` `tab-page` `page-head` `sync-bar`
**面** `card` `empty`(+`big`) `hint-card`(+`hint-title`) `nudge-card` `future-notice` `settings-note`
**操作** `btn`(+`small` `ghost` `subtle` `block`) `mini-btn`(+`gray`) `chip`(+`active` `manage`) `field` `field-row`
**ラベル** `tag`(+`done` `area` `slot`) `stag` `count-num`
**時系列** `timeline` `tl-item` `tl-time` `tl-body` `tl-name` `tl-place` `tl-note` `tl-del`
**重ね** `modal` `modal-overlay` `modal-x` `modal-actions` `toast` `lock-screen`
**評価** `item-stars` `istar`
**その他** `pick-item` `cal-cell` `cal-heart` `anniv-row` `act-row` `mem-note` `drive-card` `search-row`

## 文体

UI文言も彼女の印象を作っている。箇条書きでなく話しかける調子。

- 「今日のデートはないよ」「まだ登録がないよ」「気になるお店や場所を追加してみてね」
- 「プラン決定!当日が楽しみだね🩷」「了解!また今度デートしようね😊」
- 削除確認は2段階（思い出は「元に戻せないよ🥺」まで出す）

**敬体は使わない。絵文字は文末に1つ。**

## 未確定（style.css 入手後に埋める）

角丸の半径 / 影 / 余白のスケール / フォントサイズ階層 / アクセント色の実値 / テーマ別の変数上書き
