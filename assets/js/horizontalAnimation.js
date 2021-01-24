// var container = document.getElementById('trigger3');
// var animated = document.getElementsByClassName('advantages-circles-item');
// var contentWidthSum = 0;
// var tween;

// for (let i = 0; i < animated.length; i++){
//   contentWidthSum += animated[i].offsetWidth;
// }
// console.log(contentWidthSum);
// console.log(container.offsetWidth);
// console.log('-' + Math.abs(container.offsetWidth - (contentWidthSum + 60)) + 'px');

// /**
//  * Magic
//  */

// const wrapper = document.querySelector('#trigger3')
// const controller = new ScrollMagic.Controller();
// const horizontalMovement = new TimelineMax();

// if (window.innerWidth <= 1199.98 && window.innerWidth >= 800.98 || window.innerWidth <= 576 ){
//   tween = TweenMax.to(wrapper, 1, { 
//     marginLeft: '-' + Math.abs(container.offsetWidth - (contentWidthSum + 60)) + 'px'
//   })
//   horizontalMovement.add(tween);

//   new ScrollMagic.Scene({
//     triggerElement: '#trigger3',
//     triggerHook: .4,
//     duration: 200
//   })
//     .setPin(wrapper, {pushFollowers: false})
//     // .addIndicators()
//     .setTween(horizontalMovement)
//     .addTo(controller)
// }


