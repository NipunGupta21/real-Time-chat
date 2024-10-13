type UserId = string;


export interface Chat{
    userId:string;
    name:string;
    message:string;
    upvotes:UserId[];
}
export abstract class Store {
    constructor(){

    }
    initRoom(roomId:string){

    }
    getChats(room:String,limit:number,offset:number){

    }
    addChat(room:String,limit:number,offset:number){

    }
    upvote(room:String,limit:number,offset:number){

    }
}