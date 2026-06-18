import Template from "../Template/index";
import ContentType, { type ContentId } from "./ContentType";
import { useState } from "react";
import DestinationForm from "./DestinationForm";

function ContentPage() {
  const [selectedContentType, setSelectedContentType] =
    useState<ContentId | null>(null);

  const FormMapping: Record<ContentId, React.ReactNode> = {
    destination: <DestinationForm />,
    package: <div>Package Form</div>,
    service: <div>Service Form</div>,
  };

  return (
    <Template
      title="Content Management"
      desc="Kelola konten yang akan ditampilkan pada website"
      ButtonText="Add Content"
      ScrollView={true}
    >
      <div className="flex flex-col gap-5">
        <h2 className="text-xl">Page Type</h2>
        <ContentType onSelect={(id) => setSelectedContentType(id)} />
      </div>
      {selectedContentType && FormMapping[selectedContentType]}
    </Template>
  );
}

export default ContentPage;
