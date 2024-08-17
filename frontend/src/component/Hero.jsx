
import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [cards, setCards] = useState([]); // store all cards
  const [displayedCards, setDisplayedCards] = useState([]); //displayed card
  const [searchTerm, setSearchTerm] = useState(''); // store search term
  const [noResults, setNoResults] = useState(false); // if search not available it stores

  // function api call for search all result

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:2100/api/cards');
      const data = await response.json();
      setCards(data.cards); // set all card into state vairable
      setDisplayedCards(data.cards);
      setNoResults(false); // No results 
    } catch (error) {
      console.log('Error:', error);
    }
  };

  // Function which fetchs search data
  const searchData = async (title) => {
    try {
      const response = await fetch(`http://localhost:2100/api/cards/${title}`);
      const searchRes = await response.json();
      if (searchRes.card.length === 0) {
        setNoResults(true);
      } else {
        setDisplayedCards(searchRes.card);
        setNoResults(false);
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = () => {
    if (searchTerm) {
      searchData(searchTerm);
    } else {
      setDisplayedCards(cards);
      setNoResults(false);
    }
  };

  return (
    <>
      <div className="container-fluid ">
        <div className="hero-bg banner">
          <div className="box">
            <h2>How can we help?</h2>
            <div className="search-box-container mt-3">
              <input
                type="text"
                className="search-input"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="search-button" onClick={handleSearch}>
                &#8594;
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5 d-flex justify-content-center">
        <div className="row col-md-10">
          {noResults ? (
            <div className="col-12 text-center">
              <h5>Content not available</h5> {/* No results message */}
            </div>
          ) : (
            displayedCards.map((card) => (
              <div key={card._id} className="col-md-6 item">
                <div className="card">
                  <div className="card-body">
                    <div className="card-title">
                      <h5>{card.title}</h5>
                      <hr />
                    </div>
                    <div className="card-text">
                      <p>{card.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Hero;
