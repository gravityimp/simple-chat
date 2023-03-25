import IMessage from "./IMessage";
import IUser from "./IUser";

export default interface IUserContact {
  user: IUser;
  lastMessage: IMessage;
  online: boolean;
  muted: boolean;
}
