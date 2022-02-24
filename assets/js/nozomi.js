$(function () {
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '15%',
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

    $('.icon-utensils').on('click', function () {
        $('.target-donald').toggleClass('hide');
    })

    // if (position > Q11_position) {
    //     $('.q11-target').removeClass('hide');
    // } else {
    //     $('.q11-target').addClass('hide');
    // }

    $('.icon-ice').on('click', function () {
        $('.target-mc').toggleClass('hide');
    })



})