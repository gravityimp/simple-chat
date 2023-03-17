import UserBlock from "./components/UserBlock";
import {
  CiVolumeMute,
  CiMenuBurger,
  CiCircleChevDown,
  CiCircleChevUp,
  CiSettings,
  CiSearch,
  CiMenuKebab,
  CiFaceSmile,
  CiPaperplane,
} from "react-icons/ci";

import { MdVerified } from "react-icons/md";
import Block from "./components/Block";

const now = new Date().toLocaleTimeString("en-US", {
  hour: "numeric",
  minute: "numeric",
});

function App() {
  return (
    <div className="w-screen h-screen flex overflow-hidden">
      {/* Left side */}
      <div className="w-1/4 h-full py-0.5 px-2 bg-zinc-700 relative">
        <div className="w-full py-2 border-b-2 border-zinc-800">
          <UserBlock>
            <UserBlock.Avatar name="Gravity Impulse" />
            <UserBlock.Body>
              <UserBlock.Content>
                <span>Gravity Impulse</span>
              </UserBlock.Content>
              <UserBlock.SubContent>
                <span>@gavityimpulse</span>
              </UserBlock.SubContent>
            </UserBlock.Body>
            <UserBlock.Tail>
              <Block.Icon>
                <CiMenuBurger />
              </Block.Icon>
            </UserBlock.Tail>
          </UserBlock>
        </div>
        {/* Friends/Groups Section */}
        <div className="w-full h-full py-1 overflow-y-auto">
          <UserBlock animate hover>
            <UserBlock.Avatar name="Friend XD">
              <div className="w-3 h-3 right-0.5 top-0.5 border-2 rounded-full bg-sky-500 border-zinc-800 absolute"></div>
            </UserBlock.Avatar>
            <UserBlock.Body>
              <UserBlock.Content>
                <span>Friend XD</span>
                <CiVolumeMute className="text-slate-400" />
              </UserBlock.Content>
              <UserBlock.SubContent>
                What's up bro?dsadsadaddaasddsadsadadsdsa
              </UserBlock.SubContent>
            </UserBlock.Body>
            <UserBlock.Tail>
              <div className="min-w-[5rem] h-12 flex flex-col items-end">
                <p className="text-gray-500 text-xs leading-7">{now}</p>
                <p className="text-sky-500 text-xs leading-5">Seen</p>
              </div>
            </UserBlock.Tail>
          </UserBlock>

          <UserBlock animate hover>
            <UserBlock.Avatar name="Friend XD">
              <MdVerified className="w-4 h-4 absolute right-0.5 top-0.5 fill-green-500 rounded-full bg-zinc-800 border-2 border-zinc-800" />
            </UserBlock.Avatar>
            <UserBlock.Body>
              <UserBlock.Content>
                <span>Friend XD</span>
                <CiVolumeMute className="text-slate-400" />
              </UserBlock.Content>
              <UserBlock.SubContent>
                What's up bro?dsadsadaddaasddsadsadadsdsa
              </UserBlock.SubContent>
            </UserBlock.Body>
            <UserBlock.Tail>
              <div className="min-w-[5rem] h-12 flex flex-col items-end">
                <p className="text-gray-500 text-xs leading-7">{now}</p>
                <p className="text-sky-500 text-xs leading-5">Seen</p>
              </div>
            </UserBlock.Tail>
          </UserBlock>
          {/* End of chats */}
        </div>

        <Block
          onClick={() => console.log("hello world")}
          absolute="left-0 bottom-0"
        >
          <Block.Icon>
            <CiSettings />
          </Block.Icon>
          <Block.Content>Settings</Block.Content>
          <Block.Icon>
            <CiCircleChevUp />
          </Block.Icon>
        </Block>
      </div>
      {/* End of Left Side */}

      {/* Right Side */}
      <div className="w-3/4 h-full py-0.5 px-2 bg-slate-600 flex flex-col justify-between">
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
                last online - yesterday
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
          {/* Friend message */}
          <div className="w-fit min-w-[15%] max-w-[80%] bg-slate-500 p-2 text-gray-200 rounded-md flex flex-col">
            <span className="text-sm">Hello</span>
            <div className="w-full text-xs space-x-2 flex justify-end">
              <span className="text-slate-400">12:23 PM</span>
              <span className="text-sky-500">Seen</span>
            </div>
          </div>
          {/* Your message */}
          <div className="w-fit min-w-[15%] max-w-[80%] bg-slate-500 p-2 text-gray-200 rounded-md flex flex-col self-end">
            <span className="text-sm">Hello</span>
            <div className="w-full text-xs space-x-2 flex justify-end">
              <span className="text-slate-400">12:23 PM</span>
              <span className="text-sky-500">Seen</span>
            </div>
          </div>

          <div className="w-full p-2 flex justify-center">
            <p className="py-1 px-3 text-center text-base font-bold text-sky-500 bg-zinc-800 rounded-lg">
              Today
            </p>
          </div>
        </div>

        <Block>
          <textarea
            rows={2}
            placeholder="Message"
            className="w-full h-4/5 py-0.5 px-2 mr-1 bg-transparent focus:border-none focus:outline-none text-gray-200"
          />
          <Block.Icon>
            <CiFaceSmile />
          </Block.Icon>
          <Block.Icon>
            <CiPaperplane />
          </Block.Icon>
        </Block>
      </div>
      {/* End of Right Side */}
    </div>
  );
}

export default App;
