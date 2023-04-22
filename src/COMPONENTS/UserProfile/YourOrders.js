import React, { useState } from "react";
import "./YourOrders.css";

const YourOrders = () => {
  const data = [
    {
      id: 112345,
      date: "2021-12-12",
      status: "Delivered",
      total: 1000,
    },
    {
      id: 112346,
      date: "2021-11-25",
      status: "Cancelled",
      total: 500,
    },
    {
      id: 112347,
      date: "2022-01-01",
      status: "In Transit",
      total: 750,
    },
    {
      id: 112348,
      date: "2022-02-14",
      status: "Delivered",
      total: 1200,
    },
    {
      id: 112349,
      date: "2021-10-01",
      status: "Delivered",
      total: 800,
    },
    {
      id: 112350,
      date: "2021-11-11",
      status: "Delivered",
      total: 950,
    },
    {
      id: 112351,
      date: "2021-12-24",
      status: "Cancelled",
      total: 400,
    },
    {
      id: 112352,
      date: "2022-03-17",
      status: "In Transit",
      total: 670,
    },
    {
      id: 112353,
      date: "2022-04-01",
      status: "Delivered",
      total: 1100,
    },
    {
      id: 112354,
      date: "2022-05-12",
      status: "Delivered",
      total: 900,
    },
    {
      id: 112355,
      date: "2022-06-15",
      status: "In Transit",
      total: 630,
    },
    {
      id: 112356,
      date: "2022-07-04",
      status: "Delivered",
      total: 850,
    },
    {
      id: 112357,
      date: "2022-08-31",
      status: "Cancelled",
      total: 300,
    },
    {
      id: 112358,
      date: "2022-09-22",
      status: "Delivered",
      total: 950,
    },
    {
      id: 112359,
      date: "2022-10-18",
      status: "In Transit",
      total: 720,
    },
  ];

  return (
    <div className="YourOrders">
      <h1 className="mainhead1">Your Orders</h1>

      <table className="YourOrdersTable">
        <thead>
          <tr>
            <th scope="col">Oder ID</th>
            <th scope="col">Date</th>
            <th scope="col">Status</th>
            <th scope="col">Total</th>
            <th scope="col">Invoice</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td data-label="OrderID">{item.id}</td>
                <td data-label="OrderDate">{item.date}</td>
                <td data-label="Delivery Status">
                  <div>
                    {item.status == "Delivered" && (
                      <span className="greendot"></span>
                    )}
                    {item.status == "In Transit" && (
                      <span className="yellowdot"></span>
                    )}
                    {item.status == "Cancelled" && (
                      <span className="reddot"></span>
                    )}
                    {item.status}
                  </div>
                </td>
                <td data-label="Total">${item.total}</td>
                <td data-label="Invoice">
                  <button className="mainbutton1">View</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default YourOrders;
