import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import EffectiveEngineer from "../../resources/effective engineer.png";
import Downloads from "../../resources/labelled-icon.png";
import Likes from "../../resources/labelled-icon(1).png";
import Ratings from "../../resources/rating-stars.png";
import Cart from "../../resources/cart.png";
import "./SearchResult.css";

function SearchResult() {
  return (
    <>
      <Navbar />
      <div className="search">
        <div className="search__title">
          <h2>8 Results found for Attack on Titians</h2>
          <hr />
        </div>
        <div className="search__library">
          <div className="search__details">
            <div className="search__img">
              <img src={EffectiveEngineer} alt="Effective Engineer" />
            </div>
            <div className="search__description">
              <div className="search__layouts">
                <h3>The Effective Engineer</h3>
                <p className="author">Edmond Lau - 2009</p>
                <p className="genre">Motivational</p>
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
                  <p>Ratings: 4.0</p>
                  <img src={Ratings} alt="ratings" />
                </div>
              </div>
              <div className="sales">
                <div className="search__price">
                  <p>$29.99</p>
                </div>
                <div className="search__instock">
                  <p>23 Copies Available</p>
                </div>
              </div>
              <div className="search__checkout">
                <img src={Cart} alt="checkout" />
                <p>Add to Cart</p>
              </div>
            </div>
          </div>
          {/* Second Book Details */}
          <div className="search__details">
            <div className="search__img">
              <img src={EffectiveEngineer} alt="Effective Engineer" />
            </div>
            <div className="search__description">
              <div className="search__layouts">
                <h3>The Effective Engineer</h3>
                <p className="author">Edmond Lau - 2009</p>
                <p className="genre">Motivational</p>
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
                  <p>Ratings: 4.0</p>
                  <img src={Ratings} alt="ratings" />
                </div>
              </div>
              <div className="sales">
                <div className="search__price">
                  <p>$29.99</p>
                </div>
                <div className="search__instock">
                  <p>23 Copies Available</p>
                </div>
              </div>
              <div className="search__checkout">
                <img src={Cart} alt="checkout" />
                <p>Add to Cart</p>
              </div>
            </div>
          </div>
          {/* Third Book details */}
          <div className="search__details">
            <div className="search__img">
              <img src={EffectiveEngineer} alt="Effective Engineer" />
            </div>
            <div className="search__description">
              <div className="search__layouts">
                <h3>The Effective Engineer</h3>
                <p className="author">Edmond Lau - 2009</p>
                <p className="genre">Motivational</p>
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
                  <p>Ratings: 4.0</p>
                  <img src={Ratings} alt="ratings" />
                </div>
              </div>
              <div className="sales">
                <div className="search__price">
                  <p>$29.99</p>
                </div>
                <div className="search__instock">
                  <p>23 Copies Available</p>
                </div>
              </div>
              <div className="search__checkout">
                <img src={Cart} alt="checkout" />
                <p>Add to Cart</p>
              </div>
            </div>
          </div>
          {/* Fourth Book Details */}
          <div className="search__details">
            <div className="search__img">
              <img src={EffectiveEngineer} alt="Effective Engineer" />
            </div>
            <div className="search__description">
              <div className="search__layouts">
                <h3>The Effective Engineer</h3>
                <p className="author">Edmond Lau - 2009</p>
                <p className="genre">Motivational</p>
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
                  <p>Ratings: 4.0</p>
                  <img src={Ratings} alt="ratings" />
                </div>
              </div>
              <div className="sales">
                <div className="search__price">
                  <p>$29.99</p>
                </div>
                <div className="search__instock">
                  <p>23 Copies Available</p>
                </div>
              </div>
              <div className="search__checkout">
                <img src={Cart} alt="checkout" />
                <p>Add to Cart</p>
              </div>
            </div>
          </div>
          {/* Fifth Book Details */}
          <div className="search__details">
            <div className="search__img">
              <img src={EffectiveEngineer} alt="Effective Engineer" />
            </div>
            <div className="search__description">
              <div className="search__layouts">
                <h3>The Effective Engineer</h3>
                <p className="author">Edmond Lau - 2009</p>
                <p className="genre">Motivational</p>
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
                  <p>Ratings: 4.0</p>
                  <img src={Ratings} alt="ratings" />
                </div>
              </div>
              <div className="sales">
                <div className="search__price">
                  <p>$29.99</p>
                </div>
                <div className="search__instock">
                  <p>23 Copies Available</p>
                </div>
              </div>
              <div className="search__checkout">
                <img src={Cart} alt="checkout" />
                <p>Add to Cart</p>
              </div>
            </div>
          </div>
          {/* Six Book Details */}
          <div className="search__details">
            <div className="search__img">
              <img src={EffectiveEngineer} alt="Effective Engineer" />
            </div>
            <div className="search__description">
              <div className="search__layouts">
                <h3>The Effective Engineer</h3>
                <p className="author">Edmond Lau - 2009</p>
                <p className="genre">Motivational</p>
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
                  <p>Ratings: 4.0</p>
                  <img src={Ratings} alt="ratings" />
                </div>
              </div>
              <div className="sales">
                <div className="search__price">
                  <p>$29.99</p>
                </div>
                <div className="search__instock">
                  <p>23 Copies Available</p>
                </div>
              </div>
              <div className="search__checkout">
                <img src={Cart} alt="checkout" />
                <p>Add to Cart</p>
              </div>
            </div>
          </div>
          {/* Seventh Book Details */}
          <div className="search__details">
            <div className="search__img">
              <img src={EffectiveEngineer} alt="Effective Engineer" />
            </div>
            <div className="search__description">
              <div className="search__layouts">
                <h3>The Effective Engineer</h3>
                <p className="author">Edmond Lau - 2009</p>
                <p className="genre">Motivational</p>
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
                  <p>Ratings: 4.0</p>
                  <img src={Ratings} alt="ratings" />
                </div>
              </div>
              <div className="sales">
                <div className="search__price">
                  <p>$29.99</p>
                </div>
                <div className="search__instock">
                  <p>23 Copies Available</p>
                </div>
              </div>
              <div className="search__checkout">
                <img src={Cart} alt="checkout" />
                <p>Add to Cart</p>
              </div>
            </div>
          </div>
          {/* Eight book detail  */}
          <div className="search__details">
            <div className="search__img">
              <img src={EffectiveEngineer} alt="Effective Engineer" />
            </div>
            <div className="search__description">
              <div className="search__layouts">
                <h3>The Effective Engineer</h3>
                <p className="author">Edmond Lau - 2009</p>
                <p className="genre">Motivational</p>
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
                  <p>Ratings: 4.0</p>
                  <img src={Ratings} alt="ratings" />
                </div>
              </div>
              <div className="sales">
                <div className="search__price">
                  <p>$29.99</p>
                </div>
                <div className="search__instock">
                  <p>23 Copies Available</p>
                </div>
              </div>
              <div className="search__checkout">
                <img src={Cart} alt="checkout" />
                <p>Add to Cart</p>
              </div>
            </div>
          </div>
          {/* Ninth Book Details */}
          <div className="search__details">
            <div className="search__img">
              <img src={EffectiveEngineer} alt="Effective Engineer" />
            </div>
            <div className="search__description">
              <div className="search__layouts">
                <h3>The Effective Engineer</h3>
                <p className="author">Edmond Lau - 2009</p>
                <p className="genre">Motivational</p>
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
                  <p>Ratings: 4.0</p>
                  <img src={Ratings} alt="ratings" />
                </div>
              </div>
              <div className="sales">
                <div className="search__price">
                  <p>$29.99</p>
                </div>
                <div className="search__instock">
                  <p>23 Copies Available</p>
                </div>
              </div>
              <div className="search__checkout">
                <img src={Cart} alt="checkout" />
                <p>Add to Cart</p>
              </div>
            </div>
          </div>
          {/* tenth book details */}
          <div className="search__details">
            <div className="search__img">
              <img src={EffectiveEngineer} alt="Effective Engineer" />
            </div>
            <div className="search__description">
              <div className="search__layouts">
                <h3>The Effective Engineer</h3>
                <p className="author">Edmond Lau - 2009</p>
                <p className="genre">Motivational</p>
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
                  <p>Ratings: 4.0</p>
                  <img src={Ratings} alt="ratings" />
                </div>
              </div>
              <div className="sales">
                <div className="search__price">
                  <p>$29.99</p>
                </div>
                <div className="search__instock">
                  <p>23 Copies Available</p>
                </div>
              </div>
              <div className="search__checkout">
                <img src={Cart} alt="checkout" />
                <p>Add to Cart</p>
              </div>
            </div>
          </div>
          {/* Eleventh Book Detail */}
          <div className="search__details">
            <div className="search__img">
              <img src={EffectiveEngineer} alt="Effective Engineer" />
            </div>
            <div className="search__description">
              <div className="search__layouts">
                <h3>The Effective Engineer</h3>
                <p className="author">Edmond Lau - 2009</p>
                <p className="genre">Motivational</p>
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
                  <p>Ratings: 4.0</p>
                  <img src={Ratings} alt="ratings" />
                </div>
              </div>
              <div className="sales">
                <div className="search__price">
                  <p>$29.99</p>
                </div>
                <div className="search__instock">
                  <p>23 Copies Available</p>
                </div>
              </div>
              <div className="search__checkout">
                <img src={Cart} alt="checkout" />
                <p>Add to Cart</p>
              </div>
            </div>
          </div>
          {/* Twelvth Book details */}
          <div className="search__details">
            <div className="search__img">
              <img src={EffectiveEngineer} alt="Effective Engineer" />
            </div>
            <div className="search__description">
              <div className="search__layouts">
                <h3>The Effective Engineer</h3>
                <p className="author">Edmond Lau - 2009</p>
                <p className="genre">Motivational</p>
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
                  <p>Ratings: 4.0</p>
                  <img src={Ratings} alt="ratings" />
                </div>
              </div>
              <div className="sales">
                <div className="search__price">
                  <p>$29.99</p>
                </div>
                <div className="search__instock">
                  <p>23 Copies Available</p>
                </div>
              </div>
              <div className="search__checkout">
                <img src={Cart} alt="checkout" />
                <p>Add to Cart</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchResult;
