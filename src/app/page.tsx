import { MoveRight } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-gray-50 ">
      <div className="w-[90%] items-center flex flex-col justify-between ">
        <div className="flex flex-row justify-between items-center p-5">
          <div className="flex flex-row gap-5 justify-between w-full">
            <div></div>
            <div className="flex flex-row gap-5 justify-between">
              <button className="border-[#2745FA] text-[#2745FA] px-5 py-2 border rounded-full">
                Pricing
              </button>

              <button className="bg-[#2745FA] text-white px-5 py-2 rounded-full flex flex-row justify-center items-center gap-3">
                Login
                <MoveRight />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="flex-1">
            {/* <p>GPT-Powered Live Chat</p>
          <p>Your Gateway to Productive Communication</p> */}
            <div className="w-[593px] h-44">
              <span className="text-blue-600 text-[46px] font-medium leading-10 tracking-widest">
                GPT-Powered Live Chat
              </span>
              <span className="text-zinc-900 text-[46px] font-medium leading-10 tracking-widest">
                {" "}
              </span>
              <span className="text-black text-[42px] font-medium leading-10 tracking-widest">
                Your Gateway to Productive Communication
              </span>
              <div className="w-[372.06px] h-[88px] text-neutral-500 text-[20px] font-normal leading-loose">
                Talking to your customers should be easy.
                <br />
                Chat with them from the collaboration
                <br />
                tools you already use: Teams and Slack.
              </div>
            </div>
          </div>
          <div>
            <img
              className="w-[600px] h-[383px] rounded-md shadow mr-20 mt-10"
              src="/iMAGE.png"
            />
            <img
              className="w-64 h-[393px] left-[549px] top-[206px] absolute rounded-md"
              src="/chatscreen.png"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="w-[179.55px] h-[60px] pl-8 py-4 bg-gradient-to-r from-blue-600 to-violet-700 rounded-full shadow justify-start items-start ">
          <div className="text-white text-[18px] font-medium leading-7">
            Try for Free →
          </div>
        </div>
      </div>
    </div>
  );
}
