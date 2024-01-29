

export default class Table {

    constructor() {
        this.x = 910;
        this.y = 550;
        this.width = 350;
        this.height = 150;
    }
    
    draw(ctx, room) {
        ctx.strokeStyle = "black";
        ctx.strokeRect(this.x, this.y, this.width, this.height);
        this.drawInfo(ctx, room);
    }

    drawInfo(ctx, room) {
        if (!room) return;
        ctx.fillStyle = "black";
        ctx.font = "20px serif";
        ctx.fillText(room.name, this.x + this.width * 0.28, this.y + this.height * 0.5);
        ctx.fillText(room.teachers, this.x + this.width * 0.28, this.y + this.height * 0.65);
    }



}