import React from "react";

import "./Header.scss"

const Header = ({categorieS}) => {
  // const {categories}=props

  return (
  <div className="header" >
    <h1>Product List</h1>
    <div className="btnDiv">
      {
        categorieS.map((a,i)=>(
          <button key={i} > 
            {a}
          </button>
        ))
      }
    </div>

  </div>
  );
};

export default Header;



// .map den sonraki ilk div in içine key tanımladığı zaman otomatık olarak kendisi uniq olarak classname atar