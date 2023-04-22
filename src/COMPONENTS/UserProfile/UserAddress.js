import React from "react";
import "./UserAddress.css";

const UserAddress = () => {
  const [show, setShow] = React.useState(false);

  const Address = [
    {
      AddressLine1: "1600 Amphitheatre Parkway",
      AddressLine2: "Building 41",
      AddressLine3: "Suite 200",
      City: "Mountain View",
      State: "California",
      PostalCode: "94043",
      Country: "United States",
    },
    {
      AddressLine1: "221B Baker Street",
      AddressLine2: "Marylebone",
      AddressLine3: "London",
      City: "London",
      State: "",
      PostalCode: "NW1 6XE",
      Country: "United Kingdom",
    },
    {
      AddressLine1: "1 Infinite Loop",
      AddressLine2: "Apple Park Visitor Center",
      AddressLine3: "Suite 190",
      City: "Cupertino",
      State: "California",
      PostalCode: "95014",
      Country: "United States",
    },
  ];
  return (
    <div className="UserAddress">
      {!show && <h1 className="mainhead1">Your Address</h1>}

      {!show && (
        <div className="SaveAddress">
          {Address.map((item, index) => {
            return (
              <div className="Address" key={index}>
                <span>{item.AddressLine1}</span>,
                <span>{item.AddressLine2}</span>,
                <span>{item.AddressLine3}</span>,<span>{item.City}</span>,
                <span>{item.State}</span>
                <div className="DeleteButton">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {!show && (
        <div className="AddButton" onClick={() => setShow(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </div>
      )}

      {show && (
        <div className="NewAddress">
          <h1 className="mainhead1">Add New Address</h1>
          <div className="form">
            <div className="form-group">
              <label htmlFor="addressline1">Address Line 1</label>
              <input type="text" />
            </div>

            <div className="form-group">
              <label htmlFor="addressline2">Address Line 2</label>
              <input type="text" />
            </div>

            <div className="form-group">
              <label htmlFor="addressline3">Address Line 3</label>
              <input type="text" />
            </div>

            <div className="form-group">
              <label htmlFor="city">City</label>
              <input type="text" />
            </div>

            <div className="form-group">
              <label htmlFor="state">State</label>
              <input type="text" />
            </div>

            <div className="form-group">
              <label htmlFor="postalcode">Postal Code</label>
              <input type="text" />
            </div>
          </div>

          <button className="mainbutton1" onClick={() => setShow(false)}>
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default UserAddress;
