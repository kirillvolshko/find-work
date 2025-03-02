import { candidates } from "../../utils/data.candidate";
import { CandidateAddForm } from "./components/CandidateAddForm";
import { ListViewCandidates } from "./components/ListViewCandidates";

export const Candidate = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 w-full h-full">
      <ListViewCandidates data={candidates} />
      <CandidateAddForm />
    </div>
  );
};
