import React from "react";

import "./CollectionItem.scss";

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className="CollectionItem">
    <div className="ImageItem" 
         style={{
          backgroundImage: `url(${imageUrl})`
         }}/>
    <div className='CollectionFooter'>
      <span className="NameItem">{name}</span>
      <span className="PriceItem">{'$' + price}</span>
    </div>
  </div>
);

export default CollectionItem;
