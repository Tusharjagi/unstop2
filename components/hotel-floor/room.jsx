"use client";

export default function Room({ room, id }) {
  const handleRoomClick = () => {
    console.log(room);
  };

  return (
    <button
      onClick={handleRoomClick}
      className={`text-black px-8 py-4 rounded-md text-center font-semibold text-lg ${
        room.booked ? "bg-red" : "bg-mossGreen"
      }`}
      id={id}
    >
      {room.room}
    </button>
  );
}
