const React = require('react');
const Floor = require('./floor.jsx');

class Bottom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: [
                {
                    id: 1,
                    title: '前端框架',
                    detail: [
                        {
                            id: 1,
                            name: 'LESS中国',
                            title: 'LESS中国',
                            url: 'http://www.lesscss.net/'
                        },
                        {
                            id: 2,
                            name: 'node.js',
                            title: 'Node.js',
                            url: 'https://nodejs.org/en/'
                        },
                        {
                            id: 3,
                            name: 'bootflat',
                            title: 'bootflat',
                            url: 'http://bootflat.github.io/index.html'
                        },
                        {
                            id: 4,
                            name: 'Easy UI中文网',
                            title: 'jquery EasyUI中文网',
                            url: 'http://www.jeasyui.net/'
                        },
                        {
                            id: 5,
                            name: 'Bootstrap前端框架',
                            title: 'Bootstrap前端框架',
                            url: 'http://www.bootcss.com/'
                        },
                        {
                            id: 6,
                            name: 'Reactjs',
                            title: '创建用户界面的 javascript 库',
                            url: 'http://www.reactjs.cn/'
                        },
                        {
                            id: 7,
                            name: 'three.js',
                            title: 'WebGL框架',
                            url: 'https://threejs.org/'
                        },
                        {
                            id: 8,
                            name: 'thinkjs',
                            title: 'Node.js MVC框架',
                            url: 'https://thinkjs.org/'
                        },
                        {
                            id: 9,
                            name: 'Amaze UI',
                            title: 'Amaze UI',
                            url: 'http://amazeui.org/'
                        },
                        {
                            id: 10,
                            name: 'ZUI框架',
                            title: 'ZUI',
                            url: 'http://www.zui.sexy/'
                        },
                        {
                            id: 11,
                            name: 'BUI',
                            title: 'BUI',
                            url: 'http://www.builive.com/'
                        },
                        {
                            id: 12,
                            name: 'kissyui',
                            title: '阿里集团JS类库',
                            url: 'http://docs.kissyui.com/'
                        },
                        {
                            id: 13,
                            name: 'Semantic UI',
                            title: 'Semantic UI前端框架',
                            url: 'https://semantic-ui.com/'
                        },
                        {
                            id: 14,
                            name: 'jsList',
                            title: '轻量级js库',
                            url: 'http://jslite.io/'
                        }]
                },
                {
                    id: 2,
                    title: '移动框架',
                    detail: [
                        {
                            id: 15,
                            name: 'APICloud',
                            title: 'APICloud',
                            url: 'http://www.apicloud.com/'
                        },
                        {
                            id: 16,
                            name: 'Framework7',
                            title: 'Framework7 移动HTML框架',
                            url: 'http://framework7.taobao.org/'
                        },
                        {
                            id: 17,
                            name: 'light7',
                            title: 'light7',
                            url: 'http://www.light7.org/'
                        },
                        {
                            id: 18,
                            name: 'SUI mobile',
                            title: 'SUI mobile',
                            url: 'http://m.sui.taobao.org/components/'
                        },
                        {
                            id: 19,
                            name: 'Frozen UI',
                            title: 'Frozen UI 腾讯移动端框架',
                            url: 'http://frozenui.github.io/'
                        },
                        {
                            id: 20,
                            name: 'zeptojs',
                            title: 'zeptojs',
                            url: 'http://zeptojs.com/'
                        },
                        {
                            id: 21,
                            name: 'EZoApp',
                            title: 'EZoApp',
                            url: 'https://ezoui.com/app/zh-tw/zh-cn/index.html'
                        },
                        {
                            id: 22,
                            name: 'codiqa',
                            title: 'jquery mobile UI builder(jquery mobileUI编辑器)',
                            url: 'https://codiqa.com/'
                        },
                        {
                            id: 23,
                            name: 'NW.JS',
                            title: 'NW.JS',
                            url: 'https://nwjs.io/'
                        },
                        {
                            id: 24,
                            name: 'Weex',
                            title: '阿里Weex',
                            url: 'https://weex-project.io/references/'
                        },
                        {
                            id: 25,
                            name: 'WeUI',
                            title: '为微信Web服务量身设计',
                            url: 'https://weui.io/'
                        },
                        {
                            id: 26,
                            name: '应用家YYjiacms',
                            title: 'App应用市场网站系统',
                            url: 'http://www.yyjia.com/'
                        },
                        {
                            id: 27,
                            name: 'jquerymobile',
                            title: 'jquerymobile',
                            url: 'http://jquerymobile.com/'
                        }
                    ]
                },
                {
                    id: 3,
                    title: 'JS插件',
                    detail: [
                        {
                            id: 28,
                            name: 'jQuery API',
                            title: 'jQuery API 中文文档',
                            url: 'http://www.jquery123.com/'
                        },
                        {
                            id: 29,
                            name: 'Highcharts中文站',
                            title: 'Highcharts JS图表站',
                            url: 'https://www.hcharts.cn/'
                        },
                        {
                            id: 30,
                            name: 'WebUploader',
                            title: '文件上传组件',
                            url: 'http://fex.baidu.com/webuploader/'
                        },
                        {
                            id: 31,
                            name: 'ECharts图表插件',
                            title: 'ECharts',
                            url: 'http://echarts.baidu.com/'
                        },
                        {
                            id: 32,
                            name: 'morris图表插件',
                            title: 'morris.js图表插件',
                            url: 'https://github.com/morrisjs/morris.js/'
                        },
                        {
                            id: 33,
                            name: 'jQuery.bsgrid',
                            title: 'jQuery.bsgrid',
                            url: 'http://thebestofyouth.com/bsgrid/'
                        },
                        {
                            id: 34,
                            name: 'Bootstrap Table',
                            title: 'Bootstrap Table表格插件',
                            url: 'http://bootstrap-table.wenzhixin.net.cn/zh-cn/'
                        },
                        {
                            id: 35,
                            name: 'Datatables中文网',
                            title: 'Datatables jQuery表格插件',
                            url: 'http://datatables.club/'
                        },
                        {
                            id: 36,
                            name: 'AngularJS中文社区',
                            title: 'AngularJS中文社区',
                            url: 'http://www.angularjs.cn/'
                        },
                        {
                            id: 37,
                            name: 'boot CDN服务',
                            title: 'bootstrap中文网开放CDN服务',
                            url: 'http://www.bootcdn.cn/'
                        },
                        {
                            id: 38,
                            name: '前端公共库CDN服务',
                            title: '360网站卫士常用前端公共库CDN服务',
                            url: 'http://libs.useso.com/js.php'
                        },
                        {
                            id:39,
                            name:'jQuery Tools',
                            title:'非常优秀的Web UI库',
                            url:'http://jquerytools.org/'
                        }
                    ]
                },
                {
                    id:4,
                    title:'工具',
                    detail:[
                        {
                            id:40,
                            name:'图片在线压缩优化',
                            title:'图片在线压缩优化',
                            url:'https://tinypng.com/'
                        },
                        {
                            id:41,
                            name:'前端测试服务',
                            title:'前端测试服务',
                            url:'http://fts.aliyun.com/'
                        },
                        {
                            id:42,
                            name:'云配色',
                            title:'网页配色',
                            url:'http://card.qdsay.com/adapt?url=http://www.h-ui.net/'
                        },
                        {
                            id:43,
                            name:'快切助手',
                            title:'在线网页切图工具，智能网页制作工具',
                            url:'http://kuaiqie.qdsay.com/'
                        },
                        {
                            id:44,
                            name:'开发工具箱',
                            title:'开发工具箱',
                            url:'http://www.box3.cn/'
                        },
                        {
                            id:45,
                            name:'CSS3阴影在线生成器',
                            title:'CSS3阴影在线生成器',
                            url:'http://layerstyles.org/builder.html'
                        },
                        {
                            id:46,
                            name:'问卷网',
                            title:'问卷网',
                            url:'https://www.wenjuan.net/'
                        },
                        {
                            id:47,
                            name:'Validation Engine',
                            title:'jQuery Validation Engine',
                            url:'http://code.ciaoca.com/jquery/validation_engine/'
                        },
                        {
                            id:48,
                            name:'麦客CRM',
                            title:'麦客CRM',
                            url:'http://www.mikecrm.com/'
                        },
                        {
                            id:49,
                            name:'IcoMoon',
                            title:'在线图标字体制作',
                            url:'https://icomoon.io/'
                        },
                        {
                            id:50,
                            name:'百度脑图',
                            title:'百度脑图',
                            url:'http://naotu.baidu.com/'
                        },
                        {
                            id:51,
                            name:'niceValidator',
                            title:'niceValidator表单验证',
                            url:'http://niceue.com/validator/'
                        }
                    ]
                },
                {
                    id:5,
                    title:'移动开发',
                    detail:[
                        {
                            id:52,
                            name:'IOS开源代码库',
                            title:'IOS开源代码库',
                            url:'http://code4app.com/'
                        },
                        {
                            id:53,
                            name:'eoeAndroid社区',
                            title:'Android开发者社区',
                            url:'http://www.eoeandroid.com/'
                        },
                        {
                            id:54,
                            name:'DataEye',
                            title:'移动端数据分析服务平台',
                            url:'http://www.dataeye.com/'
                        },
                        {
                            id:55,
                            name:'信鸽',
                            title:'腾讯云移动推送',
                            url:'http://xg.qq.com/'
                        },
                        {
                            id:56,
                            name:'API Store',
                            title:'API Store',
                            url:'http://apistore.baidu.com/'
                        },
                        {
                            id:57,
                            name:'jpush极光推送',
                            title:'极光推送',
                            url:'http://www.jpush.cn/'
                        },
                        {
                            id:58,
                            name:'环信',
                            title:'即时通讯云',
                            url:'http://www.easemob.com/'
                        },
                        {
                            id:59,
                            name:'融云',
                            title:'即时通讯云',
                            url:'http://www.rongcloud.cn/'
                        },
                        {
                            id:60,
                            name:'容联',
                            title:'即时通讯云',
                            url:'http://www.yuntongxun.com/'
                        },
                        {
                            id:61,
                            name:'App内分享',
                            title:'App内分享',
                            url:'http://sharesdk.cn/'
                        },
                        {
                            id:62,
                            name:'Android开源代码库',
                            title:'Android开源代码库',
                            url:'http://a.code4app.com/'
                        },
                        {
                            id:63,
                            name:'AnySDK',
                            title:'AnySDK',
                            url:'http://www.anysdk.com/'
                        },
                        {
                            id:64,
                            name:'蒲公英',
                            title:'应用内测专家',
                            url:'http://www.pgyer.com/'
                        }
                    ]
                }
            ]
        }
    }


    render() {
        const title = this.state.title.map((v, i) => <div className="flo" key={i}>
            <div className="fly" key={i}>{v.title}</div>
            <Floor.Floor detail={v.detail}/></div>);

        const floor = this.state.title.map((v, i) => <div key={i} className="floli nor">{v.title}</div>);
        return (
            <div className="bottom">
                {title}
                <div className="floor">
                    {floor}
                    <div className="floli turn">返回顶部</div>
                </div>
            </div>
        );
    }
}
module.exports = {
    Bottom: Bottom
};