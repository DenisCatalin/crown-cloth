import React from 'react'
import { connect } from 'react-redux'
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions'
import { CheckoutItemContainer, CheckoutItemImageContainer, CheckoutItemRemoveButton, CheckoutItemSpaceBetweenElements, QuantityContainer, CheckoutItemArrow, CheckoutItemValue } from './checkout-item.styles'


const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <CheckoutItemContainer>
            <CheckoutItemImageContainer>
                <img src={imageUrl} alt="item" style={{width: '100%', height: '100%'}} />
            </CheckoutItemImageContainer>
            <CheckoutItemSpaceBetweenElements>{name}</CheckoutItemSpaceBetweenElements>
            <QuantityContainer>
                <CheckoutItemArrow onClick={() => removeItem(cartItem)}>&#10094;</CheckoutItemArrow>
                <CheckoutItemValue>{quantity}</CheckoutItemValue>
                <CheckoutItemArrow onClick={() => addItem(cartItem)}>&#10095;</CheckoutItemArrow>
            </QuantityContainer>
            <CheckoutItemSpaceBetweenElements>${price * quantity}</CheckoutItemSpaceBetweenElements>
            <CheckoutItemRemoveButton onClick={() => clearItem(cartItem)}>&#10005;</CheckoutItemRemoveButton>
        </CheckoutItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
