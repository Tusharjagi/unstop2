import Floor from "./floor";

export default function HotelFloors() {
  const hotelFloors = Array.from({ length: 10 }, (_, floorIndex) => {
    if (floorIndex < 9) {
      return Array.from(
        { length: 10 },
        (_, roomIndex) => (floorIndex + 1) * 100 + (roomIndex + 1)
      );
    } else {
      return Array.from(
        { length: 7 },
        (_, roomIndex) => 1000 + (roomIndex + 1)
      );
    }
  });

  return (
    <div className="grid place-content-center m-10">
      {hotelFloors.map((rooms, index) => (
        <Floor key={index} floorNumber={index + 1} rooms={rooms} />
      ))}
    </div>
  );
}
