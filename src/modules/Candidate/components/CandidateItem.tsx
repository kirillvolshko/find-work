import { GraduationCap, House, Phone, VenusAndMars, X } from "lucide-react";
import { ICandidate } from "../../../types/candidate";

export const CandidateItem = ({ item }: { item: ICandidate }) => {
  return (
    <div className="relative p-2 text-white bg-secondBackground border border-white/10 rounded-[4px] mr-1">
      <span className="flex gap-1 pb-2">
        <p>Кандидат {item.full_name}</p>
        <p>по профессії {item.profession}</p>
      </span>
      <div className="flex gap-4">
        <span className="flex gap-1 items-center">
          <VenusAndMars className="text-primary" size={20} />
          {item.gender}
        </span>
        <p>{item.birthday_date} року народження</p>
      </div>
      <span className="flex gap-1 items-center">
        <GraduationCap className="text-primary" size={20} />
        <p>Кандидат випускник: {item.education}</p>
      </span>
      <div className="flex gap-4">
        <span className="flex gap-1 items-center">
          <House className="text-primary" size={20} />
          {item.address}
        </span>
        <span className="flex gap-1 items-center">
          <Phone className="text-primary" size={20} />
          {item.phone}
        </span>
      </div>
      <div className="visible absolute top-1 right-1">
        <X size={20} className="text-red-500 cursor-pointer" />
      </div>
    </div>
  );
};
