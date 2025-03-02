import { ReactNode } from "react";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-tiffany-background-image bg-cover bg-center min-h-[100vh] p-[30px]">
      {children}
    </div>
  );
};
