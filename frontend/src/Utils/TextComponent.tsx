import ContentEditable from "react-contenteditable";
import { Select, ListBox, type Key } from "@heroui/react";
import { useNode, useEditor } from "@craftjs/core";
import { useEffect, useState, type CSSProperties } from "react";

// Define an interface for your props for better type safety
interface TextProps {
  context: string;
  fontStyle?: string;
  fontSize?: string;
  fontColor?: string;
  fontWeight?: number;
  letterSpacing?: string;
}



export const TextComponent = ({
  context,
  fontStyle,
  fontSize,
  fontColor,
  fontWeight,
  letterSpacing,
}: TextProps) => {
  // Use connectors to make the element draggable/selectable if needed
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
    if (hasSelectedNode) {
      setEditable(true);
    } else {
      setEditable(false);
    }
  }, [hasSelectedNode]);

  const dynamicStyle:CSSProperties = {
    fontStyle: fontStyle || "normal",
    fontSize: fontSize || "20px",
    color: fontColor || "#000000",
    fontWeight: fontWeight || 400,
    letterSpacing: letterSpacing || "0px",
  }

  return (
    <div
      ref={(ref) => {
        if (ref) {
          connect(drag(ref));
        }
      }}
      onClick={() => setEditable(true)}
      className={
        enabled ? 
        "cursor-text hover:border hover:border-sky-300 hover:border-dashed rounded" : 
        "border-none"
      }
    >
      <ContentEditable
        html={context}
        tagName="p"
        // FIX: The callback receives 'props' as an argument
        onChange={(e) =>
          setProp((props: any) => (props.context = e.target.value))
        }
        style={dynamicStyle}
        disabled={!editable || !enabled} // Disable editing when not selected or when editor is disabled
      />
    </div>
  );
};

export const TextSettings = () => {
  const {
    actions: { setProp },
    fontSize,
    fontStyle,
  } = useNode((node) => ({
    fontSize: node.data.props.fontSize,
    fontStyle: node.data.props.fontStyle,
  }));

  const fontStyleOptions = [
    { value: "normal", label: "Normal" },
    { value: "italic", label: "Italic" },
    { value: "oblique", label: "Oblique" },
  ];

  const start = 12;
  const Step = 4;
  const final = 48;
  const fontSizeOptions = Array.from(
    { length: (final - start) / Step + 1 },
    (_, i) => {
      const value = start + i * Step;
      return { value: `${value}px`, label: `${value}px` };
    },
  );

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h1>Typography</h1>
        <span>Mengganti karakter dari teks</span>
      </div>
      {/* Controller */}
      <div className="flex flex-row justify-between items-center gap-10">
        {/* StyleController */}
        <Select
          className="w-full"
          aria-label="fontStyle"
          value={fontStyle || "normal"}
          onChange={(key: Key | null) => {
            if (key) {
              setProp({ fontStyle: key as string });
            }
          }}
        >
          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              {fontStyleOptions.map((option) => (
                <ListBox.Item
                  key={option.value}
                  id={option.value}
                  textValue={option.value}
                >
                  {option.label}
                </ListBox.Item>
              ))}
            </ListBox>
          </Select.Popover>
        </Select>

        {/* SizeController */}
        <Select
          className="w-full"
          aria-label="fontSize"
          value={fontSize || fontSize[0].value}
          onChange={(key: Key | null) => {
            const value = key ? (key as string) : fontSize[0].value;
            setProp({ fontSize: value });
          }}
        >
          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              {fontSizeOptions.map((option: any) => (
                <ListBox.Item
                  key={option.value}
                  id={option.value}
                  textValue={option.value}
                >
                  {option.label}
                </ListBox.Item>
              ))}
            </ListBox>
          </Select.Popover>
        </Select>
      </div>
      <div></div>
    </div>
  );
};

// It's a good habit to define default props for Craft.js
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
