import Header from "@/components/header";
import HotelFloors from "@/components/hotel-floor/hotel-floor";
import { textConstant } from "@/utils/textConstant";

export default function Home() {
  return (
    <div className="grid place-content-center mt-4">
      <h1 className="text-center text-xl">
        {textConstant.hotelManagementSystem}
      </h1>
      <Header />
      <HotelFloors />
    </div>
  );
}
