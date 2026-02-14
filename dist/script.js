// Expose a function to start the flower bloom animations.
// The page will not auto-start; call `startBloom()` when the user triggers the bloom.
function startBloom(delay = 50) {
  const t = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(t);
  }, delay);
  // Play bloom audio if present. Playback must be initiated by user gesture
  // (the bloom button click triggers startBloom), otherwise browsers may block it.
  try {
    const audio = document.getElementById("bloom-audio");
    if (audio) {
      audio.currentTime = 0;
      const playPromise = audio.play();
      if (playPromise && typeof playPromise.then === "function") {
        playPromise.catch(() => {
          // Ignore play rejection (autoplay policy) — user can click to play manually
        });
      }
    }
  } catch (e) {
    // ignore
  }
}

// Keep backwards-compat: auto-start only if explicitly requested by setting
// window.AUTO_START_BLOOM = true before this script runs.
if (window.AUTO_START_BLOOM) startBloom();