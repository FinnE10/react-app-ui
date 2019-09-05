import * as React from "react";
import { Component } from "react";
import Navigation from "./header/nagivation";
import Content from "./body/content"

class Home extends Component{
    render(){
        return(
            <>
                <Navigation />
                <Content/>
            </>
        );
    };
}
export default Home;