import { mount } from "enzyme";
import App from "../../src/components/App";
import * as React from "react";

describe("Should render app", () => {
    it("Render app", () => {
        const wrapper = mount(<App/>)
        const app = wrapper.find("Home");

        expect(app).toHaveLength(1);
    });
});