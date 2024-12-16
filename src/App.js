import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import CurrentUserContext from "./contexts/current-user/current-user.context"

import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Checkout from "./pages/checkout/checkout.component";

import { auth } from "./firebase/firebase.utils";
import { onSnapshot } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { createUserProfileDocument } from "./firebase/firebase.utils";

const App = () => {
  const [ currentUser, setCurrentUser ] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = onAuthStateChanged(auth, async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        onSnapshot(userRef, (snapshot) => {
          const userData = snapshot.data();

            setCurrentUser({
              id: snapshot.id,
              ...userData,
              createdAt: userData.createdAt
                ? userData.createdAt.toDate().toISOString()
                : null,
            })
        });
      } else {
        setCurrentUser(null);
      }
    });

    return () => {
      if (unsubscribeFromAuth) {
        unsubscribeFromAuth();
      }
    };
  }, []);

  return (
    <div>
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
      </CurrentUserContext.Provider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop/*" element={<ShopPage />} />
        <Route
          path="/sign-in"
          element={currentUser ? <Navigate to="/" /> : <SignInAndSignUpPage />}
        />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
};

export default App;