import AppRoutes from "./routes/AppRoutes";
import StairTransition from "./components/StairTransion";
import {BrowserRouter as Router} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <StairTransition />
      <div className="p-4">
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
