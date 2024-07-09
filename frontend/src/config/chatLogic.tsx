type Chat = {
    _id: string;
    isGroupChat: boolean;
    users: User[];
    chatName: string;
    latestMessage: {
      sender: {
        name: string;
      };
      content: string;
    };
  };
  
  type User = {
    _id: string;
    name: string;
    email: string;
    token: string;
  };
  


export const getSender = (loggedUser: User | null, users: User[]): string => {
    return users[0]._id === loggedUser?._id ? users[1].name : users[0].name;
  };
  