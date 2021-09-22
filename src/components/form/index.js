import React, { useState } from 'react';

import './form.scss';

// class Form extends React.Component {

//   handleSubmit = e => {
//     e.preventDefault();
//     const formData = {
//       method:'GET',
//       url: 'https://pokeapi.co/api/v2/pokemon',
//     };
//     this.props.handleApiCall(formData);
//   }

//   render() {
//     return (
//       <>
//         <form onSubmit={this.handleSubmit}>
//           <label >
//             <span>URL: </span>
//             <input name='url' type='text' />
//             <button type="submit">GO!</button>
//           </label>
//           <label className="methods">
//             <span id="get">GET</span>
//             <span id="post">POST</span>
//             <span id="put">PUT</span>
//             <span id="delete">DELETE</span>
//           </label>
//         </form>
//       </>
//     );
//   }
// }
function Form(props) {

const [url, setUrl] = useState('');

const [method, setMethod] = useState('Get');

 let handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      // method: 'GET',
      // url: 'https://pokeapi.co/api/v2/pokemon',
      method: `${method}`,
      url: `${ url}`
    };

    props.handleApiCall(formData);
  }
  function urlSubmit(e){
    setUrl(e.target.value)
  }

  function methodSubmit(e){
    setMethod(e.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input name='url' type='text' onChange={urlSubmit} />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <span id="get" onClick={methodSubmit}>GET</span>
          <span id="post" onClick={methodSubmit}>POST</span>
          <span id="put" onClick={methodSubmit}>PUT</span>
          <span id="delete" onClick={methodSubmit}>DELETE</span>
        </label>
      </form>
    </>
  );

}



export default Form;