/**
 * トリケラテクノ ロードマップ｜購入者専用ハブ
 * 記事データ
 *
 * このファイルを編集するだけで、ハブの内容が更新されます。
 * 編集後はブラウザをリロードするだけ。再ビルド不要。
 *
 * --- 編集ガイド ---
 *
 * status の値：
 *   STEPレベル :  "completed" | "in_progress" | "upcoming"
 *   記事レベル :  "published" | "draft" | "upcoming"
 *
 * 新しい記事を公開したとき：
 *   1. 該当記事の status を "draft" → "published" に変更
 *   2. noteUrl に実際のURLを入れる
 *   3. pdfUrl に PDFファイル名を入れる（例: "step2-1.pdf"）
 *   4. ブラウザをリロード
 *
 * PDFは LP/ フォルダ直下に置けば相対パスでDL可能。
 */

const ROADMAP_DATA = {
  meta: {
    productName: "トリケラテクノ流 最短で1曲完成するためのロードマップ1.0",
    tagline: "8小節で止まらない。1曲を引っ張るDTM学習設計図。",
    totalSteps: 10,
    lastUpdated: "2026-05-09",
    author: {
      name: "トリケラテクノ",
      role: "DTM解説恐竜 / Melodic Techno Producer",
      noteUrl: "https://note.com/triceratechno"
    }
  },

  steps: [

    // ========== STEP 1 ==========
    {
      id: 1,
      title: "リファレンス分析",
      subtitle: "迷わない制作スタート",
      description: "プロの曲を分析して、自分が作る曲の設計図を作る。",
      status: "completed",
      articles: [
        { id: "1-1", type: "lesson", title: "STEP1-1：楽曲構成の理解と、1曲を選ぶ ── ロードマップ最初の\"コンパス\"を立てる", noteUrl: "https://note.com/preview/ncecfa60df4c6?prev_access_key=928d40d37c991b488c4dc4ba01bb2b52", pdfUrl: "step1-1.pdf", videoUrl: "", status: "published" },
        { id: "1-2", type: "lesson", title: "STEP1-2：レファレンスを丸裸にする ── AIステム分離で、プロの設計図を読み解く", noteUrl: "https://note.com/preview/nc2001a80fe23?prev_access_key=e6acca3e5743e3250683ec1447a0121b", pdfUrl: "step1-2.pdf", videoUrl: "", status: "published" },
        { id: "1-bonus", type: "bonus", title: "STEP1 特典ファイル：先輩たちの REAL CASES ── 順次更新中", noteUrl: "https://note.com/preview/nb7ad979cf708?prev_access_key=6131b00d650ad3e14d14f9073137d8f2", pdfUrl: "", videoUrl: "", status: "published" }
      ]
    },

    // ========== STEP 2 ==========
    {
      id: 2,
      title: "キックとベース",
      subtitle: "楽曲の重心を作る",
      description: "低域の関係性を固定して、曲全体の支えを設計する。",
      status: "completed",
      articles: [
        { id: "2-overview", type: "overview", title: "STEP2 全体解説：ローエンドは\"音作り\"じゃない。設計で9割決まる。", noteUrl: "https://note.com/preview/n05af5b6c71bb?prev_access_key=42a01a4c18a54837b4562495b37727ff", pdfUrl: "step2_overview.pdf", videoUrl: "https://note.com/preview/nebb2b55edafa?prev_access_key=57c45be6df3374406f2299442c6d8ac1", status: "published" },
        { id: "2-1", type: "lesson", title: "STEP2-1：プロが必ず行う「正しいキックの選び方」", noteUrl: "https://note.com/preview/n3b634df5d619?prev_access_key=4d98fb6dd104c0fce67e08897f02e1fa", pdfUrl: "step2-1.pdf", videoUrl: "", status: "published" },
        { id: "2-2", type: "lesson", title: "STEP2-2：キックを1つに決める──構造で評価して、迷わず選ぶ", noteUrl: "https://note.com/preview/n8292ee508aee?prev_access_key=0d78775940a4452a53b682f0f11a6374", pdfUrl: "step2-2.pdf", videoUrl: "", status: "published" },
        { id: "2-3", type: "lesson", title: "STEP2-3：キックを4小節に配置する──ループを固定して、ミックスの基準を作る", noteUrl: "https://note.com/preview/nddcf55a4826c?prev_access_key=3852ca5bdec4c0c975a45822c04fe3a5", pdfUrl: "step2-3.pdf", videoUrl: "", status: "published" },
        { id: "2-4", type: "lesson", title: "STEP2-4：トップベースの作り方──キックと噛み合わせる3つの処理", noteUrl: "https://note.com/preview/n5a43dd26644e?prev_access_key=290e11befa735cff9139a6dd0a40b035", pdfUrl: "step2-4.pdf", videoUrl: "", status: "published" },
        { id: "2-5", type: "lesson", title: "STEP2-5：サブベースの作り方──役割は\"太さだけ\"。それ以外は全部不要", noteUrl: "https://note.com/preview/nba1a24f15d36?prev_access_key=5b89e5a375ca00edf1bd046c59ba5b90", pdfUrl: "step2-5.pdf", videoUrl: "", status: "published" },
        { id: "2-6", type: "lesson", title: "STEP2-6：ローエンドを1本化する──3つのシンプルなテクニック", noteUrl: "https://note.com/preview/n16f4be730436?prev_access_key=b6babf5e6902988f180d08fcb436c836", pdfUrl: "step2-6.pdf", videoUrl: "", status: "published" }
      ]
    },

    // ========== STEP 3 ==========
    {
      id: 3,
      title: "ドラムス",
      subtitle: "リズムの骨格を組む",
      description: "スネア・ハット・ライドで楽曲の前進感を作る。",
      status: "completed",
      articles: [
        { id: "3-overview", type: "overview", title: "STEP3 全体解説：ドラムは\"音を足す工程\"じゃない。グルーブを設計する工程だ。", noteUrl: "https://note.com/preview/nc7f24367887c?prev_access_key=2b2570dcb392497e3f1904a1f89113cd", pdfUrl: "step3_overview.pdf", videoUrl: "https://note.com/preview/n881f5979137f?prev_access_key=f1daa1f32ea8e9940fa9dba01408f9aa", status: "published" },
        { id: "3-1", type: "lesson", title: "STEP3-1：グルーブを生み出すたった2つのポイント。ドラムス6つの役割を正しく理解せよ", noteUrl: "https://note.com/preview/nb6ad2803d308?prev_access_key=c0e3f19ce056c8fce244aae06c15e4b0", pdfUrl: "step3-1.pdf", videoUrl: "", status: "published" },
        { id: "3-2", type: "lesson", title: "STEP3-2：疾走感を手に入れろ。ハット／ライドで\"前へ・上へ\"動くビートを作る", noteUrl: "https://note.com/preview/nb204d1edb112?prev_access_key=aeab931621d84fbf1673f20913ed2a1e", pdfUrl: "step3-2.pdf", videoUrl: "", status: "published" },
        { id: "3-3", type: "lesson", title: "STEP3-3：ドラムスを\"完成形\"にする最終ステップ──トップ／パーカッションでグルーブを完成させる", noteUrl: "https://note.com/preview/n2d2cfc77237e?prev_access_key=d57afd0cc3daea88152d86c8bc119ab0", pdfUrl: "step3-3.pdf", videoUrl: "", status: "published" }
      ]
    },

    // ========== STEP 4 ==========
    {
      id: 4,
      title: "ボーカル",
      subtitle: "楽曲の顔を決める",
      description: "ジャンルに合うボーカルを選び、海外プロのボーカル処理で仕上げる。",
      status: "completed",
      articles: [
        { id: "4-overview", type: "overview", title: "STEP4 全体解説：ボーカルで\"楽曲の世界観\"を完成させる", noteUrl: "https://note.com/preview/ndd14c3fe8a70?prev_access_key=8c5297acec8813419baf75e6d0375d76", pdfUrl: "step4_overview.pdf", videoUrl: "https://note.com/preview/n7b91551b26a8?prev_access_key=d4b08ddafac59959a9e5f2e1479ec5c1", status: "published" },
        { id: "4-1", type: "lesson", title: "STEP4-1：もう迷わない。ジャンルに合うボーカルの選び方", noteUrl: "https://note.com/preview/n0432442d2e63?prev_access_key=7ec0b4afc423ae1a14b428b81a8a552c", pdfUrl: "step4-1.pdf", videoUrl: "", status: "published" },
        { id: "4-2", type: "lesson", title: "STEP4-2：多くのDTMerが一生知らない\"海外プロのボーカル処理\"完全解説", noteUrl: "https://note.com/preview/n6c6a7a25b783?prev_access_key=2095b6a18e40a977c1a7c2e9c36255ae", pdfUrl: "step4-2.pdf", videoUrl: "", status: "published" }
      ]
    },

    // ========== STEP 5 ==========
    {
      id: 5,
      title: "メロディ設計",
      subtitle: "8小節で止まらない、1曲を引っ張る構造",
      description: "音色を決め、土台を作り、展開・存在感・空間を順に積み上げる。",
      status: "completed",
      articles: [
        { id: "5-overview", type: "overview", title: "STEP5 全体解説：8小節で止まらない。1曲を引っ張るメロディ設計", noteUrl: "https://note.com/preview/na257ddfdbe08?prev_access_key=932c452bc1530d558f7144ceb02e11e5", pdfUrl: "step5_overview.pdf", videoUrl: "https://note.com/preview/nb604b1097e3d?prev_access_key=a0115c6e23cf0850207eabe87d5df009", status: "published" },
        { id: "5-1", type: "lesson", title: "STEP5-1：メロディーはここで決まる。主役となるリード音色を1つ選べ", noteUrl: "https://note.com/preview/n8bd7a9fc2904?prev_access_key=3b065b382b403e07831f4e3d311b4f04", pdfUrl: "step5-1.pdf", videoUrl: "", status: "published" },
        { id: "5-2", type: "lesson", title: "STEP5-2：メロディはまず8小節の「土台」から作る", noteUrl: "https://note.com/preview/n37425d44c2fc?prev_access_key=d1fa77d837eb21c34c70f3232fa12d67", pdfUrl: "step5-2.pdf", videoUrl: "", status: "published" },
        { id: "5-3", type: "lesson", title: "STEP5-3：8小節を\"展開する音\"に変える──Cutoffで作るプロの存在感設計", noteUrl: "https://note.com/preview/nad5fc78e0b9c?prev_access_key=19e2e9ccf1d90889d02c2e2f27220816", pdfUrl: "step5-3.pdf", videoUrl: "", status: "published" },
        { id: "5-4", type: "lesson", title: "STEP5-4：EQ・OTT・歪みで\"音を存在に変える\"──メロディ密度の最終調整", noteUrl: "https://note.com/preview/n0bc79e305d52?prev_access_key=4aa6d6e59565f8dce562c2d17615acc9", pdfUrl: "step5-4.pdf", videoUrl: "", status: "published" },
        { id: "5-5", type: "lesson", title: "STEP5-5：メロディ完成の最後の一手｜リードを楽曲に馴染ませる空間設計術", noteUrl: "https://note.com/preview/nb1bb763a142f?prev_access_key=f08d360c60f472404d5287f7d6158f12", pdfUrl: "step5-5.pdf", videoUrl: "", status: "published" }
      ]
    },

    // ========== STEP 6 ==========
    {
      id: 6,
      title: "FX / アンビエンス",
      subtitle: "8小節ループを終わらせる",
      description: "FXとアンビエンスで世界観を作り、ループから完成形へ。",
      status: "completed",
      articles: [
        { id: "6-overview", type: "overview", title: "STEP6 全体解説：展開と空気で、8小節を\"楽曲\"に変える", noteUrl: "https://note.com/preview/n539c22dd8d5b?prev_access_key=09e2517abd457d085189027444cfa6b6", pdfUrl: "step6_overview.pdf", videoUrl: "https://note.com/preview/n558c5fc6c328?prev_access_key=7a1c39ef7125e4db89667a23e126bdbb", status: "published" },
        { id: "6-1", type: "lesson", title: "STEP6-1：退屈な\"8小節ループ\"を終わらせる｜ドロップに\"展開\"を生むFX設計術", noteUrl: "https://note.com/preview/n33b784933052?prev_access_key=1bd96fec4bbd5fbac170f16dee768d85", pdfUrl: "step6-1.pdf", videoUrl: "", status: "published" },
        { id: "6-2", type: "lesson", title: "STEP6-2：展開を支配せよ。FXの役割と思考法を徹底解説", noteUrl: "https://note.com/preview/n3226a97d3231?prev_access_key=4a5e80ae7a2e71880fa3ec8e02a68206", pdfUrl: "step6-2.pdf", videoUrl: "", status: "published" },
        { id: "6-3", type: "lesson", title: "STEP6-3：楽曲に\"空気\"を与えろ。アンビエンスで世界観を完成させる", noteUrl: "https://note.com/preview/nef22f2d809ae?prev_access_key=954e71a8829d6ff099696288055d1829", pdfUrl: "step6-3.pdf", videoUrl: "", status: "published" }
      ]
    },

    // ========== STEP 7 ==========
    {
      id: 7,
      title: "アレンジ構成",
      subtitle: "1曲の流れを設計する",
      description: "イントロからアウトロまで、曲全体の構造を組み立てる。",
      status: "completed",
      articles: [
        { id: "7-overview", type: "overview", title: "STEP7 全体解説：8小節のループは、もう終わり。配置だけで\"1曲\"は完成する。", noteUrl: "https://note.com/preview/na92691e408bd?prev_access_key=0686eb5fb03058b631d7b6665597b942", pdfUrl: "step7_overview.pdf", videoUrl: "https://note.com/preview/nedc1e29eac10?prev_access_key=9bff0002c554c37e635c6da2e66f97b4", status: "published" },
        { id: "7-1", type: "lesson", title: "STEP7-1：8小節のループから楽曲へ──楽曲構成の設計図。各パートの役割と考え方", noteUrl: "https://note.com/preview/neceba72076f8?prev_access_key=bab05843f44dfca64b470798ae923d2c", pdfUrl: "step7-1.pdf", videoUrl: "", status: "published" },
        { id: "7-2", type: "lesson", title: "STEP7-2：実践編：配置して初めて\"曲\"になる。ドロップを16小節へ展開する実践ルール", noteUrl: "https://note.com/preview/n6be4730f68a7?prev_access_key=bf0ca6cd62b9045869bb0b8fd9df6b7a", pdfUrl: "step7-2.pdf", videoUrl: "", status: "published" },
        { id: "7-3", type: "lesson", title: "STEP7-3：盛り上げるな、削れ。ドロップを爆発させるビルドアップ思考術", noteUrl: "https://note.com/preview/n96ebf227f8f0?prev_access_key=d827c31193709c4e041c1d74e89c99e5", pdfUrl: "step7-3.pdf", videoUrl: "", status: "published" },
        { id: "7-4", type: "lesson", title: "STEP7-4：楽曲の\"顔\"を決めろ。ボーカルで作る\"強烈なフック\"設計完全ガイド", noteUrl: "https://note.com/preview/n14c518a28c4e?prev_access_key=26295c9f76df2186792acd2b9cb30f83", pdfUrl: "step7-4.pdf", videoUrl: "", status: "published" },
        { id: "7-5", type: "lesson", title: "STEP7-5：ブレイクは設計で作れ。ドロップをリセットし、フックを最大化する構造を解説", noteUrl: "https://note.com/preview/n2a603c8e2718?prev_access_key=fb64c34ac3b65e4c855b293e6ede9ca3", pdfUrl: "step7-5.pdf", videoUrl: "", status: "published" },
        { id: "7-6", type: "lesson", title: "STEP7-6：イントロとアウトロを捨てる──配信リリース時代の\"省略する構成設計\"", noteUrl: "https://note.com/preview/n3790c90fbb8a?prev_access_key=45b1f908236f8dd253c84b2ca28389b1", pdfUrl: "step7-6.pdf", videoUrl: "", status: "published" }
      ]
    },

    // ========== STEP 8 ==========
    {
      id: 8,
      title: "ミキシング",
      subtitle: "全トラックを1つにまとめる",
      description: "VU・Level・Panの3つの基準を使い、混ざる音を作る。",
      status: "completed",
      articles: [
        { id: "8-overview", type: "overview", title: "STEP8 全体解説：ミキシングは\"音を良くする工程\"じゃない。壊さず終わらせる設計だ。", noteUrl: "https://note.com/preview/ndc5e7dbcc3f0?prev_access_key=594159d0ff546bddd4153b42c21b2ad8", pdfUrl: "step8_overview.pdf", videoUrl: "https://note.com/preview/nbd6468eeb72d?prev_access_key=9ec41c58b4d84c4233d35b0409206b0d", status: "published" },
        { id: "8-1", type: "lesson", title: "STEP8-1：ミキシングの土台を整える ── 音量・役割・パンの最終確認", noteUrl: "https://note.com/preview/n641d599d4496?prev_access_key=6a582b3327bb3ec74bcdbf1c669bea87", pdfUrl: "step8-1.pdf", videoUrl: "", status: "published" },
        { id: "8-2", type: "lesson", title: "STEP8-2：ミキシングを終わらせる判断基準 ── 壊さず仕上げる4つの最終チェック", noteUrl: "https://note.com/preview/nc856ef836689?prev_access_key=2a6bd9e2fd3d4ec0abda4c75296e5221", pdfUrl: "step8-2.pdf", videoUrl: "", status: "published" }
      ]
    },

    // ========== STEP 9 ==========
    {
      id: 9,
      title: "マスタリング",
      subtitle: "プロ品質に仕上げる",
      description: "音圧と音質を整え、配信レベルの最終形にする。",
      status: "completed",
      articles: [
        { id: "9-overview", type: "overview", title: "STEP9 解説：マスタリングの前に、絶対に知っておくべき判断基準 ── 音圧に振り回されず「送り出せる曲」にするために", noteUrl: "https://note.com/preview/n9c55473beb5e?prev_access_key=4dddf1db8a937be1dcdcfd0c2854debf", pdfUrl: "step9_overview.pdf", videoUrl: "", status: "published" }
      ]
    },

    // ========== STEP 10 ==========
    {
      id: 10,
      title: "配信申請",
      subtitle: "Apple Music・Spotifyにリリース",
      description: "完成した曲を世界に届けるための最終ステップ。",
      status: "completed",
      articles: [
        { id: "10-overview", type: "overview", title: "STEP10 解説：書き出し〜公開準備 ── あなたの曲を「本当に世界へ出す」最後の一歩", noteUrl: "https://note.com/preview/n36fde1328993?prev_access_key=3ee740ff7293fa9819293e0f39e7bdc0", pdfUrl: "step10_overview.pdf", videoUrl: "", status: "published" }
      ]
    }
  ]
};
