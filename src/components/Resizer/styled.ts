import React, { ReactNode, useState, useEffect } from "react";
import styled, { css } from "styled-components";

interface DragProps {
    variant: "right" | "bottom" | "corner";
}

export const Container = styled.div`
  position: relative;
  background: white;
  user-select: none;
`;

export const Drag = styled.div`
  position: absolute;
  background: grey;
  ${(props: DragProps) => {
        switch (props.variant) {
            case "right":
                return css`
          right: -10px;
          top: 35px;
          width: 10px;
          height: 30px;
          cursor: e-resize;
        `;
            case "bottom":
                return css`
          left: 20px;
          bottom: -10px;
          width: 30px;
          height: 10px;
          cursor: s-resize;
        `;
            case "corner":
                return css`
          right: -10px;
          bottom: -10px;
          width: 10px;
          height: 10px;
        `;
        }
    }}
`;


