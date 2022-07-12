import React from 'react';

// redux packages and components
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Posts from "./components/posts/Posts";
import Post from "./components/posts/Post";
import PostForm from "./components/posts/PostForm";
import ContactForm from "./components/ContactForm";

const App = () => {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <Navbar />
      <Routes>
          <Route index element={<Home />} />
          <Route path="posts" element={<Posts />} />
          <Route path="posts/:id" element={<Post />} />
          <Route path="form" element={<PostForm />} />
          <Route path="contact" element={<ContactForm />} />
      </Routes>
    </BrowserRouter>
  </Provider>
  );
}

export default App;
