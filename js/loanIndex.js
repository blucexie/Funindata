/**
 * Created by funinbook on 2016/12/20.
 */
$(function () {
    // 地图
    var myChart = echarts.init(document.getElementById('china'));
    var data = [
        /*  {name: '上海', value: 25},
         {name: '广州', value: 38},*/
        {name: '北京', value: 79}
    ];
    var geoCoordMap = {

        /* '上海':[121.48,31.22],
         '广州':[113.23,23.16],*/
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
            /* text: '打车指数',*/
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
                    areaColor: '#021728',
                    borderColor: '#5cbaec',
                    opacity:0.9
                },
                emphasis: {
                    areaColor: '#000'
                }
            }
        },
        series : [
            {   name: '....',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: convertData(data),
                symbolSize:6,
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
                        color: '#f00'
                    }
                }
            },
            {
                name: 'Top 1',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: convertData(data.sort(function (a, b) {
                    return b.value - a.value;
                }).slice(0, 1)),
                symbolSize:[20,20],
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
                        color: '#f00',
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