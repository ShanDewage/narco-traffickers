import "./App.css";
import Post from "./post";

function App() {
  return (
    <main>
      <header>
        <a href="" className="logo">
          Narco Traffickers
        </a>

        <nav>
          <a href="">Login</a>
          <a href="">Register</a>
        </nav>
      </header>

      <Post />
    </main>
  );
}

export default App;
