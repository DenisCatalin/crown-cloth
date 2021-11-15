import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart.selector'
import { CartDropDownContainer, CartDropDownItems, CartDropDownMessage } from './cart-dropdown.styles'

const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();
    const history = useHistory();

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

export default CartDropdown;
