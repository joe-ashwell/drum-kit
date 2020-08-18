
function playSound(e) {
  // Creates the audio variable by using the query selector and the CSS attribute selector to grab the data key (using template literals to dynamically match the event's keycode with that of the audio keycode)
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  // If there's no audio, it stops the function running.
  if ( !audio ) {
    return;
  }

  // This rewinds the audio file to the beginning as if you call an audio element to play whilst it's already playing, it won't do anything
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');

}

function removeTransition(e) {

  if ( e.propertyName !== 'transform' ) {
    return;
  }

  // This refers to the key in *this* scenario
  this.classList.remove('playing');

}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// Listens to the entire page for a keydown, it then captures the event
window.addEventListener('keydown', playSound);
