import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReportScreen from "./Screens/ReportScreen";
import OrderScreen from "./Screens/OrderScreen";
import CustomerScreen from "./Screens/CustomerScreen";
import MenuManagementScreen from "./Screens/MenuManagementScreen";
import FeedBacksScreen from "./Screens/FeedBacksScreen";
import TranslationCenterScreen from "./Screens/TranslationCenterScreen";
import VenueSettingsScreen from "./Screens/VenueSettingsScreen";
import DineInQRMenuScreen from "./Screens/DineInQRMenuScreen";
import CreateMenuScreen from "./Screens/CreateMenuScreen.js";
import HomeScreen from "./Screens/HomeScreen.js";
import MenuDisplayScreen from "./Screens/MenuDisplayScreen";
import MenuDetail from "./components/RestaurantMenu/MenuDetail";
import MenuDetailScreen from "./Screens/MenuDetailScreen";
import MenuStartScreen from "./Screens/MenuStartScreen";
import MenuFeedbackScreen from "./Screens/MenuFeedbackScreen";
import FormQuestions from "./components/FeedBacks/FormQuestions";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} exact />
          <Route path="/reports" element={<ReportScreen />} />
          <Route path="/order" element={<OrderScreen />} />
          <Route path="/customer" element={<CustomerScreen />} />
          <Route path="/menu" element={<MenuManagementScreen />} />
          <Route path="/feedbacks" element={<FeedBacksScreen />} />
          <Route
            path="/translationcenter"
            element={<TranslationCenterScreen />}
          />
          <Route path="/venuesettings" element={<VenueSettingsScreen />} />
          <Route path="/dineinqrmenu" element={<DineInQRMenuScreen />} />
          <Route path="/createmenu" element={<CreateMenuScreen />} />
          <Route path="/menudisplay" element={<MenuDisplayScreen />} />
          <Route path="/menudetail" element={<MenuDetailScreen />} />
          <Route path="/menustart" element={<MenuStartScreen />} />
          <Route path="/menufeedback" element={<MenuFeedbackScreen />} />
          <Route path="/editform" element={<FormQuestions />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
