import React from 'react'
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import CustomButton from '../custom-button/custom-button.component';
import { CollectionItemContainer, CollectionItemImage, CollectionItemFooter, CollectionItemText } from './collection-item.styles';

const CollectionItem = ({item}) => {
    const dispatch = useDispatch();
    const { name, price, imageUrl } = item;

    return (
        <CollectionItemContainer>
            <CollectionItemImage style={{backgroundImage: `url(${imageUrl})`}}></CollectionItemImage>
            <CollectionItemFooter>
                <CollectionItemText>{name}</CollectionItemText>
                <CollectionItemText>${price}</CollectionItemText>
            </CollectionItemFooter>
            <CustomButton onClick={() => {
                dispatch(addItem(item));
            }} inverted>Add to cart</CustomButton>
        </CollectionItemContainer>
    )
}

export default CollectionItem;