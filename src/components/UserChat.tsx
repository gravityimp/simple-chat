import { useState } from "react";
import {
  CiFaceSmile,
  CiMenuKebab,
  CiPaperplane,
  CiSearch,
  CiVolumeMute,
} from "react-icons/ci";
import { getUserLastOnline } from "../helpers/DateTime";
import Block from "./UI/Block";
import Message from "./Message";
import UserBlock from "./UI/UserBlock";

export default function UserChat() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const chatter = {};

  function getMessages() {}

  function handleChangeMessage(e: React.FormEvent<HTMLTextAreaElement>) {
    setMessage(e.currentTarget.value);
  }

  function handleEnterPress(e: React.KeyboardEvent) {
    if (e.key === "Enter") {
      console.log("ender pressed!");
    }
  }

  return (
    <div className="w-full h-full py-0.5 px-2 bg-slate-600 flex flex-col justify-between">
      <div className="w-full py-2 border-b-2 border-zinc-800">
        <UserBlock>
          <UserBlock.Avatar name="Gravity Impulse" />
          <UserBlock.Body>
            <UserBlock.Content>
              <span>
                {new Date().toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </span>
              <CiVolumeMute className="text-slate-400" />
            </UserBlock.Content>
            <UserBlock.SubContent>
              <span>
                last online -{" "}
                {getUserLastOnline(new Date("2022-02-01T12:30:00Z"))}
              </span>
            </UserBlock.SubContent>
          </UserBlock.Body>
          <UserBlock.Tail>
            <Block.Icon>
              <CiSearch />
            </Block.Icon>
            <Block.Icon>
              <CiMenuKebab />
            </Block.Icon>
          </UserBlock.Tail>
        </UserBlock>
      </div>

      <div className="w-full h-full p-2 flex flex-col-reverse">
        <Message
          message={{
            content: "Hello",
            datetime: new Date(),
            seen: true,
            sent: true,
          }}
          owner={true}
        />

        <Message
          message={{
            content: "Hello bro. Sup?",
            datetime: new Date(),
            seen: true,
            sent: true,
          }}
          owner={false}
        />

        <div className="w-full p-2 flex justify-center">
          <p className="py-1 px-3 text-center text-base font-bold text-sky-500 bg-zinc-800 rounded-lg">
            Today
          </p>
        </div>
      </div>

      <Block>
        <Block.Icon>
          <CiFaceSmile />
        </Block.Icon>
        <textarea
          value={message}
          onChange={handleChangeMessage}
          onKeyUp={handleEnterPress}
          rows={2}
          placeholder="Message"
          className="w-full h-auto py-0.5 px-2 mr-1 bg-transparent focus:border-none focus:outline-none text-gray-200 resize-none overflow-y-hidden"
        />
        <Block.Icon>
          <CiPaperplane />
        </Block.Icon>
      </Block>
    </div>
  );
}
