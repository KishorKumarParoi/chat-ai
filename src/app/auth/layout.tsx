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
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="w-full max-w-6xl bg-gradient-to-br from-purple-400 via-blue-200 to-purple-300 rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden">
        {/* Left: Illustration & Branding */}
        <div className="hidden md:flex flex-col items-center justify-center bg-gradient-to-br from-purple-400 via-blue-400 to-purple-600 p-10 w-2/5 relative">
          <Image
            src={"/images/chat-ai.jpeg"}
            alt="AI Chatbot Illustration"
            width={220}
            height={220}
            className="mb-6 drop-shadow-xl"
            priority
          />
          <h2 className="text-white text-3xl font-extrabold mb-4 text-center drop-shadow">
            Meet Your AI Sales Assistant
          </h2>
          <p className="text-purple-100 text-base text-center">
            Chat.ai captures leads, answers questions, and boosts your sales—
            <br />
            all with a human touch and no forms needed!
          </p>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-purple-200 opacity-70">
            Powered by AI &copy; {new Date().getFullYear()}
          </div>
        </div>
        {/* Right: Form Area */}
        <div className="flex-1 flex flex-col justify-center p-12 min-w-[400px]">
          <div className="flex items-center gap-3 mb-8">
            <Image
              src={"/images/chat-ai.jpeg"}
              alt="Chat.ai Logo"
              width={60}
              height={100}
              className="rounded-full shadow"
              priority
            />
            <span className="text-2xl font-bold text-purple-700 tracking-tight">
              Chat.ai
            </span>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
