import React from "react";
import "./BookDetails.css";
import Navbar from "../../components/Navbar/Navbar";
import Arrow from "../../resources/arrow.png";
import BuildToLast from "../../resources/built to last.png";
import Downloads from "../../resources/labelled-icon.png";
import Ratings from "../../resources/rating-stars.png";
import Cart from "../../resources/Union.png";

function BookDetails() {
  return (
    <>
      <Navbar />
      <div className="bookdetails">
        <div className="go__back">
          <img src={Arrow} alt="arrow" /> Back
        </div>

        <div className="bookdetails__layout">
          <div className="bookdetails__left">
            <div className="bookdetails__img">
              <img src={BuildToLast} alt="build to last" />
            </div>
            <div className="bookdetails__copies">
              <p>23 Copies Available</p>
            </div>
            <div className="bookdetails__price">
              <p>$29.99</p>
            </div>
            <div className="bookdetails__addtocart">
              <button>
                <img src={Cart} alt="cart" /> Add to Cart
              </button>
            </div>
          </div>

          <div className="bookdetails__right">
            <div className="bookdetails__title">
              <h2>Big Magic: Creative Living Beyond Fear</h2>
            </div>
            <div className="bookdetails__desc">
              <p className="author bold">Elizabeth Gilbert</p>
              <p className="year">2016</p>
            </div>
            <hr />
            <div className="bookdetails__cata">
              <div className="downloads">
                <img src={Downloads} alt="downloads" />
              </div>
              <div className="ratings">
                <p className="bold">Ratings: 4.0</p>
                <img src={Ratings} alt="ratings" />
              </div>
              <div className="genre">
                <p className="bold">Genre:</p>
                <p>Motivational</p>
              </div>
              <div className="tags">
                <p className="bold">Tags:</p>
                <p>Creativity, Better living</p>
              </div>
              <div className="publisher">
                <p className="bold">Publisher:</p>
                <p>Savannah Books</p>
              </div>
              <div className="release__date">
                <p className="bold">Released:</p>
                <p>21, January 2016</p>
              </div>
            </div>
            <hr />
            <div className="bookdetails__sample">
              <div className="book__body">
                <p>
                  The instant #1 NEW YORK TIMES Bestseller "A must read for
                  anyone hoping to live a creative life... I dare you not to be
                  inspired to be brave, to be free, and to be curious.”
                  —PopSugar From the worldwide bestselling author of Eat Pray
                  Love and City of Girls: the path to the vibrant, fulfilling
                  life you’ve dreamed of. Readers of all ages and walks of life
                  have drawn inspiration and empowerment from Elizabeth
                  Gilbert’s books for years. Now this beloved author digs deep
                  into her own generative process to share her wisdom and unique
                  perspective about creativity. With profound empathy and
                  radiant generosity, she offers potent insights into the
                  mysterious nature of inspiration. She asks us to embrace our
                  curiosity and let go of needless suffering. She shows us how
                  to tackle what we most love, and how to face down what we most
                  fear. She discusses the attitudes, approaches, and habits we
                  need in order to live our most creative lives. Balancing
                  between soulful spirituality and cheerful pragmatism, Gilbert
                  encourages us to uncover the “strange jewels” that are hidden
                  within each of us. Whether we are looking to write a book,
                  make art, find new ways to address challenges in our work,
                  embark on a dream long deferred, or simply infuse our everyday
                  lives with more mindfulness and passion, Big Magic cracks open
                  a world of wonder and joy. "A must read for anyone hoping to
                  live a creative life... I dare you not to be inspired to be
                  brave, to be free, and to be curious.” —PopSugar From the
                  worldwide bestselling author of Eat Pray Love and City of
                  Girls: the path to the vibrant, fulfilling life you’ve dreamed
                  of. Readers of all ages and walks of life have drawn
                  inspiration and empowerment from Elizabeth Gilbert’s books for
                  years. Now this beloved author digs deep into her own
                  generative process to share her wisdom and unique perspective
                  about creativity. With profound empathy and radiant
                  generosity, she offers potent insights into the mysterious
                  nature of inspiration. She asks us to embrace our curiosity
                  and let go of needless suffering. She shows us how to tackle
                  what we most love, and how to face down what we most fear. She
                  discusses the attitudes, approaches, and habits we need in
                  order to live our most creative lives. Balancing between
                  soulful spirituality and cheerful pragmatism, Gilbert
                  encourages us to uncover the “strange jewels” that are hidden
                  within each of us. Whether we are looking to write a book,
                  make art, find new ways to address challenges in our work,
                  embark on a dream long deferred, or simply infuse our everyday
                  lives with more mindfulness and passion, Big Magic cracks open
                  a world of wonder and joy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookDetails;
