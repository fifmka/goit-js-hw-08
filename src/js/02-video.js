import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const STORAGE_KEY = 'videoplayer-current-time';
const vimeoEl = document.querySelector('#vimeo-player');
const player = new Player(vimeoEl);
const currentTime = JSON.parse(localStorage.getItem(STORAGE_KEY));

player.on('timeupdate', throttle(saveCurrentTimeInStorage, 1000));
if (currentTime && typeof currentTime === 'number') {
  player.setCurrentTime(currentTime);
}

function saveCurrentTimeInStorage(event) {
  localStorage.setItem(STORAGE_KEY, event.seconds);
}
