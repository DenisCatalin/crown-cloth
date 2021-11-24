import React from 'react'

import CollectionItem from '../collection-item/collection-item.component';
import { CollectionPreviewContainer, CollectionPreviewText, CollectionPreviewPreview, CollectionPreviewLink } from './collection-preview.styles';
import { useHistory } from 'react-router-dom';

// import './collection-preview.styles.scss';

const PreviewCollection = ({title, items}) => {
    const history = useHistory();

    return (
        <CollectionPreviewContainer>
            <CollectionPreviewText>
                <CollectionPreviewLink onClick={() => history.push(`/shop/${title.toLowerCase()}`)}>{title.toUpperCase()}</CollectionPreviewLink>
            </CollectionPreviewText>
            <CollectionPreviewPreview>
                {
                    items
                    .filter((_item, idx) => idx < 4)
                    .map((item) => {
                        return <CollectionItem key={item.id} item={item}/>
                    })
                }
            </CollectionPreviewPreview>
        </CollectionPreviewContainer>
    )
}

export default PreviewCollection
