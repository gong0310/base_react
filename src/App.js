import "./App.css";
import ReactBase from "./pages/ReactBase";
import Redux from "./pages/Redux";
import ReactRedux from "./pages/CountUi";
// // 引入store
// import store from "./redux/store";

function App() {
  return (
    <div className="App">
      <Redux />
      <ReactRedux/>
      {/* <ReactRedux store={store} /> */}
      <ReactBase />
    </div>
  );
}

export default App;
