import { CiVolumeMute } from "react-icons/ci";
import { MdVerified } from "react-icons/md";
import { getMessageTime } from "../helpers/DateTime";
import IGroupContact from "../models/IGroupContact";
import IUserContact from "../models/IUserContact";
import UserBlock from "./UI/UserBlock";

type TUserContact = IUserContact;
type TGroupContact = IGroupContact;
interface IContact {
  contacts: (TUserContact | TGroupContact)[];
}

function isGroup(obj: IUserContact | IGroupContact): obj is IGroupContact {
  return "verified" in obj;
}

export default function Contacts(props: IContact) {
  const { contacts } = props;

  return (
    <div className="w-full h-full py-1 overflow-y-auto">
      {contacts.length > 0
        ? contacts.map((contact) => {
            const group = isGroup(contact);

            if (group) {
              return (
                <UserBlock key={contact.groupName} animate hover>
                  <UserBlock.Avatar
                    name={contact.displayName}
                    src={contact.image}
                  >
                    {contact.verified ? (
                      <MdVerified className="w-4 h-4 absolute right-0.5 top-0.5 fill-green-500 rounded-full bg-zinc-800 border-2 border-zinc-800" />
                    ) : undefined}
                  </UserBlock.Avatar>
                  <UserBlock.Body>
                    <UserBlock.Content>
                      <span>{contact.displayName}</span>
                      <CiVolumeMute className="text-red-500" />
                    </UserBlock.Content>
                    <UserBlock.SubContent>
                      {`${contact.lastMessage.owner}: ${contact.lastMessage.content}`}
                    </UserBlock.SubContent>
                  </UserBlock.Body>
                  <UserBlock.Tail>
                    <div className="min-w-[5rem] h-12 flex flex-col items-end">
                      <p className="text-zinc-300 text-xs leading-7">
                        {getMessageTime(contact.lastMessage.datetime)}
                      </p>
                      {contact.lastMessage.seen ? (
                        <p className="text-sky-500 text-xs leading-5">Seen</p>
                      ) : contact.lastMessage.sent ? (
                        <p className="text-slate-500 text-xs leading-5">Sent</p>
                      ) : (
                        <p className="text-red-500 text-xs leading-5">Error</p>
                      )}
                    </div>
                  </UserBlock.Tail>
                </UserBlock>
              );
            } else {
              return (
                <UserBlock key={contact.user.username} animate hover>
                  <UserBlock.Avatar
                    name={contact.user.displayName}
                    src={contact.user.image}
                  >
                    {group && contact.verified ? (
                      <MdVerified className="w-4 h-4 absolute right-0.5 top-0.5 fill-green-500 rounded-full bg-zinc-800 border-2 border-zinc-800" />
                    ) : undefined}
                  </UserBlock.Avatar>
                  <UserBlock.Body>
                    <UserBlock.Content>
                      <span>{contact.user.displayName}</span>
                      <CiVolumeMute className="text-red-500" />
                    </UserBlock.Content>
                    <UserBlock.SubContent>
                      {contact.lastMessage.content}
                    </UserBlock.SubContent>
                  </UserBlock.Body>
                  <UserBlock.Tail>
                    <div className="min-w-[5rem] h-12 flex flex-col items-end">
                      <p className="text-zinc-300 text-xs leading-7">
                        {getMessageTime(contact.lastMessage.datetime)}
                      </p>
                      {contact.lastMessage.seen ? (
                        <p className="text-sky-500 text-xs leading-5">Seen</p>
                      ) : contact.lastMessage.sent ? (
                        <p className="text-slate-500 text-xs leading-5">Sent</p>
                      ) : (
                        <p className="text-red-500 text-xs leading-5">Error</p>
                      )}
                    </div>
                  </UserBlock.Tail>
                </UserBlock>
              );
            }
          })
        : null}
    </div>
  );
}
