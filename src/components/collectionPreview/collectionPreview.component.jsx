import React from 'react';
import './collection-preview.styles.scss';
import CollectionItem from '../collectionItem/collectionItem.component';

const collectionPreview = ({title, items, routeName}) => (
    <div className="collection-preview" to={routeName}>
        <div className="title">{title}</div>
        <div className="preview">
            {items.filter((item, id) => id < 4).map( item => (
                <CollectionItem key={item.id} item={item} />
            ))}
        </div>
    </div>
);

export default collectionPreview;