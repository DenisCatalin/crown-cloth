import React from 'react'
import CollectionItem from '../../components/collection-item/collection-item.component'
import { CollectionPageContainer, CollectionPagetitle, CollectionPageItems } from './collection.styles'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectCollection } from '../../redux/shop/shop.selectors'

const CollectionPage = () => {
    const { collectionId } = useParams();
    const collection = useSelector(selectCollection(collectionId));
    const { title, items } = collection;
    return(
        <CollectionPageContainer>
            <CollectionPagetitle>{title}</CollectionPagetitle>
            <CollectionPageItems>
                {
                    items.map(item => (
                        <CollectionItem key={item.id} item={item} /> 
                    ))
                }
            </CollectionPageItems>
        </CollectionPageContainer>
    )
}

export default CollectionPage;