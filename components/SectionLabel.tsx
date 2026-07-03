import { cn } from "@/lib/utils";

export function SectionLabel({
  index,
  name,
  className,
}: {
  index: string;
  name: string;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3 mb-4", className)}>
      <span className="font-mono text-[11px] tracking-widest text-active">SECTION_{index}</span>
      <span className="h-px flex-1 max-w-8 bg-line" />
      <span className="font-mono text-[11px] tracking-widest text-text-dim">{name}</span>
    </div>
  );
}
