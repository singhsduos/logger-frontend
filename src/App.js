import React from 'react';
import Home from "./pages/home/Home.jsx";
import Logs from "./pages/logs/Logs.jsx";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import NotFound from "./pages/notFound/NotFound.js";

export default function App() {

    return (
      <>
        <Router>
          <Routes>

                <Route exact path="/" element={<Home />} />
                <Route exact path="/logs" element={<Logs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </>
    );
}