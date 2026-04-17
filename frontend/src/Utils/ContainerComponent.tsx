import { useNode } from "@craftjs/core";
import React from "react";
import type { CSSProperties } from "react";

interface ContainerProps {
  background?: string;
  padding?: number[];
  children: React.ReactNode;
  gap?: number;
  imageopacity?: number;
  hasoverlay?: boolean;
  minHeight?: string;
  borderRadius?: number;
  
}

export const Container = ({
  children,
  background = "#ffffff",
  padding = [20],
  borderRadius = 0,
  gap = 0,
  imageopacity = 1,
  hasoverlay = false,
  minHeight = "100px",

}: ContainerProps) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  const isColor = background.startsWith("#") || background.startsWith("rgb");
  const dynamicStyle: CSSProperties = {
    padding: padding.length === 1 ? `${padding[0]}px` : `${padding[0]}px ${padding[1]}px`,
    minHeight: minHeight,
    borderRadius: `${borderRadius}px`,
    background: isColor
      ? background
      : hasoverlay
        ? `linear-gradient(180deg ,rgba(0, 0, 0, 0)  -45.83%, rgba(0, 0, 0, 0.62) 80.7%), url(${background})`
        : `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: `${gap}px`,
    filter: `brightness(${imageopacity})`,
  };

  return (
    <div
      ref={(ref) => {
        if (ref) connect(drag(ref));
      }}
      style={dynamicStyle}
      className="w-full flex flex-col items-center justify-center"
    >
      {children}
    </div>
  );
};

Container.craft = {
  props: {
    background: "#ffffff",
    padding: 20,
    gap: 0,
    imageopacity: 1,
  },
};
