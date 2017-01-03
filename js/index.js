/**
 * Created by funinbook on 2016/12/14.
 */

$(function () {

/*粒子*/
    var config = {
        vx: 20,
        vy:  20,
        height: 7,
        width: 7,
        count: 20,
        color: "52, 98, 196",
        stroke: "52, 98, 196",
        dist: 50000,
        e_dist: 50000,
        max_conn: 10
    };
    CanvasParticle(config);

    $('.data ul li').hover(function () {
        $(this).addClass('active')
    }, function () {
        $(this).siblings().removeClass('active')
    });

/*   function fn(){
       $('.companyProfile1').fadeOut(3000, function () {
           $('.companyProfile2').fadeIn(3000, function () {
               $('.companyProfile2').fadeOut(3000, function () {
                   $('.companyProfile3').fadeIn(3000, function () {
                       $('.companyProfile3').fadeOut(3000, function () {
                           $('.companyProfile1').fadeIn(3000, function () {
                               fn();
                           })
                       })
                   })
               })
           })
       });
   }
    fn();*/

    resize();
    window.onresize = resize;
    function resize() {
        var aHeight=document.documentElement.clientHeight;
        var aWidth=document.documentElement.clientWidth;
        var oImg=document.getElementById('content');
        oImg.style.height=aHeight+'px';
        oImg.style.width=aWidth+'px';
    }
});