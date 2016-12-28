/**
 * Created by funinbook on 2016/12/23.
 */
$(function () {
   // 折线图
    var myChart = echarts.init(document.getElementById('main'));
    option = {
        title: {
            /*text: '未来一周气温变化',*/
        },
        tooltip: {
            trigger: 'axis',
            axisPointer:{
                lineStyle:{
                    color:'#f00'
                }
            }
        },
        grid:{
            show:'true',
            backgroundColor:'rgba(9,138,218,0.5)'
        },
        legend:{
           top:10,
            textStyle:{
                color:'#fff',
                fontSize:16
            },
            data:['国内游','出国游']
        },
        toolbox: {
            show: true,
            left:'75%',
            top:10,
            feature: {
                dataZoom: {},
                dataView: {readOnly: false},
                magicType: {type: ['line', 'bar']},
                restore: {},
                saveAsImage: {}
            }
        },
        xAxis:  {
            type: 'category',
            boundaryGap: true,
            data: ['1','2','3','4','5','6','7','8','9','10','11','12'],
            axisLine:{
                lineStyle:{
                    color:'#fff'
                }
            },
            axisTick:{
                show:false
            }
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value}'

            },
            axisLine:{
                lineStyle:{
                    color:'#fff'
                }
            },
            splitLine:{
                lineStyle:{
                    color:'#098ada'
                }
            },
            axisTick:{
                show:false
            }
        },
        series: [

            {
                name:'国内游',
                type:'line',
                symbolSize:14,
                symbol:'',
                itemStyle:{
                    normal:{
                        color:'#ff7e00',
                        borderColor:'#ff7e00'

                    }
                },

                data:[180, 260, 380, 460, 610, 670, 680,800,810,860,650,430],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'出国游',
                type:'line',
                symbolSize:14,
                symbol:'',
                itemStyle:{
                    normal:{
                        color:'#11b500',
                        borderColor:'#11b500'

                    }
                },

                data:[100, 130, 280, 350, 580, 560, 590,770,790,930,600,400],
                markPoint: {
                    data: [
                        {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            }
        ]
    };
    myChart.setOption(option);
    // 柱状图
    var myChart1 = echarts.init(document.getElementById('main1'));

    // 指定图表的配置项和数据
    var option = {
        title: {
          //  text: '省份'
        },
        tooltip: {},
        grid:{
            show:'true',
            backgroundColor:'rgba(9,138,218,0.5)'
        },
        legend: {
            textStyle:{
                color:'#fff'
            },
            data:['国内游','国外游']
        },
        xAxis: {
            data: [{
                value: '北京',
                textStyle:{
                   color:'#fff',
                    fontSize:18,
                    align:'center'
                }
            }
            ],
            axisLine:{
                lineStyle:{
                    color:'#fff'
                }
            },
            axisTick:{
                show:false
            }
        },
        yAxis: {
            axisLine:{
                lineStyle:{
                    color:'#fff'
                }
            },
            axisTick:{
                show:false
            },
            splitLine:{
                lineStyle:{
                    color:'#098ada'
                }
            }
        },
        series: [
            {
            name: '国内游',
            type: 'bar',
            barWidth:'50',
                barGap:'200%',
            data: [510],
                itemStyle:{
                    normal:{
                        color:'#ff7e00'
                    }
                }
        },
            {
                name: '国外游',
                type: 'bar',
                barWidth:'50',
                data: [380],
                itemStyle:{
                    normal:{
                        color:'#11b500'
                    }
                }
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart1.setOption(option);

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
                    areaColor: '#2060be',
                    borderColor: '#111',
                    opacity:0.5
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
                symbolSize:10,
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