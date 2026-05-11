import { useEditorNav } from "../../../../Services/EditorNavContext";
import { useLocation, useNavigate } from "react-router";
import CardWithTextAndImage from "../../../Utils/CardWithTextAndImage";
import { StaticCardComponent } from "../../../Utils/CardComponent";
import MainTemplate from "../../MainTemplate";


interface ServicesPage_1Props {
  isEditMode?: boolean;
  // Define any props for the services page here
  ServicesName?: string;
  ServicesDesc?: string;
  ServicesAbout?: {
    ServicesName?: string;
    ServicesDesc?: string;
    ServicesImage?: string;
  };
  ServicesFeatured?: {
    FeaturedName?: string;
    FeaturedImage?: string;
  };
}

function ServicesPage_1({
  ServicesName = "Services 1",
  ServicesDesc = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci tempora similique dicta placeat ea distinctio, eum consectetur illo aperiam. At, nam laborum. Perspiciatis mollitia unde nihil nobis hic nostrum amet. Ut eius cupiditate placeat delectus labore id officia aliquam perferendis impedit vero, molestiae tempora alias numquam in commodi dolores harum autem, beatae quas excepturi corporis facere dolorum quasi? Optio, dolorem.",
  ServicesAbout,
  ServicesFeatured,
}: ServicesPage_1Props) {
  const { navigateTo } = useEditorNav();
  const location = useLocation();
  const navigate = useNavigate();
  const isEditor = location.pathname.includes("editor");
  const ServicesCount = 6;
  const FeaturedCount = [
    "Featured Service 1",
    "Featured Service 2",
    "Featured Service 3",
    "Featured Service 4",
    "Featured Service 5",
    "Featured Service 6",
  ];
  return (
    <div className="flex-1 h-full w-full bg-gray-50 overflow-auto font-main min-w-0">
      <MainTemplate>
        <div
          className="min-h-screen flex flex-col justify-end px-12 py-16 gap-6 text-white"
          style={{
            background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%), url(${ServicesFeatured?.FeaturedImage || "./ContentPlaceholder.jpg"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="text-6xl font-semibold">{ServicesName}</h1>
          <p className="text-lg font-medium">{ServicesDesc}</p>
        </div>
        <div className="flex flex-col px-12 pt-16 gap-6">
          <h1 className="w-full text-center text-[58px] font-semibold border-b-2 border-gray-300 pb-8">
            Tentang {ServicesName}
          </h1>
        </div>
        {/* Services */}
        <div className="flex flex-col ">
          {Array.from({ length: ServicesCount }).map((_, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={isEven ? "bg-white" : "bg-[#E6E6E694]"}
              >
                <CardWithTextAndImage
                  CardTitle={ServicesAbout?.ServicesName || "Service Name"}
                  CardDescription={
                    ServicesAbout?.ServicesDesc || "Service Description"
                  }
                  CardImage={
                    ServicesAbout?.ServicesImage || "./ContentPlaceholder.jpg"
                  }
                  isReverse={!isEven}
                />
              </div>
            );
          })}
        </div>
        {/* Featured */}
        <div className="flex flex-row p-8 gap-10">
          <div className="flex flex-col justify-center gap-5">
            <h1 className="text-6xl font-semibold ">Layanan Unggulan</h1>
            <span className="font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, voluptatem quae. Est quae, accusantium non illo esse
              reiciendis eum nemo consequatur quia cum facere vitae fuga,
              quaerat laborum voluptas sequi.
            </span>
          </div>
          <div className="flex flex-row gap-6 overflow-x-auto p-5 ">
            {FeaturedCount.map((service, index) => (
              <div key={index} className="shrink-0 snap-center">
                <StaticCardComponent
                  divTailwindClass="w-[280px] bg-[url('./ContentPlaceholder.jpg')] h-120 bg-cover bg-center flex items-end p-5 rounded-3xl shadow-xl"
                  TextTailwindClass="font-semibold text-white text-[34px] flex items-center gap-2"
                  Context={service}
                  HasLinkClick={true}
                  onCardClick={() =>
                    isEditor
                      ? navigateTo("featured")
                      : navigate("/services/featured")
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </MainTemplate>
    </div>
  );
}

export default ServicesPage_1;
