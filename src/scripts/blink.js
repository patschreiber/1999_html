// Welcome back, friend.

// Wait you can use a "+"?
+function () {
  const blinkers = document.getElementsByTagName('blink');\
  var toggle = true;

  // Original implementation had the blinking element visible for 750 ms. and
  // invisible for 250 ms.
  var interval = toggle === true ? 750 : 250;

  // Blink away, king.
  setInterval(function () {
    toggle = !toggle;

    for (var i=0; i<blinkers.length; i++) {
      toggle === true ? blinkers[i].setAttribute("style", "visibility: visible;") : blinkers[i].setAttribute("style", "visibility: hidden;");
    }
  }, interval);
}();
