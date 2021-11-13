import React from 'react'

import CollectionItem from '../collection-item/collection-item.component';
import { CollectionPreviewContainer, CollectionPreviewText, CollectionPreviewPreview } from './collection-preview.styles';

// import './collection-preview.styles.scss';

const PreviewCollection = ({title, items}) => {
    return (
        <CollectionPreviewContainer>
            <CollectionPreviewText>
                {title.toUpperCase()}
            </CollectionPreviewText>
            <CollectionPreviewPreview>
                {
                    items
                    .filter((item, idx) => idx < 4)
                    .map((item) => {
                        return <CollectionItem key={item.id} item={item}/>
                    })
                }
            </CollectionPreviewPreview>
        </CollectionPreviewContainer>
    )
}

export default PreviewCollection
