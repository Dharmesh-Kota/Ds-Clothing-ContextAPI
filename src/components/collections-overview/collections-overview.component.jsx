import React, { useContext } from "react";

import "./collections-overview.styles.scss";

import CollectionPreview from '../collection-preview/collection-preview.component';

import CollectionsContext from "../../contexts/collections/collections.context";

const CollectionsOverview = () => {
  
  const collections = useContext(CollectionsContext);

  return (
    <div className="collections-overview">
      {Object.values(collections).map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default CollectionsOverview;
