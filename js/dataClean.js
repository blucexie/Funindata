/**
 * Created by funinbook on 2017/1/4.
 */
$(function () {
    $('#change_3 .a_bigImg').soChange({
        thumbObj:'#change_3 .ul_change_a2 span',
        thumbNowClass:'on',//自定义导航对象当前class为on
        changeTime:3000//自定义切换时间为3000ms

    });
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