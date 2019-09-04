import React from "react";
import Resizer from "../components/Resizer";

const ResizerExample: React.FC = () => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ padding: 40 }}>
        <Resizer
          defHeight={100}
          defWidth={300}
          styles={{
            container: { border: "1px solid black" },
            drag: { right: {}, bottom: {}, corner: {} }
          }}
        >
          <div style={{ background: "lightblue", height: "100%" }}>
            Example 1
          </div>
        </Resizer>
      </div>

      <Resizer
        defHeight={500}
        defWidth={200}
        styles={{
          container: {
            border: "1px dotted blue"
          },
          drag: {
            right: {
              width: 0,
              height: 0,
              borderTop: "20px solid transparent",
              borderBottom: "20px solid transparent",

              borderLeft: "10px solid green",
              background: "none"
            },
            bottom: {
              width: 0,
              height: 0,
              borderLeft: "20px solid transparent",
              borderRight: "20px solid transparent",
              borderTop: "10px solid #f00",
              background: "none"
            },
            corner: {
              width: 0,
              height: 0,
              borderStyle: "solid",
              borderWidth: "0 0 20px 20px",
              borderColor: "transparent transparent #007bff transparent",
              background: "none"
            }
          }
        }}
      >
        <div style={{ height: "100%" }}>Example 2</div>
      </Resizer>
    </div>
  );
};

export default ResizerExample;
