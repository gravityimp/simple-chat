import UserBlock from "./components/UI/UserBlock";
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
import Block from "./components/UI/Block";
import { useState } from "react";
import Message from "./components/Message";
import { getUserLastOnline } from "./helpers/DateTime";
import UserChat from "./components/UserChat";
import Contacts from "./components/Contacts";

const now = new Date().toLocaleTimeString("en-US", {
  hour: "numeric",
  minute: "numeric",
});

function App() {
  const [openSettings, setOpenSettings] = useState(false);

  return (
    <div className="w-screen h-screen flex overflow-hidden">
      {/* Left side */}
      <div
        className={`w-fit min-w-[320px] h-full py-0.5 px-2 bg-zinc-700 relative`}
      >
        <div
          className={openSettings ? `animate-dissapear` : "animate-appear"}
          onAnimationEnd={(e) => {
            if (e.elapsedTime === 0.5) {
              e.currentTarget.classList.add("hidden");
              e.currentTarget.classList.remove("animate-dissapear");
            } else {
              e.currentTarget.classList.remove("hidden", "animate-appear");
            }
          }}
        >
          <div className="w-full py-2 border-b-2 border-zinc-800">
            <UserBlock>
              <UserBlock.Avatar name="Gravity Impulse" />
              <UserBlock.Body>
                <UserBlock.Content>
                  <span>Localhost</span>
                </UserBlock.Content>
                <UserBlock.SubContent>
                  <span>@localhost</span>
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
            <Contacts
              contacts={[
                {
                  user: {
                    username: "friend1",
                    displayName: "Frined 1",
                    description: "",
                    image: "",
                  },
                  lastMessage: {
                    content: "Hello. Sup?",
                    datetime: new Date(),
                    seen: false,
                    sent: true,
                  },
                  online: true,
                  muted: false,
                },
                {
                  displayName: "Group 1",
                  groupName: "group1",
                  image: "",
                  muted: true,
                  verified: false,
                  lastMessage: {
                    owner: "Friend 1",
                    content: "Yoooo, man",
                    seen: true,
                    sent: true,
                    datetime: new Date(),
                  },
                },
              ]}
            />
          </div>
          {/* End of chats */}
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
      <UserChat />
      {/* End of Right Side */}
    </div>
  );
}

export default App;
