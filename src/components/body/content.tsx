import * as React from "react";
import { Component } from "react";
import { Jumbotron } from 'react-bootstrap'

export class Content extends Component{
    render() {
        return(
            <Jumbotron>
                <h1>Hello world</h1>
            </Jumbotron>
        );
    };
};

export default Content;