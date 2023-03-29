import {observer} from 'mobx-react';
import React from 'react';
import {Books} from './components/books/Books';
import {Header} from './components/header/Header';
import {Navbar} from "./components/navbar/Navbar";

export const App: React.FC = observer(() => {

    return (
        <div>
            <Header/>
            <Navbar />
            <Books />
        </div>
    );
})

export default App;
