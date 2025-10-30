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
import BookEdit from "./pages/admin/books/edit"
import ShowBook from "./pages/public/books/show"
import AuthorEdit from "./pages/admin/authors/edit"
import GenreEdit from "./pages/admin/genres/edit"
import AdminTransaction from "./pages/admin/transactions"
import AdminUser from "./pages/admin/users"
import Profile from "./pages/public/profiles"

function App() {

  return (
    <>
    <BrowserRouter >
    <Routes>
        {/* public */}
        <Route element={<PublicLayout />}>
        <Route index element={<Home/>}/>
        <Route path="profile" element={<Profile />}/>
        <Route path="books">
          <Route index element={<Books />}/>

        <Route path="show/:id" element={<ShowBook/>}/>
        </Route>

        {/* auth */}
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>



        {/* admin */}
        <Route path="admin" element={<AdminLayout/>}>
        <Route path="dashboard" element={<Dashboard/>}/>


        {/* transactions */}
        <Route path="transactions">
        <Route index element={<AdminTransaction/>} /> 
        </Route>


        {/* Users */}
        <Route path="users">
        <Route index element={<AdminUser/>} /> 
        </Route>

        {/* books */}
        <Route path="books">
        <Route index element={<AdminBooks/>} />
        <Route path="create" element={<BookCreate/>} />
        <Route path="edit/:id" element={<BookEdit/>} />
        </Route>


        {/* genres */}
        <Route path="genres"  >
        <Route index element={<AdminGenres/>} />
        <Route path="create" element={<GenreCreate/>} />
        <Route path="edit/:id" element={<GenreEdit/>} />

        </Route>


        {/* authors */}
        <Route path="authors">
        <Route index element={<AdminAuthors/>} />
        <Route path="create" element={<AuthorCreate/>} />
        <Route path="edit/:id" element={<AuthorEdit/>} />
        </Route>
        


        
        
        </Route>





       


        </Route>


    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
