import React from 'react'
import CollectionItem from '../../components/collection-item/collection-item.component'
import { CollectionPageContainer, CollectionPagetitle, CollectionPageItems } from './collection.styles'
import { connect } from 'react-redux'
import { selectCollection } from '../../redux/shop/shop.selectors'

const CollectionPage = ({ collection }) => {
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

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);