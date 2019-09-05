import * as React from "react";
import * as ReactDOM from "react-dom";
import { Component } from "react";
import App from "./components/app";
require('bootstrap')
require('jquery/src/jquery')

class Index extends Component {
    render() {
      return( <App />)
    }
};

ReactDOM.render(<Index />, document.getElementById("root"));