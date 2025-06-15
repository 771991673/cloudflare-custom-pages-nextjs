import type { ReactNode } from "react";

interface CFCardWrapProps {
  children: ReactNode;
  className?: string;
}

export const CFCardWrap = ({ children, className }: CFCardWrapProps) => {
  return (
    <div className={`flex items-center justify-center p-4 ${className || ""}`}>
      {children}
    </div>
  );
};
