import React from "react";
import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

const BookSingleCard = ({ book }) => {
    return (
        <div
            key={book._id}
            className="border-2 border-gray-300 rounded-lg p-4 relative hover:shadow-xl hover:scale-105 transition-transform duration-300"
        >
            {/* Publish Year Badge */}
            <h2 className="absolute top-2 right-2 px-3 py-1 bg-red-300 text-white rounded-lg text-sm">
                {book.publishYear}
            </h2>

            {/* Book ID */}
            <h4 className="my-2 text-sm text-gray-500">ID: {book._id}</h4>

            {/* Book Title */}
            <div className="flex items-center gap-2 mb-2">
                <PiBookOpenTextLight className="text-red-300 text-2xl" />
                <h2 className="text-lg font-medium">{book.title}</h2>
            </div>

            {/* Book Author */}
            <div className="flex items-center gap-2 mb-4">
                <BiUserCircle className="text-red-300 text-2xl" />
                <h2 className="text-md text-gray-700">{book.author}</h2>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between items-center mt-4">
                <Link to={`/books/details/${book._id}`} aria-label="View Details">
                    <BsInfoCircle className="text-2xl text-blue-600 hover:text-black" />
                </Link>
                <Link to={`/books/edit/${book._id}`} aria-label="Edit Book">
                    <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-black" />
                </Link>
                <Link to={`/books/delete/${book._id}`} aria-label="Delete Book">
                    <MdOutlineDelete className="text-2xl text-red-600 hover:text-black" />
                </Link>
            </div>
        </div>
    )
}

export default BookSingleCard