const React=require('react');

class Chang extends React.Component{
    constructor(props){
        super(props);
        this.state={
            use:[
                {
                    id:1,
                    name:'版本控制系统',
                    title:'版本控制系统',
                    url:'#'
                },
                {
                    id:2,
                    name:'百度一下',
                    title:'百度',
                    url:'#'
                },
                {
                    id:3,
                    name:'淘宝',
                    title:'淘宝',
                    url:'#'
                },
                {
                    id:4,
                    name:'腾讯视频',
                    title:'腾讯视频',
                    url:'#'
                }
            ]
        }
    }
    render(){
        const cont=this.state.use.map((v,i)=><li className="user" key={i}><a href={v.url} key={i} title={v.title}>{v.name}</a></li>);
        return(
            <div className="usually">
                <div className="set">设置</div>
                <ul className="content">
                    {cont}
                </ul>
            </div>
        );
    }
}
module.exports={
    Chang:Chang
}