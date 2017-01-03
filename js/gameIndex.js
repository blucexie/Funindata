/*
/!**
 * Created by funinbook on 2016/12/27.
 *!/
$(function () {
// 地图
    var myChart2 = echarts.init(document.getElementById('china'));
    var data = [
        /!*  {name: '上海', value: 25},
         {name: '广州', value: 38},*!/
        {name: '北京', value: 79}
    ];
    var geoCoordMap = {

        /!* '上海':[121.48,31.22],
         '广州':[113.23,23.16],*!/
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
            /!* text: '打车指数',*!/
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
    myChart2.setOption(option);


  /!*  雷达图*!/
    var v1dom = document.getElementById("radar");
    var v1 = echarts.init(v1dom);
    dataBJ = [

        [134,96,165,41,55]

    ];

    dataGZ = [

        [106,116,188,101,222]

    ];

    dataSH = [


        [187,143,201,133,77]
    ];
    dataTJ= [

        [100,190,111,67,160]
    ];
    indicatorData = [
        {name: '游戏1', max: 300},
        {name: '游戏2', max: 300},
        {name: '游戏3', max: 300},
        {name: '游戏4', max: 300},
        {name: '游戏5', max: 300}

    ];
    var lineStyle = {
        normal: {
            width: 1,
            opacity: 0.5
        }
    };

    option = {
        color:["#fc20ff","#ffc90e","#99d9ea"],

        legend: {
            bottom:80,
            orient:'horizontal',
            itemWidth:30,
            itemHeight:20,

            data: [{name:'19-35岁', icon: 'circle', textStyle:{color:"#12ff00"}},
                {name:'36-45岁',icon: 'circle',textStyle:{color:"#0006ff"}},
                {name:'6-18岁',icon: 'circle',textStyle:{color:"#ffe400"}},
                {name:'45岁以上',icon: 'circle',textStyle:{color:"#ff0000"}}]
        },
        tooltip: {},
        radar: {
            center:['50%','50%'],
            indicator: indicatorData,
            radius: '80%',
            splitNumber: 1,
            name: {
                textStyle: {
                    color: '#fff',
                    fontSize: 12
                }
            },
            splitLine: {

                lineStyle: {
                    color:'#4f8bbe',
                    opacity:0.5
                }
            },
            splitArea: {
                show: true,
                areaStyle:{
                    color:'#0d6dba',
                    opacity:0.1
                }
            },
            axisLine: {
                show:true,
                lineStyle: {
                    color:'#4f8bbe',
                    opacity:0.5
                }
            }
        },
        series: [
            {
                name: '雷达线ALL',
                type: 'radar',
                silent:true,
                lineStyle: {
                    normal: {
                        type:'solid',
                        color:"#375f9a",
                        width: 2,
                        opacity: 1

                    }
                },
                data: [[300,300,300,300,300]],

                itemStyle: {
                    normal: {
                        opacity:0

                    }
                },
                areaStyle: {
                    normal: {
                        color: '#0d6dba',
                        opacity: 0.1
                    }
                }
            },
            {
                name: '雷达线2',
                type: 'radar',
                silent:true,
                lineStyle: {
                    normal: {
                        type:'solid',
                        color:"#375f9a",
                        width: 2,
                        opacity: 0.8

                    }
                },
                data: [[250,250,250,250,250]],

                itemStyle: {
                    normal: {
                        opacity:0

                    }
                },
                areaStyle: {
                    normal: {
                        color: 'rgba(0,0,0,0)',
                        opacity: 0.1
                    }
                }
            },
            {
                name: '雷达线3',
                type: 'radar',
                silent:true,
                lineStyle: {
                    normal: {
                        type:'solid',
                        color:"#375f9a",
                        width: 2,
                        opacity: 0.6

                    }
                },
                data: [[200,200,200,200,200]],

                itemStyle: {
                    normal: {
                        opacity:0

                    }
                },
                areaStyle: {
                    normal: {
                        color: 'rgba(0,0,0,0)',
                        opacity: 0.1
                    }
                }
            },
            {
                name: '雷达线4',
                type: 'radar',
                silent:true,
                lineStyle: {
                    normal: {
                        type:'solid',
                        color:"#375f9a",
                        width: 2,
                        opacity: 0.4

                    }
                },
                data: [[150,150,150,150,150]],

                itemStyle: {
                    normal: {
                        opacity:0

                    }
                },
                areaStyle: {
                    normal: {
                        color: 'rgba(0,0,0,0)',
                        opacity: 0.1
                    }
                }
            },
            {
                name: '雷达线5',
                type: 'radar',
                silent:true,
                lineStyle: {
                    normal: {
                        type:'solid',
                        color:"#375f9a",
                        width: 2,
                        opacity: 0.2

                    }
                },
                data: [[100,100,100,100,100]],

                itemStyle: {
                    normal: {
                        opacity:0

                    }
                },
                areaStyle: {
                    normal: {
                        color: 'rgba(0,0,0,0)',
                        opacity: 0.1
                    }
                }
            },
            {
                name: '19-35岁',
                type: 'radar',
                lineStyle: lineStyle,
                data: dataBJ,
                symbolSize:4,
                itemStyle: {
                    normal: {
                        borderColor: '#fc20ff',
                        borderWidth:4

                    }
                },
                areaStyle: {
                    normal: {
                        color: '#fc20ff',
                        opacity: 0.3
                    }
                }
            },
            {
                name: '36-45岁',
                type: 'radar',
                lineStyle: lineStyle,
                data: dataSH,
                symbolSize:2,
                itemStyle: {
                    normal: {
                        borderColor: '#ffc90e',
                        borderWidth:4
                    }
                },
                areaStyle: {
                    normal: {
                       color: '#ffc90e',
                        opacity: 0.3
                    }
                }
            },
            {
                name: '6-18岁',
                type: 'radar',
                lineStyle: lineStyle,
                data: dataGZ,
                symbolSize:4,
                itemStyle: {
                    normal: {
                        borderColor: '#99d9ea',
                        borderWidth:4

                    }
                },
                areaStyle: {
                    normal: {
                       color: '#99d9ea',
                        opacity: 0.3
                    }
                }
            },
            {
                name: '雷达线',
                type: 'radar',
                silent:true,
                lineStyle: {
                    normal: {
                        type:'dotted',
                        width: 2,
                        opacity: 0.3

                    }
                },
                data: [[6,5,6,4,2]],

                itemStyle: {
                    normal: {
                        opacity:0.2

                    }
                },
                areaStyle: {
                    normal: {
                        color: '#a7c0dc',
                        opacity: 0.2
                    }
                }
            },
            {
                name: '45岁以上',
                type: 'radar',
                lineStyle: lineStyle,
                data: dataTJ,
                symbolSize:4,
                itemStyle: {
                    normal: {
                        borderColor: '#a636ed',
                        borderWidth:4

                    }
                },
                areaStyle: {
                    normal: {
                       color: '#a636ed',
                        opacity: 0.3
                    }
                }
            }

        ]
    };

    var i=0;
    var a=5;
    var b=5;
    var c=5;
    var e=5;
    var f=5;

    var go=1;
    v1.setOption(option);
    setInterval(function(){
        var option2=option;
        if(go>0){
            if(i<=61){
                i+=1;
                option2.series[8].data=[[a*i,b*i,c*i,e*i,f*i]];
            }else{
                go=-1;
            }
        }else if(go<0){
            if(i>0){
                i-=1;
                option2.series[8].data=[[a*i,b*i,c*i,e*i,f*i]];
            }else if(i<=0){
                go=1;
            }
        }



        v1.setOption(option2);

    },50);

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
});*/
