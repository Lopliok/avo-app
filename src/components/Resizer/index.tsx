import React, { ReactNode, useEffect, useState } from "react";
import { Container, Drag } from "./styled";

export interface ResizerProps {
  children: ReactNode;
  defWidth: number;
  defHeight: number;
  dragComponents?: {
    DragCorner: React.ReactNode;
    DragSingleDirection: React.ReactNode;
  };
  styles?: {
    container?: {};
    drag?: {
      right: {};
      bottom: {};
      corner: {};
    };
  };
}

type Direction = "vertical" | "horizontal" | "both";

type Start =
  | {
      positionX: number;
      positionY: number;
      width: number;
      height: number;
      direction: Direction;
    }
  | undefined;

const Resizer: React.FunctionComponent<ResizerProps> = ({
  children,
  defHeight,
  defWidth,
  dragComponents,
  styles
}: ResizerProps) => {
  const [width, setWidth] = useState(defWidth);
  const [height, setHeight] = useState(defHeight);

  const [start, setStart] = useState<Start>();

  const onStartDrag = (
    e: React.MouseEvent<HTMLDivElement>,
    direction: Direction
  ) => {
    setStart({
      positionX: e.clientX,
      positionY: e.clientY,
      width,
      height,
      direction
    });
  };

  const dragging = (e: MouseEvent) => {
    if (start) {
      switch (start.direction) {
        case "vertical":
          setWidth(start.width + e.clientX - start.positionX);
          break;
        case "horizontal":
          setHeight(start.height + e.clientY - start.positionY);
          break;
        case "both":
          setWidth(start.width + e.clientX - start.positionX);
          setHeight(start.height + e.clientY - start.positionY);
          break;
      }
    }
  };

  const dragEnd = () => {
    setStart(undefined);
    window.removeEventListener("mousemove", dragging);
    window.removeEventListener("mouseUp", dragEnd);
  };

  useEffect(() => {
    if (start) {
      window.addEventListener("mouseup", dragEnd);
      window.addEventListener("mousemove", dragging);
    }
  }, [start]);

  const containerStyles = styles && styles.container;
  const dragStyles = (styles && styles.drag) || {
    right: {},
    bottom: {},
    corner: {}
  };
  const DragSingleDirection =
    dragComponents && dragComponents.DragSingleDirection;
  const DragCorner = dragComponents && dragComponents.DragCorner;

  return (
    <Container
      id="test-container-resizer"
      style={{ width, height, ...containerStyles }}
    >
      <Drag
        variant="right"
        onMouseDown={e => onStartDrag(e, "vertical")}
        style={dragStyles.right}
      >
        {DragSingleDirection}
      </Drag>
      <Drag
        variant="bottom"
        onMouseDown={e => onStartDrag(e, "horizontal")}
        style={dragStyles.bottom}
      >
        {DragSingleDirection}
      </Drag>
      <Drag
        id="test-corner-drag"
        variant="corner"
        onMouseDown={e => onStartDrag(e, "both")}
        style={dragStyles.corner}
      >
        {DragCorner}
      </Drag>
      {children}
    </Container>
  );
};

export default Resizer;
