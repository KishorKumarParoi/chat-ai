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
        <CardContent className="flex justify-between items-center p-3">
          {/* Reduced padding from p-5 to p-3 */}
          <div className="flex items-center gap-4">
            {/* Reduced gap from 5 to 4 */}
            <div
              className={cn(
                "flex items-center justify-center rounded-full border transition-colors duration-500",
                isSelected
                  ? "bg-blue-800 border-blue-300"
                  : "bg-gray-100 border-gray-300"
              )}
              style={{ width: 48, height: 48 }}
              // Reduced size from 56x56 to 48x48
            >
              <User
                size={28}
                // Reduced icon size from 32 to 28
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
                style={{ fontSize: "1.1rem" }}
                // Reduced font size from 1.3rem to 1.1rem
              >
                {title}
              </CardDescription>
              <CardDescription
                className={cn(
                  "font-medium transition-colors duration-500",
                  isSelected ? "text-blue-100" : "text-gray-500"
                )}
                style={{ fontSize: "0.95rem" }}
                // Reduced font size from 1.05rem to 0.95rem
              >
                {text}
              </CardDescription>
            </div>
          </div>
          <div className="flex items-center">
            <div
              className={cn(
                "w-5 h-5 flex items-center justify-center rounded-full border-2 transition-all duration-500",
                isSelected
                  ? "border-red-500 bg-red-100"
                  : "border-gray-300 bg-white"
              )}
            >
              <div
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all duration-500",
                  isSelected ? "bg-red-500" : "bg-transparent"
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
