import React from 'react';
import { prettyPrintJson } from 'pretty-print-json';
// class Results extends React.Component {
//   render() {
//     return (
//       <section>
//         <pre>{this.props.data ? JSON.stringify(this.props.data, undefined, 2) : null}</pre>
//       </section>
//     );
//   }
// }

function Results(props) {
  return (
    <section>
      <pre>{props.data ? prettyPrintJson.stringify(props.data, undefined, 2) : null}</pre>
      <pre>{props.requestParams ? prettyPrintJson.stringify(props.requestParams, undefined, 2) : null}</pre>

    </section>
  )
}

export default Results;