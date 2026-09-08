/* ============================================================
   3ヶ月サポートの受付枠 ─ 全ページ共通の唯一の情報源

   枠が埋まったら、下の remaining の数字だけを書き換える。
   triceratechno-lp.html と origin-story.html の両方に即反映される。

   参照している場所（HTML側は data 属性で印を付けてある）:
     data-slots-remaining … 「残り◯名」の数字
     data-slots-capacity  … 「1ヶ月◯名まで」の数字
     #announceMonth / #ctaMonth / #cardMonth … 「◯月の受付枠」の月

   ※ JSが動かない環境でもHTML側に既定値が書いてあるので表示は崩れない。
   ============================================================ */

window.TRICERA_SLOTS = {
  remaining: 2,     // ← 今月の残り枠。ここだけ変更する
  capacity: 5,      // 1ヶ月あたりの受付上限
  month: '9月'      // 表示する受付月。null にすると今日の月を自動表示
};

(function () {
  function apply() {
    var s = window.TRICERA_SLOTS;
    var i, els;

    els = document.querySelectorAll('[data-slots-remaining]');
    for (i = 0; i < els.length; i++) els[i].textContent = s.remaining;

    els = document.querySelectorAll('[data-slots-capacity]');
    for (i = 0; i < els.length; i++) els[i].textContent = s.capacity;

    // 月表示（各ページのインライン自動月スクリプトより後に読み込まれるため、こちらが優先される）
    var month = s.month || (new Date().getMonth() + 1) + '月';
    var ids = ['announceMonth', 'ctaMonth', 'cardMonth'];
    for (i = 0; i < ids.length; i++) {
      var el = document.getElementById(ids[i]);
      if (el) el.textContent = month;
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', apply);
  } else {
    apply();
  }
})();
