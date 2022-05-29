export interface User {
    user_id: number;
    name: string;
    status: "online" | "busy" | "offline" | "onactive";
}

export interface Message {
    message_id: number;
    author: number;
    username: string;
    text: string;
    date_sent: EpochTimeStamp;
    type: "Private" | "Public";
}

export interface Chat {
    chat_id: number;
    users: User[];
    messages: Message[];
}
