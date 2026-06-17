import { Button, Table } from "@heroui/react";
import Package from "./Index";
import { useNavigate } from "react-router";
import { Icon } from "./Icon";

function PackageDetail() {
  const navigate = useNavigate();
  return (
    // Kirim prop isDetailPage={true} agar header di parent tidak double
    <Package>
      <div className="flex flex-col w-full gap-5">
        {/* Topbar Detail Paket */}
        <div className="bg-white flex flex-row items-center justify-start p-5 gap-5 rounded-lg border border-[#EBEBEB]">
          <Button
            size="lg"
            variant="outline"
            className="border border-gray-300 text-gray-700 rounded-lg"
            onClick={() => navigate(-1)}
          >
            Kembali
          </Button>
          <div className="flex flex-col items-start w-full">
            <h3 className="text-lg font-bold">Nama Paket</h3>
            <span className="text-gray-500 text-sm">Detail Paket wisata</span>
          </div>
          <div className="flex flex-row items-center gap-3">
            <Button size="lg" variant="danger" className="rounded-lg">
              Hapus
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-4 w-full gap-5 items-start">
          <div className="col-span-3 flex flex-col gap-5">
            {/* Card Info Paket */}
            <div className="flex flex-col bg-white border border-[#EBEBEB] rounded-lg">
              <div className="flex flex-row items-center justify-between px-5 py-3">
                <h3 className="text-sm font-semibold">Info Paket</h3>
                <Button variant="outline" className="rounded-lg">
                  Edit
                </Button>
              </div>
              <hr style={{ borderColor: `#EBEBEB` }} />
              <div className="flex flex-col p-5 gap-3">
                <h3 className="text-sm font-bold">Nama Paket</h3>
                <p className="text-sm text-gray-600 line-clamp-4">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Itaque amet doloribus odit consectetur repellendus. Adipisci,
                  a explicabo enim ipsum accusantium molestias, excepturi
                  aspernatur soluta odit quisquam maxime debitis ratione. Ipsa!
                  Facere maiores deserunt a. Eligendi reiciendis hic inventore
                  natus corrupti quis ipsam ab exercitationem odio assumenda.
                  Eligendi temporibus vero consectetur aliquid molestias,
                  corporis veniam tempore eius ea, eaque doloribus neque! Libero
                  temporibus quas, praesentium eum fugit quo nulla nam velit non
                  molestias possimus nostrum, delectus fugiat labore maiores
                  quia rerum, voluptatibus blanditiis sed! Debitis iure
                  molestias aliquid reiciendis dolores fuga! Vero a totam libero
                  quod. Qui, nisi distinctio unde officia enim facere eligendi
                  saepe et dolore a deleniti quis, sunt facilis recusandae
                  impedit inventore iusto ducimus amet asperiores ad suscipit.
                  Sed totam officiis aliquam in cum itaque molestiae ipsam.
                  Placeat ducimus architecto nam omnis nulla quisquam iure
                  possimus error adipisci libero fuga quasi dolorem, cum
                  repellendus at fugit impedit quidem. Iste harum, voluptate
                  totam voluptates iusto dolor ducimus recusandae distinctio
                  sequi quidem voluptatibus odio ipsum sapiente veritatis magnam
                  ut consectetur quos obcaecati illum eum facere sunt
                  doloremque. Minus, quisquam aspernatur. Repellat eaque, optio
                  asperiores modi fugiat quaerat nobis veniam in nihil dolore
                  totam sapiente rem ratione porro quo voluptatibus itaque,
                  provident veritatis. Incidunt sit pariatur sequi commodi?
                  Explicabo, voluptatum repellat! Quibusdam sequi necessitatibus
                  exercitationem architecto aspernatur incidunt autem aliquid
                  laboriosam itaque aut, cumque asperiores qui, mollitia maiores
                  dolorum vitae veritatis dolore fugit error? Mollitia officia
                  consectetur adipisci? Itaque, quis iusto? Incidunt omnis
                  dolore ex voluptatibus sunt sed odio tenetur vero alias iure
                  hic veritatis, fugit quos id deserunt ut assumenda corrupti
                  perspiciatis neque expedita. Commodi neque in doloremque
                  consequuntur nostrum. Quidem doloremque neque amet minus
                  voluptas, deserunt laudantium tempora! Sequi aliquid,
                  voluptatem quis quaerat modi id cupiditate. Optio qui ea,
                  soluta ut magni, mollitia illum sunt eius, unde dignissimos
                  inventore.
                </p>
              </div>
            </div>

            {/* Card Tabel Konten Paket */}
            <div className="flex flex-col rounded-lg border border-[#EBEBEB] overflow-hidden bg-white">
              <div className="flex flex-row items-center justify-between p-3 border-b border-[#EBEBEB]">
                <h3 className="text-sm font-semibold">Konten paket</h3>
                <Button size="sm" className="bg-black text-white rounded-lg">
                  Tambah konten
                </Button>
              </div>
              <Table className="rounded-none">
                <Table.ScrollContainer>
                  <Table.Content>
                    <Table.Header>
                      <Table.Column>#</Table.Column>
                      <Table.Column>Hari/Sesi</Table.Column>
                      <Table.Column>Aktivitas</Table.Column>
                      <Table.Column>Aksi</Table.Column>
                    </Table.Header>
                    <Table.Body>
                      {Array.from({ length: 10 }, (_, index) => (
                        <Table.Row key={index}>
                          <Table.Cell>{index}</Table.Cell>
                          <Table.Cell>Hari 1</Table.Cell>
                          <Table.Cell>Penjemputan di Bandara YIA</Table.Cell>
                          <Table.Cell>
                            <div className="flex flex-row gap-3">
                              <Button size="sm">Edit</Button>
                              <Button size="sm" variant="danger">
                                Delete
                              </Button>
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
          <div className="col-span-1 flex flex-col gap-5 sticky top-5">
            {/* Card Cover Image */}
            <div className="flex flex-col bg-white border border-[#EBEBEB] rounded-lg overflow-hidden">
              <div className="flex flex-row items-center justify-between p-3 border-b border-[#EBEBEB]">
                <h3 className="text-sm font-semibold">Cover Image</h3>
                <Button size="sm" className="bg-black text-white rounded-lg">
                  Upload
                </Button>
              </div>
              {/* Mengganti h-full dengan p-8 dan min-h agar tinggi area dropzone ideal */}
              <div className="flex flex-col items-center justify-center w-full min-h-37 bg-[#EBEBEB] p-8 text-center">
                <Icon.Image className="w-8 h-8 text-gray-400 mb-2" />
                <span className="text-xs text-gray-500">Klik untuk upload</span>
              </div>
            </div>

            {/* Card Destinasi (Single Item sesuai Relasi DB) */}
            <div className="flex flex-col p-5 bg-white border border-[#EBEBEB] rounded-lg gap-4">
              <div className="flex flex-row justify-between items-center">
                <h4 className="text-xs font-bold text-gray-700">
                  Destinasi Utama
                </h4>
                <Button size="sm" variant="outline" className="rounded-lg">
                  Ganti
                </Button>
              </div>
              <h3 className="bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] px-4 py-3 rounded-xl text-sm font-semibold flex items-center gap-2">
                📍 Yogyakarta
              </h3>
            </div>

            {/* Card Layanan Terhubung (Bisa menampung list banyak data) */}
            <div className="flex flex-col p-5 bg-white border border-[#EBEBEB] rounded-lg gap-4">
              <div className="flex flex-row justify-between items-center">
                <h4 className="text-xs font-bold text-gray-700">
                  Layanan Terhubung
                </h4>
                <Button size="sm" variant="outline" className="rounded-lg">
                  Hubungkan
                </Button>
              </div>

              {/* Tempat merender daftar layanan secara dinamis */}
              <div className="flex flex-col gap-2 max-h-[300px] overflow-y-auto pr-1">
                <div className="bg-[#FAF5FF] border border-[#E9D5FF] text-[#7C3AED] px-4 py-2 rounded-xl text-xs font-medium">
                  💼 Love in Dive
                </div>
                <div className="bg-[#FAF5FF] border border-[#E9D5FF] text-[#7C3AED] px-4 py-2 rounded-xl text-xs font-medium">
                  💼 Merapi Xplore
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Package>
  );
}

export default PackageDetail;
