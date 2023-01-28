import { Sender } from "./enums";

export class Conversation {
    sender: Sender;
    message: string;

    static async fetch(path: string) : Promise<Conversation[]> {
        const response = await fetch(path);
        const convo = await response.json();

        return convo.map((item: any) => {
            return {
                sender: item.sender,
                message: item.message
            } as Conversation
        });
    }
}