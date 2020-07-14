import { mount } from "enzyme";
import Navigation from "../../../src/components/header/nagivation";
import * as React from "react";

describe("Test Navigation component", () =>{
    describe("Render Navigation component and finds all components", () => {
        const wrapper = mount(<Navigation />);
        it("Find Navbar parent comoponent", () => {
            const navbar = wrapper.find("Navbar");
            expect(navbar).toHaveLength(1);
        });
        it("Find Nav child components", () => {
            const navs = wrapper.find("Nav");
            expect(navs).toHaveLength(2);
        });
        it("Find NavbarBrand", () => {
            const navbarBrand = wrapper.find(".navbar-brand");
            expect(navbarBrand).toHaveLength(1);
        });
    });
    
    describe("Nav links", () => {
        const wrapper = mount(<Navigation />);
        it("Instagram icon is found", () => {
            
            const instagramLink = wrapper.find(".fa-instagram");
            expect(instagramLink).toHaveLength(1);
        });
        it("Twitter icon is found", () => {
            const twitterLink = wrapper.find(".fa-twitter");
            expect(twitterLink).toHaveLength(1);
        });
        it("GitHub icon is found", () => {
            const githubLink = wrapper.find(".fa-github");
            expect(githubLink).toHaveLength(1);
        });
    });
    
});