import ContentEditable from "react-contenteditable";
import { useNode } from "@craftjs/core";
import { useEffect, useState } from "react";
import { Button } from "@heroui/react";

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
}

// MainComponent
export const ButtonComponent = ({
  context,
  backgroundColor,
  textColor,
  fontSize,
  variant = "primary",
  radius = 100,
}: ButtonProps) => {
  const {
    connectors: { connect, drag },
    hasSelectedNode,
    actions: { setProp },
  } = useNode((state) => ({
    hasSelectedNode: state.events.selected,
  }));

  const [editable, setEditable] = useState(false);

  useEffect(() => {
    if (hasSelectedNode) {
      setEditable(true);
    } else {
      setEditable(false);
    }
  }, [hasSelectedNode]);

  return (
    <Button
      variant={variant}
      style={{
        color: textColor,
        fontSize,
        borderRadius: `${radius}px`,
        backgroundColor: backgroundColor,
      }}
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

  return (
    <div>
      <div>
        <h1>Button Settings</h1>
        <span>Mengganti Tampilan Button</span>
      </div>
      <div>
        {/* Background Color */}
        <label>
          Background Color:
          <input
            type="color"
            value={backgroundColor}
            onChange={(e) =>
              setProp((props: any) => (props.backgroundColor = e.target.value))
            }
          />
        </label>
        {/* Text Color */}
        <label>
          Text Color:
          <input
            type="color"
            value={textColor}
            onChange={(e) =>
              setProp((props: any) => (props.textColor = e.target.value))
            }
          />
        </label>
        {/* Font Size */}
        <label>
          Font Size:
          <input
            type="text"
            value={fontSize}
            onChange={(e) =>
              setProp((props: any) => (props.fontSize = e.target.value))
            }
          />
        </label>
      </div>
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
  },
  related: {
    settings: ButtonSettings,
  },
};

export default ButtonComponent;
