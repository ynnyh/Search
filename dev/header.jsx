const React=require('react');

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            nav:[
                {
                    name:'首页'
                },
                {
                    name:'前端推荐'
                },
                {
                    name:'排行榜'
                }
            ]
        }
    }
    render(){
        const fenlei=this.state.nav.map((v,i)=> <a href="#" className="daohang" key={i}>{v.name}</a>);
        return(
            <div className="header">
                <div className="header-container">
                    {/*左侧logo链接*/}
                    <a href="#" className="logo-link">
                        前端导航
                        {/*<img src="/public/img/uclogo.png" alt="" className="logo"/>*/}
                    </a>
                    {/*中间导航*/}
                    <div className="middle">
                        {fenlei}
                    </div>
                    {/*右侧天气*/}
                    <div className="weather">
                        <iframe allowTransparency="true" frameBorder="0" width="180" height="50" scrolling="no" src="//tianqi.2345.com/plugin/widget/index.htm?s=3&z=2&t=1&v=0&d=3&bd=0&k=&f=&q=1&e=1&a=1&c=54511&w=180&h=50&align=center"></iframe>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports={
    Header:Header
}