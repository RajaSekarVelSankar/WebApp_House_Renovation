import { Room } from "./room";

export class Object {
    id : number;
    client : string;
    type : string;
    address : string;
    numOfRooms : number;
    sqFootage : number;
    sketch : Array<Room>;

    workInProgress : boolean = false;
}