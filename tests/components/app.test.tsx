import { shallow } from "enzyme";
import App from "../../src/components/App";
import * as React from "react";

describe("Should render app", () => {
    it("Render app and find home", () => {
        const wrapper = shallow(<App/>)
        const app = wrapper.find("Home");

        expect(app).toHaveLength(1);
    });
});