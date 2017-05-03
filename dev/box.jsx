const React=require('react');
const small=require('./small.jsx');
const change=require('./change.jsx');

class Box extends React.Component{
    constructor(props){
        super(props);
        this.state={
            xuan:
                {
                    id:1,
                    act:'https://www.baidu.com/s',
                    name:'wd',
                    val:'百度一下',
                    bc:'#3385ff'
                },
            err:{
                id:1,
                name:'百度',
                eng:'baidu',
                position:'-140px -9px',
                big:'0 0'
            }
        }
    }
    cho(e){
        var id=e.target.id-1;
        var arr=this.props.server.slice(id,id+1);
        var arr2=this.props.lists.slice(id,id+1);
        this.setState({xuan:arr[0]});
        this.setState({err:arr2[0]});
        console.log(this.state.xuan);
        this.state.xuan={};
        this.state.err={};
    }
    render(){
        // 左侧下拉列表
        const bottom_list = this.props.lists.map((v, i) => <li key={i} id={v.id} name={v.name} className="data-list">
            {/*name拼接*/}
            <span className={v.eng} style={{backgroundPosition: v.position}}></span>
            {v.name}
        </li>);
        return(
            <div>
                <small.Small position={this.state.err.big}/>
                <div className="search-box" style={{display: 'none'}}>
                    <ul className="box-ul" ref="box" onClick={this.cho.bind(this)}>
                        {bottom_list}
                    </ul>
                </div>
                <change.Change name={this.state.xuan.name} act={this.state.xuan.act} val={this.state.xuan.val} bc={this.state.xuan.bc}/>
            </div>
        );
    }
}

module.exports={
    Box:Box
};
