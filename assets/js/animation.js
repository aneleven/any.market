let container = document.getElementById('animation-one');
let animated = document.getElementsByClassName('animation-one-item');

for (let i = 0; i < animated.length; i++){
  animated[i].style.minWidth = container.clientWidth.toString() + 'px';
}

/**
 * Magic
 */

const controller = new ScrollMagic.Controller();
 
const tl = new TimelineMax();

let tween1 = TweenMax.to('.animation-one-item', 1, {
	minWidth: container.clientWidth / animated.length,
})

tl.add(tween1);
 
let variable;

if (window.innerWidth <= 799.98){
	variable = 0; // изменение параметра триггера для mob
}else if (window.innerWidth >= 800 && window.innerWidth <= 1980){
	variable = 0.2; // изменение параметра триггера для desktop
}else if (window.innerWidth >= 1981){
	variable = 0.55;
}
 
const scene = new ScrollMagic.Scene({
	triggerElement: "#trigger1",
	triggerHook: variable,
	duration: 300 // время анимации
})
.setTween(tl)
// .addIndicators() // Показывает контролы анимации на странице (старт, конец и триггер)
.setPin('#trigger1', {pushFollowers: true})
.addTo(controller);

