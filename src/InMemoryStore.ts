import { Chat, Store } from "./store/Store";

export interface Room{
    roomId:string;
    chats:Chat[]
}

export class InMemoryStore implements Store {
    private store: Map<String,Room>;
    constructor(){
        this.store = new Map<string, Room>()
    }
    initRoom(roomId:string){
        this.store.set(roomId,{
            roomId,
            chats:[]
        });
    }
    getChats(roomId:String,limit:number,offset:number){
        const room= this.store.get(roomId);
        if(!room){
            return [];
        }
        return room.chats.slice(0,limit)
    }
    addChat(room:String,limit:number,offset:number){

    }
    upvote(room:String,limit:number,offset:number){

    }
}