"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "../ui/dialog";
import { textConstant } from "@/utils/textConstant";

export default function Booking({ setResetAPICalls }) {
  const [bookingMethod, setBookingMethod] = useState("roomNumber");
  const [selectedRoomNumber, setSelectedRoomNumber] = useState("");
  const [personCount, setPersonCount] = useState(0);
  const [invalidRoomNumberError, setInvalidRoomNumberError] = useState(null);
  const [invalidPersonCountError, setInvalidPersonCountError] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleMethodChange = (e) => {
    setBookingMethod(e.target.value);
    setSelectedRoomNumber("");
    setPersonCount("");
    setInvalidRoomNumberError(null);
    setInvalidPersonCountError(null);
  };

  const handleRoomNumber = (e) => {
    const value = e.target.value;
    if (value.length > 4) {
      setInvalidRoomNumberError("Room number cannot exceed 4 digits.");
    } else {
      setInvalidRoomNumberError(null);
      setSelectedRoomNumber(value);
    }
  };

  const handlePersonNumber = (e) => {
    const value = e.target.value;
    if (parseInt(value, 10) > 5) {
      setInvalidPersonCountError("Only 5 people are allowed.");
    } else if (parseInt(value, 10) < 1) {
      setInvalidPersonCountError("At least 1 person is required.");
    } else {
      setInvalidPersonCountError(null);
      setPersonCount(value);
    }
  };

  const handleSubmit = async () => {
    if (bookingMethod === "roomNumber") {
      if (!selectedRoomNumber.length) {
        setIsDialogOpen(false);
        setInvalidRoomNumberError("Please provide a room number.");
        return;
      }

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/bookRoomNumber`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              roomNumber: selectedRoomNumber,
            }),
          }
        );

        const data = await response.json();

        if (response.ok) {
          setIsDialogOpen(false);
          setSelectedRoomNumber("");
          setResetAPICalls((prev) => !prev);
        } else {
          setInvalidRoomNumberError(
            data.message || "An unknown error occurred."
          );
        }
      } catch (error) {
        setInvalidRoomNumberError("Failed to connect to the server.");
      }
    }

    if (bookingMethod === "person") {
      if (!personCount || invalidPersonCountError) {
        setInvalidPersonCountError("Please provide a valid person count.");
        return;
      }
    }
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <button
          type="button"
          className="bg-offWhite text-darkBlack px-8 py-4 rounded-lg font-semibold text-xl hover:scale-105 transition-all duration-200 ease-in-out shadow-md hover:shadow-lg"
          onClick={() => setIsDialogOpen(true)}
        >
          {textConstant.book}
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md bg-white p-6 rounded-lg shadow-xl">
        <DialogTitle className="text-black text-2xl font-semibold mb-4">
          {textConstant.bookingMethod}
        </DialogTitle>

        <div className="flex gap-6 mb-6">
          <label className="flex items-center text-lg text-black cursor-pointer">
            <input
              type="radio"
              name="bookingMethod"
              value="roomNumber"
              checked={bookingMethod === "roomNumber"}
              onChange={handleMethodChange}
              className="mr-2"
            />
            {textConstant.bookByRoomNumber}
          </label>
          <label className="flex items-center text-lg text-black cursor-pointer">
            <input
              type="radio"
              name="bookingMethod"
              value="person"
              checked={bookingMethod === "person"}
              onChange={handleMethodChange}
              className="mr-2"
            />
            {textConstant.bookByPersons}
          </label>
        </div>

        {bookingMethod === "roomNumber" && (
          <div className="mb-4">
            <DialogTitle className="text-black text-xl font-semibold mb-2">
              {textConstant.provideRoomNumber}
            </DialogTitle>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:border-gray-300 focus:ring-primary focus:border-transparent mb-2"
              type="number"
              placeholder="Enter room number"
              onChange={handleRoomNumber}
              value={selectedRoomNumber}
            />
            {invalidRoomNumberError && (
              <p className="text-rose-600 text-sm">{invalidRoomNumberError}</p>
            )}
          </div>
        )}

        {bookingMethod === "person" && (
          <div className="mb-4">
            <DialogTitle className="text-black text-xl font-semibold mb-2">
              {textConstant.howManyPeople}
            </DialogTitle>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:border-gray-300 focus:ring-primary focus:border-transparent mb-2"
              type="number"
              placeholder="Enter number of persons"
              onChange={handlePersonNumber}
              value={personCount}
            />
            {invalidPersonCountError && (
              <p className="text-rose-600 text-sm">{invalidPersonCountError}</p>
            )}
          </div>
        )}
        <DialogClose asChild>
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-black text-white px-6 py-3 rounded-lg font-semibold text-lg mt-4 transition-all duration-200 ease-in-out shadow-md hover:shadow-lg uppercase"
          >
            {textConstant.booked}
          </button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
