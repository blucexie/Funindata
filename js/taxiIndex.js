/**
 * Created by funinbook on 2016/12/20.
 */
$(function () {
    var config = {
        vx: 20,
        vy:  20,
        height: 7,
        width: 7,
        count: 30,
        color: "52, 98, 196",
        stroke: "52, 98, 196",
        dist: 50000,
        e_dist: 50000,
        max_conn: 10
    };
    CanvasParticle(config);
   /* 时钟===========*/
    var p1 = document.getElementById('p1');
    var hours = document.getElementById('hours');
    var min = document.getElementById('min');
    var sec = document.getElementById('sec');
    setInterval(fnTime,1000);
    fnTime();
    function fnTime(){
        var myTime = new Date();
        var iHours = myTime.getHours();
        var iMin = myTime.getMinutes();
        var iSec = myTime.getSeconds();
        var str = "";
        //  p1.innerHTML = toTwo(iHours)+toTwo(iMin)+toTwo(iSec);
        hours.innerHTML = toTwo(iHours);
        min.innerHTML = toTwo(iMin);
        sec.innerHTML = toTwo(iSec);
    }

    function toTwo(n){
        return n<10 ? '0'+n : ""+n;
    }

    var myChart = echarts.init(document.getElementById('main'));
    var data = [
        {name: '上海', value: 25},
        {name: '广州', value: 38},
        {name: '北京', value: 79}
    ];
    var geoCoordMap = {

        '上海':[121.48,31.22],
        '广州':[113.23,23.16],
        '北京':[116.46,39.92]
    };

    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        return res;
    };

    option = {

        title: {
            text: '打车指数',
            left: 'center',
            textStyle: {
                color: '#fff'
            }
        },
        tooltip : {
            trigger: 'item'
        },
        geo: {
            map: 'china',
            label: {
                emphasis: {
                    show: false
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#3E589B',
                    borderColor: '#111',
                    opacity:0.8
                },
                emphasis: {
                    areaColor: '#5073ce'
                }
            }
        },
        series : [
            {
                name: '....',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: convertData(data),
                symbol:'image://images/car.png',
                symbolSize:30,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#ddb926'
                    }
                }
            },
            {
                name: 'Top 3',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: convertData(data.sort(function (a, b) {
                    return b.value - a.value;
                }).slice(0, 3)),
                symbolSize:[40,40],
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#fff',
                        shadowBlur: 1,
                        shadowColor: '#f00',
                        borderColor:'#0f0',
                        opacity:0
                    }
                },
                zlevel: 1
            }
        ]
    };
    myChart.setOption(option);




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