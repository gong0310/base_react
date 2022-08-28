import "./App.css";
import ReactBase from "./pages/ReactBase";
import Redux from "./pages/Redux";
import ReactRedux from "./pages/CountUi";
import ReactRouter from "./pages/ReactRouter";
// // 引入store
// import store from "./redux/store";

function App() {
  return (
    <div className="App">
      <ReactRouter/>
      <Redux />
      <ReactRedux/>
      {/* <ReactRedux store={store} /> */}
      <ReactBase />
    </div>
  );
}

export default App;
