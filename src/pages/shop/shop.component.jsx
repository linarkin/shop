import React from 'react';
import SHOP_DATA from './shop.data.js';
import CollectionPreview from '../../components/collectionPreview/collectionPreview.component';

class shopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        };
    }


    render() {
        return (
            <div>
                <div>Shop page</div>
                <div >{
                    this.state.collections.map( ({id, ...otherCollectionProps}) => (
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    ))
                    }   
                </div>
            </div>
        )
    }
}

export default shopPage;