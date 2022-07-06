import React, { useEffect, useState } from "react";
import "./ContactUsData.css";
import { useAuth } from "../../context/AuthContext";
import { Close } from "@mui/icons-material";
export default function ContactUsData() {
  const { getContactUsData, deleteCustomerInfo } = useAuth();
  const [ShowInfo, setShowInfo] = useState([]);
  useEffect(() => {
    CustomerInfo();
    return () => {};
  }, []);
  function deleteHandler(Id) {
    deleteCustomerInfo(Id).then((resp) => {
      console.log(resp);
      if (resp.success) CustomerInfo();
    });
  }
  function CustomerInfo() {
    getContactUsData().then((resp) => {
      console.log(resp);
      if (resp.success) {
        setShowInfo(resp.data);
      }
    });
  }
  return (
    <div className="ContactUsData-Container">
      <h2>Customer Information</h2>
      <div className="ContactUsData-Table">
        <div className="ContactUsData-Table-orange">
          <h4>First Name</h4>
        </div>
        <div className="ContactUsData-Table-orange">
          <h4>Last Name</h4>
        </div>
        <div className="ContactUsData-Table-orange">
          <h4>Email</h4>
        </div>

        <div className="ContactUsData-Table-orange">
          <h4>Mobile Number</h4>
        </div>
        <div className="ContactUsData-Table-orange">
          <h4>Query</h4>
        </div>
        <div className="ContactUsData-Table-orange">
          <h4>Action</h4>
        </div>
        {ShowInfo.map((Info, index) => {
          return (
            <>
              <p>{Info.first_Name}</p>

              <p>{Info.last_Name}</p>

              <p>{Info.Email}</p>

              <p>{Info.Mobile_Number}</p>
              <p>{Info.Message}</p>
              <div className="Customer-info-delete-btn">
                <Close onClick={() => deleteHandler(Info.Id)} />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
