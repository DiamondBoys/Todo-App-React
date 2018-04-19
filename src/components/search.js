import React, { Component } from 'react';

class Search extends Component{
    constructor(props) {
        super(props)
        this.state = {
            strSearch: ' '
        };
        this.handleSearch = this.handleSearch.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClear = this.handleClear.bind(this);
    }

    handleChange(e) {
        this.setState({strSearch: e.target.value});
    }

    handleSearch() {
        console.log(this.state.strSearch);
    }

    handleClear() {
        this.setState({strSearch: ' '});
    }

    render() {
        return(
            <div className="search">
                <input type="text" value={this.props.value} onChange={e => this.props.onSearch(e.target.value)} placeholder="Seacrh ..."/>
                <button onClick={this.handleSearch}>Search</button>
                <button onClick={this.handleClear}>Clear</button>
            </div>
        );
    }
}

export default Search