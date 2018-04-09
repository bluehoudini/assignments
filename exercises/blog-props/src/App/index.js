import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import BlogList from "./BlogList";
import BlogPost from "./BlogPost";
import Footer from "./Footer";




function App() {
    return (
        <div>
            <Header>
                <Navbar></Navbar>
            </Header>
            <BlogList>
                <BlogPost>
                </BlogPost>
            </BlogList>
            <Footer></Footer>

        </div>
    )
}

export default App;