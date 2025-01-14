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

export default function Booking() {
  const [bookingMethod, setBookingMethod] = useState(null);

  const handleMethodChange = (e) => {
    setBookingMethod(e.target.value);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="bg-offWhite text-darkBlack px-8 py-4 rounded-lg font-semibold text-xl hover:scale-105 transition-all duration-200 ease-in-out shadow-md hover:shadow-lg"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:border-gray-300 focus:ring-primary focus:border-transparent mb-4"
              type="number"
              placeholder="Enter room number"
            />
          </div>
        )}

        {bookingMethod === "person" && (
          <div className="mb-4">
            <DialogTitle className="text-black text-xl font-semibold mb-2">
              {textConstant.howManyPeople}
            </DialogTitle>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:border-gray-300 focus:ring-primary focus:border-transparent mb-4"
              type="number"
              placeholder="Enter number person"
            />
          </div>
        )}

        <DialogClose asChild>
          <button
            type="button"
            className="w-full bg-black text-white px-6 py-3 rounded-lg font-semibold text-lg mt-4 transition-all duration-200 ease-in-out shadow-md hover:shadow-lg uppercase"
          >
            {textConstant.booked}
          </button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
