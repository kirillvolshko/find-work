import { UserRoundSearch, Building } from "lucide-react";
import Candidate from "../modules/Candidate";
import Hirer from "../modules/Hirer";

export const TabsConfig = [
  {
    title: "Кандидати",
    icon: UserRoundSearch,
    content: <Candidate />,
  },
  {
    title: "Роботадавець",
    icon: Building,
    content: <Hirer />,
  },
];
