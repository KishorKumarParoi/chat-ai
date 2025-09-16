import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { User } from "lucide-react";
import { FieldValues, UseFormRegister } from "react-hook-form";

type Props = {
  value: string;
  title: string;
  text: string;
  register: UseFormRegister<FieldValues>;
  userType: "owner" | "student";
  setUserType: React.Dispatch<React.SetStateAction<"owner" | "student">>;
};

const UserTypeCard = ({
  value,
  title,
  text,
  register,
  userType,
  setUserType,
}: Props) => {
  const isSelected = userType === value;

  return (
    <Label>
      <Card
        className={cn(
          "w-full cursor-pointer transition-all duration-300 border-2 shadow-md hover:shadow-xl hover:scale-[1.025]",
          isSelected
            ? "border-cyan-600 bg-gradient-to-br from-cyan-100 via-white to-cyan-50 ring-2 ring-cyan-400"
            : "border-gray-200 bg-white"
        )}
      >
        <CardContent className="flex justify-between items-center p-4">
          <div className="flex items-center gap-4">
            <div
              className={cn(
                "flex items-center justify-center rounded-full transition-colors duration-300",
                isSelected
                  ? "bg-cyan-100 border-2 border-cyan-400"
                  : "bg-gray-100 border border-gray-200"
              )}
              style={{ width: 56, height: 56 }}
            >
              <User
                size={32}
                className={cn(
                  "transition-colors duration-300",
                  isSelected ? "text-cyan-600" : "text-gray-400"
                )}
              />
            </div>
            <div>
              <CardDescription
                className={cn(
                  "font-bold transition-colors duration-300",
                  isSelected ? "text-cyan-700" : "text-gray-800"
                )}
                style={{ fontSize: "1.35rem" }}
              >
                {title}
              </CardDescription>
              <CardDescription
                className={cn(
                  "font-medium transition-colors duration-300",
                  isSelected ? "text-cyan-500" : "text-gray-400"
                )}
                style={{ fontSize: "1.05rem" }}
              >
                {text}
              </CardDescription>
            </div>
          </div>
          <div className="flex items-center">
            <div
              className={cn(
                "w-6 h-6 flex items-center justify-center rounded-full border-2 transition-all duration-300",
                isSelected
                  ? "border-cyan-600 bg-cyan-400/20"
                  : "border-gray-300 bg-white"
              )}
            >
              <div
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  isSelected ? "bg-cyan-600" : "bg-transparent"
                )}
              />
              <Input
                {...register("type", {
                  onChange: (event) => setUserType(event.target.value),
                })}
                value={value}
                id={value}
                className="hidden"
                type="radio"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </Label>
  );
};

export default UserTypeCard;
