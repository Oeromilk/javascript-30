function playSound(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) return; //stop the function if no audio key selected.
  audio.currentTime = 0; //rewind the audio element to the start.
  audio.play();
  key.classList.add('playing');
  console.log(key);
};

function removeTransition(e){
  if(e.propertyName !== 'transform') return; //skip event if it is not transform
  console.log(e);
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
