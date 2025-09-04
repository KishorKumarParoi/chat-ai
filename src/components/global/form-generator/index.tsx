import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ErrorMessage } from "@hookform/error-message";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

type Props = {
  type?: "text" | "email" | "password" | "number";
  inputType: "select" | "input" | "textarea" | "checkbox";
  options?: { value: string; label: string; id: string }[];
  label?: string;
  placeholder: string;
  register: UseFormRegister<any>;
  name: string;
  errors: FieldErrors<FieldValues>;
  className?: string;
  labelClassName?: string;
  lines?: number;
  form?: string;
};

export const FormGenerator = (props: Props) => {
  const {
    inputType,
    type,
    options,
    label,
    placeholder,
    name,
    register,
    errors,
    lines,
    form,
  } = props;
  switch (inputType) {
    case "input":
      return (
        <Label
          className="flex flex-col gap-2 text-[#9D9D9D]"
          htmlFor={`input-${label}`}
        >
          {label && label}
          <Input
            id={`input-${label}`}
            type={type}
            placeholder={placeholder}
            className="bg-transparent border-slate-700 text-white"
            form={form}
            {...register(name)}
          />

          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <p className="text-red-400 mt-2">
                {message === "Required" ? "" : message}
              </p>
            )}
          />
        </Label>
      );

    case "select":
      return (
        <Label
          className="flex flex-col gap-2 text-[#9D9D9D]"
          htmlFor={`select-${label}`}
        >
          {label && label}
          <select
            form={form}
            id={`select-${label}`}
            className="w-full bg-transparent border-[1px] p-3 rounded-lg"
            {...register(name)}
          >
            {options?.length &&
              options?.map((option) => (
                <option
                  value={option.value}
                  key={option.id}
                  className="dark:bg-neutral-400"
                >
                  {option.label}
                </option>
              ))}
          </select>

          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <p className="text-red-400 mt-2">
                {message === "Required" ? "" : message}
              </p>
            )}
          />
        </Label>
      );

    case "textarea":
      return (
        <Label
          className="flex flex-col gap-2 text-[#9D9D9D]"
          htmlFor={`textarea-${label}`}
        >
          {label && label}
          <Textarea
            form={form}
            className={`bg-transparent border-slate-700 p-2 rounded-xl text-white w-full min-w-0 max-w-full resize-y ${
              props.className ?? ""
            }`}
            id={`textarea-${label}`}
            placeholder={placeholder}
            rows={lines}
            {...register(name)}
          />

          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <p className="text-red-400 mt-2">
                {message === "Required" ? "" : message}
              </p>
            )}
          />
        </Label>
      );

    case "checkbox":
      return (
        <Label
          className="flex flex-col gap-2 text-[#9D9D9D]"
          htmlFor={`checkbox-${label}`}
        >
          {label && label}
          <Checkbox form={form} id={`checkbox-${label}`} {...register(name)} />
          {label && <span>{label}</span>}
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <p className="text-red-400 mt-2">
                {message === "Required" ? "" : message}
              </p>
            )}
          />
        </Label>
      );

    default:
      break;
  }
  return <div>FormGenerator</div>;
};
