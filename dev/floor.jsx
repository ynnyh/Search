const React=require('react');

class Floor extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const some=this.props.detail.map((v,i)=><a href={v.url} className="homeLink" rel="external nofollow" target="_blank" title={v.title} key={i}>{v.name}</a>);
        return(
            <div>
                {some}
            </div>
        );
    }
}

module.exports={
  Floor:Floor
};