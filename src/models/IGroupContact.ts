import IMessage from "./IMessage";
import IUser from "./IUser";

export default interface IGroupContact {
  displayName: string;
  groupName: string;
  lastMessage: IMessage;
  image: string;
  verified: boolean;
  muted: boolean;
}
