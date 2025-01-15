"use client";

import { useState } from "react";
import Header from "@/components/header";
import HotelFloors from "@/components/hotel-floor/hotel-floor";
import { textConstant } from "@/utils/textConstant";

export default function Home() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [resetAPICalls, setResetAPICalls] = useState(false);

  const handleResetButton = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/reset`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      if (response.ok) {
        setResetAPICalls((prev) => !prev);
      } else {
        alert(data.message || "An error occurred while resetting the rooms.");
      }
    } catch (error) {
      console.error("Error resetting rooms:", error);
    }
  };

  const handleRandomClick = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/randomBook`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      if (response.ok) {
        setResetAPICalls((prev) => !prev);
      } else {
        alert(data.message || "An error occurred while resetting the rooms.");
      }
    } catch (error) {
      console.error("Error resetting rooms:", error);
    }
  };

  return (
    <div className="grid place-content-center mt-4">
      <h1 className="text-center text-xl">
        {textConstant.hotelManagementSystem}
      </h1>
      <Header
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
        handleResetButton={handleResetButton}
        resetAPICalls={resetAPICalls}
        handleRandomClick={handleRandomClick}
      />
      <HotelFloors isDialogOpen={isDialogOpen} resetAPICalls={resetAPICalls} />
    </div>
  );
}
