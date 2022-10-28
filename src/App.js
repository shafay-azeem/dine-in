import "./App.css";
import { Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import ReportScreen from "./Screens/ReportScreen";
import OrderScreen from "./Screens/OrderScreen";
import CustomerScreen from "./Screens/CustomerScreen";
import MenuManagementScreen from "./Screens/MenuManagementScreen";
import FeedBacksScreen from "./Screens/FeedBacksScreen";
import TranslationCenterScreen from "./Screens/TranslationCenterScreen";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact />
      <Route path="/reports" component={ReportScreen} />
      <Route path="/order" component={OrderScreen} />
      <Route path="/customer" component={CustomerScreen} />
      <Route path="/menu" component={MenuManagementScreen} />
      <Route path="/feedbacks" component={FeedBacksScreen} />
      <Route path="/translationcenter" component={TranslationCenterScreen} />
    </div>
  );
}

export default App;
