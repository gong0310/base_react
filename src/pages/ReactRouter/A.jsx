import { useParams, useLocation } from "react-router-dom";
const A = (props) => {
  const params = useParams();
  const location = useLocation();
  console.log("props A", props);
  console.log("params", params);
  console.log("location", location);
  return (
    <>
      <h3>A</h3>
    </>
  );
};
export default A;
// React Router v6中已弃用库提供的HOC withRouter。
