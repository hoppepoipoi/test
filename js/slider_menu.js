jQuery(function($){

    //変数の定義
    var body = $('body'),
        wrapper = $('.wrapper'),
        menu = $('.slideMenu'),
        menuBtn = $('.open_menu'),
        closeBtn = $('.close_menu'), //メニューを閉じるボタン
        menuWidth = menu.outerWidth();

    //メニューを開く関数
    function showMenu (event) {
        event.preventDefault();
        //bodyが動かないようにする
        currentScroll = $(window).scrollTop();
        body.css({
            position: 'fixed',
            width: '100%',
            top: -1 * currentScroll
        });
        //シェードを追加
        var shade = $('<div></div>');
        shade.attr('class', 'shade').on('click', hideMenu);
        //アニメーションを実行
        menu.before(shade).animate({
            'right' : 0
        }, 250);
    }
    
    //メニューを閉じる関数
    function hideMenu (event) {
        event.preventDefault();
        //bodyに追加したstyleを削除
        body.attr('style', '');
        //scroll位置を調整
        $('html, body').prop({scrollTop: currentScroll});
        //アニメーションを実行
        menu.prop({scrollTop: 0}).animate({
            'right' : -menuWidth
        }, 250);
        //シェードを削除
        $('.shade').remove();
    }
    //メニュー開閉の実行
    menuBtn.on('click', showMenu);
    closeBtn.on('click', hideMenu);
});
