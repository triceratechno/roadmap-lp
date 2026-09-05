/* ==========================================================================
   TRICERA TECHNO ／ ロードマップPROコース 記事ページ 共通スクリプト
   --------------------------------------------------------------------------
   全記事で共有。個別記事のHTMLにJSは書かないこと。
   記事側は <body data-article-id="1-1" data-next-id="1-2"> を宣言するだけ。

   HUBと共有しているストレージ:
     sessionStorage  tricera_hub_unlocked_v1        ... 合言葉の通過状態
     localStorage    triceratechno_hub_progress_v1  ... 読了した記事IDの配列
   ========================================================================== */

(function () {
  'use strict';

  var PW_HASH = '07ed400759a0f606a8b5bfa84712aabe7d1b1c45cb6536c8a5727446b6647b84';
  var GATE_KEY = 'tricera_hub_unlocked_v1';
  var PROGRESS_KEY = 'triceratechno_hub_progress_v1';
  var CHECK_KEY = 'tricera_article_checks_v1';

  var body = document.body;
  var ARTICLE_ID = body.getAttribute('data-article-id') || '';

  /* ---------- ストレージ小道具 ---------- */

  function readJSON(store, key, fallback) {
    try {
      var raw = store.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
      return fallback;
    }
  }

  function writeJSON(store, key, value) {
    try { store.setItem(key, JSON.stringify(value)); } catch (e) {}
  }

  function getReadIds() {
    var arr = readJSON(localStorage, PROGRESS_KEY, []);
    return Array.isArray(arr) ? arr : [];
  }

  function markRead(id) {
    if (!id) return;
    var ids = getReadIds();
    if (ids.indexOf(id) === -1) {
      ids.push(id);
      writeJSON(localStorage, PROGRESS_KEY, ids);
    }
  }

  function isRead(id) {
    return !!id && getReadIds().indexOf(id) !== -1;
  }

  /* ---------- 1. 合言葉ゲート ---------- */

  function initGate() {
    var gate = document.getElementById('gate');
    if (!gate) return;

    var unlocked = false;
    try { unlocked = sessionStorage.getItem(GATE_KEY) === '1'; } catch (e) {}

    if (unlocked) {
      gate.remove();
      body.classList.remove('is-locked');
      return;
    }

    var form = document.getElementById('gateForm');
    var input = document.getElementById('gateInput');
    var error = document.getElementById('gateError');
    if (!form || !input) return;

    requestAnimationFrame(function () { input.focus(); });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var pw = (input.value || '').trim().toLowerCase();
      if (!pw) return;

      sha256(pw).then(function (hash) {
        if (hash === PW_HASH) {
          try { sessionStorage.setItem(GATE_KEY, '1'); } catch (err) {}
          gate.remove();
          body.classList.remove('is-locked');
        } else {
          error.hidden = false;
          input.value = '';
          input.focus();
          input.style.borderColor = 'var(--ng)';
          setTimeout(function () { input.style.borderColor = ''; }, 1500);
        }
      }).catch(function () {
        error.textContent = 'ブラウザを最新版にアップデートしてください。';
        error.hidden = false;
      });
    });
  }

  function sha256(text) {
    if (!window.crypto || !crypto.subtle) return Promise.reject(new Error('no subtle'));
    return crypto.subtle.digest('SHA-256', new TextEncoder().encode(text)).then(function (buf) {
      return Array.prototype.map.call(new Uint8Array(buf), function (b) {
        return b.toString(16).padStart(2, '0');
      }).join('');
    });
  }

  /* ---------- 2. スクロール表示 ---------- */

  function initReveal() {
    var targets = document.querySelectorAll('.reveal');
    if (!targets.length) return;

    if (!('IntersectionObserver' in window)) {
      Array.prototype.forEach.call(targets, function (el) { el.classList.add('visible'); });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -8% 0px' });

    Array.prototype.forEach.call(targets, function (el) { io.observe(el); });
  }

  /* ---------- 3. 読了バー ---------- */

  function initProgressBar() {
    var bar = document.getElementById('readProgress');
    if (!bar) return;

    var ticking = false;
    function update() {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      var pct = h > 0 ? Math.min(100, (window.scrollY / h) * 100) : 0;
      bar.style.width = pct.toFixed(2) + '%';
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });

    update();
  }

  /* ---------- 4. 用語ツールチップ ---------- */

  function initTerms() {
    var terms = document.querySelectorAll('.term[data-term]');
    if (!terms.length) return;

    var pop = document.createElement('div');
    pop.className = 'term-pop';
    pop.setAttribute('role', 'tooltip');
    document.body.appendChild(pop);

    var current = null;

    function show(el) {
      current = el;
      pop.innerHTML = '<b>' + escapeHtml(el.getAttribute('data-term') || '') + '</b>' +
                      escapeHtml(el.getAttribute('data-desc') || '');
      pop.classList.add('is-open');

      var r = el.getBoundingClientRect();
      pop.style.left = '0px';
      pop.style.top = '0px';
      var pw = pop.offsetWidth;
      var ph = pop.offsetHeight;

      var left = r.left + window.scrollX + (r.width / 2) - (pw / 2);
      left = Math.max(12, Math.min(left, document.documentElement.clientWidth - pw - 12));

      var top = r.top + window.scrollY - ph - 10;
      if (r.top - ph - 10 < 0) top = r.bottom + window.scrollY + 10;

      pop.style.left = left + 'px';
      pop.style.top = top + 'px';
    }

    function hide() {
      current = null;
      pop.classList.remove('is-open');
    }

    Array.prototype.forEach.call(terms, function (el) {
      el.setAttribute('tabindex', '0');
      el.addEventListener('mouseenter', function () { show(el); });
      el.addEventListener('mouseleave', hide);
      el.addEventListener('focus', function () { show(el); });
      el.addEventListener('blur', hide);
      el.addEventListener('click', function (e) {
        e.preventDefault();
        if (current === el) { hide(); } else { show(el); }
      });
    });

    window.addEventListener('scroll', function () { if (current) hide(); }, { passive: true });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') hide(); });
  }

  /* ---------- 5. コピーボタン ---------- */

  function initCopy() {
    var btns = document.querySelectorAll('.copy-btn[data-copy]');
    Array.prototype.forEach.call(btns, function (btn) {
      btn.addEventListener('click', function () {
        var text = btn.getAttribute('data-copy') || '';
        copyText(text).then(function () {
          var original = btn.textContent;
          btn.textContent = 'コピー済';
          btn.classList.add('is-done');
          setTimeout(function () {
            btn.textContent = original;
            btn.classList.remove('is-done');
          }, 1800);
        });
      });
    });
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise(function (resolve) {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); } catch (e) {}
      document.body.removeChild(ta);
      resolve();
    });
  }

  /* ---------- 6. 構成タイムライン ---------- */

  function initTimeline() {
    var tl = document.querySelector('.timeline');
    if (!tl) return;

    var segs = tl.querySelectorAll('.tl-seg');
    var detail = tl.querySelector('.timeline-detail');
    if (!segs.length || !detail) return;

    function select(seg) {
      Array.prototype.forEach.call(segs, function (s) {
        s.classList.toggle('is-active', s === seg);
        s.setAttribute('aria-pressed', s === seg ? 'true' : 'false');
      });
      detail.innerHTML =
        '<h4>' + escapeHtml(seg.getAttribute('data-name') || '') +
        '<span class="tl-bars">' + escapeHtml(seg.getAttribute('data-bars') || '') + '</span></h4>' +
        '<p>' + escapeHtml(seg.getAttribute('data-desc') || '') + '</p>';
    }

    Array.prototype.forEach.call(segs, function (seg) {
      seg.addEventListener('click', function () { select(seg); });
    });

    select(segs[0]);
  }

  /* ---------- 7. A/B オーディオプレイヤー ---------- */

  function initAB() {
    var ab = document.querySelector('.ab');
    if (!ab) return;

    var audio = ab.querySelector('audio');
    var playBtn = ab.querySelector('.ab-play');
    var wave = ab.querySelector('.ab-wave');
    var timeEl = ab.querySelector('.ab-time');
    var switches = ab.querySelectorAll('.ab-switch button');
    if (!audio || !playBtn || !wave) return;

    var BARS = 64;
    for (var i = 0; i < BARS; i++) {
      var bar = document.createElement('i');
      var t = i / BARS;
      var h = 22 + Math.sin(t * Math.PI * 7) * 14 + Math.sin(t * Math.PI * 23) * 8;
      bar.style.height = Math.max(6, Math.min(44, h)) + '%';
      wave.appendChild(bar);
    }
    var bars = wave.querySelectorAll('i');

    var ICON_PLAY = '<svg viewBox="0 0 24 24" aria-hidden="true"><polygon points="6,3 20,12 6,21"/></svg>';
    var ICON_PAUSE = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="3" width="4" height="18"/><rect x="15" y="3" width="4" height="18"/></svg>';

    playBtn.innerHTML = ICON_PLAY;

    function fmt(sec) {
      if (!isFinite(sec)) return '0:00';
      var m = Math.floor(sec / 60);
      var s = Math.floor(sec % 60);
      return m + ':' + (s < 10 ? '0' : '') + s;
    }

    function paint() {
      var ratio = audio.duration ? audio.currentTime / audio.duration : 0;
      var upto = Math.floor(ratio * BARS);
      Array.prototype.forEach.call(bars, function (b, idx) {
        b.classList.toggle('is-played', idx <= upto);
      });
      if (timeEl) timeEl.textContent = fmt(audio.currentTime) + ' / ' + fmt(audio.duration);
    }

    playBtn.addEventListener('click', function () {
      if (audio.paused) { audio.play().catch(function () {}); }
      else { audio.pause(); }
    });

    audio.addEventListener('play', function () {
      playBtn.innerHTML = ICON_PAUSE;
      playBtn.setAttribute('aria-label', '一時停止');
    });
    audio.addEventListener('pause', function () {
      playBtn.innerHTML = ICON_PLAY;
      playBtn.setAttribute('aria-label', '再生');
    });
    audio.addEventListener('timeupdate', paint);
    audio.addEventListener('loadedmetadata', paint);
    audio.addEventListener('ended', function () { audio.currentTime = 0; paint(); });

    wave.addEventListener('click', function (e) {
      if (!audio.duration) return;
      var r = wave.getBoundingClientRect();
      audio.currentTime = ((e.clientX - r.left) / r.width) * audio.duration;
      paint();
    });

    // A / B 切替：再生位置を保ったまま音源だけ差し替える
    Array.prototype.forEach.call(switches, function (btn) {
      btn.addEventListener('click', function () {
        var src = btn.getAttribute('data-src');
        if (!src) return;

        var wasPlaying = !audio.paused;
        var pos = audio.currentTime;

        Array.prototype.forEach.call(switches, function (b) {
          b.classList.toggle('is-active', b === btn);
          b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
        });

        audio.src = src;
        audio.load();
        audio.addEventListener('loadedmetadata', function once() {
          audio.removeEventListener('loadedmetadata', once);
          audio.currentTime = Math.min(pos, audio.duration || 0);
          if (wasPlaying) audio.play().catch(function () {});
          paint();
        });
      });
    });

    paint();
  }

  /* ---------- 8. クリア条件チェックリスト ---------- */

  function initChecklist() {
    var list = document.querySelector('.clear-list');
    if (!list) return;

    var boxes = list.querySelectorAll('input[type="checkbox"]');
    var countEl = document.querySelector('.clear-count');
    var doneEl = document.querySelector('.clear-done');
    if (!boxes.length) return;

    var store = readJSON(localStorage, CHECK_KEY, {});
    if (typeof store !== 'object' || store === null) store = {};
    var saved = Array.isArray(store[ARTICLE_ID]) ? store[ARTICLE_ID] : [];

    Array.prototype.forEach.call(boxes, function (box, idx) {
      box.checked = saved.indexOf(idx) !== -1;
      box.addEventListener('change', function () {
        persist();
        render();
      });
    });

    function persist() {
      var checked = [];
      Array.prototype.forEach.call(boxes, function (box, idx) {
        if (box.checked) checked.push(idx);
      });
      store[ARTICLE_ID] = checked;
      writeJSON(localStorage, CHECK_KEY, store);
    }

    function render() {
      var n = 0;
      Array.prototype.forEach.call(boxes, function (box) { if (box.checked) n++; });
      if (countEl) countEl.textContent = n + ' / ' + boxes.length;
      if (doneEl) doneEl.hidden = n < boxes.length;
    }

    render();
  }

  /* ---------- 9. 読了ボタン ---------- */

  function initFinish() {
    var btn = document.getElementById('finishBtn');
    if (!btn) return;

    var note = document.getElementById('finishNote');

    function paintDone() {
      btn.textContent = '✓ 読了済み';
      btn.classList.add('is-done');
      btn.disabled = true;
      if (note) note.textContent = 'HUBの進捗に反映されました。';
    }

    if (isRead(ARTICLE_ID)) {
      paintDone();
      return;
    }

    btn.addEventListener('click', function () {
      markRead(ARTICLE_ID);
      paintDone();
    });
  }

  /* ---------- 10. 画像の差し替え待ちプレースホルダ ---------- */
  /* img[data-fallback] が読めなかったら、隣の .figure-empty に切り替える。
     画像を用意する前でも「壊れた画像アイコン」を出さないための仕組み。 */

  function initFigureFallback() {
    var imgs = document.querySelectorAll('.figure img[data-fallback]');
    Array.prototype.forEach.call(imgs, function (img) {
      function fail() {
        img.hidden = true;
        var ph = img.parentElement && img.parentElement.querySelector('.figure-empty');
        if (ph) ph.hidden = false;
      }
      img.addEventListener('error', fail);
      // すでに読み込みに失敗していた場合（キャッシュ経路）にも対応
      if (img.complete && img.naturalWidth === 0) fail();
    });
  }

  /* ---------- 11. 画像切り替え ---------- */
  /* 同じ図の一部を順にハイライトした画像セットを、タブで切り替えて見比べる */

  function initImgSwap() {
    var blocks = document.querySelectorAll('.imgswap');
    Array.prototype.forEach.call(blocks, function (block) {
      var tabs = block.querySelectorAll('.imgswap-tab');
      var img = block.querySelector('.imgswap-frame img');
      var cap = block.querySelector('.imgswap-cap');
      if (!tabs.length || !img) return;

      // 切り替え時にちらつかないよう先読みしておく
      Array.prototype.forEach.call(tabs, function (t) {
        var src = t.getAttribute('data-src');
        if (src) { var pre = new Image(); pre.src = src; }
      });

      function select(tab) {
        Array.prototype.forEach.call(tabs, function (t) {
          var on = t === tab;
          t.classList.toggle('is-active', on);
          t.setAttribute('aria-pressed', on ? 'true' : 'false');
        });
        img.src = tab.getAttribute('data-src') || img.src;
        img.alt = tab.getAttribute('data-alt') || img.alt;
        if (cap) cap.textContent = tab.getAttribute('data-cap') || '';
      }

      Array.prototype.forEach.call(tabs, function (t) {
        t.addEventListener('click', function () { select(t); });
      });

      select(tabs[0]);
    });
  }

  /* ---------- 12. 前後リンクの自動解決 ---------- */
  /* body の data-prev-id / data-next-id を hub-data.js と突き合わせ、
     その記事が自作ページ化されていれば pageUrl（同一タブ）に、
     まだなら noteUrl（別タブ）に貼り替える。
     新しい記事ページを追加したとき、前後の記事を手で直さなくて済む。 */

  function initPager() {
    if (typeof ROADMAP_DATA === 'undefined' || !ROADMAP_DATA || !Array.isArray(ROADMAP_DATA.steps)) return;

    var index = {};
    ROADMAP_DATA.steps.forEach(function (step) {
      (step.articles || []).forEach(function (a) { index[a.id] = a; });
    });

    function apply(selector, id) {
      if (!id) return;
      var link = document.querySelector(selector);
      var article = index[id];
      if (!link || !article) return;

      var page = article.pageUrl && String(article.pageUrl).trim();
      var note = article.noteUrl && String(article.noteUrl).trim();
      var url = page || note;
      if (!url) return;

      // pageUrl は HUB からの相対パス（articles/xxx.html）なので、記事間はファイル名だけにする
      if (page) {
        link.setAttribute('href', url.replace(/^articles\//, ''));
        link.removeAttribute('target');
        link.removeAttribute('rel');
      } else {
        link.setAttribute('href', url);
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener');
      }
    }

    apply('.pager a.next', body.getAttribute('data-next-id'));
    apply('.pager a:not(.next)', body.getAttribute('data-prev-id'));
  }

  /* ---------- 汎用 ---------- */

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /* ---------- 起動 ---------- */

  function boot() {
    initGate();
    initReveal();
    initProgressBar();
    initTerms();
    initCopy();
    initTimeline();
    initAB();
    initChecklist();
    initFinish();
    initFigureFallback();
    initImgSwap();
    initPager();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
