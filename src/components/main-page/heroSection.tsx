import { pricingCards } from "@/constants/landing-page";
import clsx from "clsx";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

const HeroSection = () => {
  // WIP: challenge to setup billing card

  return (
    <section className="w-full bg-gradient-to-br from-blue-50 via-purple-50 to-fuchsia-100 dark:from-[#181825] dark:via-[#232136] dark:to-[#2a273f] py-20 px-4 flex flex-col items-center justify-center text-center">
      <div className="max-w-3xl mx-auto">
        <span className="inline-block mb-6 text-pink-600 bg-gradient-to-r from-yellow-200 via-pink-200 to-fuchsia-300 dark:from-yellow-900/30 dark:via-pink-900/20 dark:to-fuchsia-900/20 px-5 py-2 rounded-full text-base font-semibold shadow-md tracking-wide border border-pink-200 dark:border-pink-700 backdrop-blur">
          🚀 An <span className="text-fuchsia-600 font-bold">AI-powered</span>{" "}
          sales assistant chatbot
        </span>

        <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-purple-700 to-fuchsia-600 dark:from-blue-300 dark:via-pulrple-200 dark:to-fuchsia-400 mb-6">
          Meet Chat.AI
          <br />
          <span className="block mt-2 text-2xl md:text-4xl font-bold text-gray-800 dark:text-gray-100">
            Your Smartest Chatbot Assistant
          </span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-200 mb-10">
          Instantly engage, support, and convert your visitors with AI-powered
          conversations.
          <br />
          Chat.AI is always ready to help, 24/7.
        </p>
        <div className="flex justify-center">
          <Image
            src="/images/chat-ai-mobile.png"
            alt="Chatbot chatting illustration"
            width={420}
            height={320}
            className="rounded-2xl shadow-xl border-4 border-white bg-transparent dark:border-[#232136]"
            priority
          />
        </div>

        <section className="flex justify-center items-center flex-col gap-4 mt-10">
          <h2 className="text-4xl text-center font-bold text-purple-600">
            {" "}
            Choose what fits you right{" "}
          </h2>
          <p className="text-muted-foreground text-center max-w-lg font-semibold ">
            Our straightforward pricing plans are tailored to meet your needs.
            If {" you're"}
            not ready to commit you can get started for free.
          </p>
        </section>

        <div className="flex justify-center gap-4 flex-nowrap mt-6 max-w-6xl mx-auto">
          {pricingCards.map((card, index) => (
            <Card
              key={card.title}
              className={clsx(
                "w-[300px] flex flex-col justify-between transition-all duration-300",
                {
                  "border-2 border-primary scale-105 shadow-2xl relative z-10":
                    index === Math.floor(pricingCards.length / 2), // Middle card highlighted
                  "hover:scale-[1.02] shadow-lg":
                    index !== Math.floor(pricingCards.length / 2),
                }
              )}
            >
              {/* Popular Badge for middle card */}
              {index === Math.floor(pricingCards.length / 2) && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full text-sm font-bold ">
                  Most Popular
                </div>
              )}

              <CardHeader>
                <CardTitle
                  className={clsx("text-2xl font-bold", {
                    "text-orange-500":
                      index !== Math.floor(pricingCards.length / 2),
                    "text-purple-600":
                      index === Math.floor(pricingCards.length / 2),
                  })}
                >
                  {card.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {
                    pricingCards.find((c) => c.title === card.title)
                      ?.description
                  }
                </CardDescription>
              </CardHeader>

              <CardContent>
                <span
                  className={clsx("text-4xl font-bold", {
                    "text-purple-600":
                      index === Math.floor(pricingCards.length / 2),
                  })}
                >
                  {card.price}
                </span>
                <span className="text-muted-foreground">
                  <span> /month </span>
                </span>
              </CardContent>

              <CardFooter className="flex flex-col items-start gap-4">
                <div className="space-y-2">
                  {card?.features.map((feature) => (
                    <div key={feature} className="flex gap-2 items-center">
                      <Check className="w-4 h-4 text-green-500" />
                      <p className="text-sm">{feature}</p>
                    </div>
                  ))}
                </div>
                <Link
                  href={`/dashboard?plan=${card.title}`}
                  className={clsx(
                    "p-3 w-full text-center font-bold rounded-md transition-colors",
                    {
                      "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700":
                        index === Math.floor(pricingCards.length / 2),
                      "bg-[#f3d299] border-orange-500 border-2 hover:bg-orange-100":
                        index !== Math.floor(pricingCards.length / 2),
                    }
                  )}
                >
                  Get Started
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
