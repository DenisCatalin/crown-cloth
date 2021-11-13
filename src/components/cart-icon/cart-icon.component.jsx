import React from 'react'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selector'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { createStructuredSelector } from 'reselect'
import { CartIconContainer, ShoppingIconStyle, CartIconItemsCount } from './cart-icon.styles'

const CartIcon = ({ toggleCartHidden, itemCount }) => {
    return (
        <CartIconContainer onClick={toggleCartHidden}>
            <ShoppingIconStyle>
                <ShoppingIcon />
            </ShoppingIconStyle>
            <CartIconItemsCount>{itemCount}</CartIconItemsCount>
        </CartIconContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

export default connect(
    mapStateToProps, mapDispatchToProps
)(CartIcon);
