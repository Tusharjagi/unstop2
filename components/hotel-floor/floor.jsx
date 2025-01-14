import { textConstant } from "@/utils/textConstant";
import Room from "./room";

export default function Floor({ floorNumber, rooms }) {
  return (
    <div className={`flex mb-6 ${floorNumber > 9 ? "gap-10" : "gap-12"}`}>
      <div className="flex justify-center items-center bg-metallicSeaweed text-black px-4 py-2 rounded-md text-center font-semibold text-lg">
        <span>
          {textConstant.floor} {floorNumber}
        </span>
      </div>
      <div className="flex flex-wrap gap-4">
        {rooms.map((room) => (
          <Room key={room} roomNumber={room} />
        ))}
      </div>
    </div>
  );
}
