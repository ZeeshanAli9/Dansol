import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Detailpage from "./Pages/Detail_page.jsx";
import Cart from "./Pages/Cart.jsx";
import Shoppage from "./Pages/Shoppage.jsx";
import EventListings from "./Pages/EventListings.jsx";
import EventDetails from "./Pages/EventDetails.jsx";
import Checkout from "./Pages/Checkout.jsx";
import RequestCatelog from "./Pages/RequestCatelog.jsx";
import OpenAccount from "./Pages/OpenAccount.jsx";
import Blogs from "./Pages/Blogs.jsx";
import Main from "./Pages/Main.jsx";
import { PageNotFound } from "./Components/PageNotFound.jsx";
import { PaymentSuccess } from "./Components/Cart/PaymentSuccess.jsx";
import Login from "./Components/Login/Login.jsx";
import ForgetPassword from "./Components/Login/ForgetPassword.jsx";
import OTP from "./Components/Login/OTP.jsx";
import ResetPassword from "./Components/Login/ResetPassword.jsx";
import MainOutlet from "./Pages/MainOutlet.jsx";

import OrderHistory from "./Components/Cart/OrderHistory.jsx";
import ShippingAddress from "./Components/Cart/ShippingAddress.jsx";
import AccountInfo from "./Components/Login/AccountInfo.jsx";
import Logout from "./Components/Login/Logout.jsx";
import Favorite from "./Components/Cart/Favorite.jsx";
import OrderDetail from "./Components/Cart/OrderDetail.jsx";
import MyAccount from "./Pages/MyAccount.jsx";
import WarrantyPolicy from "./Pages/WarrantyPolicy.jsx";
import PayOnline from "./Pages/PayOnline.jsx";
import SterilizationInstructions from "./Pages/SterilizationInstructions.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainOutlet />}>
            <Route index element={<Main />} />
            <Route path="detailpage" element={<Detailpage />} />
            <Route path="cart" element={<Cart />} />
            <Route path="shoppage" element={<Shoppage />} />
            <Route path="eventlisting" element={<EventListings />} />
            <Route path="eventdetail" element={<EventDetails />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="requestcatelog" element={<RequestCatelog />} />
            <Route path="openaccount" element={<OpenAccount />} />
            <Route path="paymentsuccess" element={<PaymentSuccess />} />
            <Route path="orderdetail" element={<OrderDetail />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="pay-online" element={<PayOnline />} />
            <Route path="warranty-policy" element={<WarrantyPolicy />} />
            <Route
              path="sterilization-instruction"
              element={<SterilizationInstructions />}
            />
            <Route path="*" element={<PageNotFound />} />
          </Route>
          <Route path="/my-account" element={<MyAccount />}>
            <Route index element={<Favorite />} />
            <Route path="favorite" element={<Favorite />} />
            <Route path="orderHistory" element={<OrderHistory />} />
            <Route path="shippingaddress" element={<ShippingAddress />} />
            <Route path="accountinfo" element={<AccountInfo />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/otp" element={<OTP />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
