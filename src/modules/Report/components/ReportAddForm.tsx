import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form } from "../../../components/ui/form";
import { Button } from "../../../components/ui/button";
import InputField from "../../../components/common/fields/InputField";
import SelectField from "../../../components/common/fields/SelectField";
import { vacancies } from "../../../utils/data.hirer";
import { candidates } from "../../../utils/data.candidate";

//убрать потом
const FormSchema = z.object({
  name: z.string(),
  employer_company: z.string(),
  employee: z.string(),
});

type FormValues = z.infer<typeof FormSchema>;
export const ReportAddForm = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = () => {
    console.log("ok");
    form.reset();
  };
  //убрать потом
  const companyOptions = vacancies.map((item) => ({
    value: item.id,
    label: item.name + " " + item.employer_company,
  }));
  const employeeOptions = candidates.map((item) => ({
    value: item.id,
    label: item.full_name + " " + item.profession,
  }));
  return (
    <div className="w-full h-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5 md:flex-row h-full"
        >
          <div className="flex gap-5 flex-col md:flex-row">
            <InputField
              control={form.control}
              name="name"
              label="Назва звіту"
              placeholder="Введить назву звіту"
            />

            <SelectField
              control={form.control}
              name="employer_company"
              label="Роботодавець"
              placeholder="Оберіть роботодавця"
              options={companyOptions}
            />

            <SelectField
              control={form.control}
              name="employee"
              label="Кандидат"
              placeholder="Оберіть кандидата"
              options={employeeOptions}
            />
          </div>

          <div className="flex justify-end items-end">
            <Button type="submit" className="">
              Сформувати звіт
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
