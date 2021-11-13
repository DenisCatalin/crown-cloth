import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart.selector'
import { createStructuredSelector } from 'reselect'
import { CartDropDownContainer, CartDropDownItems, CartDropDownMessage } from './cart-dropdown.styles'


const CartDropdown = ({ cartItems, history, dispatch }) => {

    return (
        <CartDropDownContainer>
            <CartDropDownItems>
            {
                cartItems.length ?
                cartItems.map(cartItem => (
                    <CartItem key={cartItems.id} item={cartItem} />
                ))
                :
                <CartDropDownMessage>Your cart is empty</CartDropDownMessage>
            }
            </CartDropDownItems>
            <CustomButton onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }}>GO TO CHECKOUT</CustomButton>
        </CartDropDownContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
