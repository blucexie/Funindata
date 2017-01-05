/**
 * Created by funinbook on 2017/1/5.
 */
$(function () {
   /* var config = {
        vx: 20,
        vy:  20,
        height: 7,
        width: 7,
        count: 40,
        color: "52, 98, 196",
        stroke: "52, 98, 196",
        dist: 50000,
        e_dist: 50000,
        max_conn: 10
    };
    CanvasParticle(config);*/

    //监控浏览器
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