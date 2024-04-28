import { Link } from "react-router-dom";
import { Package, Upload, Camera, Menu } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DropabbableMenu } from "./DroppableItems";

const sideMenuEleData = [
  {
    type: "text",
    icon: <Package className="h-5 w-5" />,
  },
  {
    type: "dropdown",
    icon: <Menu className="h-5 w-5" />,
  },
  {
    type: "checkbox",
    icon: <Camera className="h-5 w-5" />,
  },
  {
    type: "file",
    icon: <Upload className="h-5 w-5" />,
  },
];

const SidemenuElement = () => {
  return (
    <aside className=" w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        {sideMenuEleData.map(({ type, icon }) => (
          <Tooltip key={type}>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                {icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">{type}</TooltipContent>
          </Tooltip>
        ))}

        <DropabbableMenu />
      </nav>
    </aside>
  );
};

export default SidemenuElement;
