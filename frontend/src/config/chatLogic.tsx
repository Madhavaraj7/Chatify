import { Key, ReactPortal, ReactElement, JSXElementConstructor, ReactNode } from "react";

export const isSameSenderMargin = (messages: string | any[], m:any, i: number, userId: any) => {
    // console.log(i === messages.length - 1);
  
    if (
      i < messages.length - 1 &&
      messages[i + 1].sender._id === m.sender._id &&
      messages[i].sender._id !== userId
    )
      return 33;
    else if (
      (i < messages.length - 1 &&
        messages[i + 1].sender._id !== m.sender._id &&
        messages[i].sender._id !== userId) ||
      (i === messages.length - 1 && messages[i].sender._id !== userId)
    )
      return 0;
    else return "auto";
  };
  
  export const isSameSender = (messages: string | any[], m: { _id?: Key | null | undefined; sender: any; content?: string | number | boolean | ReactPortal | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined; }, i: number, userId: any) => {
    return (
      i < messages.length - 1 &&
      (messages[i + 1].sender._id !== m.sender._id ||
        messages[i + 1].sender._id === undefined) &&
      messages[i].sender._id !== userId
    );
  };
  
  export const isLastMessage = (messages: string | any[], i: number, userId: any) => {
    return (
      i === messages.length - 1 &&
      messages[messages.length - 1].sender._id !== userId &&
      messages[messages.length - 1].sender._id
    );
  };
  
  export const isSameUser = (messages: { sender: { _id: any; }; }[], m:any, i: number, _id: any) => {
    return i > 0 && messages[i - 1].sender._id === m.sender._id;
  };
  
  export const getSender = (loggedUser: { _id: string; name: string; email: string; token: string; } | null, users: {
    _id: string | undefined; name: any; 
}[]) => {
    return users[0]?._id === loggedUser?._id ? users[1].name : users[0].name;
  };
  
  export const getSenderFull = (loggedUser: { _id: any; }, users: any[]) => {
    return users[0]._id === loggedUser._id ? users[1] : users[0];
  };