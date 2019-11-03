import React from 'react';

import './collectionItem.styles.scss';

const collectionItem = ({name, price, imageUrl}) => (
    <div className="collection-item"
        style={{backgroundImage: `url(${imageUrl})`
        }}>
        {name}, {price}
    </div>
);

export default collectionItem;