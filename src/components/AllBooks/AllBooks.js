import React from "react";
import { useQuery } from "@apollo/client";
import { GET_BOOKS } from "../../GraphQL/Queries";
import Rating from "../Rating/Rating";
import "./AllBooks.css";
import Cart from "../../resources/cart.png";
import Purchases from "../../resources/purchases.png";
import Like from "../../resources/like.png";

function AllBooks() {
  const { error, loading, data } = useQuery(GET_BOOKS);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    console.error(error);
  }

  console.log(data);

  return (
    <div className="allbooks">
      <div className="allbooks__title">
        <h2>All Books</h2>
        <hr />
      </div>
      <div className="allbooks__library">
        {data.books.map((book) => {
          return (
            <div className="allbooks__details" key={book.id}>
              <div className="allbooks__img">
                <img src={book.image_url} alt="Effective Engineer" />
              </div>
              <div className="allbooks__description">
                <div className="allbooks__layouts">
                  <h3>{book.title}</h3>
                  {book.authors.map((author, index) => {
                    return (
                      <p className="author" key={index}>
                        {author.name}
                      </p>
                    );
                  })}
                  {book.genres.map((genre, index) => {
                    return (
                      <p className="genre" key={index}>
                        {genre.name}
                      </p>
                    );
                  })}
                </div>
                <div className="allbooks__rank">
                  <div className="users__likes">
                    <div className="downloads">
                      <img src={Purchases} alt="downloads" />
                      <p>85</p>
                    </div>
                    <div className="likes">
                      <img src={Like} alt="likes" />
                      <p>{book.likes}</p>
                    </div>
                  </div>
                  <div className="ratings">
                    <p>Ratings: {book.rating}</p>
                    <Rating value={book.rating} />
                  </div>
                </div>
                <div className="sales">
                  <div className="allbooks__price">
                    <p>${book.price}</p>
                  </div>
                  <div className="allbooks__instock">
                    {book.available_copies < 1 ? (
                      <p className="not__available">
                        {book.available_copies} Copies Available
                      </p>
                    ) : (
                      <p className="available">
                        {book.available_copies} Copies Available
                      </p>
                    )}
                  </div>
                </div>
                <div className="allbooks__checkout">
                  {book.available_copies < 1 ? (
                    <p>Out of Stock</p>
                  ) : (
                    <>
                      <img src={Cart} alt="checkout" />
                      <p>Add to Cart</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllBooks;
