  const menuBtn = document.getElementById('menu-btn');
  const menu = document.getElementById('menu');

  menuBtn.addEventListener('click', function () {
    menu.classList.toggle('hidden');
  });

  // Form Submit
  const form = document.getElementById('form');
  const short = document.getElementById('short');
  const result = document.getElementById('result');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const randomCode = Math.random().toString(36).substring(2, 8);

    short.textContent = 'thetiny.site/' + randomCode;

    result.classList.remove('hidden');
    result.classList.add('flex');
  });
  const copyBtn = document.getElementById('copy');

  copyBtn.addEventListener('click', function () {
    const link = 'https://' + short.textContent;

    navigator.clipboard.writeText(link);
    copyBtn.textContent = 'Copied!';
    setTimeout(function () {
      copyBtn.textContent = 'Copy';
    }, 1500);
  });