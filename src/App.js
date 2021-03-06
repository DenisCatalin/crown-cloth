import { GlobalStyle } from './global.styles';
import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import {auth, createUserProfileDocument, /*addCollectionAndDocuments*/} from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions'
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import CheckoutPage from './pages/checkout/checkout.component';
import ContactPage from './pages/contact/contact.component';
// import { selectCollectionsForPreview } from './redux/shop/shop.selectors' test

const App = ({ setCurrentUser, currentUser }) => {

  let displayNameUser = '';
  const user = useSelector((currentUser) => {
    const data = currentUser.user.currentUser;
    if(data !== null) {
      displayNameUser = data.displayName;
    }
  });

  useEffect(() => {
    auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              user,
              ...snapShot.data()
          });
        });
      }
      else { setCurrentUser(userAuth); }

      // addCollectionAndDocuments('collections', collectionsArray.map(obj =>({ title, items }) => ({ title, items })));
    });
  }, [setCurrentUser, user]);

  return (
    <Router>
      <GlobalStyle />
      <Header displayName={displayNameUser}/>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/signin" render={() => currentUser ? (<Redirect to='/' />) : (<SignInAndSignUp />)} />
      <Route path="/shop" component={ShopPage} />
      <Route path="/contact" component={ContactPage} />
      <Route exact path="/checkout" component={CheckoutPage} />
    </Router>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // collectionsArray: selectCollectionsForPreview
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
