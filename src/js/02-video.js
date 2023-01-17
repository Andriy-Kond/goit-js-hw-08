// Ознайомся з документацією бібліотеки Vimeo плеєра.
// Додай бібліотеку як залежність проекту через npm.
// Ініціалізуй плеєр у файлі скрипта як це описано в секції pre-existing player, але враховуй, що у тебе плеєр доданий як npm пакет, а не через CDN.
// Вивчи документацію методу on() і почни відстежувати подію timeupdate - оновлення часу відтворення.
// timeupdate
// Triggered as the currentTime of the video updates. It generally fires every 250ms, but it may vary depending on the browser.
// {
//     duration: 61.857
//     percent: 0.049
//     seconds: 3.034
// }
// Зберігай час відтворення у локальне сховище. Нехай ключем для сховища буде рядок "videoplayer-current-time".
// Під час перезавантаження сторінки скористайся методом setCurrentTime() з метою відновлення відтворення зі збереженої позиції.
// setCurrentTime(seconds: number): Promise<number, (RangeError|Error)>
// Додай до проекту бібліотеку lodash.throttle і зроби так, щоб час відтворення оновлювався у сховищі не частіше, ніж раз на секунду.

import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const throttle = require('lodash.throttle');

const playerCurrentTime = localStorage.getItem('videoplayer-current-time') || 0;
player.setCurrentTime(playerCurrentTime);

player.on(
  'timeupdate',
  throttle(function (currentTime) {
    localStorage.setItem('videoplayer-current-time', currentTime.seconds);
  }, 1000)
);
