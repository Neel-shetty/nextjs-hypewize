import Message from "@/components/message";

export default function MessagesPage() {
  return (
    <div className="min-h-screen mx-6 mt-3 ">
      <div className="md:m-5 md:p-5 rounded-md bg-white">
        <div className=" flex flex-row items-center gap-5">
          <div className="w-14 h-14  bg-gray-200 rounded-full" />
          <div className="text-neutral-900 text-[20px] font-semibold capitalize">
            Aly Kashif
          </div>
        </div>
        <div className="w-full h-[0px] border mt-4 border-zinc-200" />
        <div className="flex w-full flex-col">
          <Message
            time="04:18 PM"
            align="left"
            message="Welcome to UI HUT! Whether you're opening a new online store or are interested in using UI HUT as your platform, you can find out more information about your options here."
            name="Aly"
          />
          <Message
            align="right"
            name="kashi (ME)"
            time="04:18 PM"
            message="We work to make sure your business is available when your customers want to shop.  available when your customers want to shop."
          />
          <Message
            time="04:18 PM"
            align="left"
            message="Sweet! Where do I sign up! Take my money!"
            name="Aly"
          />
          <Message
            align="right"
            name="kashi (ME)"
            time="04:18 PM"
            message="visit our website from my profile and create an account. Then go &quot;pricing&quot; and select a plan."
          />
        </div>
      </div>
    </div>
  );
}
