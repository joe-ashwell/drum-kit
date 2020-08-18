// Function to play the correct sound to the corresponding key
function playSound(e) {

  // Creates the audio variable by using the query selector and the CSS attribute selector to grab the data key (using template literals to dynamically match the event's keycode with that of the audio keycode)
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  // If there's no audio, it stops the function running
  if ( !audio ) {
    return;
  }

  // This rewinds the audio file to the beginning as if you call an audio element to play whilst it's already playing, it won't do anything
  audio.currentTime = 0;
  audio.play();

  // This adds the class of .playing to key when it's played
  key.classList.add('playing');

}

function removeTransition(e) {

  if ( e.propertyName !== 'transform' ) {
    return;
  }

  // This refers to the key in *this* scenario
  this.classList.remove('playing');

}

// Creates the variable of keys for each div with the .key class
const keys = document.querySelectorAll('.key');

// Uses a forEach loop to go through to target each key
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// Listens to the entire page for a keydown, it then captures the event and runs the playSound function
window.addEventListener('keydown', playSound);

// Uses a forEach loop to go through to target each key when clicked -> was annoying due to the key reference, so had to change to 'item'.

keys.forEach(item => item.addEventListener('click', () => {

  let target = item.dataset.key;

  // Same as above but targets the div on click as opposed to keydown
  const audio = document.querySelector(`audio[data-key="${target}"]`);
  const key = document.querySelector(`.key[data-key="${target}"]`);

  if ( !audio ) {
    return;
  }

  audio.currentTime = 0;
  audio.play();

  key.classList.add('playing');

}));