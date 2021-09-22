import React, { useState } from 'react';
import axios from 'axios';
import './app.scss';

import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null,
            requestParams: {}
        }
    }

    callApi = async (requestParams) => {
        // mock output
        
        // const data = {
        //     count: 2,
        //     results:[
        //         {name: 'fake thing 1', url:'http://fakethings.com/1'},
        //         {name: 'fake thing 2', url: 'http://fakethings.com/2'},
        //     ]
        // }
        const data = await axios.get(requestParams.url)
        const res = {
            headers: [data.headers],
            results: [data.data.results]
        }
        this.setState({data, requestParams});
    }
    render() {
        return (
          <React.Fragment>
            <Header />
            <div>Request Method: {this.state.requestParams.method}</div>
            <div>URL: {this.state.requestParams.url}</div>
            <Form handleApiCall={this.callApi} />
            <Results data={this.state.data} />
            <Footer />
          </React.Fragment>
        );
      }

}




export default App;