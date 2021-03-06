import React from "react";

import "./CollectionPreview.scss";

import CollectionItem from '../collection-item/CollectionItem';

const CollectionPreview = ({ title, items }) => (
  <div className="CollectionPreview">
    <h1 className="Title">{title.toUpperCase()}</h1>
    <div className="Preview">
      {items
        .filter((item, index) => index < 4)
        .map(({id, ...otherItemProps}) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
