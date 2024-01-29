import Room from "./room.js";
import Table from "./table.js";

const tableInfo = new Table();

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let activeRoom = undefined;
let oldRoom = undefined;
let newRoom = undefined;

canvas.addEventListener("click", (e) => {
  const x = e.offsetX;
  const y = e.offsetY;
  console.log(e);
  detectRoomClick({ x: x, y: y, w: 2, h: 2 });
});

const loadData = async () => {
  const roomsFile = await fetch("./res/data/rooms.json");
  const roomsData = await roomsFile.json();
  roomsData.map((room) => {
    Room.rooms.push(
      new Room(
        room.id,
        room.x,
        room.y,
        room.width,
        room.height,
        room.name,
        room.teachers,
        room.fontSize
      )
    );
  });
};

const animationLoop = () => {
  clear();
  draw();
  window.requestAnimationFrame(animationLoop);
};

const clear = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width , canvas.height);
};

const draw = () => {
  Room.rooms.map((room) => {
    room.draw(ctx);
  });
  if (activeRoom) tableInfo.draw(ctx, newRoom)
};

const detectRoomClick = (cursor) => {
    for (const room of Room.rooms) {
        if (
            room.x < cursor.x + cursor.w &&
            room.x + room.width > cursor.x &&
            room.y < cursor.y + cursor.h &&
            room.y + room.height > cursor.y
          ) {
              if (!activeRoom) {
                activeRoom = room.id;
                oldRoom = room;
                newRoom = room;
                return Room.changeActiveRoom(oldRoom, newRoom);
              }
              activeRoom = room.id;
              oldRoom = newRoom;
              newRoom = room;
              Room.changeActiveRoom(oldRoom, newRoom);
              break;
          } else {
              console.log("You missed the room dummy")
          }
    }
};


window.onload = async () => {
  await loadData();
  window.requestAnimationFrame(animationLoop);
};
