import { shallow } from "enzyme";
import Content from "../../../src/components/body/content";
import * as React from "react";

describe("Test Content component", () => {
    it("Renders Content component and finds Jumbotron component", () => {
        const wrapper = shallow(<Content />);
        const jumbotron = wrapper.find("Jumbotron");

        expect(jumbotron).toHaveLength(1);
    });
});