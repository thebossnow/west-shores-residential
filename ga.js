/* Google Analytics 4 - West Shores Residential. Measurement ID lives only here. */
(function () {
  var GA_ID = 'G-Y2G2XGQ65H';
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { dataLayer.push(arguments); };
  gtag('js', new Date());
  gtag('config', GA_ID);
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href^="tel:"]');
    if (!a) return;
    gtag('event', 'phone_click', {
      phone_number: a.getAttribute('href').replace(/^tel:/, ''),
      link_url: a.href,
      page_location: window.location.href,
      link_text: (a.textContent || '').trim().slice(0, 100)
    });
  });
})();
