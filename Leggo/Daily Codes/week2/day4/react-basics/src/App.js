import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <h1>My Todo List</h1>
        <ToDoList />
      </main>
      <Footer copyright="Copyright 2022 SIT Academy">
        Footer Child
      </Footer>
    </>
  );
}

export default App;
