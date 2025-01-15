import { useEffect, useState } from "react";
import { textConstant } from "@/utils/textConstant";
import Booking from "./booking";

export default function Header({
  handleResetButton,
  resetAPICalls,
  handleRandomClick,
  setResetAPICalls,
}) {
  const [availableRoomsCount, setAvailableRoomsCount] = useState(null);

  const fetchAvailableRoomsCount = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/getAvailableRoomsCount`
      );
      const data = await res.json();
      setAvailableRoomsCount(data.availableRoomsCount);
    } catch (error) {
      console.error("Error fetching available rooms count:", error);
    }
  };

  useEffect(() => {
    fetchAvailableRoomsCount();
  }, [resetAPICalls]);

  return (
    <div className="flex justify-between w-screen items-center mt-10 px-12">
      <div className="bg-metallicSeaweed text-darkBlack px-8 py-4 rounded-md font-semibold text-xl mr-8">
        {textConstant.noOfRoom}{" "}
        {availableRoomsCount !== null ? availableRoomsCount : "0"}
      </div>
      <div className="flex justify-center items-center gap-12 flex-wrap">
        <Booking setResetAPICalls={setResetAPICalls} />
        <button
          className="bg-offWhite text-darkBlack px-8 py-4 rounded-md font-semibold text-xl hover:translate-y-[-2px] transition-all duration-200 ease-in-out"
          onClick={handleResetButton}
        >
          {textConstant.reset}
        </button>
        <button
          className="bg-offWhite text-darkBlack px-8 py-4 rounded-md font-semibold text-xl hover:translate-y-[-2px] transition-all duration-200 ease-in-out"
          onClick={handleRandomClick}
        >
          {textConstant.random}
        </button>
      </div>
    </div>
  );
}
