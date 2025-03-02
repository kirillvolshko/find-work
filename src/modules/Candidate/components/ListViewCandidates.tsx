import { IListViewCandidatesProps } from "../../../types/list-view-candidates-props";
import { CandidateItem } from "./CandidateItem";

export const ListViewCandidates = ({ data }: IListViewCandidatesProps) => {
  return (
    <div className="flex flex-col gap-5 w-full max-h-[calc(100vh-200px)]  overflow-y-auto">
      {data.map((item) => (
        <CandidateItem item={item} key={item.id} />
      ))}
    </div>
  );
};
