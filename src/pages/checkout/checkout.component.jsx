import React from 'react'
import { connect } from 'react-redux'
import { CheckoutPageContainer, CheckoutPageHeader, CheckoutHeaderSpacing, CheckoutPageTotal } from './checkout.styles'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'

const CheckoutPage = ({cartItems, total}) => {
    return (
        <CheckoutPageContainer>
            <CheckoutPageHeader>
                <CheckoutHeaderSpacing>
                    <span>Product</span>
                </CheckoutHeaderSpacing>
                <CheckoutHeaderSpacing>
                    <span>Description</span>
                </CheckoutHeaderSpacing>
                <CheckoutHeaderSpacing>
                    <span>Quantity</span>
                </CheckoutHeaderSpacing>
                <CheckoutHeaderSpacing>
                    <span>Price</span>
                </CheckoutHeaderSpacing>
                <CheckoutHeaderSpacing>
                    <span>Remove</span>
                </CheckoutHeaderSpacing>
            </CheckoutPageHeader>
            {
                cartItems.map(cartItem => (
                    <CheckoutItem cartItem={cartItem} key={cartItem} />
                ))
            }
            <CheckoutPageTotal>
                <span>TOTAL: ${total}</span>
            </CheckoutPageTotal>
            <StripeCheckoutButton price={total} />
        </CheckoutPageContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)
