import { Building2, Check, GraduationCap, Phone, X } from "lucide-react";
import { IHirer } from "../../../types/hirer";

export const HirerItem = ({ item }: { item: IHirer }) => {
  return (
    <div className="relative p-2 text-white bg-secondBackground border border-white/10 rounded-[4px] mr-1">
      <span>
        <h1 className="font-semibold">Вакансія {item.name}</h1>
      </span>
      <span className="pt-2">
        <p>{item.salary} грн</p>
      </span>
      <div className="flex gap-4 pt-2">
        <p className="flex gap-1">
          <Building2 className="text-primary" size={20} />
          {item.employer_company}
        </p>
        <p>{item.address}</p>
      </div>
      <div className="pt-3">
        <p>{item.description}</p>
      </div>
      <div className="flex gap-4 pt-3">
        <span className="flex gap-1 items-center">
          <Check className="text-primary" size={20} />
          <p>Перелік скілов: {item.required_skills}</p>
        </span>
      </div>
      <div className="flex gap-4 pt-3">
        <span className="flex gap-1 items-center">
          <GraduationCap className="text-primary" size={20} />
          <p>Потрібна освіта: {item.education}</p>
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
