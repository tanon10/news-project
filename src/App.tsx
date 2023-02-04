import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";

import './styles/styles.scss'


function App() {
  return (
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
