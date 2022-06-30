import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddBook from '../features/books/AddBook';
import BooksView from '../features/books/BooksView';
import EditBooks from '../features/books/EditBooks';
import Footer from '../Layouts/Footer';
import Navbar from '../Layouts/Navbar';
import Error from '../pages/Error';
import Home from '../pages/Home';

const Index = () => {
    return (
        <BrowserRouter>
            <Navbar></Navbar>
            <main>
                <Routes>
                    <Route path='/' element={<Home></Home>}>
                    </Route>
                    <Route path='/show-books' element={<BooksView></BooksView>}>
                    </Route>
                    <Route path='/add-books' element={<AddBook></AddBook>}>
                    </Route>
                    <Route path='/edit-book' element={<EditBooks></EditBooks>}>
                    </Route>
                    <Route path='*' element={<Error></Error>}>
                    </Route>
                </Routes>
            </main>
            <Footer></Footer>
        </BrowserRouter>
    );
};

export default Index;