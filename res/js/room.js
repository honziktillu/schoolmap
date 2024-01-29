
export default class Room {

    static rooms = [];

    constructor(id, x, y, width, height, name, teachers) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.name = name;
        this.teachers = teachers;
        this.color = "black";
        let dC = this.color;
        this.defaultColor = dC;
    }

    draw(ctx) {
        ctx.strokeStyle = this.color;
        ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = this.color;
        ctx.font = "40px serif";
        ctx.fillText(this.name, this.x + this.width * 0.28, this.y + this.height / 2);
    }

    //static - patri tride
    //Room.changeActiveRoom();
    static changeActiveRoom(oldRoom, newRoom) {
        oldRoom.color = oldRoom.defaultColor;
        newRoom.color = "red";
    }

}