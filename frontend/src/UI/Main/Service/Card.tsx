import { Button, Dropdown, Form, Label } from "@heroui/react";
import ContentCard from "./ContentCard";
import { useState } from "react";

interface FormProps {
  onClose: () => void;
}

function FormModal({ onClose }: FormProps) {
  // Kita tidak butuh state lokal 'isOpenState' lagi di sini.
  // Keberadaan komponen ini sudah diatur sepenuhnya oleh komponen Parent (Service).
  return (
    <div className="bg-white flex flex-col p-6 gap-5 rounded-2xl w-full max-w-md shadow-xl border border-gray-100">
      <div>
        <h4 className="text-xl font-bold text-gray-900">
          Tambah Paket ke layanan
        </h4>
        <span className="text-sm text-gray-500">
          Tambahkan paket yang sudah ada ke layanan ini.
        </span>
      </div>
      <Form className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label className="text-sm font-medium">Nama Paket</Label>
          <Dropdown>
            <Button variant="outline"  className="w-full justify-between rounded-lg">
              Pilih Paket
            </Button>
            <Dropdown.Popover className="min-w-95 rounded-lg" placement="bottom">
              <Dropdown.Menu
                onAction={(key) => console.log(`Selected: ${key}`)}
              >
                <Dropdown.Item id="new-file" textValue="New file">
                  <Label>New file</Label>
                </Dropdown.Item>
                <Dropdown.Item id="copy-link" textValue="Copy link">
                  <Label>Copy link</Label>
                </Dropdown.Item>
                <Dropdown.Item id="edit-file" textValue="Edit file">
                  <Label>Edit file</Label>
                </Dropdown.Item>
                <Dropdown.Item
                  id="delete-file"
                  textValue="Delete file"
                  variant="danger"
                >
                  <Label>Delete file</Label>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Popover>
          </Dropdown>
        </div>
        <div className="flex flex-row justify-end gap-3 mt-4">
          <Button variant="outline" type="button" onClick={onClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            className="bg-black text-white"
            type="submit"
          >
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}

function Card() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const items = 10;
  return (
    <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm w-full flex flex-col gap-5">
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <FormModal onClose={() => setIsModalOpen(false)} />
        </div>
      )}
      {/* upper Info */}
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-semibold">Service Name</h3>
          <p className="text-[#7F7F7F] text-sm">Service Description</p>
        </div>
        <Button
          variant="primary"
          className="bg-black text-white rounded-lg"
          onClick={() => setIsModalOpen(true)}
        >
          Add New Package
        </Button>
      </div>
      <div className="flex flex-row gap-5 overflow-x-auto">
        {[...Array(items)].map((_, index) => (
          <ContentCard key={index} />
        ))}
      </div>
      <div className="flex flex-row justify-start gap-2 mt-5">
        <Button variant="outline" className="rounded-lg">
          Edit
        </Button>
        <Button variant="outline" className="rounded-lg border-[#FECACA]">
          Delete
        </Button>
      </div>
    </div>
  );
}

export default Card;
