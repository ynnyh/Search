const React=require('react');

class ToDoList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <ul>{this.props.list.map((v,i)=>{
            return <li key={i}>{v}</li>
        })}</ul>
    }
}
module.exports={
    ToDoList:ToDoList
}