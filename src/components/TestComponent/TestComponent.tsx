import { CalendarSVG } from "@/icons";

export function TestComponent() {
  return (
    <div>
      {/* If you comment out the component, the import error goes away */}
      <CalendarSVG />
    </div>
  );
}
