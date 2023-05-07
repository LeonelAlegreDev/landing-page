const offers = document.getElementsByClassName('offer');
const animationDelay = 2000;
const transitionTime = 1000;
let frameStep = 0;

function addTransition(active, next) {
    offers[active].style.transition = transitionTime / 1000 + "s";
    offers[next].style.transition = transitionTime / 1000 + "s";

}

function removeTransition(index) {
    offers[index].style.transition = "0s";
}

function setNextPosition(next) {
    offers[next].style.transform = "translateY(100%)";
}

function animate(active, next) {
    offers[active].style.transform = "translateY(-100%)";
    offers[active].style.opacity = "0";

    offers[next].style.transform = "translateY(0)";
    offers[next].style.opacity = "100%";
}

function refreshData() {
    let lateFrameStep = frameStep;

    if (frameStep < offers.length - 1) {
        addTransition(frameStep, frameStep + 1);
        animate(frameStep, frameStep + 1);

        setTimeout(function() {
            removeTransition(lateFrameStep, lateFrameStep + 1);
            setNextPosition(lateFrameStep);
        }, animationDelay);

        frameStep++;
    } else {
        addTransition(frameStep, 0);
        animate(frameStep, 0);
        setTimeout(function() {
            removeTransition(lateFrameStep, 0);
            setNextPosition(lateFrameStep);
        }, animationDelay);
        frameStep = 0;
    }

    setTimeout(refreshData, animationDelay);
}
setTimeout(function() {
    refreshData();
}, animationDelay);