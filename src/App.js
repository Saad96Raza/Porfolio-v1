import React from "react";
import Header from "./React-Components/partials/Header";
import Footer from "./React-Components/partials/Footer";
import Section1 from "./React-Components/pages/home/Section1";
import Section2 from "./React-Components/pages/home/Section2";
import Section3 from "./React-Components/pages/home/Section3";
import Section4 from "./React-Components/pages/home/Section4";
import Section5 from "./React-Components/pages/home/Section5";
import Section6 from "./React-Components/pages/home/Section6";
import Section7 from "./React-Components/pages/home/Section7";

import Smooth from "./React-Components/react-props/Smooth";


const App = () => { 


    return ( 
        <React.Fragment>
            <Smooth/>
            <Header/>
            <Section1/> 
            <Section2/> 
            <Section3/> 
            <Section4/> 
            <Section5/> 
            <Section6/> 
            <Section7/> 
            <Footer/>
        </React.Fragment>
    ); 
}; 

export default App;
