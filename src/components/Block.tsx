import React from "react";

interface IBlock {
  children?: string | JSX.Element | JSX.Element[];
  absolute?: string;
}

function Block(props: IBlock) {
  const { children, absolute } = props;

  return (
    <div
      className={`w-full h-20  ${
        absolute ? "p-2 absolute " + absolute : "py-1"
      } bg-zinc-700`}
    >
      <div className="w-full h-16 py-1 px-2 rounded-md bg-zinc-800 flex justify-center items-center">
        {children}
      </div>
    </div>
  );
}

interface IIcon {
  children: JSX.Element;
}

function Icon(props: IIcon) {
  return React.cloneElement(props.children, {
    className:
      "w-6 h-6 mx-2 text-slate-300 hover:animate-wiggle hover:cursor-pointer",
  });
}
Block.Icon = Icon;

function Content(props: IBlock) {
  return <div className="text-gray-200">{props.children}</div>;
}
Block.Content = Content;

export default Block;
