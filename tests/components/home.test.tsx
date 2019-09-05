import { shallow } from "enzyme";
import Home from "../../src/components/home";
import * as React from "react";

describe("Test Home component", () => {
    it("Render Home component and also finds components rendered", () => {
        const home = shallow(<Home />);

        const navigation = home.find("Navigation");
        const body = home.find("Content");

        expect(navigation).toHaveLength(1);
        expect(body).toHaveLength(1);
    });
});