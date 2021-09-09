import React from "react";
import { useQuery } from "@apollo/client";
import { GET_BOOKS } from "../../GraphQL/Queries";
import Navbar from "../../components/Navbar/Navbar";
import Downloads from "../../resources/labelled-icon.png";
import Likes from "../../resources/labelled-icon(1).png";
import Ratings from "../../resources/rating-stars.png";
import Cart from "../../resources/cart.png";
import "./SearchResult.css";

function SearchResult() {
  const { error, loading, data } = useQuery(GET_BOOKS);
  const searchTerm = "Effective"; // TODO: Set Search Term
  const search_items = data.books.filter(
    (book) =>
      book.title.includes(searchTerm) ||
      book.authors
        .map((author) => author.name)
        .join(" ")
        .includes(searchTerm) ||
      book.genres
        .map((genre) => genre.name)
        .join(" ")
        .includes(searchTerm)
  );

  return (
    <>
      <Navbar />
      <div className="search">
        <div className="search__title">
          <h2>
            {search_items.length} Results found for {searchTerm}
          </h2>
          <hr />
        </div>
        <div className="search__library">
          {loading ? (
            <>Loading...</>
          ) : error ? (
            <>Error</>
          ) : (
            search_items.map((book) => <SearchItem key={book.id} book={book} />)
          )}
        </div>
      </div>
    </>
  );
}

const SearchItem = ({ book }) => (
  <div className="search__details">
    {/* {downloads, likes} = books */}
    <div className="search__img">
      <img
        style={{ height: "183px", width: "110px", objectFit: "contain" }}
        src={book.image_url}
        alt="Effective Engineer"
      />
    </div>
    <div className="search__description">
      <div className="search__layouts">
        <h3>{book.title}</h3>
        <p className="author">
          {book.authors.map((author) => author.name).join(" | ")}
        </p>
        <p className="genre">
          {book.genres.map((genre) => genre.name).join(" | ")}
        </p>
      </div>
      <div className="search__rank">
        <div className="users__likes">
          <div className="downloads">
            <img src={Downloads} alt="downloads" />
          </div>
          <div className="likes">
            <img src={Likes} alt="likes" />
          </div>
        </div>
        <div className="ratings">
          <p>Ratings: {book.rating}</p>
          <img src={Ratings} alt="ratings" />
        </div>
      </div>
      <div className="sales">
        <div className="search__price">
          <p>${book.price}</p>
        </div>
        <div className="search__instock">
          {book.available_copies === 0 ? (
            <p>Out of Stock</p>
          ) : (
            <p>{book.available_copies} Copies Available</p>
          )}
        </div>
      </div>
      <div className="search__checkout">
        <img src={Cart} alt="checkout" />
        <p>Add to Cart</p>
      </div>
    </div>
  </div>
);

export default SearchResult;
