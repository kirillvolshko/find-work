import { vacancies } from "../../utils/data.hirer";
import { HirerAddForm } from "./components/HirerAddForm";
import { ListViewHirer } from "./components/ListViewHirer";

export const Hirer = () => {
  return (
    <div className="flex flex-row gap-5 w-full h-full">
      <ListViewHirer data={vacancies} />
      <HirerAddForm />
    </div>
  );
};
