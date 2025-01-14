"use client";

export default function Room({ roomNumber }) {
  const handleRoomClick = () => {
    console.log(roomNumber);
  };

  return (
    <button
      onClick={handleRoomClick}
      className="bg-mossGreen text-black px-8 py-4 rounded-md text-center font-semibold text-lg"
    >
      {roomNumber}
    </button>
  );
}
