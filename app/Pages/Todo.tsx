// Import React (if you're using specific types or React.FC for functional components)
import React from 'react';
import Header from "../components/Header/Header";
import Contact from "../components/contract/Contact";

const App: React.FC = () => {
    return (
        <>
            <Header />
            <Contact />
        </>
    );
};

export default App;
