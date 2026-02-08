// import { useState } from 'react'


// function App() {
  

//   return (
//     <>
     
//     </>
//   )
// }

// export default App

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Step1 from "./pages/Step1";
import Step2 from "./pages/Step2";
import Step3 from "./pages/Step3";
import Step4 from "./pages/Step4";
import Yes from "./pages/Yes";
import FloatingHearts from "./components/FloatingHearts";

function App() {
  return (
    <BrowserRouter>
      <FloatingHearts />
      <Routes>
        <Route path="/" element={<Step1 />} />
        <Route path="/step2" element={<Step2 />} />
        <Route path="/step3" element={<Step3 />} />
        <Route path="/step4" element={<Step4 />} />
        <Route path="/yes" element={<Yes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
