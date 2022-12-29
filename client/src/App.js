import logo from "./logo.svg";
import "./normal.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <aside className="sideMenu">
        <div className="sideMenu-button">
          <span>+</span>
          New chat
        </div>
      </aside>
      <section className="chatBox">
        <div className="inputPrompt-wrapper">
          <textarea
            name="inputPrompt"
            id=""
            className="inputPrompt-textarea"
            type="text"
            rows="1"
          ></textarea>
          <p></p>
        </div>
      </section>
    </div>
  );
}

export default App;
