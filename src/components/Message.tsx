import IMessage from "../models/IMessage";

interface ICMessage {
  message: IMessage;
  owner: boolean;
}

export default function Message(props: ICMessage) {
  const { message, owner } = props;
  const time = message.datetime.toLocaleTimeString(navigator.languages[0], {
    hour: "numeric",
    minute: "numeric",
  });
  return (
    <div
      className={`w-fit min-w-[15%] max-w-[80%] bg-slate-500 p-2 text-gray-200 rounded-md flex flex-col ${
        owner && "self-end"
      }`}
    >
      <span className="text-sm">{message.content}</span>
      <div className="w-full text-xs space-x-2 flex justify-end">
        <span className="text-slate-400">{time}</span>
        {message.seen ? (
          <span className="text-sky-500">Seen</span>
        ) : message.sent ? (
          <span className="text-slate-500">Sent</span>
        ) : (
          <span className="text-red-500">Error</span>
        )}
      </div>
    </div>
  );
}
