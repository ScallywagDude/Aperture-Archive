(() => {
  'use strict';
  const cfg = window.APERTURE_ARCHIVE_CONFIG || {};
  const themeButton = document.querySelector('.theme-toggle');
  const getTheme = () => document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
  const updateThemeButton = () => {
    if (!themeButton) return;
    const dark = getTheme() === 'dark';
    themeButton.setAttribute('role', 'switch');
    themeButton.setAttribute('aria-checked', String(dark));
    const label = themeButton.querySelector('.theme-label');
    if (label) label.textContent = 'DARK MODE';
    themeButton.setAttribute('aria-label', 'Dark mode');
    themeButton.setAttribute('title', dark ? 'Dark mode enabled' : 'Dark mode disabled');
  };
  updateThemeButton();
  themeButton?.addEventListener('click', () => {
    document.documentElement.dataset.theme = getTheme() === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('aa-theme', getTheme()); } catch (_) {}
    updateThemeButton();
  });
  const repo = typeof cfg.githubRepo === 'string' && /^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(cfg.githubRepo.trim()) ? cfg.githubRepo.trim() : '';
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.primary-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('open', open);
    });
    nav.addEventListener('click', event => {
      if (event.target.closest('a')) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
  const owner = typeof cfg.githubOwner === 'string' && /^[A-Za-z0-9-]+$/.test(cfg.githubOwner.trim()) ? cfg.githubOwner.trim() : '';
  const repoLink = document.querySelectorAll('[data-forum-repo]');
  repoLink.forEach(link => {
    if (repo) link.href = `https://github.com/${repo}`;
    else if (owner) {
      link.href = `https://github.com/${owner}`;
      link.textContent = 'Maintainer GitHub ↗';
    } else {
      link.href = 'forum.html#setup';
      link.removeAttribute('target');
    }
  });
  const forumLink = repo ? `https://github.com/${repo}/discussions` : '#setup';
  document.querySelectorAll('.forum-launch').forEach(link => {
    link.href = forumLink;
    if (repo) { link.target = '_blank'; link.rel = 'noopener noreferrer'; }
  });
  document.querySelectorAll('[data-forum-category]').forEach(link => {
    if (!repo) return;
    const category = link.getAttribute('data-forum-category');
    const configured = cfg.discussionCategories?.[category] || category;
    link.href = `${forumLink}?discussions_q=${encodeURIComponent('category:' + configured)}`;
    link.target = '_blank'; link.rel = 'noopener noreferrer';
  });
  const setupTitle = document.querySelector('#forum-setup-title');
  const setupCopy = document.querySelector('#forum-setup-copy');
  if (repo && setupTitle && setupCopy) {
    setupTitle.textContent = 'A place for the community';
    setupCopy.textContent = `Explore the latest conversations, archival discoveries, and Mega Build news at ${repo}.`;
  } else if (owner && setupTitle && setupCopy) {
    setupTitle.textContent = 'Awaiting the project repository';
    setupCopy.textContent = `Maintained by @${owner}. Create ${cfg.plannedRepository || owner + '/aperture-archive'}, enable Discussions and its categories, then set githubRepo in assets/config.js. Until then, the forum links lead here.`;
  }
  const cards = [...document.querySelectorAll('.record-card')];
  const search = document.querySelector('#archive-search');
  const filters = [...document.querySelectorAll('[data-filter]')];
  const count = document.querySelector('#record-count');
  const empty = document.querySelector('#no-results');
  if (cards.length && search) {
    let active = 'all';
    const update = () => {
      const term = search.value.toLowerCase().trim();
      let total = 0;
      cards.forEach(card => {
        const visible = (active === 'all' || card.dataset.year === active) && (!term || card.dataset.search.includes(term));
        card.hidden = !visible;
        if (visible) total++;
      });
      if (count) count.textContent = `${total} DOCUMENT${total !== 1 ? 'S' : ''} SHOWN · PUBLIC SOURCE REFERENCES`;
      if (empty) empty.hidden = total !== 0;
    };
    filters.forEach(button => button.addEventListener('click', () => {
      active = button.dataset.filter;
      filters.forEach(b => { const a = b === button; b.classList.toggle('active', a); b.setAttribute('aria-pressed', String(a)); });
      update();
    }));
    search.addEventListener('input', update);
    update();
  }
  document.querySelectorAll('.archive-shot img').forEach(img => img.addEventListener('error', () => { img.classList.add('screenshot-unavailable'); img.alt = 'Discord image preview unavailable. Open the original Discord message using the source link.'; }));
  document.querySelectorAll('.artwork-media img').forEach(img => {
    img.addEventListener('error', () => img.closest('.artwork-media')?.classList.add('image-broken'));
  });
})();
