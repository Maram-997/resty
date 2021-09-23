import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './app.scss';

import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';


// since we are using use effect hook we should turn the component into a functional component


// useState => It allows you to add state to your functional components.

// useEffect => you tell React that your component needs to do something after render.
// => The idea to use useEffect hook is to execute code that needs happens during lifecycle of the component instead of on specific user interactions or DOM events.

// class App extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             data: null,
//             requestParams: {}
//         }
//     }
function App(){
const [data, setData] = useState('');
const [requestParams, setrequestParams] = useState({});

  let  callApi =  (requestParams) => {
        // mock output
        
        // const data = {
        //     count: 2,
        //     results:[
        //         {name: 'fake thing 1', url:'http://fakethings.com/1'},
        //         {name: 'fake thing 2', url: 'http://fakethings.com/2'},
        //     ]
        // }
        setrequestParams(requestParams)
      }
        useEffect(async() => {
          const data = await axios.get(requestParams)
          const res = {
            url: requestParams.url,
            method: requestParams.method
          }
          //this.setState({data, requestParams});
          setData({res, requestParams})
          
        }, [requestParams])
    //render() {
        return (
          <React.Fragment>
            <Header />
            <div>Request Method: {requestParams.method}</div>
            <div>URL: {requestParams.url}</div>
            <Form handleApiCall={callApi} />
            <Results data={data} />
            <Footer />
          </React.Fragment>
        );
      }
      //}

//}




export default App;