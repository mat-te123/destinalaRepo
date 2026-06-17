import { useNode } from "@craftjs/core";
import React, { useRef } from "react";
import type { CSSProperties } from "react";

interface ContainerSettingsProps {
  children: React.ReactNode;
  DivStyle: string;
}


export const StaticContainer = ({ children, DivStyle }: ContainerSettingsProps) => {
  return (
    <div className={DivStyle}>
      {children}
    </div>
  )
};

StaticContainer.craft = {
  props: {
    isEditable: false,
  },
};

interface ContainerProps {
  background?: string;
  padding?: number[];
  children: React.ReactNode;
  gap?: number;
  imageopacity?: number;
  hasoverlay?: boolean;
  minHeight?: string;
  borderRadius?: number;
  backgroundType?: "color" | "image";
  islocked?: boolean;
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
  backgroundType = "color",
}: ContainerProps) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  const dynamicStyle: CSSProperties = {
    padding:
      padding.length === 1
        ? `${padding[0]}px`
        : `${padding[0]}px ${padding[1]}px`,
    minHeight,
    borderRadius: `${borderRadius}px`,
    // FIX: Use specific longhand properties instead of 'background'
    backgroundColor: backgroundType === "color" ? background : undefined,
    backgroundImage:
      backgroundType === "image"
        ? hasoverlay
          ? `linear-gradient(180deg, rgba(0,0,0,0) -45.83%, rgba(0,0,0,0.62) 80.7%), url(${background})`
          : `url(${background})`
        : undefined,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: `${gap}px`,
    // Note: filter affects children too. Consider a wrapper div if you only want the image dimmed.
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

export const ContainerSettings = () => {
  const {
    actions: { setProp },
    background,
    backgroundType,
    islocked,
  } = useNode((node) => ({
    background: node.data.props.background,
    backgroundType: node.data.props.backgroundType,
    islocked: node.data.props.islocked,
  }));

  if (islocked) {
    return (
      null
    );
  }

  const ImageFileInputRef = useRef(null);
  const ImageChangeHandler = () => {
    if (ImageFileInputRef.current) {
      (ImageFileInputRef.current as HTMLInputElement).click();
    }
  };

  return (
    <>
      {backgroundType === "color" ? (
        <div className="flex flex-col gap-4">
          <label className="text-sm font-medium">Background Color</label>
          <input
            type="color"
            value={background.startsWith("#") ? background : "#ffffff"}
            onChange={(e) =>
              setProp((props: any) => (props.background = e.target.value))
            }
          />
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <div>
            <p className="font-bold">Change Background Image</p>
            <span className="text-xs text-gray-500">
              Pastikan Gambar Sesuai Ukuran
            </span>
          </div>
          <div
            className="border-t-2 pt-5 relative"
            onClick={ImageChangeHandler}
          >
            <img
              src={background} // background is now a clean dataURI or URL
              alt="Background Preview"
              className="rounded-2xl border-2 border-gray-400 border-dashed w-full object-cover"
            />
            <div className="absolute inset-0 bg-white opacity-0 hover:opacity-80 transition-opacity rounded-2xl flex items-center justify-center cursor-pointer">
              <p className="text-center text-xs text-gray-700 font-bold px-2">
                Click to upload <br /> JPG, PNG.
              </p>
            </div>
            <input
              type="file"
              ref={ImageFileInputRef}
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const files = e.target.files;
                const file = files?.[0];
                console.log("Selected file:", file);  
                if (file) {
                  const BlobURL = URL.createObjectURL(file);
                  setProp((props: any) => (props.background = BlobURL));
                }
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

Container.craft = {
  props: {
    background: "#ffffff",
    padding: 20,
    gap: 0,
    imageopacity: 1,
    backgroundType: "color",
    islocked: false,
    isEditable: true,
  },
  related: {
    settings: ContainerSettings,
  },
};
