import Header from "../../ReuseableUI/Header";
import { Icon } from "./Icon";
import { Table } from "@heroui/react";

interface CardProps {
  Icon: typeof Icon;
  title: string;
  value: number;
  fetchData: () => Promise<number>;
}

function Card() {
  const IconPlaceHolder = Icon.User; // Ganti dengan ikon yang sesuai dari Icon

  return (
    <div className="flex flex-col bg-white rounded-lg gap-3 p-4 w-fit aspect-square border-2 border-[#EBEBEB] ">
      <div className="bg-[#D7D7D7] w-fit p-5 rounded-lg ">
        <IconPlaceHolder />
      </div>
      <h2 className="text-lg">Total User</h2>
      <p className="text-2xl font-bold">4</p>
    </div>
  );
}

function Index() {
  const cardCount = 4;

  return (
    <div className="flex flex-col items-center justify-start h-screen">
      <Header />
      <div className="w-full">
        <h1>Dashboard</h1>
        <p>Welcome back -- here what happening today</p>
      </div>
      {/* Main Content */}
      <div className="w-full flex flex-col gap-4 p-10 bg-[#F8F8FA] h-full">
        <div className="w-full flex flex-row gap-10">
          {/* Information Cards  */}
          {/* Example */}
          {Array.from({ length: cardCount }).map((_, index) => (
            <Card key={index} />
          ))}
        </div>
        {/* Table */}
        <Table>
          <Table.ScrollContainer>
            <Table.Content>
              <Table.Header>
                <Table.Row></Table.Row>
              </Table.Header>
              <Table.Body></Table.Body>
            </Table.Content>
          </Table.ScrollContainer>
        </Table>
      </div>
      <h1>Welcome to the Admin Dashboard</h1>
    </div>
  );
}

export default Index;
