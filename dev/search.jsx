const React = require('react');
const small=require('./small.jsx');
const change=require('./change.jsx');
const box=require('./box.jsx');

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ['新闻', '网页', '贴吧', '知道', '音乐', '图片', '视频', '地图', '文库'],
            lists:[
                {
                    id:1,
                    name:'百度',
                    eng:'baidu',
                    position:'-140px -9px',
                    big:'0 0'
                },
                {
                    id:2,
                    name:'搜狗',
                    eng:'sougou',
                    position:'-140px -166px',
                    big:'0 -156px'
                },
                {
                    id:3,
                    name:'多重搜',
                    eng:'isearch',
                    position:'-299px -270px',
                    big:'-163px -260px'
                },
                {
                    id:4,
                    name:'必应',
                    eng:'bing',
                    position:'-140px -113px',
                    big:'0 -104px'
                },
                {
                    id:5,
                    name:'淘宝',
                    eng:'taobao',
                    position:'-140px -269px',
                    big:'0 -260px'
                },
                {
                    id:6,
                    name:'爱淘宝',
                    eng:'aitaobao',
                    position:'-140px -321px',
                    big:'0 -312px'
                },
                {
                    id:7,
                    name:'优酷',
                    eng:'youku',
                    position:'-140px -218px',
                    big:'0 -208px'
                }
            ],
            server:[
                {
                    id:1,
                    act:'https://www.baidu.com/s',
                    name:'wd',
                    val:'百度一下',
                    bc:'#3385ff'
                },
                {
                    id:2,
                    act:'https://www.sogou.com/sogou',
                    name:'query',
                    val:'搜狗搜索',
                    bc:'#fa4815'
                },
                {
                    id:3,
                    act:'http://s.uc.cn/',
                    name:'q',
                    val:'多重搜索',
                    bc:'#ff7e00'
                },
                {
                    id:4,
                    act:'http://cn.bing.com/search',
                    name:'q',
                    val:'必应搜索',
                    bc:'#ffb802'
                },
                {
                    id:5,
                    act:'https://s.taobao.com/search',
                    name:'q',
                    val:'淘宝搜索',
                    bc:'#ff4000'
                },
                {
                    id:6,
                    act:'http://ai.taobao.com/search/index.htm',
                    name:'key',
                    val:'淘宝搜索',
                    bc:'#f03a26'
                },
                {
                    id:7,
                    act:'http://www.soku.com/v',
                    name:'keyword',
                    val:'优酷搜索',
                    bc:'#00a7e0'
                }
            ]
        };
    }
    // test begin
    componentDidMount(){
        fetch('http://localhost:8080/')
            .then((res)=>res.json())
            .then((json)=>{this.setState({})})
    }
    //over

    render() {
        const {data}=this.state;
        //分类(音乐，视频等)
        const yn_list = data.map((v, i) => <li key={i} className="list-li">{v}</li>
        );

        return (
            <div className="search">
                <div className="search-container">
                    <ul className="search-list">
                        {yn_list}
                    </ul>
                    <div className="search-form">
                        <box.Box lists={this.state.lists} server={this.state.server} />
                    </div>
                </div>
            </div>
        );
    }
}
module.exports = {
    Search: Search
};