const React = require('react');

class Small extends React.Component {
    render() {
        return (
            <a href="#" className="search-logo">
                <div className="search-baidu-logo search-all-logo" style={{backgroundPosition:this.props.position}}></div>
                <span className="bottom"></span>
            </a>
        );
    }
}

module.exports = {
    Small: Small
}