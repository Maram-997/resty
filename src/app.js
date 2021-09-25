import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import './app.scss';

import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import History from './components/history';

// since we are using use effect hook we should turn the component into a functional component


// useState => It allows you to add state to your functional components.

// useEffect => you tell React that your component needs to do something after render.
// => The idea to use useEffect hook is to execute code that needs happens during lifecycle of the component instead of on specific user interactions or DOM events.

// 1. initialState
// 2. reducer function
// 3.component function containing =>
  // a. useReducer
  // b. handleCase function (state,action=>containing type of the case)

// * dispatch function => send off the action of object(dispatch) to a destination or for a purpose.
// (...) Spread syntax => Spread syntax can be used when all elements from an object or array need to be included in a list of some kind. => expand the element

const initialState = {
  data: '',
  requestParams:{},
  history:[],
}

function reducer(state,action){
  switch (action.type) {
    case "GET_API":
      
      return{
        ...state,
        history:[...state.history, action.payload],
        data:{},
        requestParams:{},
        choosen:{}
      };
      case "CHOOSEN_API":
      
      return{
        ...state,
        choosen: state.history.filter(
          (element) => element.url === element.payload
        )[0]
      };
  
    default:
      return state;
  }
}


function App(){
 const [data, setData] = useState(null);
 const [requestParams, setrequestParams] = useState({});

const [state, dispatch] = useReducer(reducer, initialState)

async function handleGetApi(requestParams){
  const dataFrom = await axios.get(requestParams.url)
  const data = {
    url:requestParams.url,
    method: requestParams.method,
    results: dataFrom.data.results
  
  }
  const action = {
    type: 'GET_API',
    payload: data
  }
  dispatch(action);
   setData(data.results)
}
  function  callApi(requestParams) {
    setrequestParams(requestParams)
    console.log(requestParams);
    console.log(data);
    console.log(history);
  }

  function choosenReq(requestParams){
    const action = {
     type: 'CHOOSEN_API',
     payload:requestParams
    }

  }
  // useEffect(async() => {

  //     setData(res)
          
  //       }, [requestParams])
  
        return (
          <React.Fragment>
            <Header />
            <div>Request Method: {requestParams.method}</div>
            <div>URL: {requestParams.url}</div>
            <Form handleApiCall={callApi} />
            <Results selected={()=>choosenReq(history.url)}/>
            <History history={state.history} />
            <Footer />
          </React.Fragment>
        );
      }
   




export default App;