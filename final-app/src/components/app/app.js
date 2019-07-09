import React from 'react';
import { CoffeePage, ItemPage, MainPage, PleasurePage, ContactPage } from '../pages'; 
import Footer from '../footer';


import '../../css/style.css';


const App = () => {

    return (
        <>
            
            <MainPage />
            <CoffeePage />
            <PleasurePage />
            <ItemPage />
            <ContactPage />

            <Footer />
        </>
    )
}

export default App;