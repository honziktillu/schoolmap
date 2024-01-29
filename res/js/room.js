export default class Room {
  static rooms = [];

  constructor(id, x, y, width, height, name, teachers, fontSize) {
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
    this.neonColor = [30, 177, 235]
    this.defaultNeonColor = [30, 177, 235]
    this.fontSize = fontSize;
  }

  draw(ctx) {
    ctx.save();
    ctx.strokeStyle = this.color;
    //ctx.strokeRect(this.x, this.y, this.width, this.height);
    this.neonStroke(ctx, ...this.neonColor);
    ctx.fillStyle = this.color;
    ctx.font = `${this.fontSize}px 'Honk', system-ui`;
    ctx.textAlign = 'center';
    ctx.fillText(
      this.name,
      this.x + this.width * 0.5,
      this.y + this.height / 2
    );
    ctx.restore();
  }

  neonStroke(ctx, r, g, b) {
    ctx.shadowColor = "rgb(" + r + "," + g + "," + b + ")";
    ctx.shadowBlur = 10;
    ctx.strokeStyle = "rgba(" + r + "," + g + "," + b + ",0.2)";
    ctx.lineWidth = 7.5;
    this.drawRectangle(this.x, this.y, this.width, this.height, 1.5, ctx);
    ctx.strokeStyle = "rgba(" + r + "," + g + "," + b + ",0.2)";
    ctx.lineWidth = 6;
    this.drawRectangle(this.x, this.y, this.width, this.height, 1.5, ctx);
    ctx.strokeStyle = "rgba(" + r + "," + g + "," + b + ",0.2)";
    ctx.lineWidth = 4.5;
    this.drawRectangle(this.x, this.y, this.width, this.height, 1.5, ctx);
    ctx.strokeStyle = "rgba(" + r + "," + g + "," + b + ",0.2)";
    ctx.lineWidth = 3;
    this.drawRectangle(this.x, this.y, this.width, this.height, 1.5, ctx);
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 1.5;
    this.drawRectangle(this.x, this.y, this.width, this.height, 1.5, ctx);
  }

  drawRectangle(x, y, w, h, border, ctx){
    ctx.beginPath();
    ctx.moveTo(x+border, y);
    ctx.lineTo(x+w-border, y);
    ctx.quadraticCurveTo(x+w-border, y, x+w, y+border);
    ctx.lineTo(x+w, y+h-border);
    ctx.quadraticCurveTo(x+w, y+h-border, x+w-border, y+h);
    ctx.lineTo(x+border, y+h);
    ctx.quadraticCurveTo(x+border, y+h, x, y+h-border);
    ctx.lineTo(x, y+border);
    ctx.quadraticCurveTo(x, y+border, x+border, y);
    ctx.closePath();
    ctx.stroke();
  }

  //static - patri tride
  //Room.changeActiveRoom();
  static changeActiveRoom(oldRoom, newRoom) {
    oldRoom.color = oldRoom.defaultColor;
    oldRoom.neonColor = oldRoom.defaultNeonColor;
    newRoom.neonColor = [255, 28, 28];
  }
}
