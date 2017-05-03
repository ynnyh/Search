const React=require('react');
const ReactDOM=require('react-dom');
const Header=require('./header.jsx');
const Search=require('./search.jsx');
// const Detail=require('./detail.jsx');
const tuijian=require('./tuijian.jsx');
const usually=require('./usually.jsx');
const net=require('./net.jsx');


class All extends React.Component{
    render(){
        return(
            <div>
                <Header.Header />
                <Search.Search />
                {/*<Detail.Detail />*/}
                <tuijian.Tui />
                <usually.Chang />
                <net.Bottom />
            </div>
        );
    }
}
ReactDOM.render(<All />,document.getElementById('page'));