import { shallow } from "enzyme";
import App from "../../src/components/App";
import * as React from "react";

describe("Test App component", () => {
    it("Render App component and find home component", () => {
        const wrapper = shallow(<App/>)
        const app = wrapper.find("Home");

        expect(app).toHaveLength(1);
    });
});