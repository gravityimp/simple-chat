import IUser from "./IUser";

export default interface IMessage {
  owner?: string;
  content: string;
  datetime: Date;
  sent: boolean;
  seen: boolean;
}
