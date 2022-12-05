import { Link, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BookList from "./pages/BookList";
import Book from "./pages/Book";
import NewBook from "./pages/NewBook";
import NotFound from "./pages/NotFound";
import BookLayout from "./pages/BookLayout";

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
        {/* books routes but in nested fashion, more DRY */}
        {/* by giving element to parent, it renders it on all child routes */}
        {/* use Outlet in child route to render the content of child route */}
        <Route path="/books" element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route>

        {/* <Route path="/books" element={<BookList />} />
        {/* here :id is a route param */}
        {/* <Route path="/books/:id" element={<Book />} />
        <Route path="/books/new" element={<NewBook />} /> */}

        {/* '*' matches anything, so if no other route matches, this route will match */}

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
