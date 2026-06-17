import ContentEditable from "react-contenteditable";
import { Select, Label, ListBox } from "@heroui/react"; // Use SelectItem directly
import { useNode, useEditor } from "@craftjs/core";
import { useEffect, useState, type CSSProperties } from "react";

interface TextProps {
  context: string;
  fontStyle?: string;
  fontSize?: string;
  fontColor?: string;
  fontWeight?: number;
  letterSpacing?: string;
  textAlign?: string;
}

interface StaticTextProps {
  TailwindStyle?: string;
  Context?: string;
  HasLinkClick?: boolean;
}

export const StaticTextComponent = ({
  TailwindStyle,
  Context,
  HasLinkClick = false,
}: StaticTextProps) => {
  return (
    <div className={TailwindStyle + (HasLinkClick ? " cursor-pointer" : "")}>
      <p>{Context}</p>
      {HasLinkClick ? <span className="text-[34px] ">{">"}</span> : ""}
    </div>
  );
};

StaticTextComponent.craft = {
  props: {
    isEditable: false,
  },
};


export const TextComponent = ({
  context,
  fontStyle,
  fontSize,
  fontColor,
  fontWeight,
  letterSpacing,
  textAlign,
}: TextProps) => {
  const {
    connectors: { connect, drag },
    hasSelectedNode,
    actions: { setProp },
  } = useNode((state) => ({
    hasSelectedNode: state.events.selected,
  }));

  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  const [editable, setEditable] = useState(false);

  useEffect(() => {
    setEditable(hasSelectedNode);
  }, [hasSelectedNode]);

  const dynamicStyle: CSSProperties = {
    fontStyle: fontStyle || "normal",
    fontSize: fontSize || "20px",
    color: fontColor || "#000000",
    fontWeight: fontWeight || 400,
    letterSpacing: letterSpacing || "0px",
    textAlign: (textAlign || "left") as CSSProperties["textAlign"],
  };

  return (
    <div
      ref={(ref) => {
        if (ref) connect(drag(ref));
      }}
      onClick={() => setEditable(true)}
      className={
        enabled
          ? "cursor-text hover:border hover:border-sky-300 hover:border-dashed rounded p-1"
          : "border-none"
      }
    >
      <ContentEditable
        html={context}
        tagName="p"
        // CRITICAL: Block body to prevent "n3 is not a function" error
        onChange={(e) => {
          setProp((props: any) => {
            props.context = e.target.value;
          });
        }}
        style={dynamicStyle}
        disabled={!editable || !enabled}
      />
    </div>
  );
};

export const TextSettings = () => {
  const {
    actions: { setProp },
    fontSize,
  } = useNode((node) => ({
    fontSize: node.data.props.fontSize,
  }));
  const start = 4;
  const end = 100;
  const step = 4;
  const fontSizeOptions = Array.from(
    { length: (end - start) / step + 1 },
    (_, i) => start + i * step,
  );

  console.log("TextSettings Props:", { fontSize });

  return (
    <div className="flex flex-col gap-4">
      <div>
        <p className="font-bold">Text Settings</p>
        <span className="text-xs text-gray-500">Change text size</span>
      </div>
      <div className="border-t-2 pt-5">
        <Select
          value={fontSize}
          onChange={(value) =>
            setProp((props: any) => (props.fontSize = value))
          }
        >
          <Label>Font Size</Label>
          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              {fontSizeOptions.map((size) => (
                <ListBox.Item
                  id={`${size}px`}
                  key={size}
                  textValue={`${size}px`}
                >
                  {size}px
                </ListBox.Item>
              ))}
            </ListBox>
          </Select.Popover>
        </Select>
        {/* Add more settings like fontStyle, fontColor, etc. */}
      </div>
    </div>
  );
};

TextComponent.craft = {
  props: {
    context: "Click to edit text",
    fontStyle: "normal",
    fontSize: "20px",
    fontColor: "#000000",
    letterSpacing: "0px",
  },
  related: {
    settings: TextSettings,
  },
};
