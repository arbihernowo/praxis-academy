var spriteFrames = [{
        transform: 'translateY(0)'
    },
    {
        transform: 'translateY(-100%)'
    }
];

var redQueen_alice_sprite = document.getElementById('red-queen_and_alice_sprite');

var redQueen_alice = redQueen_alice_sprite.animate(
    spriteFrames, {
        easing: 'steps(7, end)',
        direction: "reverse",
        duration: 600,
        playbackRate: 1,
        iterations: Infinity
    });

/* Alice tires so easily! 
    Every so many seconds, reduce their playback rate so they slow a little. 
*/
setInterval(function () {
    if (redQueen_alice.playbackRate > .4) {
        redQueen_alice.playbackRate *= .9;
    }
}, 3000);

/* But you can speed them up by giving the screen a click or a tap. */
var goFaster = function () {
    redQueen_alice.playbackRate *= 1.1;
}

document.addEventListener("click", goFaster);
document.addEventListener("touchstart", goFaster);