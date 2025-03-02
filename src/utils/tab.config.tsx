import { UserRoundSearch, Building } from "lucide-react";
import Candidate from "../modules/Candidate";
import Hirer from "../modules/Hirer";
import Report from "../modules/Report";

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
  {
    title: "Звіт",
    icon: Building,
    content: <Report />,
  },
];
