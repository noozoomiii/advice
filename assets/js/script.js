$(function () {
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '15%',
        responsive: [{
            breakpoint: 780,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '0%',
            }
        }],
    });

    $('.mc-btn').on('click', function () {
        // console.log('test');

        $.ajax({
            url: 'https://api.adviceslip.com/advice', //アクセスするURL
            type: 'get',    //post or get
            cache: false,        //cacheを使うか使わないかを設定
            dataType: 'json',     //data type script・xmlDocument・jsonなど
            // data:data,           //アクセスするときに必要なデータを記載      
        })
            .done(function (response) {
                console.log(response);
                console.log(response.slip.advice);
                $('.advice').empty();
                $('.advice').append(response.slip.advice);

                //通信成功時の処理
                //成功したとき実行したいスクリプトを記載
            })
            .fail(function (xhr) {
                //通信失敗時の処理
                //失敗したときに実行したいスクリプトを記載
            })
            .always(function (xhr, msg) {
                //通信完了時の処理
                //結果に関わらず実行したいスクリプトを記載
            });
    })

    $('.icon-ice').on('click', function () {
        $('.target-mc1').toggleClass('hide');
    })

    $('.icon-cup').on('click', function () {
        $('.target-mc2').toggleClass('hide');
    })

    $('.icon-utensils').on('click', function () {
        $('.target-mc3').toggleClass('hide');
    })

    $('.icon-burger').on('click', function () {
        $('.target-mc4').toggleClass('hide');
    })
})

setTimeout(function () {
    $('.start p').fadeIn(1600);
}, 500);
setTimeout(function () {
    $('.start').fadeOut(500);
}, 2500);