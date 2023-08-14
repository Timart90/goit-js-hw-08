import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const play = new Player(iframe);

function time(data) {
  let sec = data.seconds;
  localStorage.setItem('videoplayer-current-time', sec); 
};

const localKey = localStorage.getItem('videoplayer-current-time');
play.on('timeupdate', throttle(time, 1000));

if (localKey) {
  play.setCurrentTime(localKey);
};

console.log(localKey);






