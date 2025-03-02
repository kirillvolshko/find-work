import { IListViewHirerProps } from "../../../types/list-view-hirer-props copy";
import { HirerItem } from "./HirerItem";

export const ListViewHirer = ({ data }: IListViewHirerProps) => {
  return (
    <div className="flex flex-col gap-5 w-full max-h-[calc(100vh-200px)]  overflow-y-auto">
      {data.map((item) => (
        <HirerItem item={item} key={item.id} />
      ))}
    </div>
  );
};
