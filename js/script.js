//javascript--------------------------
//header
//ハンバーガーメニュー---------------
// const jsHamburger = document.getElementById('js-hamburger');
// const body = document.body;
// const spHeaderMenu = document.getElementById('js-drawer-menu')
// const drawerBackground = document.getElementById('js-header__overlay')
// const drawerMenuItem = document.getElementById('js-drawer-menu__item')

//ハンバーガーメニュークリックアクション
// jsHamburger.addEventListener('click', function() {
//   body.classList.toggle('is-drawerActive')
//   if (this.getAttribute('aria-expanded') == 'false') {
//     this.setAttribute('aria-expanded', 'true');
//     spHeaderMenu.setAttribute('area-hidden','false')
//   } else {
//     this.setAttribute('aria-expanded', 'false')
//     spHeaderMenu.setAttribute('area-hidden','true')
//   };
// });
//ドラワーメニュー展開時背景クリックアクション
// drawerBackground.addEventListener('click', () => {
//   body.classList.remove('is-drawerActive')
//   jsHamburger.setAttribute('aria-expanded', 'false')
//   spHeaderMenu.setAttribute('area-hidden','true')
// });
//ドラワーメニュー展開時リストクリックアクション
// drawerMenuItem.addEventListener('click', () => {
//   body.classList.remove('is-drawerActive')
//   jsHamburger.setAttribute('aria-expanded', 'false')
//   spHeaderMenu.setAttribute('area-hidden','true')
// });


let slider1 = new Swiper ('.js-slider', {
  //自動スライド
      autoplay: {
        delay: 2000,
      },
   //切り替えエフェクトの指定
    //slide  fade  cube coverflow  flip
    effect: "slide",
    //切り替わる速さ
    speed: 4000,
    //ループの有無
    loop: true,
     loopedSlides: 5,
     spaceBetween: 40,
     width: 320,
  
    // If we need pagination
    // pagination: {
    //  el: '.swiper-pagination',
    //   clickable : true,
    //  },
    
    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    //  },
});



//jQuery--------------------------------
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  var topBtn = $('.pagetop');
  topBtn.hide();

  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  });

  //ドロワーメニュー
  $("#MenuButton").click(function () {
    // $(".l-drawer-menu").toggleClass("is-show");
    // $(".p-drawer-menu").toggleClass("is-show");
    $(".js-drawer-open").toggleClass("open");
    $(".drawer-menu").toggleClass("open");
    $("html").toggleClass("is-fixed");

  });



  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)

  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });

});
