import './App.css';
import React, { Component } from 'react'
import Navbar from "./component/Navbar";
import News from "./component/News";
import About from './component/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <>
        <Navbar></Navbar>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<News category='general' />} />
            <Route path="/general" element={<News category='general' />} />
            <Route path="/business" element={<News category='business' />} />
            <Route path="/entertainment" element={<News category='entertainment' />} />
            <Route path="/health" element={<News category='health' />} />
            <Route path="/science" element={<News category='science' />} />
            <Route path="/sports" element={<News category='sports' />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </>
    )
  }
}

