import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form } from "../../../components/ui/form";
import { Button } from "../../../components/ui/button";
import InputField from "../../../components/common/fields/InputField";

import SelectField from "../../../components/common/fields/SelectField";
import { educationOptions } from "../../../utils/select-options";
import TextareaField from "../../../components/common/fields/TextAreaField";

const FormSchema = z.object({
  name: z.string(),
  employer_company: z.string(),
  salary: z.number(),
  required_skills: z.string(),
  education: z.string(),
  address: z.string(),
  phone: z.string(),
  description: z.string(),
});

type FormValues = z.infer<typeof FormSchema>;
export const HirerAddForm = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = () => {
    console.log("ok");
    form.reset();
  };
  return (
    <div className="w-full h-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col h-full"
        >
          <div>
            <div className="flex flex-row gap-4">
              <div className="flex flex-col gap-4 w-full">
                <InputField
                  control={form.control}
                  name="name"
                  label="Назва вакансії"
                  placeholder="Введить назву вакансії"
                />

                <InputField
                  control={form.control}
                  name="employer_company"
                  label="Назва компанії"
                  placeholder="Введить назву компанії"
                />
                <InputField
                  control={form.control}
                  name="address"
                  label="Адерса компанії"
                  placeholder="Введить адресу"
                />
              </div>
              <div className="flex flex-col gap-4 w-full ">
                <InputField
                  control={form.control}
                  name="salary"
                  type="number"
                  label="Заробітня платня"
                  placeholder="Введить зарплату"
                />
                <SelectField
                  control={form.control}
                  name="education"
                  label="Освіта"
                  placeholder="Оберіть освіту"
                  options={educationOptions}
                />
                <InputField
                  control={form.control}
                  name="phone"
                  label="Телефон"
                  placeholder="Введить телефон"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 pt-5 pb-5">
              <TextareaField
                control={form.control}
                name="required_skills"
                label="Скіли"
                placeholder="Введить скіли"
              />
              <TextareaField
                control={form.control}
                name="description"
                label="Опис"
                placeholder="Введить опис вакансії"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <Button type="submit" className="">
              Зберегти
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
