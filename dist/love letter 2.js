$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");
  var btn_bloom = $("#bloom");

  // hide bloom button until letter is read
  btn_bloom.hide();

  envelope.click(function () {
    open();
  });
  btn_open.click(function () {
    open();
  });
  btn_reset.click(function () {
    close();
  });

  function open() {
    envelope.addClass("open").removeClass("close");
    // show the bloom button after user reads the letter (give a short delay)
    setTimeout(function () {
      btn_bloom.fadeIn(300);
    }, 1400);
  }
  function close() {
    envelope.addClass("close").removeClass("open");
  }

  // When the bloom button is clicked, hide the envelope overlay and start flowers
  btn_bloom.click(function () {
    // gracefully hide envelope wrapper
    $(".envlope-wrapper").fadeOut(500, function () {
      // trigger flower bloom by calling startBloom (from script.js)
      if (typeof startBloom === "function") startBloom(100);
    });
  });
});
