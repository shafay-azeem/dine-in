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
import Login from "./components/Authentication/Login";
import HomePage from "./components/HomePage";
import { AuthProvider } from "./context/authContext";
import RequireAuth from "./Screens/RequireAuth";
import UpdateUser from "./components/Authentication/UpdateUser";
import Order from "./components/RestaurantMenu/OrderPage";
import OrderPage from "./components/RestaurantMenu/OrderPage";
import Payment from "./components/RestaurantMenu/Payment";
import FilterOrders from "./components/Orders/FilterOrders";
import PaymentList from "./components/Payment/PaymentList";
import PaymentScreen from "./Screens/PaymentScreen";
import DeliveryPickUpScreen from "./Screens/DeliveryPickUpScreen";
import OrderReceipt from "./components/Orders/OrderReceipt";
import OrderReceiptScreen from "./Screens/OrderReceiptScreen";
import TableManagementScreen from "./Screens/TableManagementScreen";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route
            path="/homeScreen"
            element={
              <RequireAuth>
                <HomeScreen />
              </RequireAuth>
            }
          />
          <Route path="/reports" element={<ReportScreen />} />
          <Route
            path="/order"
            element={
              <RequireAuth>
                <OrderScreen />
              </RequireAuth>
            }
          />
          <Route path="/customer" element={<CustomerScreen />} />
          <Route
            path="/menu"
            element={
              <RequireAuth>
                <MenuManagementScreen />
              </RequireAuth>
            }
          />
          <Route
            path="/tableCreation"
            element={
              <RequireAuth>
                <TableManagementScreen />
              </RequireAuth>
            }
          />
          <Route
            path="/feedbacks"
            element={
              <RequireAuth>
                <FeedBacksScreen />
              </RequireAuth>
            }
          />
          <Route
            path="/translationcenter"
            element={<TranslationCenterScreen />}
          />
          <Route path="/venuesettings" element={<VenueSettingsScreen />} />
          <Route
            path="/dineinqrmenu"
            element={
              <RequireAuth>
                <DineInQRMenuScreen />
              </RequireAuth>
            }
          />

          <Route
            path="/deliverypickupmenu"
            element={
              <RequireAuth>
                <DeliveryPickUpScreen />
              </RequireAuth>
            }
          />

          <Route
            path="/createmenu"
            element={
              <RequireAuth>
                <CreateMenuScreen />
              </RequireAuth>
            }
          />
          <Route path="/menudisplay" element={<MenuDisplayScreen />} />
          <Route path="/menudetail" element={<MenuDetailScreen />} />
          <Route path="/menustart" element={<MenuStartScreen />} />
          <Route path="/menufeedback" element={<MenuFeedbackScreen />} />
          <Route
            path="/editform"
            element={
              <RequireAuth>
                <FormQuestions />
              </RequireAuth>
            }
          />
          <Route
            path="/updateProfile"
            element={
              <RequireAuth>
                <UpdateUser />
              </RequireAuth>
            }
          />
          <Route path="/OrderPage" element={<OrderPage />} />
          <Route
            path="/filterOrders"
            element={
              <RequireAuth>
                <FilterOrders />
              </RequireAuth>
            }
          />

          <Route
            path="/orderReceipt/:orderId"
            element={
              <RequireAuth>
                <OrderReceiptScreen />
              </RequireAuth>
            }
          />
          <Route path="/Payment" element={<Payment />} />

          <Route
            path="/paymentList"
            element={
              <RequireAuth>
                <PaymentScreen />
              </RequireAuth>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
