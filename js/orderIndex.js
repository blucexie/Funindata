/**
 * Created by funinbook on 2016/12/26.
 */
$(function () {
    var length = 0;
    $('.left').click(function () {

        length -= 150;
        if (length < -4050){
            length = -4050
        }
        $('.province ul').css("marginLeft",length);
    });

    $('.right').click(function () {

        length += 150;
        if (length > 0){
            length = 0
        }

        $('.province ul').css("marginLeft",length);
    });

/*图表*/
    var myChart = echarts.init(document.getElementById('main'));
    var xData = function() {
        var data = [];
        for (var i = 0; i <25; i=i+2) {
            data.push(i + ":00");
        }
        return data;
    }();

    option = {

        "title": {
            "text": "点餐指数" +
            "",
            x: "6%",

            textStyle: {
                color: '#fff',
                fontSize: '22'
            },
            subtextStyle: {
                color: '#90979c',
                fontSize: '16'
            }
        },
        "tooltip": {
            "trigger": "axis",
            "axisPointer": {
                "type": "shadow",
                textStyle: {
                    color: "#fff"
                }

            }
        },
        "grid": {
            "borderWidth": 0,
            "top": 110,
            "bottom": 100,
            textStyle: {
                color: "#fff"
            }
        },
        "legend": {
            x: '4%',
            top: '11%',
            textStyle: {
                color: '#90979c'
            },
            "data": ['男', '平均']
        },


        "calculable": true,
        "xAxis": [{
            "type": "category",
            "axisLine": {
                lineStyle: {
                    color: '#fff'
                }
            },
            "splitLine": {
                "show": false
            },
            "axisTick": {
                "show": false
            },
            "splitArea": {
                "show": false
            },
            "axisLabel": {
                "interval": 0,
                margin:80

            },
            "data": xData
        }],
        "yAxis": [{
            "type": "value",
            "splitLine": {
                "show": false
            },
            "axisLine": {
                lineStyle: {
                    color: '#fff'
                }
            },
            "axisTick": {
                "show": false
            },
            "axisLabel": {
                "interval": 0

            },
            "splitArea": {
                "show": false
            }

        }],
        "dataZoom": [{
            "show": true,
            "height": 70,
            "xAxisIndex": [
                0
            ],
            bottom: 30,
            "start": 10,
            "end": 80,
            handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
            handleSize: '100%',
            backgroundColor:'rgba(0,0,0,0.1)',
            dataBackground:{
                lineStyle:{
                    color:'#6cafff'
                }
            },
            handleStyle:{
                color:"#d3dee5"


            },
            textStyle:{
                color:"#fff"},
            borderColor:"#90979c"


        }, {
            "type": "inside",
            "show": true,
            "height": 15,
            "start": 1,
            "end": 35
        }],
        "series": [
            {
                "name": "男",
                "type": "bar",
                "stack": "总量",
                barWidth : 30,
                "itemStyle": {
                    "normal": {
                        "color": "#9dcaff",
                        "barBorderRadius": 0,
                        "label": {
                            "show": true,
                            "position": "top",
                            formatter: function(p) {
                                return p.value > 0 ? (p.value) : '';
                            }
                        }
                    },
                    emphasis:{
                        borderColor:'#f00'
                    }
                },
                "data": [
                    327,
                    1776,
                    507,
                    1200,
                    800,
                    482,
                    204,
                    1390,
                    1001,
                    951,
                    381,
                    220,
                    550
                ]
            }, {
                "name": "总数",
                "type": "line",
                "stack": "总量",
                symbolSize:10,
                symbol:'circle',
                "itemStyle": {
                    "normal": {
                        "color": "#6cafff",
                        "barBorderRadius": 0,
                        "label": {
                            "show": true,
                            "position": "top",
                            formatter: function(p) {
                                return p.value > 0 ? (p.value) : '';
                            }
                        }
                    }

                },
                "data": [
                    327,
                    1776,
                    507,
                    1200,
                    800,
                    482,
                    204,
                    1390,
                    1001,
                    951,
                    381,
                    220,
                    550
                ]
            }
        ]
    };
    myChart.setOption(option);
    // 地图
    var myChart2 = echarts.init(document.getElementById('china'));
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
                    areaColor: '#3a94e2',
                    borderColor: '#5cbaec',
                    opacity:0.4
                },
                emphasis: {
                    areaColor: '#5073ce'
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
                symbolSize:[0,0],
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
    myChart2.setOption(option);




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