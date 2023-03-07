import "./App.css";
import FileUpload1 from "./components/FileUpload1";
import FileUpload2 from "./components/FileUpload2";
import FileUpload3 from "./components/FileUpload3";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <h1>My Todo List</h1>
        <ToDoList />
        <Form />
        <FileUpload1></FileUpload1>
        <FileUpload2 />
        <FileUpload3 />
      </main>
      <Footer copyright="2022 SIT Academy">
        <small className="completed">&copy;</small>
      </Footer>
    </>
  );
}

export default App;
