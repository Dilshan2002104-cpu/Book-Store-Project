import React from "react";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

function BookModal({ book, onClose }) {
  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[600px] max-w-full h-[400px] bg-white rounded-xl flex flex-col relative overflow-auto"
      >
        <AiOutlineClose
          className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />
        <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg">
          {book.publishYear || "N/A"}
        </h2>

        {/* Book ID */}
        <h4 className="my-2 text-sm text-gray-500">ID: {book._id || "Unknown"}</h4>

        {/* Book Title */}
        <div className="flex items-center gap-2 mb-2">
          <PiBookOpenTextLight className="text-red-300 text-2xl" />
          <h2 className="text-lg font-medium">{book.title || "No Title Available"}</h2>
        </div>

        {/* Book Author */}
        <div className="flex items-center gap-2 mb-4">
          <BiUserCircle className="text-red-300 text-2xl" />
          <h2 className="text-md text-gray-700">{book.author || "Unknown Author"}</h2>
        </div>
        <p className="mt-4">More information about the book...</p>
        <p className="my-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
          consectetur necessitatibus iusto. Odio ab molestiae aut iste deserunt
          quae eos, vel quibusdam! Fugit architecto impedit voluptates earum id
          tempora accusamus?
        </p>
      </div>
    </div>
  );
}

export default BookModal;
