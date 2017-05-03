const React=require('react');

class Tui extends React.Component{
    constructor(props){
        super(props);
        this.state={
            usually:[
                {
                    name:'百度一下',
                    url:'#'
                },
                {
                    name:'爱淘宝',
                    url:'#'
                },
                {
                    name:'优酷',
                    url:'#'
                },
                {
                    name:'爱奇艺',
                    url:'#'
                },
                {
                    name:'腾讯视频',
                    url:'#'
                }
            ]
        }
    }
    render(){
        const usr=this.state.usually.map((v,i)=> <a href={v.url} key={i} className="tuiName">{v.name}</a>);
        return(
            <div className="tui">
                <div className="tui-title">推荐</div>
                <div className="tuiRight">
                    {usr}
                </div>
            </div>
        );
    }
}
module.exports={
    Tui:Tui
};