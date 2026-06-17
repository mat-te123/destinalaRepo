import CardWithButtonComponent from "../../../Utils/CardWithButtonComponenet";
import BaseListingPage from "../BaseListingPage";
import { ServiceAPI } from "../../../../Api/Services/ServiceAPI";
import { type ServiceIndexRespond } from "./ServiceInterface";

function ServicesPage() {
  return (
    <BaseListingPage<ServiceIndexRespond>
      title="Layanan"
      description="Tipe layanan yang disediakan di destinala yang dapat menyesuaikan dengan kebutuhan anda. Apakah anda senang berpergian sendirian? atau ingin menggunakan Travel Guide kami? semua ada disini."
      fetchData={ServiceAPI.getIndex}
      renderItem={(service) => (
        <CardWithButtonComponent
          key={service.id}
          ServiceTitle={service.main_title}
          ServiceDescription={service.main_desc}
          LinkPath={`/service/${service.id}`}
        />
      )}
    />
  );
}

export default ServicesPage;
