import { mount } from "enzyme";
import Navigation from "../../../src/components/header/nagivation";
import * as React from "react";

describe("Test Navigation component", () =>{
    it("Render Navigation component and finds all components", () => {
        const wrapper = mount(<Navigation />);

        const navbar = wrapper.find("Navbar");
        const navs = wrapper.find("Nav");
        const navbarBrand = wrapper.find(".navbar-brand");
        const icons = wrapper.find("FontAwesomeIcon");

        expect(navbar).toHaveLength(1);
        expect(navs).toHaveLength(2);
        expect(navbarBrand).toHaveLength(1);
        expect(icons).toHaveLength(3);
    });
});