let exportNumber;

$(document).ready(function() {
  const progressContainer = document.querySelector('.progress-container');
  const progress = Array.from(document.querySelectorAll('.progress'));
  const status = document.querySelector('.status');  

  /**
   * Animation №3
   */

  const controller = new ScrollMagic.Controller();
  var animTarget = document.querySelector('#third-animation');
  var tl = new TimelineMax();

  var tween = TweenMax.fromTo(animTarget, 1, 
    {
      width: 400,
      height: 400,
      fontSize: 128,
      text: '<span><b>3</b> <br> простых <br> шага</span>',
      ease:Linear.easeNone
    },
    {
      width: 64,
      height: 64,
      fontSize: 32,
      text: '<span>1</span>',
      ease:Linear.easeNone
    }
  );

  tl.add(tween);

  let variable;

  if (window.innerWidth <= 799.98){
    variable = 0.2; // изменение параметра триггера для mob
  }else if (window.innerWidth >= 800 && window.innerWidth <= 1920){
    variable = 0.3; // изменение параметра триггера для desktop
  }else if (window.innerWidth >= 1921){
    variable = 0.5;
  }

  new ScrollMagic.Scene({
    triggerElement: "#trigger2",
    triggerHook: variable,
    duration: 500
  })
  .setTween(tl)
  // .addIndicators() // Показывает контролы анимации на странице (старт, конец и триггер)
  .setPin('#trigger2', {pushFollowers: true})
  .addTo(controller);

  let tweenChange = (newNumber) => {
    tl.pause();
    tl.remove(tween);
    //text: '3 <p class="wow animate__animated animate__fadeInUp">простых <br> шага</p>',
    tween = TweenMax.fromTo(animTarget, 1, 
      {
        width: 400,
        height: 400,
        fontSize: 128,
        text: '<span><b>3</b> <br> простых <br> шага</span>',
        ease:Linear.easeNone
      },
      {
        width: 64,
        height: 64,
        fontSize: 32,
        text: newNumber,
        ease:Linear.easeNone
      }
    );

    tl.add(tween);
    tl.play();
  }

  /**
   * Вторая анимация
   */

  const playNext = (e) => {
    const current = e && e.target;
    let next;

    if (current) {
      const currentIndex = progress.indexOf(current);
      if (currentIndex < progress.length) {
        next = progress[currentIndex + 1];
      }
      current.classList.remove('active');
      current.classList.add('passed');
    } 
    
    if (!next) {
      progress.map((el) => {
        el.classList.remove('active');
        el.classList.remove('passed');
      })
      next = progress[0];
    } 
    next.classList.add('active'); 

    if(current != undefined){
      $('#' + $(current)[0].dataset.progressResult).hide();
      $('#' + $(next)[0].dataset.progressResult).show();

      switch ($(next)[0].dataset.progressResult) {
        case 'pr1':
          $('.start-sales-carousel .number').text('1');
          exportNumber = '<span>1</span>';
          $('.start-sales-carousel .title').text('Зарегистрируйтесь и отметьте себя на карте');
          break;
        case 'pr2':
          $('.start-sales-carousel .number').text('2');
          exportNumber = '<span>2</span>';
          $('.start-sales-carousel .title').html('Добавьте товары в каталог <br> <small>Количество не ограничено</smal>');
          break;
        case 'pr3':
          $('.start-sales-carousel .number').text('3');
          exportNumber = '<span>3</span>';
          $('.start-sales-carousel .title').text('Выберите способ доставки и приёма платежей');
          break;
    
        default:
          break;
      }

      tweenChange(exportNumber);
    }
  }

  let pr = document.getElementsByClassName('progress');

  $('.next').click(function (e) { 
    e.preventDefault();
    
    for (let i = 0; i < pr.length; i++){
      if (pr[i].classList.contains('active')) {
        if (pr[i + 1] != undefined){
          pr[i].classList.add('passed');
          pr[i].classList.remove('active');
          pr[i + 1].classList.add('active');

          changeData(pr[i + 1], pr[i]);

          break;
        }else{
          $('.progress').removeClass('passed');
          $('.progress').removeClass('active');
          pr[0].classList.add('active');

          changeData(pr[0], pr[pr.length - 1]);
          break;
        }
      }
    }
  });

  $('.prev').click(function (e) { 
    e.preventDefault();

    for (let i = 0; i < pr.length; i++){
      if (pr[i].classList.contains('active')) {
        if (pr[i - 1] != undefined){
          pr[i].classList.remove('active');
          pr[i - 1].classList.remove('passed');
          pr[i - 1].classList.add('active');

          changeData(pr[i - 1], pr[i]);
          break;
        }else{
          $('.progress').addClass('passed');
          $('.progress.active').removeClass('active');
          pr[pr.length - 1].classList.remove('passed');
          pr[pr.length - 1].classList.add('active');

          changeData(pr[pr.length - 1], pr[0]);
          break;
        }
      }
    }
  });

  let changeData = (next, current) => {
    $('#' + $(current)[0].dataset.progressResult).hide();
    $('#' + $(next)[0].dataset.progressResult).show();

    switch ($(next)[0].dataset.progressResult) {
      case 'pr1':
        $('.start-sales-carousel .number').text('1');
        exportNumber = '<span>1</span>';
        $('.start-sales-carousel .title').text('Зарегистрируйтесь и отметьте себя на карте');
        break;
      case 'pr2':
        $('.start-sales-carousel .number').text('2');
        exportNumber = '<span>2</span>';
        $('.start-sales-carousel .title').html('Добавьте товары в каталог <br> <small>Количество не ограничено</smal>');
        break;
      case 'pr3':
        $('.start-sales-carousel .number').text('3');
        exportNumber = '<span>3</span>';
        $('.start-sales-carousel .title').text('Выберите способ доставки и приёма платежей');
        break;
    
      default:
        break;
    }

    tweenChange(exportNumber);
  }

  progress.map(el => el.addEventListener("animationend", playNext, false));
  // progressContainer.addEventListener("click", clickHandler, false);

  /**
   * Smooth scroll
   */

  $('a[href*="#"]').click(function (e) {
    if (this.hash !== "") {
      // e.preventDefault();         
      let hash = this.hash;

      if (hash == "#header-go") {
        $('html, body').stop().animate({
          scrollTop: 0
        }, 1000, function () { });
      } else {
        $('html, body').stop().animate({
          scrollTop: $(hash).offset().top
        }, 1000, function () { });
      }
    }
    return false;
  });

  /**
   * Menu item click
   */

  $('.menu-item a').click(function (e) {    
    $('.menu-item.active').removeClass('active');
    $(this).closest('.menu-item').addClass('active');
  });

  let animationFlag = false;

  if (tl.progress() >= 0.5){
    document.querySelector('.start-sales').style.overflow = '';
  }else{
    document.querySelector('.start-sales').style.overflow = 'hidden';
  }
  
  let setMenuImage = (listItem) => {
    if (!listItem.hasClass('active')){
      $('.menu li.active').removeClass('active');
      listItem.addClass('active');
    }
  }

  window.onscroll = function () {   
    
    let idStartLocation = $("#go-youtube").offset().top;
    let idEndLocation = $("#go-contacts").offset().top;

    let sectionOnlineSales = $("#go-online-sales").offset().top; 
    let sectionStartSalesCarousel = $("#go-start-sales-carousel").offset().top; 
    let sectionSupport = $('#go-support').offset().top; 

    let scroll = $(window).scrollTop();

    if (tl.progress() >= 0.5){
      document.querySelector('.start-sales').style.overflow = '';
    }else{
      document.querySelector('.start-sales').style.overflow = 'hidden';
    }

    if (scroll >= idStartLocation && scroll <= idEndLocation) {
      $(".position-top").addClass("is-open");
    } else {
      $(".position-top").removeClass("is-open");
    }

    if (scroll >= idStartLocation - 500 && scroll < idStartLocation + $('#go-youtube').height()){
      player.playVideo()
    }

    if (scroll >= idStartLocation){
      $('.home-page .left header').addClass('active');
      $('.menu-image img').css('maxWidth', '80%');
    }else{
      $('.home-page .left header').removeClass('active');
      $('.menu-image img').css('maxWidth', '90%');
    }

    if (scroll >= idStartLocation + $('#go-youtube').height()){
      if (player.getPlayerState() == 1){
        player.pauseVideo()
      }
    }

    if (scroll >= sectionStartSalesCarousel - 600 && scroll <= sectionSupport - 300){
      if ($('.pause').hasClass('fixed')){
        $('.pause').removeClass('fixed');
      }
    }else{
      if (!$('.pause').hasClass('fixed')){
        $('.pause').addClass('fixed');
      }
    }

    switch (true) {
      case (scroll < sectionStartSalesCarousel):
        setMenuImage($('.menu li[data-href="go-intro"]'));

      case (scroll >= sectionOnlineSales && scroll < sectionStartSalesCarousel -200):

        if (animationFlag == false){
          playNext();
          animationFlag = true;
        }
        break;
      
      case (scroll >= sectionStartSalesCarousel):
        setMenuImage($('.menu li[data-href="start-sales-carousel"]'));
        break


      default:
        break;
    }
  }

  window.scrollTo(window.scrollX, window.scrollY - 1);

  ///
  ///	CorrelationId obtaining
  ///

  var potCorrelationId = localStorage.getItem('correlationId');
  let url = window.location.search;
  console.log('url=' + url);
  		
  	// If correlationId ixist in localStorage
  	if(localStorage.getItem("correlationId") == null) {
	  	// check for utm 
	  	if (url.indexOf('utm_') +1 ) {
		  	var request_url = 'https://any.market/api/metrics/landing?source=landing&' + url.substr(1);
	  	} else {
	    	console.log('utm меток нет');
	    	var request_url = 'https://any.market/api/metrics/landing?source=landing&utm_source=';
	    }
		  	// get correlationID
		  	var request = new XMLHttpRequest();
		  	request.open('POST', request_url, true);
		  	request.addEventListener('readystatechange', function() {
			  	if ((request.readyState==4) && (request.status==200)) {
	
				    console.log(request);
				    var correlationId = request.responseText;
				    correlationId = correlationId.replace(/"([^"]+(?="))"/g, '$1');
				    correlationId = correlationId.replace(/[\s.,%]/g, '');
				    
				    localStorage.setItem('correlationId', JSON.stringify(correlationId));
				    
				    let act_but = document.querySelectorAll(".act_but");
				    console.log(act_but);
				    
				    for (var i = 0; i < act_but.length; i++) {
					   act_but[i].href = 'https://any.market/start/store?correlationId=' + correlationId;
					}
			  	}
		  	}); 
		  	// sending request
		  	request.send();
	} else {
		console.log('No correlationId till that moment');
		var correlationId = potCorrelationId.replace(/"([^"]+(?="))"/g, '$1');
	}
	
	let act_but = document.querySelectorAll(".act_but");
    console.log(act_but);
    
    console.log(correlationId); //string
    for (var i = 0; i < act_but.length; i++) {
	   act_but[i].href = 'https://any.market/start/store?correlationId=' + correlationId;
	}

  /**
   * YouTube player
   */

});