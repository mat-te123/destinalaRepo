import Header_1 from "./Header/Header_1";
import Footer_1 from "./Footer/Footer_1";
import type { ReactNode } from "react";

interface MainTemplateProps {
  children: ReactNode;
}

function MainTemplate({ children }: MainTemplateProps) {
  return (
    <>
      <Header_1 />
      {children}
      <Footer_1 />
    </>
  );
}

export default MainTemplate;