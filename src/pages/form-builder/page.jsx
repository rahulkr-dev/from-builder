
import {
  
  TooltipProvider,
} from "@/components/ui/tooltip";
import SidemenuElement from "./SidemenuElement";
import FormBuilderTabs from "./FormBuilderTabs";

export default function FormBuilder() {
  return (
    <div className="flex min-h-screen w-full  bg-muted/40">
      <TooltipProvider>
      <SidemenuElement />
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <FormBuilderTabs />
          </main>
        </div>
      </TooltipProvider>
    </div>
  );
}
