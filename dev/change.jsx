const React=require('React');
class Change extends React.Component{
    constructor(props){
        super(props);
    }
    //首次点击会重复一次百度
    render(){
        return(
            <div>
                <form id="search-form" action={this.props.act} method="get" target="_blank">
                    {/*{this.props.xuan}*/}
                    <div className="search-input">
                        <input type="text" name={this.props.name} className="input2s" autoComplete="off"/>
                    </div>
                    <input type="submit" style={{backgroundColor:this.props.bc}} value={this.props.val} className="search-submit"/>
                </form>
            </div>
        );
    }
}
module.exports={
    Change:Change
}