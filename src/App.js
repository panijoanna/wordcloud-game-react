import Form from "./Form";
import Cloud from "./Cloud";
import Result from "./Result";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/wordcloud-game-react" element={<Form />}></Route>
        <Route path="/cloud" element={<Cloud />}></Route>
        <Route path="/result" element={<Result/>}></Route>
      </Routes>
    </>
  );
}

export default App;
