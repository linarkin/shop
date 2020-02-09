import React from 'react';

import { connect } from 'react-redux';

import CustomButton from '../customButton/customButton.component';
import { addItem } from '../../redux/cart/cart.actions';

import './collectionItem.styles.scss';

const CollectionItem = ({item, addItem}) => {
    const { name, price, imageUrl } = item;
    return (
        <div className="collection-item"
            style={{backgroundImage: `url(${imageUrl})`
            }}>
            {name}, {price}
            <CustomButton onClick={ () => {addItem(item)} } inverted>
                Add to cart
            </CustomButton>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);