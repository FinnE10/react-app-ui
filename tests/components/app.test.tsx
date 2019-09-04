import { shallow, mount,configure } from "enzyme";
import App from "../../src/components/App";
import React = require("react");

describe("Should render app", () => {
    it("Render app", () => {
        const wrapper = mount(<App/>)
        const app = wrapper.find("Home");

        expect(app).toHaveLength(1);
    });
});