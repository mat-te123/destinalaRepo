import ContentEditable from "react-contenteditable";
import { useNode } from "@craftjs/core";
import { useEffect, useState } from "react";
import { Button, Label, ListBox, Select } from "@heroui/react";


interface StaticButtonProps {
  children: React.ReactNode;
  ButtonStyle: string;
  TextStyle: string;
}

export const StaticButton = ({ children, ButtonStyle, TextStyle }: StaticButtonProps) => {
  return (
    <Button className={ButtonStyle}>
      <span className={TextStyle}>{children}</span>
    </Button>
  )
}

StaticButton.craft = {
  props: {
    isEditable: false,
  },
};

interface ButtonProps {
  context: string;
  backgroundColor?: string;
  textColor?: string;
  fontSize?: string;
  variant?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "outline"
    | "ghost"
    | "danger"
    | "danger-soft";
  radius?: number;
  border?: string;
  padding?: number[];
}

// MainComponent
export const ButtonComponent = ({
  context = "Click to edit button",
  backgroundColor,
  textColor,
  fontSize,
  radius = 100,
  border = "none",
}: ButtonProps) => {
  const {
    connectors: { connect, drag },
    hasSelectedNode,
    actions: { setProp },
  } = useNode((state) => ({
    hasSelectedNode: state.events.selected,
  }));

  const [editable, setEditable] = useState(false);

  const dynamicStyle = {
    color: textColor || "#FFFFFF",
    fontSize: fontSize || "16px",
    borderRadius: `${radius}px`,
    backgroundColor: backgroundColor || "#007BFF",
    border: border || "none",
    padding: "1.5em 1.5em",
  };

  useEffect(() => {
    if (hasSelectedNode) {
      setEditable(true);
    } else {
      setEditable(false);
    }
  }, [hasSelectedNode]);

  return (
    <Button
      style={dynamicStyle}
      ref={(ref) => {
        if (ref) {
          connect(drag(ref));
        }
      }}
    >
      <ContentEditable
        html={context}
        tagName="span"
        onChange={(e) =>
          setProp((props: any) => (props.context = e.target.value))
        }
        disabled={!editable}
      />
    </Button>
  );
};

export const ButtonSettings = () => {
  const {
    actions: { setProp },
    backgroundColor,
    textColor,
    fontSize,
  } = useNode((node) => ({
    backgroundColor: node.data.props.backgroundColor,
    textColor: node.data.props.textColor,
    fontSize: node.data.props.fontSize,
  }));

  const start = 4;
  const end = 100;
  const step = 4;
  const fontSizeOptions = Array.from(
    { length: (end - start) / step + 1 },
    (_, i) => start + i * step,
  );

  console.log("Button Settings Props:", {
    backgroundColor,
    textColor,
    fontSize,
  });

  return (
    <div className="flex flex-col gap-4">
      <div>
        <p className="font-bold">Button Settings</p>
        <span className="text-xs text-gray-500">Mengganti tampilan button</span>
      </div>
      <div className="border-t-2 pt-5 ">
        {/* Font Size Selector */}
        <div className="flex flex-col gap-4 mb-4 w-1/3">
          <Select
            value={fontSize}
            onChange={(value) =>
              setProp((props: any) => (props.fontSize = value))
            }
          >
            <Label>Text Size</Label>
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
        </div>
      </div>
      {/* Background Color Selector */}
    </div>
  );
};

ButtonComponent.craft = {
  props: {
    context: "Click to edit button",
    backgroundColor: "#007BFF",
    textColor: "#FFFFFF",
    fontSize: "16px",
    variant: "primary",
    radius: 100,
    isEditable: true,
  },
  related: {
    settings: ButtonSettings,
  },
};

export default ButtonComponent;
