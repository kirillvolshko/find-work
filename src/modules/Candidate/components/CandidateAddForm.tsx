import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form } from "../../../components/ui/form";
import { Button } from "../../../components/ui/button";
import InputField from "../../../components/common/fields/InputField";
import { DateField } from "../../../components/common/fields/DateField";
import SelectField from "../../../components/common/fields/SelectField";
import { educationOptions, genderOptions } from "../../../utils/select-options";

const FormSchema = z.object({
  fullName: z.string(),
  profession: z.string(),
  education: z.string(),
  gender: z.string(),
  qualifications: z.string(),
  phone: z.string(),
  address: z.string(),
  birthdayDate: z.date(),
});

type FormValues = z.infer<typeof FormSchema>;
export const CandidateAddForm = () => {
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
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col gap-4 w-full">
              <InputField
                control={form.control}
                name="fullName"
                label="ПІБ"
                placeholder="Введить ім'я та прізвище"
              />
              <div className="flex flex-col gap-4 md:gap-0 md:flex-row md:justify-between w-full">
                <DateField
                  control={form.control}
                  name="birthdayDate"
                  label="Дата народження"
                />
                <SelectField
                  control={form.control}
                  name="gender"
                  label="Стать"
                  placeholder="Оберіть стать"
                  options={genderOptions}
                />
              </div>

              <InputField
                control={form.control}
                name="phone"
                label="Телефон"
                placeholder="Введить телефон"
              />
              <InputField
                control={form.control}
                name="address"
                label="Адерса"
                placeholder="Введить адресу"
              />
            </div>
            <div className="flex flex-col gap-4 w-full ">
              <InputField
                control={form.control}
                name="profession"
                label="Професія"
                placeholder="Введить професію"
              />
              <InputField
                control={form.control}
                name="qualifications"
                label="Кваліфікація"
                placeholder="Введить кваліфікацію"
              />
              <SelectField
                control={form.control}
                name="education"
                label="Освіта"
                placeholder="Оберіть освіту"
                options={educationOptions}
              />
            </div>
          </div>
          <div className="flex justify-end pt-5">
            <Button type="submit" className="">
              Зберегти
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
