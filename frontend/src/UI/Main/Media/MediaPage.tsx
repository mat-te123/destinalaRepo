import { Button } from "@heroui/react";
import Header from "../../ReuseableUI/Header";

function MediaPage() {
  return (
    <div className="flex flex-col ">
        <Header />
        <div>
            <h1>
                Manage Media
            </h1>
            <p>
                Organize content with categories and tags.
            </p>
        </div>
        <div className="flex-1 flex-col gap-4 bg-[#F8F8FA] h-full">
            <div className="bg-white border-2 border-white">
                <div>
                    <div>
                        {/* PlaceHolder */}
                        <h1>
                            PageName
                        </h1>
                        <p>
                            Description
                        </p>
                    </div>
                </div>
                <Button>
                    Add New
                </Button>

            </div>

            <div className="flex flex-row shrink-0 gap-4 bg-white border-2 border-white">
                <div className="flex flex-col gap-4">
                    <div>
                        <p>
                            Image Name
                        </p>
                        <Button>
                            Change
                        </Button>
                    </div>
                    <img src="../ContentPlaceholder.jpg" alt="Image Description" />
                </div>

            </div>

        </div>

    </div>
  );
}

export default MediaPage;