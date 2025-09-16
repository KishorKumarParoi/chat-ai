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
          "w-full cursor-pointer transition-all duration-500 border-2 shadow-md hover:shadow-xl hover:scale-[1.03] overflow-hidden",
          isSelected
            ? "border-blue-700 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 ring-2 ring-blue-400"
            : "border-gray-200 bg-white"
        )}
        style={{
          filter: isSelected
            ? "drop-shadow(0 8px 32px rgba(37, 99, 235, 0.18))"
            : "none",
        }}
      >
        <CardContent className="flex justify-between items-center p-5">
          <div className="flex items-center gap-5">
            <div
              className={cn(
                "flex items-center justify-center rounded-full border transition-colors duration-500",
                isSelected
                  ? "bg-blue-800 border-blue-300"
                  : "bg-gray-100 border-gray-300"
              )}
              style={{ width: 56, height: 56 }}
            >
              <User
                size={32}
                className={cn(
                  "transition-colors duration-500",
                  isSelected ? "text-blue-200" : "text-gray-400"
                )}
              />
            </div>
            <div>
              <CardDescription
                className={cn(
                  "font-bold transition-colors duration-500 tracking-wide",
                  isSelected ? "text-white" : "text-gray-900"
                )}
                style={{ fontSize: "1.3rem" }}
              >
                {title}
              </CardDescription>
              <CardDescription
                className={cn(
                  "font-medium transition-colors duration-500",
                  isSelected ? "text-blue-100" : "text-gray-500"
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
                "w-6 h-6 flex items-center justify-center rounded-full border-2 transition-all duration-500",
                isSelected
                  ? "border-blue-400 bg-blue-600/30"
                  : "border-gray-300 bg-white"
              )}
            >
              <div
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-500",
                  isSelected ? "bg-blue-500" : "bg-transparent"
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
