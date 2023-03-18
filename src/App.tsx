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
import { useState } from "react";
import Message from "./components/Message";
import { getUserLastOnline } from "./helpers/Date";

const now = new Date().toLocaleTimeString("en-US", {
  hour: "numeric",
  minute: "numeric",
});

function App() {
  const [openSettings, setOpenSettings] = useState(false);

  return (
    <div className="w-screen h-screen flex overflow-hidden">
      {/* Left side */}
      <div className={`w-1/4 h-full py-0.5 px-2 bg-zinc-700 relative`}>
        <div
          className={openSettings ? `animate-dissapear` : "animate-appear"}
          onAnimationEnd={(e) => {
            if (e.elapsedTime === 0.5) {
              e.currentTarget.classList.add("hidden");
              e.currentTarget.classList.remove("animate-dissapear");
            } else {
              console.log("test");
              e.currentTarget.classList.remove("hidden", "animate-appear");
            }
          }}
        >
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
            <UserBlock animate hover active>
              <UserBlock.Avatar name="Friend XD">
                <div className="w-3 h-3 right-0.5 top-0.5 border-2 rounded-full bg-sky-500 border-zinc-800 absolute"></div>
              </UserBlock.Avatar>
              <UserBlock.Body>
                <UserBlock.Content>
                  <span>Friend XD</span>
                  <CiVolumeMute className="text-red-500" />
                </UserBlock.Content>
                <UserBlock.SubContent>
                  What's up bro?dsadsadaddaasddsadsadadsdsa
                </UserBlock.SubContent>
              </UserBlock.Body>
              <UserBlock.Tail>
                <div className="min-w-[5rem] h-12 flex flex-col items-end">
                  <p className="text-zinc-300 text-xs leading-7">{now}</p>
                  <p className="text-cyan-300 text-xs leading-5">Seen</p>
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
                  <CiVolumeMute className="text-red-500" />
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
        </div>
        <div
          id="settings"
          className="w-full transition-all"
          onAnimationEnd={(e) => {
            if (openSettings) {
              e.currentTarget.classList.remove("animate-move-in", "absolute");
            } else {
              e.currentTarget.classList.remove("absolute", "animate-move-out");
            }
          }}
        >
          <Block
            onClick={() => {
              const set = document.getElementById("settings");
              if (openSettings) {
                set?.classList.add("absolute", "animate-move-out");
              } else {
                set?.classList.add("absolute", "left-0", "animate-move-in");
              }
              setOpenSettings(!openSettings);
            }}
            absolute={!openSettings ? "left-0 bottom-0" : undefined}
          >
            <Block.Icon>
              <CiSettings />
            </Block.Icon>
            <Block.Content>Settings</Block.Content>
            <Block.Icon>
              {openSettings ? <CiCircleChevDown /> : <CiCircleChevUp />}
            </Block.Icon>
          </Block>
          {openSettings ? <></> : null}
        </div>
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
            rows={2}
            placeholder="Message"
            className="w-full h-auto py-0.5 px-2 mr-1 bg-transparent focus:border-none focus:outline-none text-gray-200 resize-none overflow-y-hidden"
          />
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
