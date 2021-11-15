import React from 'react'
import { useDispatch } from 'react-redux'
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions'
import { CheckoutItemContainer, CheckoutItemImageContainer, CheckoutItemRemoveButton, CheckoutItemSpaceBetweenElements, QuantityContainer, CheckoutItemArrow, CheckoutItemValue } from './checkout-item.styles'

const CheckoutItem = ({ cartItem }) => {
    const dispatch = useDispatch();
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <CheckoutItemContainer>
            <CheckoutItemImageContainer>
                <img src={imageUrl} alt="item" style={{width: '100%', height: '100%'}} />
            </CheckoutItemImageContainer>
            <CheckoutItemSpaceBetweenElements>{name}</CheckoutItemSpaceBetweenElements>
            <QuantityContainer>
                <CheckoutItemArrow onClick={() => dispatch(removeItem(cartItem))}>&#10094;</CheckoutItemArrow>
                <CheckoutItemValue>{quantity}</CheckoutItemValue>
                <CheckoutItemArrow onClick={() => dispatch(addItem(cartItem))}>&#10095;</CheckoutItemArrow>
            </QuantityContainer>
            <CheckoutItemSpaceBetweenElements>${price * quantity}</CheckoutItemSpaceBetweenElements>
            <CheckoutItemRemoveButton onClick={() => dispatch(clearItemFromCart(cartItem))}>&#10005;</CheckoutItemRemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem;
