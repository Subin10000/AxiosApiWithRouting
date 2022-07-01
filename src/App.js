import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout"
import Home from "./components/Home"
import Users from "./components/Users"
import Posts from "./components/Posts"
import DisplayUsers from "./components/DisplayUsers"
import DisplayPosts from "./components/DisplayPosts"



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="posts" element={<Posts />} />
          <Route path="/users/:id" element={<DisplayUsers />} />
          <Route path="/posts/:id" element={<DisplayPosts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App