import { Link, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BookList from "./pages/BookList";

function App() {
  return (
    // Routes needs to wrap all individual Route
    <>
      {/* Link is like our anchor tags, but specifically for navigation */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        {/* path is like the url we are going to
      so for instance'/' goes to our root (in this case index.js) */}
        {/* element is the component we want to render at that route */}
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList />} />
      </Routes>
    </>
  );
}

export default App;
