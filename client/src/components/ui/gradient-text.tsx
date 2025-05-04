import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export function GradientText({ children, className }: GradientTextProps) {
  return (
    <span 
      className={cn(
        "bg-gradient-to-r from-[hsl(var(--royal-blue))] to-[hsl(var(--electric-purple))] bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </span>
  );
}
