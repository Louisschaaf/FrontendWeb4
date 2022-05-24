export interface User {
    user_id: number;
    name: string;
    friends: User[];
    Messages: Message[];
    //Chats: Chat[];
    LoggedIn: boolean;
}

export interface Message {
    message_id: number;
    text: string;
    date_sent: EpochTimeStamp;
    author: User;
    type: "Private" | "Public";
}

export interface Chat {
    chat_id: number;
    users: User[];
    messages: Message[];
}

