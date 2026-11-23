'use strict';
function emailAddress(value) {
  return typeof value === 'string' && /^[A-Z0-9._%+-]+@[A-Z0-9](?:[A-Z0-9.-]*[A-Z0-9])?\.[A-Z]{2,}$/i.test(value) && value.length <= 254 ? value : '';
}
function safeHttps(value, host) {
  try { const url = new URL(value); return url.protocol === 'https:' && !url.username && !url.password && (!host || url.hostname === host) ? url.href : ''; } catch { return ''; }
}
function localImage(value) {
  return typeof value === 'string' && /^assets\/[a-zA-Z0-9_./-]+\.(?:jpg|jpeg|webp|png)$/i.test(value) && !value.includes('..') ? value : '';
}
if (typeof module !== 'undefined') module.exports = { emailAddress, safeHttps, localImage };
if (typeof document !== 'undefined') {
  document.documentElement.classList.add('js');
  const config = window.PORTFOLIO_CONFIG || {};
  const email = emailAddress(config.email);
  const github = safeHttps(config.github, 'github.com');
  const demo = safeHttps(config.projectDemoUrl);
  const menu = document.querySelector('.menu-toggle');
  const nav = document.getElementById('navigation');
  function closeMenu() { menu.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open'); }
  menu.addEventListener('click', () => { const opened = menu.getAttribute('aria-expanded') === 'true'; menu.setAttribute('aria-expanded', String(!opened)); nav.classList.toggle('is-open', !opened); });
  nav.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') { closeMenu(); menu.focus(); } });
  window.matchMedia('(min-width: 601px)').addEventListener('change', closeMenu);
  const emailLink = document.querySelector('[data-email-link]');
  function setMailSubject(service) { if (email) emailLink.href = 'mailto:' + email + '?subject=' + encodeURIComponent('Zapytanie o wycenę - ' + (service || 'strona internetowa')); }
  if (email) {
    document.querySelector('[data-contact-status]').textContent = email;
    emailLink.hidden = false;
    setMailSubject('');
    const copy = document.querySelector('[data-copy-email]');
    copy.hidden = false;
    copy.addEventListener('click', async () => {
      const status = document.querySelector('[data-copy-status]');
      try { if (!navigator.clipboard) throw new Error('Clipboard unavailable'); await navigator.clipboard.writeText(email); status.textContent = 'Adres e-mail skopiowany.'; }
      catch { status.textContent = 'Zaznacz i skopiuj adres widoczny powyżej.'; }
    });
  } else {
    emailLink.hidden = true;
    emailLink.removeAttribute('href');
    document.querySelector('[data-contact-status]').textContent = 'Adres e-mail zostanie uzupełniony przed publikacją.';
  }
  document.querySelectorAll('[data-service]').forEach(link => link.addEventListener('click', () => setMailSubject(link.dataset.service)));
  const githubLink = document.querySelector('[data-github]');
  if (github) { githubLink.href = github; githubLink.hidden = false; } else { githubLink.hidden = true; githubLink.removeAttribute('href'); }
  if (demo) { const link = document.querySelector('[data-project-demo]'); link.href = demo; link.hidden = false; }
  const photo = localImage(config.profilePhoto);
  if (photo) {
    const image = new Image(); image.alt = 'Jakub Król - twórca stron internetowych'; image.loading = 'lazy';
    image.addEventListener('load', () => document.querySelector('[data-portrait]').replaceChildren(image));
    image.src = photo;
  }
  const screenshot = localImage(config.projectScreenshot);
  if (screenshot) {
    const image = new Image();
    image.alt = 'Rzeczywisty zrzut ekranu projektu Zalewamy.pl'; image.loading = 'lazy';
    image.addEventListener('load', () => { document.querySelector('.project-visual img').replaceWith(image); document.querySelector('.visual-caption').textContent = 'Zalewamy.pl - podgląd strony'; });
    image.src = screenshot;
  }
  const site = safeHttps(config.siteUrl);
  if (site && !document.querySelector('link[rel="canonical"]')) { const canonical = document.createElement('link'); canonical.rel = 'canonical'; canonical.href = site; document.head.append(canonical); }
  document.querySelector('[data-year]').textContent = new Date().getFullYear();
  const dialog = document.querySelector('.case-dialog');
  const openCase = document.querySelector('[data-open-case]');
  openCase.hidden = false;
  function closeCase() { dialog.close(); document.body.classList.remove('dialog-open'); }
  openCase.addEventListener('click', () => { dialog.showModal(); document.body.classList.add('dialog-open'); });
  document.querySelector('.dialog-close').addEventListener('click', closeCase);
  dialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));
  dialog.addEventListener('click', event => { if (event.target === dialog) { const box = dialog.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) closeCase(); } });
  document.querySelector('[data-case-contact]').addEventListener('click', closeCase);
  const screenshotDialog = document.querySelector('.screenshot-dialog');
  const fullScreenshot = document.querySelector('[data-full-screenshot]');
  document.querySelectorAll('[data-gallery]').forEach(link => link.addEventListener('click', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    const thumbnail = link.querySelector('img');
    fullScreenshot.src = link.href;
    fullScreenshot.alt = thumbnail.alt;
    screenshotDialog.showModal();
    document.body.classList.add('dialog-open');
  }));
  document.querySelector('[data-close-screenshot]').addEventListener('click', () => screenshotDialog.close());
  screenshotDialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));
  screenshotDialog.addEventListener('click', event => {
    if (event.target !== screenshotDialog) return;
    const box = screenshotDialog.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) screenshotDialog.close();
  });
}
