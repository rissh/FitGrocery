import React, { useEffect, useState } from "react";
import Navbar from "../../COMPONENTS/Navbar/Navbar";
import SingleBanner from "../../COMPONENTS/Banners/SingleBanner";
import FooterBanner from "../../COMPONENTS/Footer/FooterBanner";
import Footer from "../../COMPONENTS/Footer/Footer";

const FAQ = () => {
  const [activesection, setactivesection] = useState(0);

  const FAQs = [
    {
      id: 1,
      question: "What types of products do you offer?",
      answer:
        "We offer a wide range of high-quality groceries, including fruits, vegetables, meats, and other pantry items.",
    },
    {
      id: 2,
      question: "How do I place an order?",
      answer:
        "To place an order, simply create an account on our website, add the desired items to your cart, and complete the checkout process.",
    },
    {
      id: 3,
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods, including credit cards and online payment services.",
    },
    {
      id: 4,
      question: "How do I know when my order will be delivered?",
      answer:
        "Once your order is processed, we will send you a confirmation email with the estimated delivery date and time.",
    },
    {
      id: 5,
      question: "What if I need to make changes to my order?",
      answer:
        "If you need to make changes to your order, please contact us as soon as possible. We will do our best to accommodate your request.",
    },
    {
      id: 6,
      question: "What is your return policy?",
      answer:
        "If you receive a damaged or defective product, please contact us immediately to arrange for a replacement or refund. We may require proof of purchase or photographic evidence of the damage.",
    },
    {
      id: 7,
      question: "How do I contact customer support?",
      answer:
        "You can contact us by email at support@fitgrocery.com or by phone at (555) 123-4567. We are available to assist you Monday through Friday from 9:00 AM to 5:00 PM.",
    },
  ];

  return (
    <div className="FAQ ExtraPage">
      <Navbar />
      <SingleBanner
        heading="FAQs"
        BannerImage="https://images.unsplash.com/photo-1665789318391-6057c533005e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80
        "
      />

      <div className="FaqContainer">
        {FAQs.map((item, index) => {
          return activesection == item.id ? (
            <div className="FAQs">
              <div className="FAQHead">
                <h1>{item.question}</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                  onClick={() => setactivesection(0)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <div className="FAQBody">
                <p>{item.answer}</p>
              </div>
            </div>
          ) : (
            <div className="FAQs">
              <div className="FAQHead">
                <h1>{item.question}</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                  onClick={() => setactivesection(item.id)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </div>
          );
        })}
      </div>

      <FooterBanner />
      <Footer />
    </div>
  );
};

export default FAQ;
