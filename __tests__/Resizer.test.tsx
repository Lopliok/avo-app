import * as React from "react";
import Enzyme, { shallow, ShallowWrapper } from "enzyme";
import { create, ReactTestRenderer } from "react-test-renderer";

import Resizer, { ResizerProps } from "../src/components/Resizer";

let wrapper: ShallowWrapper<ResizerProps>;
let snapshot: ReactTestRenderer;

beforeEach(() => {
  const resizer = (
    <Resizer
      defHeight={100}
      defWidth={300}
      styles={{
        container: { border: "1px solid black" },
        drag: { right: {}, bottom: {}, corner: {} }
      }}
    >
      <div style={{ background: "lightblue", height: "100%" }}>Example 1</div>
    </Resizer>
  );

  wrapper = shallow(resizer);
  snapshot = create(resizer);
});

describe("<Resizer />", () => {
  test("it matches the snapshot", () => {
    expect(snapshot.toJSON()).toMatchSnapshot();
  });

  it("it should toggle checkbox label after click event", () => {
    expect(wrapper.text()).toEqual("Example 1");

    wrapper
      .find("#test-container-resizer")
      .simulate("mouseDown", { clientX: 0, clientY: 0 })
      .simulate("mouseMove", { clientX: 120, clientY: 100 })
      .simulate("mouseUp");
  });
});
