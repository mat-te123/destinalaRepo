import CardWithButtonComponent from "../../../Utils/CardWithButtonComponenet";
import BaseListingPage from "../BaseListingPage";
import { DestinationAPI } from "../../../../Api/Services/DestinationAPI";
import { type DestinationIndexRespond } from "./DestinationInterface";

function DestinationMainPage() {
  return (
    <BaseListingPage<DestinationIndexRespond>
      title="Destinasi Impian Anda Dimulai Disini"
      description="Temukan layanan yang tepat di Destinala, dirancang khusus untuk memenuhi kebutuhan perjalanan Anda. Apakah Anda lebih suka menjelajah sendiri atau ingin memanfaatkan Travel Guide kami? Semua pilihan ada di sini untuk membantu Anda merencanakan petualangan yang sempurna!"
      fetchData={DestinationAPI.getIndex}
      renderItem={(destination) => (
        <CardWithButtonComponent
          key={destination.id}
          ServiceTitle={destination.main_title}
          ServiceDescription={destination.main_description}
          LinkPath={`/destination/${destination.id}`}
        />
      )}
    />
  );
}

export default DestinationMainPage;
