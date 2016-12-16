optionradar = {
    title: {
        text: '房价各要素关系',
        subtext: '北京市朝阳区左家庄',
        x:'right',
        y:'bottom'
    },
    tooltip: {
        trigger: 'item',
        backgroundColor : 'rgba(0,0,250,0.2)'
    },
    legend: {
        data: (function (){
            var list = ['区域1','区域2','区域3','区域4','区域5','区域6','区域7','区域8','区域9','区域10','区域11','区域12','区域13','区域14','区域15','区域16','区域17','区域18','区域19','区域20'];
            return list;
        })()
    },
    visualMap: {
            min: 0,
            max: 1,
            text:['High','Low'],
            realtime: false,
            calculable: true,
            inRange: {
                color: ['orangered','yellow', 'lightskyblue']
            }
        },
    radar: {
       indicator : [
           { text: '房价', max: 1},
           { text: '写字楼', max:1 },
           { text: '地铁站', max: 1},
           { text: '公交车站', max: 1},
           { text: '商场', max: 1}
        ]
    },
    series : (function (){
        var series = [];
            series.push({
                name: '区域1',
                type: 'radar',
                symbol: 'none',
                itemStyle: {
                    normal: {
                        lineStyle: {
                          width:5
                        }
                    },
                    emphasis : {
                        areaStyle: {color:'rgba(0,250,0,0.3)'}
                    }
                },
                data:[
                  {
                    value:[
                        0,0.301,0.333,0.381,0.027,0.438
                    ],
                    name:'区域1'
                  }
                ]
            });
            series.push({
                    name: '区域2',
                    type: 'radar',
                    symbol: 'none',
                    itemStyle: {
                        normal: {
                            lineStyle: {                         
                              width:5
                            }
                        },
                        emphasis : {
                            areaStyle: {color:'rgba(0,250,0,0.3)'}
                        }
                    },
                    data:[
                      {
                        value:[
                            0.040,0.331,1,0.810,0.027,0.5
                        ],
                        name:'区域2'
                      }
                    ]
                });
            series.push({
                    name: '区域3',
                    type: 'radar',
                    symbol: 'none',
                    itemStyle: {
                        normal: {
                            lineStyle: {
                            width:5
                            }
                        },
                        emphasis : {
                            areaStyle: {color:'rgba(0,250,0,0.3)'}
                        }
                    },
                    data:[
                      {
                        value:[
                            0.081,0.360,1,0.476,0,0.125
                        ],
                        name:'区域3'
                      }
                    ]
                });
            series.push({
                    name: '区域4',
                    type: 'radar',
                    symbol: 'none',
                    itemStyle: {
                        normal: {
                            lineStyle: {
                              width:5
                            }
                        },
                        emphasis : {
                            areaStyle: {color:'rgba(0,250,0,0.3)'}
                        }
                    },
                    data:[
                      {
                        value:[
                            0.142,0,1,1,0.081,1
                        ],
                        name:'区域4'
                      }
                    ]
                });
            series.push({
                    name: '区域5',
                    type: 'radar',
                    symbol: 'none',
                    itemStyle: {
                        normal: {
                            lineStyle: {
                              width:5
                            }
                        },
                        emphasis : {
                            areaStyle: {color:'rgba(0,250,0,0.3)'}
                        }
                    },
                    data:[
                      {
                        value:[
                            0.174,0.392,0.667,0.857,0.162,0.813
                        ],
                        name:'区域5'
                      }
                    ]
                });
            series.push({
                    name: '区域6',
                    type: 'radar',
                    symbol: 'none',
                    itemStyle: {
                        normal: {
                            lineStyle: {
                             width:5
                            }
                        },
                        emphasis : {
                            areaStyle: {color:'rgba(0,250,0,0.3)'}
                        }
                    },
                    data:[
                      {
                        value:[
                            0.218,0.024,1,0.857,0.189,0.938
                        ],
                        name:'区域6'
                      }
                    ]
                });
            series.push({
                    name: '区域7',
                    type: 'radar',
                    symbol: 'none',
                    itemStyle: {
                        normal: {
                            lineStyle: {
                              width:5
                            }
                        },
                        emphasis : {
                            areaStyle: {color:'rgba(0,250,0,0.3)'}
                        }
                    },
                    data:[
                      {
                        value:[
                            0.292,0.235,0.667,0.667,0.351,0.625
                        ],
                        name:'区域7'
                      }
                    ]
                });
            series.push({
                    name: '区域8',
                    type: 'radar',
                    symbol: 'none',
                    itemStyle: {
                        normal: {
                            lineStyle: {
                              width:5
                            }
                        },
                        emphasis : {
                            areaStyle: {color:'rgba(0,250,0,0.3)'}
                        }
                    },
                    data:[
                      {
                        value:[
                            0.307,0.477,0.333,0.524,0.351,0.813
                        ],
                        name:'区域8'
                      }
                    ]
                });
            series.push({
                    name: '区域9',
                    type: 'radar',
                    symbol: 'none',
                    itemStyle: {
                        normal: {
                            lineStyle: {
                             width:5
                            }
                        },
                        emphasis : {
                            areaStyle: {color:'rgba(0,250,0,0.3)'}
                        }
                    },
                    data:[
                      {
                        value:[
                            0,0.325,0.189,0.667,0.857,0.162,0.688
                        ],
                        name:'区域9'
                      }
                    ]
                });
            series.push({
                    name: '区域10',
                    type: 'radar',
                    symbol: 'none',
                    itemStyle: {
                        normal: {
                            lineStyle: {
                             width:5
                            }
                        },
                        emphasis : {
                            areaStyle: {color:'rgba(0,250,0,0.3)'}
                        }
                    },
                    data:[
                      {
                        value:[
                            0.382,0.234,0.333,0.571,0.378,0.375
                        ],
                        name:'区域10'
                      }
                    ]
                });
            series.push({
                    name: '区域11',
                    type: 'radar',
                    symbol: 'none',
                    itemStyle: {
                        normal: {
                            lineStyle: {
                              width:5
                            }
                        },
                        emphasis : {
                            areaStyle: {color:'rgba(0,250,0,0.3)'}
                        }
                    },
                    data:[
                      {
                        value:[
                            0.387,0.392,0.667,0.667,0.514,0.75
                        ],
                        name:'区域11'
                      }
                    ]
                });
            series.push({
                    name: '区域12',
                    type: 'radar',
                    symbol: 'none',
                    itemStyle: {
                        normal: {
                            lineStyle: {
                            width:5
                            }
                        },
                        emphasis : {
                            areaStyle: {color:'rgba(0,250,0,0.3)'}
                        }
                    },
                    data:[
                      {
                        value:[
                            0.413,0.702,0,0.048,0.838,0.313
                        ],
                        name:'区域12'
                      }
                    ]
                });
            series.push({
                    name: '区域13',
                    type: 'radar',
                    symbol: 'none',
                    itemStyle: {
                        normal: {
                            lineStyle: {
                             width:5
                            }
                        },
                        emphasis : {
                            areaStyle: {color:'rgba(0,250,0,0.3)'}
                        }
                    },
                    data:[
                      {
                        value:[
                            0.435,0.506,0.667,0,0.054,0
                        ],
                        name:'区域13'
                      }
                    ]
                });
            series.push({
                    name: '区域14',
                    type: 'radar',
                    symbol: 'none',
                    itemStyle: {
                        normal: {
                            lineStyle: {
                              width:5
                            }
                        },
                        emphasis : {
                            areaStyle: {color:'rgba(0,250,0,0.3)'}
                        }
                    },
                    data:[
                      {
                        value:[
                            0.485,0.511,0.333,0.524,0.811,0.938
                        ],
                        name:'区域14'
                      }
                    ]
                });
            series.push({
                    name: '区域15',
                    type: 'radar',
                    symbol: 'none',
                    itemStyle: {
                        normal: {
                            lineStyle: {
                             width:5
                            }
                        },
                        emphasis : {
                            areaStyle: {color:'rgba(0,250,0,0.3)'}
                        }
                    },
                    data:[
                      {
                        value:[
                            0.510,0.526,0,0.381,0.919,0.813
                        ],
                        name:'区域15'
                      }
                    ]
                });
            series.push({
                    name: '区域16',
                    type: 'radar',
                    symbol: 'none',
                    itemStyle: {
                        normal: {
                            lineStyle: {
                              width:5
                            }
                        },
                        emphasis : {
                            areaStyle: {color:'rgba(0,250,0,0.3)'}
                        }
                    },
                    data:[
                      {
                        value:[
                            0.628,0.684,0.667,0.143,0.838,0.438
                        ],
                        name:'区域16'
                      }
                    ]
                });
             series.push({
                    name: '区域17',
                    type: 'radar',
                    symbol: 'none',
                    itemStyle: {
                        normal: {
                            lineStyle: {
                              width:5
                            }
                        },
                        emphasis : {
                            areaStyle: {color:'rgba(0,250,0,0.3)'}
                        }
                    },
                    data:[
                      {
                        value:[
                            0.664,1,0,0,1,0.375
                        ],
                        name:'区域17'
                      }
                    ]
                });
              series.push({
                    name: '区域18',
                    type: 'radar',
                    symbol: 'none',
                    itemStyle: {
                        normal: {
                            lineStyle: {
                             width:5
                            }
                        },
                        emphasis : {
                            areaStyle: {color:'rgba(0,250,0,0.3)'}
                        }
                    },
                    data:[
                      {
                        value:[
                            0.837,0.684,0.667,0.190,0.595,0.188
                        ],
                        name:'区域18'
                      }
                    ]
                });
               series.push({
                    name: '区域19',
                    type: 'radar',
                    symbol: 'none',
                    itemStyle: {
                        normal: {
                            lineStyle: {
                             width:5
                            }
                        },
                        emphasis : {
                            areaStyle: {color:'rgba(0,250,0,0.3)'}
                        }
                    },
                    data:[
                      {
                        value:[
                            0.839,0.941,0.667,0.190,0.892,0.438
                        ],
                        name:'区域19'
                      }
                    ]
                });
                series.push({
                    name: '区域20',
                    type: 'radar',
                    symbol: 'none',
                    itemStyle: {
                        normal: {
                            lineStyle: {
                             width:5
                            }
                        },
                        emphasis : {
                            areaStyle: {color:'rgba(0,250,0,0.3)'}
                        }
                    },
                    data:[
                      {
                        value:[
                            1,0.962,0.667,0.143,0.730,0.063
                        ],
                        name:'区域20'
                      }
                    ]
                });
        return series;
    })()
};
