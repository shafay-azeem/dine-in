import "./App.css";
import { Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import ReportScreen from "./Screens/ReportScreen";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact />
      <Route path="/reports" component={ReportScreen} />
    </div>
  );
}

export default App;
