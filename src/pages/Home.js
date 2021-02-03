import React, { Component } from 'react'
import API from '../utils/API'
import Table from '../components/Table'

class Home extends Component {
    state = {
        results: []
    };

    componentDidMount() {
        API.getRandomEmployees()
            .then(res => {
                this.setState({ results: res.data.results })
                console.log(res.data.results)
            })


    }
    render() {
        return (
            <div>
                {this.state.results.length ? <Table results={this.state.results}/> : ""}
                {/* if there are results then load the Table component.  If not load empty string.*/}
            </div>
        )
    }
}
export default Home;