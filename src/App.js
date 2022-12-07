import Form from "./Form";
import Cloud from "./Cloud";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/wordcloud-game-react" element={<Form />}></Route>
        <Route path="/cloud" element={<Cloud />}></Route>
      </Routes>
    </>
  );
}

export default App;
