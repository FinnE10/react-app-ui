import * as React from "react";
import * as ReactDOM from "react-dom";
import { Component } from "react";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

import App from "./components/app";

require('bootstrap')
require('jquery/src/jquery')

class Index extends Component {
    render() {
      return( <App />)
    }
};

ReactDOM.render(<Index />, document.getElementById("root"));