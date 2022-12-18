import Vimeo from '@vimeo/player';
import _throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

const key = 'videoplayer-current-time';

player.on('loaded', () => {
  const time = localStorage.getItem(key) || 0;
  player.setCurrentTime(time);
});

player.on(
  'timeupdate',
  _throttle(({ seconds }) => {
    localStorage.setItem(key, seconds);
    console.log(seconds);
  }, 1000)
);
