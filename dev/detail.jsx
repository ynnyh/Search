const React=require('react');
const toDoList=require('./toDoList.jsx');

class Detail extends React.Component{
    constructor(props){
        super(props);
        this.state={
            list:["afsfsadf","sfwefwefwef"]
        }
    }
    addToDo(){
        var txt = this.refs.text.value;
        var arr = this.state.list.concat([txt]);
        this.setState({list:arr});
        this.refs.text.value="";
    }
    render(){
        return <div>
            <toDoList.ToDoList list={this.state.list}/>
            <div>
                <input type="text" ref="text"/>
                <input type="submit" value="ADD" onClick={this.addToDo.bind(this)}/>
            </div>
        </div>
    }
}

module.exports={
    Detail:Detail
};