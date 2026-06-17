import { Button, Input, Table } from "@heroui/react";
import Template from "../Template";
import { useState } from "react";

function TestimoniData() {
  const [filter, setFilter] = useState<string | number>("semua");
  return (
    <Template
      title="Testimonial"
      desc="Kelola testimoni dari pengguna"
      ButtonText="Add Testimoni"
    >
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-4 gap-5">
          <div className="col-span-1 bg-white border border-[#EBEBEB] rounded-lg p-5 gap-3">
            <h3 className="text-gray-300 text-sm">Total</h3>
            <span className="text-3xl font-semibold">1</span>
          </div>
          <div className="col-span-1 bg-white border border-[#EBEBEB] rounded-lg p-5 gap-3">
            <h3 className="text-gray-300 text-sm">Rata-Rata</h3>
            <span className="text-3xl font-semibold">100</span>
          </div>
        </div>
        <div className="flex flex-col w-full bg-white border border-[#EBEBEB] rounded-lg">
          <div className="flex flex-row items-center justify-between p-5">
            <h3 className="text-lg font-semibold">Daftar Testimoni</h3>
            <Button size="sm" className="bg-black text-white rounded-lg">
              Tambah
            </Button>
          </div>
          <hr style={{ borderColor: `#EBEBEB` }} />
          <div className="flex flex-row items-center justify-between p-5">
            <Input placeholder="Cari Data" />
            <div className="flex flex-row w-full gap-3 justify-start items-center">
              <span
                className={`text-sm font-medium cursor-pointer py-2 px-4 rounded-lg ${
                  filter === "semua"
                    ? "text-white bg-black"
                    : "text-gray-500 border border-gray-300"
                }`}
                onClick={() => setFilter("semua")}
              >
                Semua
              </span>
              {Array.from({ length: 5 }, (_, index) => (
                <span
                  className={`text-sm font-medium cursor-pointer py-2 px-4 rounded-lg ${
                    filter === index + 1
                      ? "text-white bg-black"
                      : "text-gray-500 border border-gray-300"
                  }`}
                  onClick={() => setFilter(index + 1)}
                >
                  {index + 1}
                </span>
              ))}
            </div>
            <span className="text-sm font-medium">Total Testimoni</span>
          </div>
          <Table className="rounded-none">
            <Table.ScrollContainer>
              <Table.Content>
                <Table.Header>
                  <Table.Column>
                    Customer
                  </Table.Column>
                  <Table.Column>judul dan Deskripsi</Table.Column>
                  <Table.Column>Rating</Table.Column>
                  <Table.Column>Tanggal</Table.Column>
                  <Table.Column>Aksi</Table.Column>
                </Table.Header>
                <Table.Body>
                  {Array.from({ length: 6 }, (_, index) => (
                    <Table.Row key={index}>
                      <Table.Cell>Udin</Table.Cell>
                      <Table.Cell>
                        <div className="flex flex-col">
                          <h4>Judul</h4>
                          <p className="line-clamp-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Sed, nihil quis quos voluptas impedit, ea
                            asperiores reiciendis quas unde ipsa nemo ab
                            pariatur totam, dolores cum animi amet perspiciatis
                            corrupti. Voluptates alias pariatur unde repellat
                            porro totam sapiente repellendus iure dolores
                            dignissimos. Sit reiciendis vitae ipsum obcaecati
                            laudantium. Sint expedita excepturi saepe quam enim
                            dolorum atque quaerat nulla quasi porro. Debitis
                            laboriosam ea voluptate sint assumenda animi nam
                            neque repellat totam iste atque, corporis nesciunt
                            eveniet blanditiis, dolore ipsa fugiat quos quis
                            illo sequi doloremque itaque unde! Dolorem, hic
                            ipsam!
                          </p>
                        </div>
                      </Table.Cell>
                      <Table.Cell>10</Table.Cell>
                      <Table.Cell>10 20 30</Table.Cell>
                      <Table.Cell>
                        <div className="flex flex-row">
                          <Button variant="outline">edit</Button>
                          <Button variant="outline">delete</Button>
                        </div>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table.Content>
            </Table.ScrollContainer>
          </Table>
        </div>
      </div>
    </Template>
  );
}

export default TestimoniData;
