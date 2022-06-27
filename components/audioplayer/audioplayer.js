function switch_audio(entry_loop_id) {
  exit_sound = document.querySelector(".audio.on");
  entry_sound = document.querySelector("#" + entry_loop_id);
  if (exit_sound == null) {
    entry_sound.currentTime = 0;
    entry_sound.play();
    entry_sound.classList.toggle("on");
    entry_sound.classList.toggle("off");
  } else {
    const fade_out = setInterval(() => {
      if (exit_sound.volume !== 0) {
        exit_sound.volume -= 0.1;
      }
      if (exit_sound.volume < 0.003) {
        clearInterval(fade_out);
        exit_sound.pause();
        exit_sound.classList.toggle("off");
        exit_sound.classList.toggle("on");
        exit_sound.volume = 0;
        entry_sound.volume = 1;
        entry_sound.currentTime = 0;
        entry_sound.play();
        entry_sound.classList.toggle("on");
        entry_sound.classList.toggle("off");
      }
    }, 125);
  }
}