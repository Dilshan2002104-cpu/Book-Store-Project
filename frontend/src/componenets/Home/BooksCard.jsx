import React from "react";
import { Link } from "react-router-dom";
import BookSingleCard from "./BookSingleCard";

const BooksCard = ({ books }) => {
  // Handle cases where books array is undefined or empty
  if (!books || books.length === 0) {
    return <p className="text-center text-gray-500 mt-10">No books available.</p>;
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4">
      {books.map((item) => (
        <BookSingleCard key={item._id} book={item}/>
      ))}
    </div>
  );
};

export default BooksCard;
