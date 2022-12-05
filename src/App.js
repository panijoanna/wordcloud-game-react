import Form from "./Form";
import Cloud from "./Form/Cloud";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/cloud" element={<Cloud />}></Route>
      </Routes>
    </>
  );
}

export default App;
