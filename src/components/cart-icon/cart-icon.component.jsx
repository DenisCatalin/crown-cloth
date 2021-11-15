import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selector'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { CartIconContainer, ShoppingIconStyle, CartIconItemsCount } from './cart-icon.styles'

const CartIcon = () => {
    const itemCount = useSelector(selectCartItemsCount);
    const dispatch = useDispatch();
    return (
        <CartIconContainer onClick={() => { dispatch(toggleCartHidden()); } }>
            <ShoppingIconStyle>
                <ShoppingIcon />
            </ShoppingIconStyle>
            <CartIconItemsCount>{itemCount}</CartIconItemsCount>
        </CartIconContainer>
    )
}

export default CartIcon;
