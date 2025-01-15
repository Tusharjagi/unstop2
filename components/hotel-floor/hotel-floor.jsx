import { useEffect, useState } from "react";
import Floor from "./floor";

export default function HotelFloors({ resetAPICalls }) {
  const [hotelData, setHotelData] = useState(null);

  const fetchHotelData = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/getHotelsAndFloors`
      );
      const data = await res.json();
      setHotelData(data.data);
    } catch (error) {
      console.error("Error fetching hotel data:", error);
    }
  };

  useEffect(() => {
    fetchHotelData();
  }, [resetAPICalls]);

  return (
    <div className="grid place-content-center m-10">
      {hotelData ? (
        hotelData.map((floor, index) => (
          <Floor
            key={`${floor._id}-${index}`}
            id={`${floor._id}-${index}`}
            floorNumber={floor.floor}
            rooms={floor.rooms}
          />
        ))
      ) : (
        <div className="grid place-content-center text-center h-[50vh] font-medium">
          <p>Loading hotels .... </p>
          <p>We are happy to serve you !!!</p>
        </div>
      )}
    </div>
  );
}
