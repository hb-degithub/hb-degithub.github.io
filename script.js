/* ==========================================================================
   hb. — Developer & Explorer
   theme · language · mobile menu · copy email · active section · reveal
   No dependencies, no build step.
   ========================================================================== */
(function () {
  'use strict';

  var root = document.documentElement;
  var THEME_KEY = 'hb-theme';
  var LANG_KEY = 'hb-lang';
  var EMAIL = '670486183@qq.com';

  var motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  var mobileQuery = window.matchMedia('(max-width: 900px)');

  /* i18n:start */
  var I18N = {
    zh: {
      'meta.description': 'hb. 的个人主页。热爱创造的开发者，从全栈应用到自动化工具，把日常里的灵感，变成有温度的数字作品。项目包括 SysDeck、kedaibiao、zxailts 与 PTA Auto Solve。',
      'meta.ogDescription': '热爱创造的开发者，从全栈应用到自动化工具，把日常里的灵感，变成有温度的数字作品。',
      'skip': '跳到主要内容',

      'a11y.brand': 'hb. — 首页',
      'a11y.nav': '主导航',
      'a11y.github': '访问 GitHub 主页（新窗口打开）',
      'a11y.visual': '抽象视觉：细网格上，一组 SVG 轨道环绕着发光的核心，旁边散落着代码注释与十字标记。',
      'a11y.email': '发送邮件至 670486183@qq.com',
      'a11y.themeLight': '切换到浅色主题',
      'a11y.themeDark': '切换到深色主题',
      'a11y.langEn': '切换到英文 / Switch to English',
      'a11y.langZh': '切换到中文 / Switch to Chinese',
      'a11y.menuOpen': '打开菜单',
      'a11y.menuClose': '关闭菜单',
      'a11y.copyEmail': '复制邮箱 670486183@qq.com',
      'a11y.copied': '邮箱已复制',

      'nav.projects': '项目',
      'nav.about': '关于',
      'nav.contact': '联系',

      'hero.title': '把好奇心，<br><span class="accent">写进代码。</span>',
      'hero.lead': '热爱创造的开发者，从全栈应用到自动化工具，把日常里的灵感，变成有温度的数字作品。',
      'hero.cta.projects': '查看项目',
      'hero.cta.github': 'GitHub 主页',
      'hero.note1': '// 从好奇心开始',
      'hero.panel.caption': '让想法进入轨道。',

      'keywords.aria': '技术关键词',
      'keywords.label': '技术栈 / INDEX',

      'projects.eyebrow': '项目',
      'projects.title': '正在构建',
      'projects.lead': '从真实问题出发的四个项目：服务器工具、课程自动化、实时交流与浏览器辅助工具。它们共享一种偏好——让复杂的事，有一个清楚的入口。',
      'project.featured': '精选',
      'project.tags': '技术标签',
      'project.link': '查看 GitHub',

      'sysdeck.desc': '单机 Linux 服务器的 Web 控制台。以零 npm 依赖的 Node.js 实现，把实时监控、文件管理、Web 终端与 Docker 集成在一个轻量界面里。',
      'sysdeck.demo': 'DEMO DATA',
      'sysdeck.network': '网络',
      'sysdeck.containers': '容器',
      'tag.webconsole': 'Web 控制台',
      'tag.zeroNpm': '零 npm 依赖',

      'kedaibiao.desc': '多平台课程自动化框架。以统一任务模型连接不同平台，把复杂逻辑收进清晰、可测试的工程结构。',
      'tag.taskModel': '任务模型',
      'kdb.platformA': '学习平台',
      'kdb.courseData': '课程数据',
      'kdb.platformB': '平台接口',
      'kdb.core': '统一任务模型',
      'kdb.sync': '课程同步',
      'kdb.runner': '任务执行',
      'kdb.report': '结果记录',
      'kdb.foot': '清晰 · 可测试 · 可扩展',

      'zxailts.desc': '连接人与 AI 的实时交流空间。支持多人聊天、自定义 AI 机器人，以及用户与房间管理。',
      'tag.realtime': '实时聊天',
      'chat.rooms': '房间',
      'chat.room1': 'AI 实验室',
      'chat.room2': '前端漫谈',
      'chat.room3': '灵感收集',
      'chat.msg1': '这个房间的机器人也在线吗？',
      'chat.msg2': '在的。今天想从哪个想法开始？',
      'chat.msg3': '从一个还没成形的点子开始。',
      'chat.placeholder': '输入消息…',

      'pta.desc': '面向编程练习场景的浏览器辅助工具，探索 AI、编辑器交互与自动化流程的结合。仅供学习与研究用途。',
      'tag.extension': '浏览器扩展',
      'tag.research': '学习研究',
      'pta.problems': '题目',
      'pta.title1': '数组求和',
      'pta.title2': '字符串反转',
      'pta.title3': '链表去重',
      'pta.note': '仅供学习研究',
      'pta.assist': 'AI 辅助',
      'pta.run': '运行',

      'about.eyebrow': '关于',
      'about.title': '关于我',
      'about.lead': '代码是方式，不是目的。让一个想法真正运转起来，并且经得起回头读。',
      'about.quote': '我在前后端开发与自动化之间寻找连接点。喜欢拆解复杂问题，也享受让一个想法真正运行起来的过程。',
      'about.body': '比起一次性的演示，我更愿意从一个具体的小问题出发，把边界和失败方式想清楚，再动手。项目不必大，但要能真正跑起来，也经得起回头读。',
      'about.toolkit': '常用工具',
      'about.principles': '工作方式',
      'principle.1.title': '保持好奇',
      'principle.1.desc': '对新工具和新交互保持兴趣，但先弄清楚它究竟解决了什么问题。',
      'principle.2.title': '注重实用',
      'principle.2.desc': '从真实需求出发，把复杂逻辑收进清晰、可测试的结构。',
      'principle.3.title': '持续打磨',
      'principle.3.desc': '写完只是开始。让代码可读、可维护，也足够好用。',

      'contact.eyebrow': '联系',
      'contact.title': '下一个想法，<br><span>一起实现。</span>',
      'contact.lead': '如果你也在做有趣的东西，或只是有一个还没成形的念头，欢迎写信给我。',
      'contact.mail': '写信给我',
      'contact.copy': '复制邮箱',
      'contact.copied': '已复制',

      'footer.tagline': '把灵感写成可以运行的东西。',
      'footer.rights': '保留所有权利',
      'footer.built': '纯静态 · 无追踪 · GitHub Pages',
      'footer.top': '回到顶部',

      'toast.success': '邮箱已复制到剪贴板',
      'toast.error': '复制失败，请手动复制 670486183@qq.com'
    },
    en: {
      'meta.description': 'hb.\'s personal site — a developer who loves making things, from full-stack apps to automation tools, turning everyday sparks into digital work with warmth. Projects include SysDeck, kedaibiao, zxailts and PTA Auto Solve.',
      'meta.ogDescription': 'A developer who loves making things — from full-stack apps to automation tools, turning everyday sparks into digital work with warmth.',
      'skip': 'Skip to main content',

      'a11y.brand': 'hb. — home',
      'a11y.nav': 'Main navigation',
      'a11y.github': 'Visit GitHub profile (opens in a new tab)',
      'a11y.visual': 'Abstract visual: an SVG orbit circles a glowing core above a fine grid, surrounded by code notes and crosshair marks.',
      'a11y.email': 'Email 670486183@qq.com',
      'a11y.themeLight': 'Switch to light theme',
      'a11y.themeDark': 'Switch to dark theme',
      'a11y.langEn': 'Switch to English / 切换到英文',
      'a11y.langZh': 'Switch to Chinese / 切换到中文',
      'a11y.menuOpen': 'Open menu',
      'a11y.menuClose': 'Close menu',
      'a11y.copyEmail': 'Copy email 670486183@qq.com',
      'a11y.copied': 'Email copied',

      'nav.projects': 'Projects',
      'nav.about': 'About',
      'nav.contact': 'Contact',

      'hero.title': 'Curiosity,<br><span class="accent">written in code.</span>',
      'hero.lead': 'A developer who loves making things — from full-stack apps to automation tools, turning everyday sparks into digital work with warmth.',
      'hero.cta.projects': 'View projects',
      'hero.cta.github': 'GitHub profile',
      'hero.note1': '// start with curiosity',
      'hero.panel.caption': 'Set ideas in motion.',

      'keywords.aria': 'Technology keywords',
      'keywords.label': 'STACK / INDEX',

      'projects.eyebrow': 'PROJECTS',
      'projects.title': 'Things in progress',
      'projects.lead': 'Four projects that began with real questions: a server tool, course automation, real-time conversation, and a browser companion. They share one preference — a clear entrance to complex work.',
      'project.featured': 'Featured',
      'project.tags': 'Technology tags',
      'project.link': 'View on GitHub',

      'sysdeck.desc': 'A web console for a single Linux server. Built on Node.js with zero npm dependencies, it brings live monitoring, file management, a web terminal, and Docker into one lightweight interface.',
      'sysdeck.demo': 'DEMO DATA',
      'sysdeck.network': 'Network',
      'sysdeck.containers': 'Containers',
      'tag.webconsole': 'Web console',
      'tag.zeroNpm': 'Zero npm deps',

      'kedaibiao.desc': 'A multi-platform course automation framework. A unified task model connects different platforms, keeping complex logic inside a clear, testable engineering structure.',
      'tag.taskModel': 'Task model',
      'kdb.platformA': 'Learning platform',
      'kdb.courseData': 'Course data',
      'kdb.platformB': 'Platform API',
      'kdb.core': 'Unified task model',
      'kdb.sync': 'Course sync',
      'kdb.runner': 'Task runner',
      'kdb.report': 'Results',
      'kdb.foot': 'Clear · Testable · Extensible',

      'zxailts.desc': 'A real-time space where people and AI meet. Multiplayer chat, custom AI bots, and user and room management.',
      'tag.realtime': 'Real-time',
      'chat.rooms': 'Rooms',
      'chat.room1': 'AI lab',
      'chat.room2': 'Frontend talk',
      'chat.room3': 'Ideas',
      'chat.msg1': 'Is the room bot online too?',
      'chat.msg2': 'Here. Which idea shall we start with today?',
      'chat.msg3': 'One that hasn\'t taken shape yet.',
      'chat.placeholder': 'Message…',

      'pta.desc': 'A browser companion for programming practice, exploring where AI, editor interaction, and automation overlap. For learning and research only.',
      'tag.extension': 'Browser extension',
      'tag.research': 'Research only',
      'pta.problems': 'Problems',
      'pta.title1': 'Array sum',
      'pta.title2': 'Reverse string',
      'pta.title3': 'Dedupe list',
      'pta.note': 'Learning & research only',
      'pta.assist': 'AI assist',
      'pta.run': 'Run',

      'about.eyebrow': 'ABOUT',
      'about.title': 'About me',
      'about.lead': 'Code is the medium, not the goal. Let an idea actually run — and still read well later.',
      'about.quote': 'I look for the connection point between front-end, back-end and automation. I like breaking down complex problems — and I enjoy the process of making an idea actually run.',
      'about.body': 'Rather than one-off demos, I prefer starting from a small, concrete problem — mapping its edges and failure modes before writing. A project doesn\'t need to be big, but it should truly run and still read well later.',
      'about.toolkit': 'Toolkit',
      'about.principles': 'How I work',
      'principle.1.title': 'Stay curious',
      'principle.1.desc': 'Keep an interest in new tools and interactions, but first work out what problem they actually solve.',
      'principle.2.title': 'Stay practical',
      'principle.2.desc': 'Start from real needs and keep complex logic in a clear, testable structure.',
      'principle.3.title': 'Keep polishing',
      'principle.3.desc': 'Shipping is only the beginning. Keep the code readable, maintainable, and genuinely useful.',

      'contact.eyebrow': 'CONTACT',
      'contact.title': 'The next idea,<br><span>made together.</span>',
      'contact.lead': 'If you\'re making something interesting — or just have a half-formed idea — write to me.',
      'contact.mail': 'Write to me',
      'contact.copy': 'Copy email',
      'contact.copied': 'Copied',

      'footer.tagline': 'Turning sparks into things that run.',
      'footer.rights': 'All rights reserved',
      'footer.built': 'Static · No tracking · GitHub Pages',
      'footer.top': 'Back to top',

      'toast.success': 'Email copied to clipboard',
      'toast.error': 'Copy failed — please copy 670486183@qq.com manually'
    }
  };
  /* i18n:end */

  /* ------------------------------------------------------------------------
     Storage
     ------------------------------------------------------------------------ */
  function readStore(key) {
    try { return window.localStorage.getItem(key); } catch (e) { return null; }
  }

  function writeStore(key, value) {
    try { window.localStorage.setItem(key, value); } catch (e) { /* private mode */ }
  }

  /* ------------------------------------------------------------------------
     State + helpers
     ------------------------------------------------------------------------ */
  var currentLang = root.getAttribute('data-lang') === 'en' ? 'en' : 'zh';
  var currentTheme = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  var menuOpen = false;
  var copied = false;
  var copyTimer = null;
  var toastTimer = null;

  var langToggle = document.getElementById('lang-toggle');
  var langLabel = document.getElementById('lang-label');
  var themeToggle = document.getElementById('theme-toggle');
  var menuToggle = document.getElementById('menu-toggle');
  var nav = document.getElementById('nav');
  var header = document.querySelector('.site-header');
  var copyBtn = document.getElementById('copy-email');
  var copyLabel = document.getElementById('copy-label');
  var toast = document.getElementById('toast');
  var toastText = document.getElementById('toast-text');
  var toastIcon = document.getElementById('toast-icon');
  var yearEl = document.getElementById('year');
  var metaDescription = document.querySelector('meta[name="description"]');
  var metaThemeColor = document.querySelector('meta[name="theme-color"]');
  var ogDescription = document.querySelector('meta[property="og:description"]');
  var twitterDescription = document.querySelector('meta[name="twitter:description"]');
  var ogLocale = document.querySelector('meta[property="og:locale"]');
  var navLinks = nav ? Array.prototype.slice.call(nav.querySelectorAll('a[href^="#"]')) : [];
  var sections = ['projects', 'about', 'contact']
    .map(function (id) { return document.getElementById(id); })
    .filter(Boolean);

  function t(key) {
    var dict = I18N[currentLang] || I18N.zh;
    return Object.prototype.hasOwnProperty.call(dict, key) ? dict[key] : key;
  }

  function prefersReducedMotion() {
    return !!(motionQuery && motionQuery.matches);
  }

  /* ------------------------------------------------------------------------
     Language
     ------------------------------------------------------------------------ */
  function updateLangButton() {
    if (!langToggle || !langLabel) return;
    var isEn = currentLang === 'en';
    langLabel.textContent = isEn ? '中' : 'EN';
    langLabel.setAttribute('lang', isEn ? 'zh-CN' : 'en');
    langToggle.setAttribute('aria-label', t(isEn ? 'a11y.langZh' : 'a11y.langEn'));
    langToggle.setAttribute('lang', isEn ? 'zh-CN' : 'en');
    langToggle.setAttribute('aria-pressed', isEn ? 'true' : 'false');
  }

  function updateThemeButton() {
    if (!themeToggle) return;
    var light = currentTheme === 'light';
    themeToggle.setAttribute('aria-pressed', light ? 'true' : 'false');
    themeToggle.setAttribute('aria-label', t(light ? 'a11y.themeDark' : 'a11y.themeLight'));
  }

  function updateMenuButton() {
    if (!menuToggle) return;
    menuToggle.setAttribute('aria-expanded', menuOpen ? 'true' : 'false');
    menuToggle.setAttribute('aria-label', t(menuOpen ? 'a11y.menuClose' : 'a11y.menuOpen'));
  }

  function renderCopyState() {
    if (!copyBtn || !copyLabel) return;
    copyBtn.classList.toggle('is-copied', copied);
    copyLabel.textContent = t(copied ? 'contact.copied' : 'contact.copy');
    copyBtn.setAttribute('aria-label', t(copied ? 'a11y.copied' : 'a11y.copyEmail'));
  }

  function applyLanguage(lang, persist) {
    currentLang = lang === 'en' ? 'en' : 'zh';
    root.setAttribute('data-lang', currentLang);
    root.setAttribute('lang', currentLang === 'en' ? 'en' : 'zh-CN');
    if (persist) writeStore(LANG_KEY, currentLang);

    var dict = I18N[currentLang];
    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute('data-i18n');
      if (Object.prototype.hasOwnProperty.call(dict, key)) {
        nodes[i].textContent = dict[key];
      }
    }

    var htmlNodes = document.querySelectorAll('[data-i18n-html]');
    for (var j = 0; j < htmlNodes.length; j++) {
      var htmlKey = htmlNodes[j].getAttribute('data-i18n-html');
      if (Object.prototype.hasOwnProperty.call(dict, htmlKey)) {
        htmlNodes[j].innerHTML = dict[htmlKey];
      }
    }

    var ariaNodes = document.querySelectorAll('[data-i18n-aria]');
    for (var k = 0; k < ariaNodes.length; k++) {
      var ariaKey = ariaNodes[k].getAttribute('data-i18n-aria');
      if (Object.prototype.hasOwnProperty.call(dict, ariaKey)) {
        ariaNodes[k].setAttribute('aria-label', dict[ariaKey]);
      }
    }

    if (metaDescription) metaDescription.setAttribute('content', t('meta.description'));
    if (ogDescription) ogDescription.setAttribute('content', t('meta.ogDescription'));
    if (twitterDescription) twitterDescription.setAttribute('content', t('meta.ogDescription'));
    if (ogLocale) ogLocale.setAttribute('content', currentLang === 'en' ? 'en_US' : 'zh_CN');

    updateLangButton();
    updateThemeButton();
    updateMenuButton();
    renderCopyState();
  }

  if (langToggle) {
    langToggle.addEventListener('click', function () {
      applyLanguage(currentLang === 'zh' ? 'en' : 'zh', true);
    });
  }

  /* ------------------------------------------------------------------------
     Theme
     ------------------------------------------------------------------------ */
  function applyTheme(theme, persist) {
    currentTheme = theme === 'light' ? 'light' : 'dark';
    root.setAttribute('data-theme', currentTheme);
    if (persist) writeStore(THEME_KEY, currentTheme);
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', currentTheme === 'light' ? '#f4f2ea' : '#0a0b09');
    }
    updateThemeButton();
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      applyTheme(currentTheme === 'light' ? 'dark' : 'light', true);
    });
  }

  // 默认深色；用户选择通过 localStorage 保留。

  /* ------------------------------------------------------------------------
     Mobile menu
     ------------------------------------------------------------------------ */
  function syncNavInteractivity() {
    if (!nav) return;
    var hidden = mobileQuery.matches && !menuOpen;
    if (hidden) {
      nav.setAttribute('inert', '');
      nav.setAttribute('aria-hidden', 'true');
    } else {
      nav.removeAttribute('inert');
      nav.removeAttribute('aria-hidden');
    }
    for (var i = 0; i < navLinks.length; i++) {
      if (hidden) navLinks[i].setAttribute('tabindex', '-1');
      else navLinks[i].removeAttribute('tabindex');
    }
  }

  function openMenu() {
    if (!nav) return;
    menuOpen = true;
    nav.classList.add('is-open');
    updateMenuButton();
    syncNavInteractivity();
    var firstLink = nav.querySelector('a[href]');
    if (firstLink) firstLink.focus({ preventScroll: true });
  }

  function closeMenu(returnFocus) {
    if (!nav) return;
    menuOpen = false;
    nav.classList.remove('is-open');
    updateMenuButton();
    syncNavInteractivity();
    if (returnFocus && menuToggle) menuToggle.focus();
  }

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function () {
      if (menuOpen) closeMenu(false);
      else openMenu();
    });

    for (var n = 0; n < navLinks.length; n++) {
      navLinks[n].addEventListener('click', function () {
        if (mobileQuery.matches) closeMenu(false);
      });
    }

    document.addEventListener('pointerdown', function (event) {
      if (!menuOpen || !header) return;
      if (!header.contains(event.target)) closeMenu(false);
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && menuOpen) {
        closeMenu(true);
      }
    });

    function handleMenuBreakpoint() {
      if (!mobileQuery.matches) closeMenu(false);
      else if (!menuOpen) {
        menuOpen = false;
        nav.classList.remove('is-open');
        updateMenuButton();
        syncNavInteractivity();
      }
    }

    if (typeof mobileQuery.addEventListener === 'function') {
      mobileQuery.addEventListener('change', handleMenuBreakpoint);
    } else if (typeof mobileQuery.addListener === 'function') {
      mobileQuery.addListener(handleMenuBreakpoint);
    }

    closeMenu(false);
    root.classList.add('nav-ready');
  }

  /* ------------------------------------------------------------------------
     Copy email
     ------------------------------------------------------------------------ */
  function legacyCopy(text) {
    var area = document.createElement('textarea');
    area.value = text;
    area.setAttribute('readonly', '');
    area.style.position = 'fixed';
    area.style.top = '-1000px';
    area.style.left = '-1000px';
    area.style.opacity = '0';
    document.body.appendChild(area);
    var ok = false;
    try {
      area.select();
      area.setSelectionRange(0, text.length);
      ok = document.execCommand('copy');
    } catch (e) {
      ok = false;
    }
    document.body.removeChild(area);
    return ok;
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).then(function () {
        return true;
      }).catch(function () {
        return legacyCopy(text);
      });
    }
    return Promise.resolve(legacyCopy(text));
  }

  function showToast(message, isError) {
    if (!toast || !toastText || !toastIcon) return;
    window.clearTimeout(toastTimer);
    toastText.textContent = message;
    toastIcon.textContent = isError ? '!' : '✓';
    toast.classList.toggle('is-error', !!isError);
    toast.classList.add('is-visible');
    toastTimer = window.setTimeout(function () {
      toast.classList.remove('is-visible');
    }, 3200);
  }

  function selectEmailText() {
    var link = document.querySelector('.email-link');
    if (!link || !window.getSelection) return;
    try {
      var range = document.createRange();
      range.selectNodeContents(link);
      var selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
    } catch (e) { /* selection is best effort */ }
  }

  if (copyBtn) {
    copyBtn.addEventListener('click', function () {
      copyText(EMAIL).then(function (ok) {
        if (ok) {
          copied = true;
          renderCopyState();
          showToast(t('toast.success'), false);
          window.clearTimeout(copyTimer);
          copyTimer = window.setTimeout(function () {
            copied = false;
            renderCopyState();
          }, 2400);
        } else {
          copied = false;
          renderCopyState();
          copyLabel.textContent = t('toast.error');
          selectEmailText();
          showToast(t('toast.error'), true);
          window.clearTimeout(copyTimer);
          copyTimer = window.setTimeout(renderCopyState, 3200);
        }
      });
    });
  }

  /* ------------------------------------------------------------------------
     Active section
     ------------------------------------------------------------------------ */
  function setActiveSection(id) {
    for (var i = 0; i < navLinks.length; i++) {
      var link = navLinks[i];
      var target = link.getAttribute('href');
      if (target === '#' + id) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
  }

  function clearActiveSection() {
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].removeAttribute('aria-current');
    }
  }

  var sectionRatios = {};
  var sectionObserver = null;

  function pickActiveSection() {
    var bestId = null;
    var bestRatio = 0;
    for (var i = 0; i < sections.length; i++) {
      var id = sections[i].id;
      var ratio = sectionRatios[id] || 0;
      if (ratio > bestRatio) {
        bestRatio = ratio;
        bestId = id;
      }
    }
    if (bestId) setActiveSection(bestId);
    else if (window.scrollY < 120) clearActiveSection();
  }

  if ('IntersectionObserver' in window && navLinks.length) {
    sectionObserver = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        sectionRatios[entries[i].target.id] = entries[i].isIntersecting ? entries[i].intersectionRatio : 0;
      }
      pickActiveSection();
    }, {
      rootMargin: '-28% 0px -52% 0px',
      threshold: [0, 0.05, 0.15, 0.3, 0.5, 0.75, 1]
    });

    for (var s = 0; s < sections.length; s++) sectionObserver.observe(sections[s]);
  } else if (navLinks.length) {
    var updateScrollSpy = function () {
      var found = null;
      for (var i = 0; i < sections.length; i++) {
        var rect = sections[i].getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.3) {
          found = sections[i].id;
        }
      }
      if (found) setActiveSection(found);
      else if (window.scrollY < 120) clearActiveSection();
    };
    window.addEventListener('scroll', updateScrollSpy, { passive: true });
    updateScrollSpy();
  }

  /* ------------------------------------------------------------------------
     Header state
     ------------------------------------------------------------------------ */
  var scrollTicking = false;

  function handleScroll() {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 8);
    if (window.scrollY < 120) clearActiveSection();
    scrollTicking = false;
  }

  window.addEventListener('scroll', function () {
    if (!scrollTicking) {
      scrollTicking = true;
      window.requestAnimationFrame(handleScroll);
    }
  }, { passive: true });

  if (header) header.classList.toggle('is-scrolled', window.scrollY > 8);

  /* ------------------------------------------------------------------------
     Reveal on scroll — content is visible without JS
     ------------------------------------------------------------------------ */
  var revealNodes = document.querySelectorAll('.reveal');

  if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
    for (var r = 0; r < revealNodes.length; r++) revealNodes[r].classList.add('is-visible');
  } else {
    var revealObserver = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) {
          entries[i].target.classList.add('is-visible');
          revealObserver.unobserve(entries[i].target);
        }
      }
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });

    for (var q = 0; q < revealNodes.length; q++) revealObserver.observe(revealNodes[q]);
  }

  root.setAttribute('data-ready', '1');

  /* ------------------------------------------------------------------------
     Init labels + year
     ------------------------------------------------------------------------ */
  applyLanguage(currentLang, false);
  applyTheme(currentTheme, false);

  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  if (motionQuery && typeof motionQuery.addEventListener === 'function') {
    motionQuery.addEventListener('change', function (event) {
      if (event.matches) {
        for (var i = 0; i < revealNodes.length; i++) revealNodes[i].classList.add('is-visible');
      }
    });
  }
})();
