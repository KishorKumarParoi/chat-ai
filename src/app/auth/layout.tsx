import { currentUser } from "@clerk/nextjs";
import Image from "next/image";
import { redirect } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

const Layout = async ({ children }: Props) => {
  const user = await currentUser();
  if (user) redirect("/");

  return (
    <div className="h-screen flex w-full justify-center">
      <div className="w-[600px] lg:w-full flex flex-col items-start p-6">
        <Image
          src={"/images/chat-ai.jpeg"}
          alt="LOGO"
          sizes="100vw"
          style={{
            width: "8%",
            height: "auto",
          }}
          width={0}
          height={0}
        />

        <div className="hidden lg:flex flex-1 w-full max-h-full max-w-4000px overflow-hidden relative bg-slate-700 flex-col pt-10 pl-24 gap-3">
          <h2 className="text-blue-500 md:text-4xl font-bold">
            Hi, I&apos;m your AI powered Sales Assistant, Chat.ai!
          </h2>
          <p className="text-purple md:text-sm mb-10">
            Chat is capable of capturing lead information without a form ...{" "}
            <br />
            Something never done before 😉
          </p>
          {/* <Image
            src="/images/chat-ai.jpeg"
            alt="App Image"
            loading="lazy"
            sizes="30"
            className="absolute shrink-0 !w-[1600px] top-48 "
            width={100}
            height={100}
          /> */}
        </div>

        {children}
      </div>
    </div>
  );
};

export default Layout;
