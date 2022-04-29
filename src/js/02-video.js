const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const throttle = require('lodash.throttle');

const SET_TIME = "videoplayer-current-time";


    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });


const onPlay = function (event) {
    localStorage.setItem(SET_TIME, JSON.parse(event.seconds));
};

    const currentTime = localStorage.getItem(SET_TIME);


player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(currentTime).catch(function (error) {
    switch (error.name) {
    case 'RangeError':
        console.log('Wrong time!');
        break;

    default:
        console.log('Error!');
        break;
    }
});



