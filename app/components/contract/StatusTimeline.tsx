import { cn } from "~/lib/utils";
import { CheckCircle } from "lucide-react";

type Status = 'completed' | 'pending' | 'failed';

interface TimelineStep {
  label: string;
  status: Status;
}

interface StatusTimelineProps {
  steps: TimelineStep[];
  className?: string;
}

export function StatusTimeline({ steps, className }: StatusTimelineProps) {
  return (
    <div className={cn("w-full px-12 py-16", className)}>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute top-1/2 left-0 w-full h-1 -translate-y-1/2 bg-gray-600" />

        {/* Steps */}
        <div className="relative flex justify-between items-center">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center">
              {/* Circle */}
              <div
                className={cn(
                  "z-10 flex h-8 w-8 items-center justify-center rounded-full border-2",
                  {
                    "bg-[#22c55e] border-[#22c55e] text-white": step.status === "completed",
                    "bg-[#eab308] border-[#eab308] text-white": step.status === "pending",
                    "bg-[#ef4444] border-[#ef4444] text-white": step.status === "failed",
                  }
                )}
              >
                {step.status === "completed" && <CheckCircle className="h-5 w-5" />}
              </div>

              {/* Label */}
              <div
                className={cn(
                  "absolute top-12 text-sm text-center whitespace-pre-line min-w-[100px] max-w-[120px]",
                  {
                    "text-[#22c55e] font-medium": step.status === "completed",
                    "text-[#eab308]": step.status === "pending",
                    "text-[#ef4444]": step.status === "failed",
                  }
                )}
              >
                {step.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 