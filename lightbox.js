// Click any project image to view it larger over the page.
(function () {
  var box = document.createElement('dialog');
  box.className = 'lightbox';
  box.innerHTML = '<button class="lb-close" type="button" aria-label="Close">&times;</button><img alt=""><p class="lb-cap"></p>';
  document.body.appendChild(box);
  var big = box.querySelector('img');
  var cap = box.querySelector('.lb-cap');

  box.querySelector('.lb-close').addEventListener('click', function () { box.close(); });
  // Clicking the dimmed area outside the image closes it.
  box.addEventListener('click', function (e) { if (e.target === box) box.close(); });

  document.querySelectorAll('.page figure img').forEach(function (img) {
    img.classList.add('zoomable');
    img.addEventListener('click', function (e) {
      e.preventDefault();
      var fc = img.closest('figure').querySelector('figcaption');
      big.src = img.currentSrc || img.src;
      big.alt = img.alt;
      cap.innerHTML = fc ? fc.innerHTML.replace(/\s*Click to enlarge\.?/, '') : '';
      cap.hidden = !cap.textContent;
      box.showModal();
    });
  });
})();
