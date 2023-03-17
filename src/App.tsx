import UserBlock from "./components/UserBlock";
import {
  CiVolumeMute,
  CiMenuBurger,
  CiCircleChevDown,
  CiCircleChevUp,
  CiSettings,
} from "react-icons/ci";

import { MdVerified } from "react-icons/md";
import Block from "./components/Block";

function App() {
  return (
    <div className="w-screen h-screen flex overflow-hidden">
      {/* Left side */}
      <div className="w-1/4 h-full py-0.5 px-2 bg-zinc-700 relative">
        <div className="w-full py-2 border-b-2 border-zinc-800">
          <div className="w-full h-16 py-1 px-2 rounded-md bg-zinc-800 flex items-center">
            <div className="w-12 h-12 min-w-[3rem] mr-2 rounded-full bg-slate-300"></div>
            <div className="w-full flex flex-col">
              <p className="text-gray-200 text-lg">Gravity Impulse</p>
              <p className="text-gray-500 text-sm">@gravityimpulse</p>
            </div>
            <CiMenuBurger className="w-12 h-6 min-w-[2rem] text-gray-200" />
          </div>
        </div>
        {/* Here goes chats */}
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
                <p className="text-gray-500 text-xs leading-7">10:41 PM</p>
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
                <p className="text-gray-500 text-xs leading-7">10:41 PM</p>
                <p className="text-sky-500 text-xs leading-5">Seen</p>
              </div>
            </UserBlock.Tail>
          </UserBlock>
          {/* End of chats */}
        </div>

        <Block absolute="left-0 bottom-0">
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
          <div className="w-full h-16 py-1 px-2 rounded-md bg-zinc-800 flex items-center">
            <div className="w-12 h-12 min-w-[3rem] mr-2 rounded-full bg-slate-300 relative"></div>
            <div className="w-full flex flex-col">
              <p className="text-gray-200 text-lg space-x-1">
                <span>Friend 1</span>
                <span className="text-sm text-slate-400">Ver.</span>
                <span className="text-sm text-slate-400">Muted</span>
              </p>
              <p className="text-gray-500 text-sm">last online - yesterday</p>
            </div>
            <div className="w-6 h-12 min-w-[1.5rem] mx-1 float-right rounded-lg bg-slate-300"></div>
            <div className="w-6 h-12 min-w-[1.5rem] mx-1 float-right rounded-lg bg-slate-300"></div>
          </div>
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

        <div className="w-full py-2">
          <div className="w-full h-16 py-1 px-2 rounded-md bg-zinc-800 flex items-center">
            <textarea
              rows={2}
              className="w-full h-4/5 py-0.5 px-2 mr-1 bg-transparent focus:border-none focus:outline-none text-gray-200"
            />
            <div className="w-8 h-8 min-w-[2rem] mx-1 float-right rounded-full bg-slate-300 relative"></div>
            <div className="w-8 h-8 min-w-[2rem] mx-1 float-right rounded-full bg-slate-300 relative"></div>
          </div>
        </div>
      </div>
      {/* End of Right Side */}
    </div>
  );
}

export default App;
