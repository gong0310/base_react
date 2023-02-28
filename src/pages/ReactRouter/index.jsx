import {
  Route,
  Routes,
  NavLink,
  Link,
  Redirect,
} from "react-router-dom";
import A from "./A";

const RouterDemo = () => {
  return (
    <>
      <h2>RouterDemo</h2>
      <Link to="/a/1">a</Link>&nbsp;
      <Link to="/a">b</Link>&nbsp;
      <Link to="/c">c</Link>
      <Routes>
        <Route path="/a/:id" element={<A name="kkk" />} />
        <Route path="/a" element={<B />} />
        <Route path="/c" element={<C />} />
      </Routes>
    </>
  );
};
// const A = (props) => {
//   console.log("props A", props.history);
//   return (
//     <>
//       <h3>A</h3>
//     </>
//   );
// };
const B = (props) => {
  console.log("props B", props);

  return (
    <>
      <h3>B</h3>
    </>
  );
};
const C = (props) => {
  console.log("props C", props);

  return (
    <>
      <h3>C</h3>
    </>
  );
};
export default RouterDemo;
