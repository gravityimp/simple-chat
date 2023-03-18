import { Children } from "react";

interface IChildren {
  children?: string | JSX.Element | JSX.Element[];
  active?: boolean;
}

interface IUserBlock extends IChildren {
  hover?: boolean;
  animate?: boolean;
}

function UserBlock(props: IUserBlock) {
  const { children, animate, hover, active } = props;

  return (
    <div
      className={`w-full py-1 ${
        animate && "hover:animate-pulse hover:cursor-pointer"
      }`}
    >
      <div
        className={`w-full h-16 py-1 px-2 rounded-md ${
          active ? "bg-cyan-600 border-sky-500" : "bg-zinc-800 border-zinc-600"
        } flex items-center ${hover && "hover:border"}`}
      >
        {children}
      </div>
    </div>
  );
}

// Body of User Block
function Body(props: IChildren) {
  return <div className="w-full flex flex-col">{props.children}</div>;
}
UserBlock.Body = Body;

// Content of Body
function Content(props: IChildren) {
  return (
    <div className="text-gray-200 text-lg space-x-2 flex items-center">
      {props.children}
    </div>
  );
}
UserBlock.Content = Content;

// Subcontent of Body
function SubContent(props: IChildren) {
  const { children, active } = props;
  if (typeof children === "string") {
    const text =
      children.length > 29 ? children.slice(0, 29) + "..." : children;
    return (
      <p className={`text-sm ${active ? "text-gray-500" : "text-zinc-300"}`}>
        {text}
      </p>
    );
  }
  return <p className="text-gray-500 text-sm">{children}</p>;
}
UserBlock.SubContent = SubContent;

// Avatar of User Block
interface IAvatar extends IChildren {
  src?: string;
  name: string;
}

function Avatar(props: IAvatar) {
  if (props.src) {
    return (
      <img
        src={props.src}
        className="w-12 h-12 min-w-[3rem] mr-2 rounded-full bg-slate-300 relative"
      >
        {props.children}
      </img>
    );
  }
  return (
    <div className="w-12 h-12 min-w-[3rem] mr-2 rounded-full bg-slate-300 relative flex justify-center items-center font-semibold text-3xl">
      {props.name[0].toLocaleUpperCase()}
      {props.children}
    </div>
  );
}
UserBlock.Avatar = Avatar;

// Right anchor of User Block
function Tail(props: IChildren) {
  return <>{props.children}</>;
}
UserBlock.Tail = Tail;

export default UserBlock;
