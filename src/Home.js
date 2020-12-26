import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="1"
            title="The lean startup"
            price={2000}
            image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1333576876l/10127019.jpg"
            rating={5}
          />
          <Product
            id="2"
            title="FORCE1 HOME CARE Dust Out Gas Duster Computer Cleaner (250ml)"
            price={395}
            image="https://images-na.ssl-images-amazon.com/images/I/81bzPFTewvL._SL1500_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="3"
            title="OnePlus 8T 5G (Aquamarine Green, 8GB RAM, 128GB Storage)"
            price={(42, 999)}
            image="https://images-na.ssl-images-amazon.com/images/I/71m05O2uNdL._SL1500_.jpg"
            rating={5}
          />
          <Product
            id="4"
            title="Mi 10T Pro 5G (Lunar Silver, 8GB RAM, 128GB Storage) - Extra INR 2000 Off on Exchange | Upto 12 Months No Cost EMI"
            price={(39, 999)}
            image="https://images-na.ssl-images-amazon.com/images/I/71iCTV%2BmMDL._SL1500_.jpg"
            rating={4}
          />
          <Product
            id="5"
            title="Redmi Note 9 Pro Max (Aurora Blue, 6GB RAM, 64GB Storage)- 64MP Quad Camera & Latest 8nm Snapdragon 720G & Alexa Hands-Free | Upto 12 Months No Cost EMI"
            price={(15, 999)}
            image="https://images-na.ssl-images-amazon.com/images/I/81DvimWN5xL._SL1500_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="6"
            title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
            price={(2, 35, 999)}
            image="https://images-na.ssl-images-amazon.com/images/I/81vlA84pg6L._SL1500_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
