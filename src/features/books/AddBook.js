import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook } from './BookSlice';
import { useNavigate } from 'react-router-dom'

const AddBook = () => {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("");
    const numberofBooks = useSelector((state) => state.booksReducer.books.length)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const book = { id: numberofBooks + 1, title, author }
        dispatch(addBook(book))
        navigate("/show-books", { replace: true })
    }
    return (
        <div>
            <h2>ADDBOOKS</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-field'>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id='title' name='title' value={title} onChange={(e) => setTitle(e.target.value)} required />

                </div>
                <div className='form-field'>
                    <label htmlFor="title">Author:</label>
                    <input type="text" id='author' name='author' value={author} onChange={(e) => setAuthor(e.target.value)} required />

                </div>
                <button>add book</button>
            </form>

        </div>
    );
};

export default AddBook;

//CRUD 