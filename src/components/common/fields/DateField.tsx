import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Popover, PopoverTrigger, PopoverContent } from "../../ui/popover";
import { Calendar } from "../../ui/calendar";
import { Button } from "../../ui/button";
import { uk } from "date-fns/locale";
import {
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
} from "../../ui/form";
import { Control, FieldValues, Path } from "react-hook-form";
import { cn } from "../../../lib/utils";

interface DateFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label?: string;
  description?: string;
}

export const DateField = <T extends FieldValues>({
  control,
  name,
  label,
  description,
}: DateFieldProps<T>) => {
  // const [yearView, setYearView] = useState(false);

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          {label && <FormLabel className="text-white">{label}</FormLabel>}
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant={"outline"}
                  className={cn(
                    "pl-3 text-left font-normal text-white rounded-[6px] border-white/10",
                    !field.value && "text-white"
                  )}
                >
                  {field.value ? (
                    format(field.value, "PPP", { locale: uk })
                  ) : (
                    <span>Дата народження</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4  text-primary" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                disabled={(date) =>
                  date > new Date() || date < new Date("1900-01-01")
                }
                initialFocus
                captionLayout="dropdown"
                fromYear={1900}
                toYear={new Date().getFullYear()}
                locale={uk}
              />
            </PopoverContent>
          </Popover>
          {description && (
            <FormDescription className="text-red-600">
              {description}
            </FormDescription>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
