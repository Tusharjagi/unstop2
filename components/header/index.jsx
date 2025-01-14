import { textConstant } from "@/utils/textConstant";
import Booking from "./booking";

export default function Header() {
  return (
    <div className="flex justify-between w-screen items-center mt-10 px-12">
      <div className="bg-metallicSeaweed text-darkBlack px-8 py-4 rounded-md font-semibold text-xl mr-8">
        {textConstant.noOfRoom} 2
      </div>
      <div className="flex justify-center items-center gap-12 flex-wrap">
        <Booking />
        <button className="bg-offWhite text-darkBlack px-8 py-4 rounded-md font-semibold text-xl hover:translate-y-[-2px] transition-all duration-200 ease-in-out">
          {textConstant.reset}
        </button>
        <button className="bg-offWhite text-darkBlack px-8 py-4 rounded-md font-semibold text-xl hover:translate-y-[-2px] transition-all duration-200 ease-in-out">
          {textConstant.random}
        </button>
      </div>
    </div>
  );
}
