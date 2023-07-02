import BgVector from "@/components/bg-vector";
import { MoveRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-50 px-10 py-10 w-full min-h-screen">
      <div className="flex flex-row items-end w-full gap-5 justify-end">
        <button className="border-[#DEDEDE] text-[#2745FA] px-5 py-2 border rounded-full">
          Pricing
        </button>
        <Link
          href={"/sign-in"}
          className="bg-[#2745FA] text-white px-5 py-2 rounded-full flex flex-row justify-center items-center gap-3"
        >
          Login
          <MoveRight />
        </Link>
      </div>
      <BgVector />
      <div className="flex flex-row m-10">
        <div className="flex-1 items-center justify-center">
          <div className="w-full">
            <span className="text-blue-600 text-4xl font-medium leading-10 tracking-widest">
              GPT-Powered Live Chat
            </span>
            <span className="text-zinc-900 text-4xl font-medium leading-10 tracking-widest">
              {" "}
            </span>
            <span className="text-black text-4xl font-medium leading-10 tracking-widest">
              Your Gateway to Productive Communication
            </span>
          </div>
          <div className="w-full text-neutral-500 text-lg font-normal leading-loose">
            Talking to your customers should be easy.
            {/* <br /> */}
            Chat with them from the collaboration
            {/* <br /> */}
            tools you already use: Teams and Slack.
          </div>
          <div className="w-full text-neutral-500 text-lg font-normal leading-loose">
            Build ChatGPT powered chatbots trained
            {/* <br /> */}
            on your website data. Easily handoff chats
            {/* <br /> */}
            between ChatGPT and human agents.
          </div>
        </div>
        <div className="hidden md:flex md:flex-1.5 flex-row pl-5 relative justify-end items-end">
          <img
            className="scale-80 top-0 right-0"
            src="/iMAGE.png"
            alt="screenshot"
          />
          <img
            className="absolute scale-85 w-100 left-20 top-[150px]"
            src="/chatscreen.png"
            alt=""
          />
        </div>
      </div>
      <div className="h-[200px]"></div>
      <div className="flex flex-row">
        <div className="flex-1">
          <div className="w-full text-indigo-600 text-sm font-semibold leading-7">
            Build revenue
          </div>
          <div className="w-full  text-zinc-900 text-4xl font-semibold leading-10">
            Close More Sales Online
          </div>
          <div className="w-full  text-neutral-500 text-[18px] font-normal leading-loose">
            Engage potential customers when they need your help, close
            <br />
            more deals, and increase online revenue.
          </div>
          <div className="ml-10 mt-8">
            <div className="w-full mt-4  left-[36.01px] top-[204px] text-gray-900 text-[16px] font-semibold leading-7">
              Answer questions in real-time.{" "}
            </div>
            <span className="w-full left-[259.94px] top-[200px] text-neutral-500 text-[16px] font-normal leading-7">
              Connect with customers when they{" "}
            </span>
            <span className="w-full left-[36.01px] top-[228px] text-neutral-500 text-[16px] font-normal leading-7">
              are about to buy.
            </span>
            <div className="w-full h-[19px] left-[36.01px] top-[292px] text-gray-900 text-[16px] font-semibold leading-7">
              Capture leads.{" "}
            </div>
            <span className="w-full left-[144.11px] top-[288px] text-neutral-500 text-[16px] font-normal leading-7">
              Automate your lead capture and push transcripts
            </span>
            <span className="w-full left-[36.01px] top-[316px] text-neutral-500 text-[16px] font-normal leading-7">
              and leads right into your CRM, ticketing, or marketing systems.
            </span>
            <div className="w-full h-[19px] left-[36.01px] top-[380px] text-gray-900 text-[16px] font-semibold leading-7">
              Automate your sales process.{" "}
            </div>
            <span className="w-full left-[253.72px] top-[376px] text-gray-600 text-[16px] font-normal leading-7">
              Pre-qualify visitors with initial{" "}
            </span>
            <span className="w-full left-[36.01px] top-[404px] text-neutral-500 text-[16px] font-normal leading-7">
              questions, automate via chatbots, and escalate to your agents when
              it makes sense.
            </span>
          </div>
        </div>
        <div className="hidden md:flex md:flex-1">
          <img src="/landing2.png" alt="screenshot" />
        </div>
      </div>
      <div className="h-[200px]"></div>
      <div className="flex flex-row">
        <div className="flex-1">
          <div className="w-full text-indigo-600 text-sm font-semibold leading-7">
            Build revenue
          </div>
          <div className="w-full text-zinc-900 text-4xl font-semibold leading-10">
            Embed Live Chat Snippet On Your Website
          </div>
          <div className="w-full text-neutral-500 text-[18px] font-normal leading-loose">
            First, make sure that the live chat widget is visible on your
            website. This is what customers will use to talk to you.
          </div>
          <div className="w-full text-neutral-500 text-[16px] font-normal leading-normal">
            To make it appear, either insert the live chat code snippet into
            your web page or use special plugins provided by Social Intents for
            platforms like Shopify, WordPress, Bigcommerce, or Wix.
          </div>
        </div>
        <div className="hidden md:flex md:flex-1">
          <img src="/html.png" alt="html  " />
        </div>
      </div>
      <div className="h-[200px]"></div>
      <div className="w-full items-center flex flex-col">
        <div className="text-zinc-900 text-[48px] font-semibold capitalize leading-10">
          frequently asked questions.
        </div>
      </div>
      <div className="flex flex-col md:flex-row mt-10">
        <div className="flex-1">
          <div className="w-full text-zinc-900 text-[40px] font-semibold leading-10">
            Have any Questions?
          </div>
          <div className="w-full my-5 text-neutral-500 text-[16px] font-normal leading-7">
            Cant find the answer youre looking for? Chat with us.
          </div>
          <Link
            href={"/sign-in"}
            className="bg-[#2745FA] md:w-[30%] text-white px-5 py-2 rounded-full flex flex-row justify-center items-center gap-3"
          >
            Chat With Us
            <MoveRight />
          </Link>
        </div>
        <div className="flex-1">
          <div className="w-full p-6 my-5 bg-white bg-opacity-0 rounded-2xl shadow flex-col justify-center items-start gap-2 inline-flex">
            <div className="wfull  text-zinc-900 text-[24px] font-semibold leading-7">
              Who should use Social Intents?
            </div>
            <div className="self-stretch pr-[25.52px] py-0.5 justify-start items-center inline-flex">
              <div className="w-full text-neutral-500 text-[20px] font-normal leading-7">
                Small businesses, entrepreneurs, marketers, and anyone who wants
                to improve their sales. Especially teams that use Microsoft
                Teams, Slack, Zoom, or Webex.
              </div>
            </div>
          </div>
          <div className="w-full p-6 my-5 bg-white bg-opacity-0 rounded-2xl shadow flex-col justify-center items-start gap-2 inline-flex">
            <div className="w-full text-zinc-900 text-[24px] font-semibold leading-7">
              Is there a Free Trial?
            </div>
            <div className="self-stretch pr-[25.52px] py-0.5 justify-start items-center inline-flex">
              <div className="w-full text-neutral-500 text-[20px] font-normal leading-7">
                Yes! We offer a 14-Day free pro trial with all the bells and
                whistles to make sure you love the product. Cancel at any time
                and there are never any contracts.
              </div>
            </div>
          </div>
          <div className="w-full p-6 my-5 bg-white bg-opacity-0 rounded-2xl shadow flex-col justify-center items-start gap-2 inline-flex">
            <div className="w-full  text-zinc-900 text-[24px] font-semibold leading-7">
              Can I use live chat on multiple websites?
            </div>
            <div className="self-stretch pr-[25.52px] py-0.5 justify-start items-center inline-flex">
              <div className="w-full text-neutral-500 text-[20px] font-normal leading-7">
                Yes - absolutely! Each of our plans supports a tiered number of
                websites. So just pick a plan that fits your needs.
              </div>
            </div>
          </div>
          <div className="w-full p-6 my-5 bg-white bg-opacity-0 rounded-2xl shadow flex-col justify-center items-start gap-2 inline-flex">
            <div className="w-full  text-zinc-900 text-[24px] font-semibold leading-7">
              Do I have to sign a contract?
            </div>
            <div className="self-stretch pr-[25.52px] py-0.5 justify-start items-center inline-flex">
              <div className="w-full text-neutral-500 text-[20px] font-normal  mb-20 leading-7">
                No! There are no contracts and you can cancel at any time.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
