// Elemental Battle: on phones and tablets, the first tap on the game goes fullscreen (hides the browser's address bar).
// Browsers only allow fullscreen from a tap, so it cannot happen on load. Opened from the home screen (manifest.webmanifest)
// the game is already fullscreen and this does nothing.
(function () {
  if (!/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) return;
  var root = document.documentElement;
  function goFullscreen() {
    if (document.fullscreenElement || document.webkitFullscreenElement) return;
    var request = root.requestFullscreen || root.webkitRequestFullscreen;
    if (!request) return;   // iPhone Safari has no page fullscreen: use Share > Add to Home Screen instead
    try {
      var p = request.call(root, { navigationUI: 'hide' });
      if (p && p.catch) p.catch(function () {});
    } catch (e) {}
  }
  document.addEventListener('pointerup', goFullscreen, { passive: true });
  document.addEventListener('touchend', goFullscreen, { passive: true });
})();
