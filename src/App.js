import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Category from "./pages/Category";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route exact path="/Category" component={Category} />
        </Routes>
      </Layout>
    </Router>

    //<Home/>
  );
}

export default App;
