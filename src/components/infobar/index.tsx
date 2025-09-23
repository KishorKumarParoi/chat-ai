import { AvatarImage } from "@radix-ui/react-avatar";
import { Headphones, Star, Trash } from "lucide-react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Card } from "../ui/card";
import BreadCrumb from "./bread-crumb";

const Infobar = () => {
  return (
    <div className="flex w-full justify-between items-center py-1 mb-8">
      <BreadCrumb />
      <div className="flex gap-3 items-center">
        <div>
          <Card className="rounded-xl flex gap-3 py-3 px-4 text-cyan-500">
            <Trash />
            <Star></Star>
          </Card>
        </div>
        <Avatar>
          <AvatarFallback className="bg-orange text-white">
            <Headphones />
          </AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src={"https://github.com/shadcn.png"} alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Infobar;
