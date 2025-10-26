import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/public"
import React from 'react'
import PublicLayout from "./layouts/public"
import Books from "./pages/public/books"
import Login from "./pages/auth/login"
import AdminLayout from "./layouts/admin"
import Dashboard from "./pages/admin"
import AdminBooks from "./pages/admin/books"
import BookCreate from "./pages/admin/books/create"
import Register from "./pages/auth/register"
import AdminAuthors from "./pages/admin/authors"
import AuthorCreate from "./pages/admin/authors/create"
import AdminGenres from "./pages/admin/genres"
import GenreCreate from "./pages/admin/genres/create"

function App() {

  return (
    <>
    <BrowserRouter >
    <Routes>
        {/* public */}
        <Route element={<PublicLayout />}>
        <Route index element={<Home/>}/>
        <Route path="books" element={<Books/>}/>

        {/* auth */}
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>



        {/* admin */}
        <Route path="admin" element={<AdminLayout/>}>
        <Route index element={<Dashboard/>}/>

        <Route path="books" element={<AdminBooks/>} />
        <Route path="authors" element={<AdminAuthors/>} />
        <Route path="genres" element={<AdminGenres/>} />
        


        <Route path="books/create" element={<BookCreate/>} />
        <Route path="authors/create" element={<AuthorCreate/>} />
        <Route path="genres/create" element={<GenreCreate/>} />
        
        
        </Route>





       


        </Route>


    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
