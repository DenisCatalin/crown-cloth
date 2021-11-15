import React from 'react'
import { useSelector } from 'react-redux'
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors.js';
import PreviewCollection from '../preview-collection/collection-preview'

const CollectionsOverview = () => {
    const collections = useSelector(selectCollectionsForPreview);

    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            {
                collections.map(({id, ...otherCollectionProps }) => (
                    <PreviewCollection key={id} {...otherCollectionProps}/>
                ))
            }
        </div>
    )
}

export default CollectionsOverview;
