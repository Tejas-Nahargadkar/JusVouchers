import {
  AddLocation,
  ArrowDropDownCircle,
  Book,
  CloudUploadOutlined,
  ExpandLess,
  KeyboardAlt,
  Logout,
  PersonAdd,
  ShowChart,
} from "@mui/icons-material";
import React, { useState } from "react";
import "./Dashboard.css";
import PlaceHolderImage from "../asset/placeholder-image.png";
import DragDropInput from "../DragDropInput/DragDropInput";
import Register from "../Register/Register";
import AddBlog from "../AddBlog/AddBlog";
import { useAuth } from "../../context/AuthContext";
import CommentTable from "../CommentTable/CommentTable";
import TestimonialTable from "../TestimonialTable/TestimonialTable";
import AddCategory from "../AddCategory/AddCategory";
import DropDown from "../CategoryDropdown/DropDown";
import DeleteImageTable from "../DeleteImageTable/DeleteImageTable";
import ContactUsData from "../ContactUsData/ContactUsData";
export default function Dashboard() {
  const [ShowProfileDashboard, setShowProfileDashboard] = useState(false);
  const handleClick = () => {
    setShowProfileDashboard(true);
  };
  const [Showoptions, setShowoptions] = useState(false);
  const handleOptions = () => {
    setShowoptions(true);
  };
  const [Carousel, setCarousel] = useState({
    tablename: "",
    url: "",
    category: "",
  });
  const { addCarouselimage, logout } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Carousel);
    addCarouselimage(Carousel).then((resp) => {
      console.log(resp);
      if (resp.success) {
        alert(resp.message);
      }
    });
  };
  const handlelogout = () => {
    logout();
  };
  const [ShowTab, setShowTab] = useState("UploadImage");
  return (
    <div className="Dashboard-Container">
      <div className="Dashboard-Header">
        <span></span>
        <h1>My Account</h1>
        <span></span>
      </div>
      <div className="Dashboard-Row">
        <div className="Dashboard-SideBar">
          <div className="Profile-Picture-Section">
            <div className="Profile-Picture-Name-col">
              <h3>Admin</h3>
            </div>
          </div>
          <div className="Mobile-Profile-Picture-Section">
            <div className="Mobile-Profile-Picture-Img">
              <img src={PlaceHolderImage} alt="" />
            </div>
            <div className="Mobile-Profile-Picture-Name-col">
              <h3>Admin</h3>
            </div>
            <div className="Drop-Down">
              <button onClick={handleClick} className="Drop-Down-btn">
                <ArrowDropDownCircle />{" "}
              </button>
            </div>
          </div>
          <div className="DeskTop-Dashboard-SideBar-Rows-Container">
            <div
              className={`DeskTop-Dashboard-SideBar-Row ${ShowTab === "UploadImage" && "Active-SideBar-Row"}`}
              onClick={() => setShowTab("UploadImage")}
            >
              <h5>Upload</h5>
              <KeyboardAlt />
            </div>
            <div
              className={`DeskTop-Dashboard-SideBar-Row ${ShowTab === "AddAdmin" && "Active-SideBar-Row"}`}
              onClick={() => setShowTab("AddAdmin")}
            >
              <h5>Add Admin</h5>
              <PersonAdd />
            </div>
            <div
              className={`DeskTop-Dashboard-SideBar-Row ${ShowTab === "Add-Blogs" && "Active-SideBar-Row"}`}
              onClick={() => setShowTab("Add-Blogs")}
            >
              <h5>Add Blog</h5>
              <Book />
            </div>
            <div
              className={`DeskTop-Dashboard-SideBar-Row ${ShowTab === "Add-Category" && "Active-SideBar-Row"}`}
              onClick={() => setShowTab("Add-Category")}
            >
              <h5>Add Category</h5>
              <KeyboardAlt />
            </div>
            <div
              className={`DeskTop-Dashboard-SideBar-Row ${ShowTab === "CustomerMasterTable" && "Active-SideBar-Row"}`}
              onClick={() => setShowTab("CustomerMasterTable")}
            >
              <h5>Customer Info</h5>
              <KeyboardAlt />
            </div>
            <div
              className={`DeskTop-Dashboard-SideBar-Row ${ShowTab === "CommentMasterTable" && "Active-SideBar-Row"}`}
              onClick={() => setShowTab("CommentMasterTable")}
            >
              <h5>Manage Comments</h5>
              <PersonAdd />
            </div>
            <div
              className={`DeskTop-Dashboard-SideBar-Row ${ShowTab === "Testimonial-MasterTable" && "Active-SideBar-Row"}`}
              onClick={() => setShowTab("Testimonial-MasterTable")}
            >
              <h5>Manage Testimonials</h5>
              <ShowChart />
            </div>
            <div
              className="DeskTop-Dashboard-SideBar-Row"
              onClick={handlelogout}
            >
              <h5>Log Out</h5>
              <Logout />
            </div>
          </div>
          {ShowProfileDashboard && (
            <div className="Mobile-Dashboard-SideBar-Rows-Container">
              <div className="Dashboard-SideBar-close">
                <button
                  onClick={() => setShowProfileDashboard(false)}
                  className="Dashboard-SideBar-Close"
                >
                  <ExpandLess />
                </button>
              </div>
              <div
                className={`Mobile-Dashboard-SideBar-Row ${ShowTab === "UploadImage" && "Active-SideBar-Row"}`}
                onClick={() => setShowTab("UploadImage")}
              >
                <h5>Upload</h5>
                <KeyboardAlt />
              </div>
              <div
                className={`Mobile-Dashboard-SideBar-Row ${ShowTab === "AddAdmin" && "Active-SideBar-Row"}`}
                onClick={() => setShowTab("AddAdmin")}
              >
                <h5>Add Admin</h5>
                <PersonAdd />
              </div>
              <div
                className={`Mobile-Dashboard-SideBar-Row ${ShowTab === "Add-Blogs" && "Active-SideBar-Row"}`}
                onClick={() => setShowTab("Add-Blogs")}
              >
                <h5>Add Blog</h5>
                <Book />
              </div>

              <div
                className={`Mobile-Dashboard-SideBar-Row ${ShowTab === "Add-Category" && "Active-SideBar-Row"}`}
                onClick={() => setShowTab("Add-Category")}
              >
                <h5>Add Category</h5>
                <Book />
              </div>
              <div
                className={`Mobile-Dashboard-SideBar-Row ${ShowTab === "CustomerMasterTable" && "Active-SideBar-Row"}`}
                onClick={() => setShowTab("CustomerMasterTable")}
              >
                <h5>Customer Info</h5>
                <Book />
              </div>
              <div
                className={`Mobile-Dashboard-SideBar-Row ${ShowTab === "CommentMasterTable" && "Active-SideBar-Row"}`}
                onClick={() => setShowTab("CommentMasterTable")}
              >
                <h5>Manage Comments</h5>
                <Book />
              </div>
              <div
                className={`Mobile-Dashboard-SideBar-Row ${ShowTab === "Testimonial-MasterTable" && "Active-SideBar-Row"}`}
                onClick={() => setShowTab("Testimonial-MasterTable")}
              >
                <h5>Manage Testimonial</h5>
                <Book />
              </div>
              <div
                className="Mobile-Dashboard-SideBar-Row"
                onClick={handlelogout}
              >
                <h5>Log Out</h5>
                <Logout />
              </div>
            </div>
          )}
        </div>
        <div className="Show-Profile-Container">
          {ShowTab === "UploadImage" && (
            <div className="UploadImage">
              <div className="Carousel-Dropdown">
                <div className="Carousel-Dropdown-trigger">
                  <button
                    className="Select-Carousel-btn"
                    onClick={handleOptions}
                  >
                    Choose Carousel <ArrowDropDownCircle />
                  </button>
                </div>
                {Showoptions && (
                  <div className="Carousel-Dropdown-Option">
                    <button
                      className="Close-option"
                      onClick={() => setShowoptions(false)}
                    >
                      <ExpandLess />
                    </button>
                    <button
                      className={`Option ${(Carousel.tablename === "Carousel01") && "Active-option" }`}
                      onClick={() =>
                        setCarousel({
                          ...Carousel,
                          tablename: "Carousel01",
                        })
                      }
                    >
                      Carousel-1
                    </button>
                    <button
                      className={`Option ${(Carousel.tablename === "Carousel02") && "Active-option" }`}
                      onClick={() =>
                        setCarousel({
                          ...Carousel,
                          tablename: "Carousel02",
                        })
                      }
                    >
                      Carousel-2
                    </button>
                    <button
                      className={`Option ${(Carousel.tablename === "Carousel03") && "Active-option" }`}
                      onClick={() =>
                        setCarousel({
                          ...Carousel,
                          tablename: "Carousel03",
                        })
                      }
                    >
                      Carousel-3
                    </button>
                    <button
                      className={`Option ${(Carousel.tablename === "Carousel04") && "Active-option" }`}
                      onClick={() =>
                        setCarousel({
                          ...Carousel,
                          tablename: "Carousel04",
                        })
                      }
                    >
                      Carousel-4
                    </button>
                    <button
                      className={`Option ${(Carousel.tablename === "Carousel05") && "Active-option" }`}
                      onClick={() =>
                        setCarousel({
                          ...Carousel,
                          tablename: "Carousel05",
                        })
                      }
                    >
                      Exclusive Package Carousel
                    </button>
                    <button
                      className={`Option ${(Carousel.tablename === "Exclusive_Packages") && "Active-option" }`}
                      onClick={() =>
                        setCarousel({
                          ...Carousel,
                          tablename: "Exclusive_Packages",
                        })
                      }
                    >
                      Upload Exclusive Packages
                    </button>
                  </div>
                )}
              </div>
              <div className="Category-DropDown">
                <DropDown Carousel={Carousel} setCarousel={setCarousel} />
              </div>
              <DragDropInput file={Carousel} setFile={setCarousel} />
              <button className="upload-btn" onClick={handleSubmit}>
                {" "}
                <CloudUploadOutlined />
                Upload
              </button>

              <div className="Carousel-MasterTable">
                <DeleteImageTable />
              </div>
            </div>
          )}

          {ShowTab === "AddAdmin" && (
            <div className="AddAdmin">
              <Register />
            </div>
          )}

          {ShowTab === "Add-Blogs" && (
            <div className="Add-Blogs">
              <AddBlog />
            </div>
          )}
          {ShowTab === "Add-Category" && (
            <div className="Add-Category">
              <AddCategory />
            </div>
          )}
           {ShowTab === "CustomerMasterTable" && (
            <div className="CustomerMasterTable">
              <ContactUsData/>
            </div>
          )}
          {ShowTab === "CommentMasterTable" && (
            <div className="CommentMasterTable">
              <CommentTable />
            </div>
          )}

          {ShowTab === "Testimonial-MasterTable" && (
            <div className="Testimonial-MasterTable">
              <TestimonialTable />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
