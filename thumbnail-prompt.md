# サムネイル生成プロンプト集（トリケラテクノ）

## ビジュアル方針

| 系統 | 対象 | キャラクター |
|---|---|---|
| **紙マスク版**（既存） | NEW WORLD / DTMの地図 / ロードマップ | 白い低ポリ紙マスク＋グレーのセーター |
| **彫刻版**（新規） | 新コース専用 | 大理石彫刻。既存ページには適用しない |

共通ルール:
- 背景はディープネイビー→ブラック、アクセントはシアン `#00C8FF` の1色のみ
- 角付き恐竜スカルの頭部は必ず維持（ここがブランドの核）
- **文字は生成AIに描かせない。** 無地で生成し、コース名・サブタイトル・アイコンは Canva/Figma で後載せする
- 出力は16:9

---

## 1. 紙マスク版 / ゼロから生成

```
A cinematic 16:9 product thumbnail on a deep navy-to-black background with a soft
radial glow behind the subject and subtle atmospheric haze.

RIGHT SIDE — the character:
A person shown from the chest up wearing a light grey ribbed crewneck sweater,
head fully covered by a white low-poly papercraft mask of a horned dinosaur skull
(triceratops-like): faceted white paper panels, two large matte-black curved horns
sweeping upward, black polygonal eye sockets and a black nostril plate.
The mask is rimmed with a cyan-blue neon glow that separates it from the dark background.
Pose: 【POSE】
Hands are bare, realistic skin, lit by the same cool cyan light.

LEFT SIDE — the product:
【PRODUCT FORM】, photographed at a slight three-quarter angle, with a thin cyan
neon edge-light along its top and left edges and a soft reflection on the dark
glossy floor.
Printed on its front, centered, in clean white uppercase sans-serif:
  Title:     【COURSE NAME】
  Subtitle:  【SUBTITLE】
  Icon:      a glowing cyan neon line-art 【ICON】 centered below the subtitle
  Footer:    【FOOTER】
A tiny cyan hexagon logo mark in the top-left corner of the package.

STYLE:
Premium dark tech aesthetic, single cyan (#00C8FF) accent color only, high contrast,
studio product photography lighting, sharp focus, photorealistic, 4K, no extra text,
no watermark, no additional logos.
```

差し替え例: POSE=両手のひらを顔の横／指差し／腕組み、ICON=目・波形・山・コンパス、
PRODUCT FORM=ソフトウェアボックス／書籍型

---

## 2. 紙マスク版 / 既存サムネを添付して改変（推奨）

`hero-thumb-melodic.jpg` を添付して使う。ゼロから描写する文面を併用しないこと（描き直しでズレる）。

```
Use the attached image as the exact reference. Keep everything identical —
the same low-poly horned dinosaur mask, the same person, the same grey ribbed
sweater, the same dark navy background, the same cyan neon lighting, the same
composition and camera angle.

Change ONLY these three things:

1. POSE: 【新しいポーズ】
2. TITLE on the package: replace "NEW WORLD" with "【新コース名】"
   and replace "MELODIC TECHNO / START TO FINISH" with "【新サブタイトル】"
3. ICON on the package: replace the neon eye with a glowing cyan neon
   line-art 【新アイコン】

Do not change anything else. Keep "VIDEO COURSE / FULL BUNDLE" as is.
Output 16:9, photorealistic, 4K.
```

注意: サングラスの有無は必ず明記する（NEW WORLD版のみの要素）。顔の向きは変えないと一文足すと安定する。

---

## 3. 彫刻版 / 既存サムネを添付して変換

```
Use the attached image as the layout reference. Keep the exact same composition,
camera angle, framing, background, and the product package on the left.

Transform ONLY the character on the right:
Replace the person in the grey sweater with a classical Greco-Roman marble
sculpture bust of the same character — the same horned dinosaur skull head,
now carved from white marble instead of paper. Faceted, chiselled planes;
two large curved horns sweeping upward; visible marble veining and a matte
polished stone surface. The bust has bare sculpted shoulders and a muscular
sculpted chest and arms in the same pose: 【POSE】.

Along the right edge of the sculpture, the marble fragments and dissolves into
scattered floating shards and dust, as if the stone is breaking apart mid-air.
Cracks run across the surface.

Lighting: dramatic single-source museum lighting from the upper left, deep
shadows, dark navy-to-black background. Keep a subtle cyan (#00C8FF) rim light
tracing the horns and the edge of the head so it matches the package's neon.

Monochrome sculpture, cyan accent only. Photorealistic, cinematic, high contrast,
16:9, 4K. Do not change the package or its text.
```

---

## 4. 彫刻版 / ゼロから生成

```
A cinematic 16:9 thumbnail. Deep navy-to-black background, volumetric haze,
dramatic chiaroscuro lighting from the upper left.

CENTER-RIGHT: A monumental classical marble sculpture — a Greco-Roman style
heroic bust with a muscular carved chest and arms, but the head is a horned
dinosaur skull (triceratops-like) carved in the same white marble: chiselled
faceted planes, two long curved horns sweeping upward, hollow carved eye
sockets. Weathered marble with fine veining and chips. The right side of the
sculpture is fracturing — cracks spread across the stone and the surface
disintegrates into hundreds of floating marble shards and dust suspended in
the air. Pose: 【POSE】.

LEFT: 【PRODUCT】 standing upright at a slight three-quarter angle, thin cyan
neon edge-light, soft reflection on the dark glossy floor. Front face, centered,
clean white uppercase sans-serif:
  【COURSE NAME】 / 【SUBTITLE】 / a glowing cyan neon line-art 【ICON】 /
  VIDEO COURSE — FULL BUNDLE

STYLE: monochrome stone and shadow with a single cyan (#00C8FF) accent,
museum-grade product photography, photorealistic, ultra-detailed, 4K, no
watermark, no extra text.
```

---

## 5. 彫刻版 / 微調整（サングラス除去＋腕組みポーズ）

生成済みの彫刻版を添付して使う。

```
Use the attached image as the reference. Keep everything identical — the same
marble sculpture character, the same horned dinosaur skull head, the same
cracked stone texture, the same shattering marble fragments on the right, the
same dark navy background, the same cyan rim lighting, the same package on the
left with all its text.

Change ONLY these two things:

1. Remove the sunglasses completely. The bare carved marble face is fully
   visible, with deep hollow sculpted eye sockets in shadow. No eyewear of
   any kind.

2. Change the pose: instead of raising both palms beside the head, the arms
   are now folded across the chest in a classical statue pose — the forearms
   crossing over each other in front of the sternum, hands resting on the
   opposite shoulders, fingers spread and carved in detail. Shoulders squared,
   head facing forward, chin level. Calm, monumental, still.

Everything else stays exactly the same. Photorealistic marble, 16:9, 4K.
```

腕組みで崩壊エフェクトが隠れる場合の追記:

```
Shift the shattering fragments to the right side of the head and the outer
edge of the right forearm.
```

---

## 失敗しやすい箇所

- **サングラスが消えない** → 「No eyewear of any kind」まで否定を重ねる。残るなら
  「the eye sockets are empty carved hollows, no lenses, no glasses, no visor」を追加
- **腕組みで指が破綻** → 4枚程度生成して選別する前提で進める
- **崩壊が全体に散って形が読めない** → 「片側だけ崩れる」と範囲を限定する
- **服を石化すると質感が濁る** → 彫刻版は上半身裸（sculpted bare chest）にする
- **Midjourney** → 添付ではなく `--cref <URL> --cw 100` でキャラ固定、`--sref` で作風固定
