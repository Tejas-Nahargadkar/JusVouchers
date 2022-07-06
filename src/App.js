import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SocialMedia from "./components/SocialMediaBar/SocialMedia";
import BlogPage from "./components/BlogPage/BlogPage";
import Blog from "./components/Blog/Blog";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import Dashboard from "./components/Dashboard/Dashboard";
import PackagePage from "./components/Package/PackagePage";
import Login from "./components/LoginAndSingUp/Login";
import RefundandReturnsPolicy from "./components/RefundandReturnsPolicy/RefundandReturnsPolicy";
import TermsandConditions from "./components/TermsandConditions/TermsandConditions";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import HomeMobileCarousel from "./components/Home-Mobile-Carousel/HomeMobileCarousel";
import AuthProvider from "./context/AuthContext";
import Register from "./components/Register/Register";
import PreventedRoute from "./PreventedRoute";
import PrivateRoute from "./PrivateRoute";
import AddBlog from "./components/AddBlog/AddBlog";
import Home3rdCarousel from "./components/Home3dCarousel/Home3rdCarousel";
import CommentTable from "./components/CommentTable/CommentTable";
import CategoryWisePage from "./components/CategoryWisePage/CategoryWisePage";
import AddCategory from "./components/AddCategory/AddCategory";
import DropDown from "./components/CategoryDropdown/DropDown";
import DigitalMarketingPage from "./components/DigitalMarketing/DigitalMarketingPage";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Blogs" element={<BlogPage />} />
            <Route path="/viewblog" element={<Blog />}>
              <Route path=":blog_id" element={<Blog />}></Route>
            </Route>
            <Route path="/Privacypolicy" element={<PrivacyPolicy />} />
            <Route
              path="/RefundandReturnsPolicy"
              element={<RefundandReturnsPolicy />}
            />
            <Route
              path="/TermsandConditions"
              element={<TermsandConditions />}
            />
            <Route path="/BlogSlug" element={<Blog />} />
            <Route
              path="/Dashboard"
              element={
                <PrivateRoute>
                  {" "}
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route path="/PackagesPage" element={<PackagePage />} />
            <Route
              path="/login"
              element={
                <PreventedRoute>
                  <Login />
                </PreventedRoute>
              }
            />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/MobileView" element={<HomeMobileCarousel />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/AddBlog" element={<AddBlog />} />
            <Route path="/3dcarousal" element={<Home3rdCarousel />} />
            <Route path="/CommentTable" element={<CommentTable />} />
            <Route path="/categorypage" element={<CategoryWisePage />}>
              <Route path=":category" element={<CategoryWisePage />} />
            </Route>

            <Route path="/AddCategory" element={<AddCategory />} />
            <Route
              path="/digitalmarketing"
              element={<DigitalMarketingPage />}
            />
          </Routes>
          <SocialMedia />
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
