import React from "react";

interface IBlock {
  children?: string | JSX.Element | JSX.Element[];
  absolute?: string;
  onClick?: () => void;
}

function Block(props: IBlock) {
  const { children, absolute, onClick } = props;

  return (
    <div
      className={`w-full h-20  ${
        absolute ? "py-2.5 px-2 absolute " + absolute : "py-1"
      } bg-transparent ${onClick && "cursor-pointer"}`}
    >
      <div
        className="w-full h-16 py-1 px-2 rounded-md bg-zinc-800 flex justify-center items-center"
        onClick={onClick}
      >
        {children}
      </div>
    </div>
  );
}

interface IIcon {
  children: JSX.Element;
  onClick?: () => void;
}

function Icon(props: IIcon) {
  return (
    <div className="rounded-full p-0 hover:backdrop-brightness-150 flex justify-center items-center">
      {React.cloneElement(props.children, {
        className:
          "w-6 h-6 m-0.5 text-slate-300 hover:animate-wiggle hover:cursor-pointer",
      })}
    </div>
  );
}
Block.Icon = Icon;

function Content(props: IBlock) {
  return <div className="text-gray-200 mx-2">{props.children}</div>;
}
Block.Content = Content;

export default Block;
