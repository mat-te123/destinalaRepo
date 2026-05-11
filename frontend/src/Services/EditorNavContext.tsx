import React, { useContext, createContext, useState } from "react";

// Page Type
type PageType = "preview" | "services" | "featured";

interface EditorNavContextType {
  currentPage: PageType;
  navigateTo: (page: PageType) => void;
}

const EditorNavContext = createContext<EditorNavContextType | undefined>(
  undefined
);

export const EditorNavProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentPage, setCurrentPage] = useState<PageType>("preview");

  const navigateTo = (page: PageType) => {
    setCurrentPage(page);
  };

  return (
    <EditorNavContext.Provider value={{ currentPage, navigateTo }}>
      {children}
    </EditorNavContext.Provider>
  );
}

export const useEditorNav = () => {
    const context = useContext(EditorNavContext)
    return context || { currentPage: "preview", navigateTo: () => {} }
}