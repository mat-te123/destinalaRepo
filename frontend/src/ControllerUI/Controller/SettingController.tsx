import { useEditor } from "@craftjs/core";
import React from "react";

function SettingController() {
  const { actions, selected } = useEditor((state) => {
    const [currentNodeId] = state.events.selected
      ? [...state.events.selected]
      : [];
    let selected;

    if (currentNodeId) {
      const nodeData = state.nodes[currentNodeId].data;
      selected = {
        id: currentNodeId,
        name: nodeData.name,
        settings: state.nodes[currentNodeId].related?.settings,
      };
    }

    return {
      selected,
    };
  });

  console.log("Selected Text Props:", selected);

  return selected && selected.settings ? (
    <div>
      {selected.settings ? (
        React.createElement(selected.settings)
      ) : (
        <div>No settings available for this element.</div>
      )}
    </div>
  ) : (
    <div>Select an element to edit</div>
  );
}

export default SettingController;
