import React from 'react'
import { CartItemContainer, CartItemDetails, CartItemFontSizeText } from './cart-item.styles'

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
    return (
        <CartItemContainer>
            <img src={imageUrl} alt='item' style={{width: '30%'}}/>
            <CartItemDetails>
                <CartItemFontSizeText>{name}</CartItemFontSizeText>
                <CartItemFontSizeText>{quantity} x ${price}</CartItemFontSizeText>
            </CartItemDetails>
        </CartItemContainer>
    )
}

export default CartItem
