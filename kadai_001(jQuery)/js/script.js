$(function () {
    //カルーセル
    $('.carousel').slick({
        autoplay: true,
        dots: true,
        pauseOnHover: false,
        speed: 1500,
        arrows: false,
        fade: true
    });

  // リンク（aタグ）にホバー時のアニメーションを設定
  $('a').hover(
    function () {
      // マウスオーバー時の処理
      $(this).stop().animate({
        opacity: 0.5,
      }, 100);
    },
    function () {
      // マウスアウト時の処理
      $(this).stop().animate({
        opacity: 1.0,
      }, 100);
    }
  );

    //TOPへ戻るボタン
    $(window).scroll(function(){
         if($(this).scrollTop() > 100) {
            $('#page-top').fadeIn();
        }else{
            $('#page-top').fadeOut();
        }
    }); 

    //ページ内リンクのスクロールをなめらかにする
    $('a[href^="#"]').click(function () {
        const speed = 500;
        const href = $(this).attr('href');
        let $target;
        if (href == '#') {
            $target = $('html');
        }else {
            $target = $(href);
        }
        const position = $target.offset().top;
        $('html, body').animate({'scrollTop': position}, speed, 'swing');
        return false;
    });

    // スクロールしたときにセクションをフェードインさせる
    $(window).scroll(function () {
        const scrollAmount = $(window).scrollTop();
        const windowHeight = $(window).height();
        $('section').each(function() {
            const position =$(this).offset().top;
            if(scrollAmount > position - windowHeight +100){
                $(this).addClass('fade-in');
            }
        });
    });

    //Worksの画像をクリックしたときにモーダルで拡大表示する
    $('.works img').click(function () {
        const imgSrc = $(this).attr('src');
        const imgAlt = $(this).attr('alt');
        $('.big-img').attr({
            src:imgSrc,
            alt:imgAlt,
        });
        $('.modal').fadeIn();
    });

    //閉じるボタン
    $('.close-btn').click(function(){
        $('.modal').fadeOut();
    });
});