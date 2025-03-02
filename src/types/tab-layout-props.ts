import { LucideIcon } from "lucide-react";

export type TabLayoutProps = {
  data: {
    title: string;
    icon: LucideIcon;
    content: React.ReactNode;
  }[];
};
