import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Info as InfoIcon, Copy, Edit } from "lucide-react";

export default function Info() {
  const codeString =
    'import nltk from nltk.chat.util import Chat, reflections\n# Define the chatbots rules \n pairs = [\n[\nr"my name is (.*)",\n["Hello %1, How are you today?"]\n],\n[\nr"hi|hey|hello",\n["Hello", "Hey there"]\n],[';
  return (
    <div>
      <p className="font-bold mb-2">Add Website Domain</p>
      <div className="flex flex-col md:flex-row md:w-full gap-5">
        <Input placeholder="www.exampleWebsite.com" />
        <Button className="bg-[#2745FA]">+Add</Button>
      </div>
      <div className="flex flex-row items-center gap-2 my-3">
        <InfoIcon className="w-5 h-5" />
        <p className="text-[#14151A]">
          Copy the chatbot embeddable code below, and paste it into your
          websites HTML code to integrate the chatbot.
        </p>
      </div>
      <div>
        <div className="w-full p-5 bg-[#E9EBF0] flex flex-row justify-between ">
          Python
          <div className="text-[#2745FA] flex flex-row gap-2">
            <Copy /> Copy
          </div>
        </div>
        <SyntaxHighlighter language="python" style={docco}>
          {codeString}
        </SyntaxHighlighter>
      </div>
      <p className="font-bold mb-2 mt-5">Agent</p>
      <div className="flex flex-col md:flex-row w-full gap-5">
        <Input placeholder="Agent name" />
        <Button className="bg-[#2745FA] gap-2">
          <Edit />
          Edit
        </Button>
      </div>
    </div>
  );
}
