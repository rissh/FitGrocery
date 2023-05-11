import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "./ProductPage.css";
import img1 from "../../ASSETS/Images/1.png";
import img2 from "../../ASSETS/Images/2.png";
import img3 from "../../ASSETS/Images/3.png";
import Navbar from "../../COMPONENTS/Navbar/Navbar";
import Footer from "../../COMPONENTS/Footer/Footer";
import FooterBanner from "../../COMPONENTS/Footer/FooterBanner";
import ProductSlider from "../../COMPONENTS/Product/ProductSlider";

//
import prod1A from "../../ASSETS/Products/1A.png";
import prod1B from "../../ASSETS/Products/1B.png";
import prod1C from "../../ASSETS/Products/1C.png";
import prod2A from "../../ASSETS/Products/2A.png";
import prod2B from "../../ASSETS/Products/2B.png";
import prod2C from "../../ASSETS/Products/2C.png";
import prod3A from "../../ASSETS/Products/3A.png";
import prod3B from "../../ASSETS/Products/3B.png";
import prod3C from "../../ASSETS/Products/3C.png";
import prod4A from "../../ASSETS/Products/4A.png";
import prod4B from "../../ASSETS/Products/4B.png";
import prod4C from "../../ASSETS/Products/4C.png";
import prod5A from "../../ASSETS/Products/5A.png";
import prod5B from "../../ASSETS/Products/5B.png";
import prod5C from "../../ASSETS/Products/5C.png";
import prod6A from "../../ASSETS/Products/6A.png";
import prod6B from "../../ASSETS/Products/6B.png";
import prod6C from "../../ASSETS/Products/6C.png";
import prod7A from "../../ASSETS/Products/7A.png";
import prod7B from "../../ASSETS/Products/7B.png";
import prod7C from "../../ASSETS/Products/7C.png";
import prod8A from "../../ASSETS/Products/8A.png";
import prod8B from "../../ASSETS/Products/8B.png";
import prod8C from "../../ASSETS/Products/8C.png";
//

const ProductPage = () => {
  const { prodid } = useParams();
  const [imageset, setimageset] = React.useState(null);
  const [productdata, setproductdata] = React.useState([]);
  const [activeimg, setactiveimg] = React.useState({});
  const [count, setcount] = React.useState(1);
  const [showreview, setshowreview] = React.useState(false);

  const getproductdatabyid = async () => {
    let temp = {
      Code: 200,
      Message: "Success",
      Data: [
        {
          ProductId: 7,
          ProductName: "Carrot",
          ProductDescription:
            "Carrot is a root vegetable, usually orange in colour, though purple, black, red, white, and yellow varieties also exist. It has a crisp texture when fresh. The most commonly eaten part of a carrot is the taproot, although the greens are sometimes eaten as well.",
          ProductImage: [
            {
              id: 1,
              image: prod7A,
            },
            {
              id: 2,
              image: prod7B,
            },
            {
              id: 3,
              image: prod7C,
            },
          ],
          ProductCode: "CRT1",
          ProductCategory: "Vegetables",
          ProductSubCategory: "Root Vegetables",
          ProductBrand: "Farm Fresh",
          ProductColor: "Orange",
          ProductSize: "Medium",
          ProductWeight: "500g",
          ProductMaterial: "Vegetable",
          ProductQuantity: 20,
          ProductUnit: "Kg",
          ProductPrice: 40,
          SalesPrice: 35,
          ProductDiscount: 5,
          ProductDiscountType: "Percentage",
          ProductTax: 5,
          ProductTaxType: "Percentage",
          ProductShippingCharge: 10,
          ProductShippingChargeType: "Percentage",
          ProductShippingTime: "2-3 days",
          ProductShippingTimeType: "Days",
          ProductShippingLocation: "India",
          ProductShippingLocationType: "Country",
          ProductShippingReturnPolicy: "30 days",
          ProductShippingReturnPolicyType: "Days",
          ProductShippingReturnPolicyDescription:
            "Return the product in its original condition within 30 days of delivery for a full refund.",
          ProductShippingReturnPolicyDescriptionType: "Text",
          ProductReviews: [
            {
              ReviewId: 1,
              Name: "Jane Doe",
              Email: "jane@example.com",
              Rating: 4,
              Date: "2022-05-01",
              Review: "I ordered these carrots and they were fresh and tasty!",
            },
            {
              ReviewId: 2,
              Name: "John Smith",
              Email: "john@example.com",
              Rating: 5,
              Date: "2022-05-03",
              Review:
                "I'm very happy with my purchase of these carrots. They were delivered quickly and were of excellent quality.",
            },
          ],
        },
        {
          ProductId: 1,
          ProductName: "Bell Peppers",
          ProductDescription:
            "Bell peppers, also known as sweet peppers or capsicum, are a type of vegetable that come in various colors such as green, red, and yellow. They are commonly used in cooking and are known for their crunchy texture and sweet taste.",
          ProductImage: [
            {
              id: 1,
              image: prod1B,
            },
            {
              id: 2,
              image: prod1A,
            },
            {
              id: 3,
              image: prod1C,
            },
          ],
          ProductCode: "BP1",
          ProductCategory: "Vegetables",
          ProductSubCategory: "Fresh Produce",
          ProductBrand: "Organic Farms",
          ProductColor: "Green, Red, Yellow",
          ProductSize: "Medium",
          ProductWeight: "500g",
          ProductMaterial: "N/A",
          ProductQuantity: 20,
          ProductUnit: "Packet",
          ProductPrice: 50,
          SalesPrice: 40,
          ProductDiscount: 10,
          ProductDiscountType: "Percentage",
          ProductTax: 5,
          ProductTaxType: "Percentage",
          ProductShippingCharge: 10,
          ProductShippingChargeType: "Percentage",
          ProductShippingTime: "2-3 days",
          ProductShippingTimeType: "Days",
          ProductShippingLocation: "All India",
          ProductShippingLocationType: "Country",
          ProductShippingReturnPolicy: "30 days",
          ProductShippingReturnPolicyType: "Days",
          ProductShippingReturnPolicyDescription: "Returns accepted",
          ProductShippingReturnPolicyDescriptionType: "Description",
          ProductReviews: [
            {
              ReviewId: 1,
              Name: "Riya Sharma",
              Email: "",
              Rating: 4,
              Date: "2022-04-15",
              Review:
                "I really enjoyed these bell peppers! They were fresh and tasted great in my stir-fry. Would buy again.",
            },
            {
              ReviewId: 2,
              Name: "Rahul Gupta",
              Email: "",
              Rating: 3,
              Date: "2022-04-10",
              Review:
                "The bell peppers were good, but I found a few that were starting to go bad. Overall decent quality.",
            },
            {
              ReviewId: 3,
              Name: "Amit Singh",
              Email: "",
              Rating: 5,
              Date: "2022-04-05",
              Review:
                "These bell peppers were amazing! They were fresh and tasted great in my salad. Highly recommend!",
            },
          ],
        },
        {
          ProductId: 2,
          ProductName: "Broccoli",
          ProductDescription:
            "Broccoli is a green vegetable that is high in nutrients and low in calories. It is a great source of vitamins C and K, fiber, and antioxidants.",
          ProductImage: [
            {
              id: 1,
              image: prod2A,
            },
            {
              id: 2,
              image: prod2B,
            },
            {
              id: 3,
              image: prod2C,
            },
          ],
          ProductCode: "BRO-001",
          ProductCategory: "Vegetables",
          ProductSubCategory: "Cruciferous Vegetables",
          ProductBrand: "Fresh Produce",
          ProductColor: "Green",
          ProductSize: "Medium",
          ProductWeight: "500 g",
          ProductMaterial: "",
          ProductQuantity: 50,
          ProductUnit: "pieces",
          ProductPrice: 2.99,
          SalesPrice: 2.49,
          ProductDiscount: 17,
          ProductDiscountType: "Percentage",
          ProductTax: 0,
          ProductTaxType: "None",
          ProductShippingCharge: 0,
          ProductShippingChargeType: "None",
          ProductShippingTime: "2-3 days",
          ProductShippingTimeType: "Days",
          ProductShippingLocation: "Anywhere",
          ProductShippingLocationType: "Worldwide",
          ProductShippingReturnPolicy: "30-day return policy",
          ProductShippingReturnPolicyType: "Days",
          ProductShippingReturnPolicyDescription:
            "If you're not satisfied with your purchase, you can return it within 30 days for a full refund.",
          ProductShippingReturnPolicyDescriptionType: "Details",
          ProductReviews: [
            {
              ReviewId: 1,
              Name: "John Smith",
              Email: "john.smith@example.com",
              Rating: 5,
              Date: "2023-04-30",
              Review:
                "I love broccoli! This is some of the freshest and most delicious broccoli I've ever tasted.",
            },
            {
              ReviewId: 2,
              Name: "Jane Doe",
              Email: "jane.doe@example.com",
              Rating: 4,
              Date: "2023-05-01",
              Review:
                "The broccoli was good, but not as fresh as I was hoping for. Still, it tasted great and I would definitely buy it again.",
            },
            {
              ReviewId: 3,
              Name: "Bob Johnson",
              Email: "bob.johnson@example.com",
              Rating: 3,
              Date: "2023-05-02",
              Review:
                "I was disappointed with the size of the broccoli pieces. They were much smaller than I expected.",
            },
          ],
        },
        {
          ProductId: 3,
          ProductName: "Cabbage",
          ProductDescription:
            "This fresh green cabbage is perfect for making salads, coleslaw, and other delicious dishes. It is grown locally without the use of pesticides and is hand-picked for maximum freshness.",
          ProductImage: [
            {
              id: 1,
              image: prod3A,
            },
            {
              id: 2,
              image: prod3B,
            },
            {
              id: 3,
              image: prod3C,
            },
          ],
          ProductCode: "CABB01",
          ProductCategory: "Vegetables",
          ProductSubCategory: "Leafy Vegetables",
          ProductBrand: "Green Farm",
          ProductColor: "Green",
          ProductSize: "Medium",
          ProductWeight: "1 kg",
          ProductMaterial: "",
          ProductQuantity: 50,
          ProductUnit: "Piece",
          ProductPrice: 2.5,
          SalesPrice: 2,
          ProductDiscount: 0.5,
          ProductDiscountType: "Currency",
          ProductTax: 0.2,
          ProductTaxType: "Percentage",
          ProductShippingCharge: 0,
          ProductShippingChargeType: "Currency",
          ProductShippingTime: "2-3 days",
          ProductShippingTimeType: "Days",
          ProductShippingLocation: "US",
          ProductShippingLocationType: "Country",
          ProductShippingReturnPolicy: "30-day money-back guarantee",
          ProductShippingReturnPolicyType: "Days",
          ProductShippingReturnPolicyDescription:
            "If you are not satisfied with your purchase, we will provide a full refund within 30 days.",
          ProductShippingReturnPolicyDescriptionType: "Description",
          ProductReviews: [
            {
              ReviewId: 1,
              Name: "John Doe",
              Email: "johndoe@gmail.com",
              Rating: 4,
              Date: "2022-04-15",
              Review:
                "This cabbage is really fresh and tasty. I used it to make a salad and it was delicious!",
            },
            {
              ReviewId: 2,
              Name: "Jane Smith",
              Email: "janesmith@hotmail.com",
              Rating: 5,
              Date: "2022-05-01",
              Review:
                "I love this cabbage! It's always fresh and crisp, and it makes a great addition to any meal.",
            },
            {
              ReviewId: 3,
              Name: "David Lee",
              Email: "davidlee@yahoo.com",
              Rating: 3,
              Date: "2022-05-07",
              Review:
                "The cabbage was okay, but I've had better. It was a little wilted when it arrived and didn't last as long as I expected.",
            },
          ],
        },
        {
          ProductId: 4,
          ProductName: "Brinjal",
          ProductDescription:
            "Fresh and healthy brinjals handpicked from the farm. Our brinjals are of premium quality and are perfect for all your cooking needs.",
          ProductImage: [
            {
              id: 1,
              image: prod4A,
            },
            {
              id: 2,
              image: prod4B,
            },
            {
              id: 3,
              image: prod4C,
            },
          ],
          ProductCode: "BRN01",
          ProductCategory: "Vegetables",
          ProductSubCategory: "Solanaceous Vegetables",
          ProductBrand: "Farm Fresh",
          ProductColor: "Purple",
          ProductSize: "Medium",
          ProductWeight: "500g",
          ProductMaterial: "",
          ProductQuantity: 20,
          ProductUnit: "kg",
          ProductPrice: 50,
          SalesPrice: 45,
          ProductDiscount: 10,
          ProductDiscountType: "Percentage",
          ProductTax: 5,
          ProductTaxType: "Percentage",
          ProductShippingCharge: 15,
          ProductShippingChargeType: "Percentage",
          ProductShippingTime: "2-3 days",
          ProductShippingTimeType: "Days",
          ProductShippingLocation: "India",
          ProductShippingLocationType: "Country",
          ProductShippingReturnPolicy:
            "Easy returns within 15 days of delivery",
          ProductShippingReturnPolicyType: "Days",
          ProductShippingReturnPolicyDescription:
            "In case you are not satisfied with the product, you can initiate a return and get a full refund.",
          ProductShippingReturnPolicyDescriptionType: "Details",
          ProductReviews: [
            {
              ReviewId: 1,
              Name: "John Doe",
              Email: "johndoe@example.com",
              Rating: 4,
              Date: "2022-05-01",
              Review:
                "The brinjals were fresh and of good quality. They were perfect for the recipe I was making. I would definitely recommend this product to others.",
            },
            {
              ReviewId: 2,
              Name: "Jane Doe",
              Email: "janedoe@example.com",
              Rating: 5,
              Date: "2022-05-10",
              Review:
                "I have been ordering brinjals from this seller for a while now, and I have always been satisfied with the quality of the product. The brinjals are fresh and tasty, and they are perfect for all my cooking needs.",
            },
          ],
        },
        {
          ProductId: 5,
          ProductName: "Chillies",
          ProductDescription:
            "Chillies are the fruit of plants from the genus Capsicum, which are members of the nightshade family. They are widely used in cooking to add heat and flavor to dishes.",
          ProductImage: [
            {
              id: 1,
              image: prod5A,
            },
            {
              id: 2,
              image: prod5B,
            },
            {
              id: 3,
              image: prod5C,
            },
          ],
          ProductCode: "C5",
          ProductCategory: "Vegetables",
          ProductSubCategory: "Chillies",
          ProductBrand: "Brand 5",
          ProductColor: "Green, Red, Yellow",
          ProductSize: "Varies",
          ProductWeight: "Varies",
          ProductMaterial: "N/A",
          ProductQuantity: 50,
          ProductUnit: "kg",
          ProductPrice: 10,
          SalesPrice: 8,
          ProductDiscount: 20,
          ProductDiscountType: "Percentage",
          ProductTax: 10,
          ProductTaxType: "Percentage",
          ProductShippingCharge: 5,
          ProductShippingChargeType: "Fixed",
          ProductShippingTime: "1-3 days",
          ProductShippingTimeType: "Days",
          ProductShippingLocation: "Worldwide",
          ProductShippingLocationType: "Country",
          ProductShippingReturnPolicy: "30-day return policy",
          ProductShippingReturnPolicyType: "Days",
          ProductShippingReturnPolicyDescription:
            "If you are not satisfied with your purchase, you may return it within 30 days for a refund.",
          ProductShippingReturnPolicyDescriptionType: "Description",
          ProductReviews: [
            {
              ReviewId: 1,
              Name: "John Doe",
              Email: "johndoe@example.com",
              Rating: 4,
              Date: "2022-01-01",
              Review:
                "These chillies are great! They add just the right amount of heat to my dishes.",
            },
            {
              ReviewId: 2,
              Name: "Jane Smith",
              Email: "janesmith@example.com",
              Rating: 5,
              Date: "2022-02-01",
              Review: "I love these chillies! They are so fresh and flavorful.",
            },
            {
              ReviewId: 3,
              Name: "Bob Johnson",
              Email: "bobjohnson@example.com",
              Rating: 3,
              Date: "2022-03-01",
              Review:
                "These chillies were okay. I've had better, but they did the job.",
            },
          ],
        },
        {
          ProductId: 6,
          ProductName: "Garlic",
          ProductDescription:
            "Garlic is a plant in the onion family that is used as a seasoning in food. It has a strong, pungent flavor and aroma. Garlic is believed to have many health benefits, including boosting the immune system and reducing the risk of certain types of cancer.",
          ProductImage: [
            {
              id: 1,
              image: prod6A,
            },
            {
              id: 2,
              image: prod6B,
            },
            {
              id: 3,
              image: prod6C,
            },
          ],
          ProductCode: "GRLC001",
          ProductCategory: "Vegetables",
          ProductSubCategory: "Allium",
          ProductBrand: "Fresh Harvest",
          ProductColor: "White",
          ProductSize: "Medium",
          ProductWeight: "500 g",
          ProductMaterial: "",
          ProductQuantity: 100,
          ProductUnit: "g",
          ProductPrice: 2.99,
          SalesPrice: 2.5,
          ProductDiscount: 0,
          ProductDiscountType: "Percentage",
          ProductTax: 0.15,
          ProductTaxType: "Percentage",
          ProductShippingCharge: 5,
          ProductShippingChargeType: "Fixed",
          ProductShippingTime: "2-3 business days",
          ProductShippingTimeType: "Days",
          ProductShippingLocation: "United States",
          ProductShippingLocationType: "Country",
          ProductShippingReturnPolicy: "30 days",
          ProductShippingReturnPolicyType: "Days",
          ProductShippingReturnPolicyDescription:
            "If you are not completely satisfied with your purchase, you can return it within 30 days for a full refund.",
          ProductShippingReturnPolicyDescriptionType: "Text",
          ProductReviews: [
            {
              ReviewId: 1,
              Name: "John",
              Email: "john@example.com",
              Rating: 5,
              Date: "2022-01-01",
              Review: "Great quality garlic. Highly recommended.",
            },
            {
              ReviewId: 2,
              Name: "Jane",
              Email: "jane@example.com",
              Rating: 4,
              Date: "2022-01-05",
              Review:
                "The garlic was fresh and flavorful, but some of the cloves were quite small.",
            },
            {
              ReviewId: 3,
              Name: "Bob",
              Email: "bob@example.com",
              Rating: 3,
              Date: "2022-01-10",
              Review:
                "Decent garlic, but a bit overpriced compared to what I can get at my local grocery store.",
            },
          ],
        },
        {
          ProductId: 7,
          ProductName: "Carrot",
          ProductDescription:
            "Carrot is a root vegetable, usually orange in colour, though purple, black, red, white, and yellow varieties also exist. It has a crisp texture when fresh. The most commonly eaten part of a carrot is the taproot, although the greens are sometimes eaten as well.",
          ProductImage: [
            {
              id: 1,
              image: prod7A,
            },
            {
              id: 2,
              image: prod7B,
            },
            {
              id: 3,
              image: prod7C,
            },
          ],
          ProductCode: "CRT1",
          ProductCategory: "Vegetables",
          ProductSubCategory: "Root Vegetables",
          ProductBrand: "Farm Fresh",
          ProductColor: "Orange",
          ProductSize: "Medium",
          ProductWeight: "500g",
          ProductMaterial: "Vegetable",
          ProductQuantity: 20,
          ProductUnit: "Kg",
          ProductPrice: 40,
          SalesPrice: 35,
          ProductDiscount: 5,
          ProductDiscountType: "Percentage",
          ProductTax: 5,
          ProductTaxType: "Percentage",
          ProductShippingCharge: 10,
          ProductShippingChargeType: "Percentage",
          ProductShippingTime: "2-3 days",
          ProductShippingTimeType: "Days",
          ProductShippingLocation: "India",
          ProductShippingLocationType: "Country",
          ProductShippingReturnPolicy: "30 days",
          ProductShippingReturnPolicyType: "Days",
          ProductShippingReturnPolicyDescription:
            "Return the product in its original condition within 30 days of delivery for a full refund.",
          ProductShippingReturnPolicyDescriptionType: "Text",
          ProductReviews: [
            {
              ReviewId: 1,
              Name: "Jane Doe",
              Email: "jane@example.com",
              Rating: 4,
              Date: "2022-05-01",
              Review: "I ordered these carrots and they were fresh and tasty!",
            },
            {
              ReviewId: 2,
              Name: "John Smith",
              Email: "john@example.com",
              Rating: 5,
              Date: "2022-05-03",
              Review:
                "I'm very happy with my purchase of these carrots. They were delivered quickly and were of excellent quality.",
            },
          ],
        },
        {
          ProductId: 8,
          ProductName: "Radish",
          ProductDescription:
            "Radish is a root vegetable that is crispy, crunchy, and slightly sweet. It is rich in vitamins and minerals, and is a good source of fiber.",
          ProductImage: [
            {
              id: 1,
              image: prod8A,
            },
            {
              id: 2,
              image: prod8B,
            },
            {
              id: 3,
              image: prod8C,
            },
          ],
          ProductCode: "RDSH-001",
          ProductCategory: "Vegetables",
          ProductSubCategory: "Root Vegetables",
          ProductBrand: "Fresh Farms",
          ProductColor: "Red",
          ProductSize: "Small",
          ProductWeight: "100g",
          ProductMaterial: "N/A",
          ProductQuantity: 50,
          ProductUnit: "Bunch",
          ProductPrice: 3,
          SalesPrice: 1.5,
          ProductDiscount: 50,
          ProductDiscountType: "Amount",
          ProductTax: 0.1,
          ProductTaxType: "Percentage",
          ProductShippingCharge: 0,
          ProductShippingChargeType: "Amount",
          ProductShippingTime: "1-2 days",
          ProductShippingTimeType: "Days",
          ProductShippingLocation: "Domestic",
          ProductShippingLocationType: "Country",
          ProductShippingReturnPolicy: "30-day return policy",
          ProductShippingReturnPolicyType: "Days",
          ProductShippingReturnPolicyDescription:
            "We offer a 30-day return policy for all products. If you are not satisfied with your purchase, you can return it for a full refund.",
          ProductShippingReturnPolicyDescriptionType: "Text",
          ProductReviews: [
            {
              ReviewId: 1,
              Name: "John Doe",
              Email: "johndoe@example.com",
              Rating: 4,
              Date: "2022-04-01",
              Review:
                "I really enjoyed the radishes! They were fresh and tasty.",
            },
            {
              ReviewId: 2,
              Name: "Jane Smith",
              Email: "janesmith@example.com",
              Rating: 3,
              Date: "2022-04-15",
              Review:
                "The radishes were okay, but they weren't as fresh as I was hoping.",
            },
          ],
        },
      ],
    };

    if (temp.Code == 200) {
      setimageset(temp.Data[0].ProductImage);
      setproductdata(temp.Data[0]);
      setactiveimg(temp.Data[0].ProductImage[0]);
    }
  };

  useEffect(() => {
    getproductdatabyid();
    window.scroll(0, 0);
  }, []);

  const [rating, setrating] = React.useState(0);

  const products = [
    {
      ProductId: 1,
      ProductName: "Bell Peppers",
      ProductDescription:
        "Bell peppers, also known as sweet peppers or capsicum, are a type of vegetable that come in various colors such as green, red, and yellow. They are commonly used in cooking and are known for their crunchy texture and sweet taste.",
      ProductImage: [
        {
          id: 1,
          image: prod1B,
        },
        {
          id: 2,
          image: prod1A,
        },
        {
          id: 3,
          image: prod1C,
        },
      ],
      ProductCode: "BP1",
      ProductCategory: "Vegetables",
      ProductSubCategory: "Fresh Produce",
      ProductBrand: "Organic Farms",
      ProductColor: "Green, Red, Yellow",
      ProductSize: "Medium",
      ProductWeight: "500g",
      ProductMaterial: "N/A",
      ProductQuantity: 20,
      ProductUnit: "Packet",
      ProductPrice: 50,
      SalesPrice: 40,
      ProductDiscount: 10,
      ProductDiscountType: "Percentage",
      ProductTax: 5,
      ProductTaxType: "Percentage",
      ProductShippingCharge: 10,
      ProductShippingChargeType: "Percentage",
      ProductShippingTime: "2-3 days",
      ProductShippingTimeType: "Days",
      ProductShippingLocation: "All India",
      ProductShippingLocationType: "Country",
      ProductShippingReturnPolicy: "30 days",
      ProductShippingReturnPolicyType: "Days",
      ProductShippingReturnPolicyDescription: "Returns accepted",
      ProductShippingReturnPolicyDescriptionType: "Description",
      ProductReviews: [
        {
          ReviewId: 1,
          Name: "Riya Sharma",
          Email: "",
          Rating: 4,
          Date: "2022-04-15",
          Review:
            "I really enjoyed these bell peppers! They were fresh and tasted great in my stir-fry. Would buy again.",
        },
        {
          ReviewId: 2,
          Name: "Rahul Gupta",
          Email: "",
          Rating: 3,
          Date: "2022-04-10",
          Review:
            "The bell peppers were good, but I found a few that were starting to go bad. Overall decent quality.",
        },
        {
          ReviewId: 3,
          Name: "Amit Singh",
          Email: "",
          Rating: 5,
          Date: "2022-04-05",
          Review:
            "These bell peppers were amazing! They were fresh and tasted great in my salad. Highly recommend!",
        },
      ],
    },
    {
      ProductId: 2,
      ProductName: "Broccoli",
      ProductDescription:
        "Broccoli is a green vegetable that is high in nutrients and low in calories. It is a great source of vitamins C and K, fiber, and antioxidants.",
      ProductImage: [
        {
          id: 1,
          image: prod2A,
        },
        {
          id: 2,
          image: prod2B,
        },
        {
          id: 3,
          image: prod2C,
        },
      ],
      ProductCode: "BRO-001",
      ProductCategory: "Vegetables",
      ProductSubCategory: "Cruciferous Vegetables",
      ProductBrand: "Fresh Produce",
      ProductColor: "Green",
      ProductSize: "Medium",
      ProductWeight: "500 g",
      ProductMaterial: "",
      ProductQuantity: 50,
      ProductUnit: "pieces",
      ProductPrice: 2.99,
      SalesPrice: 2.49,
      ProductDiscount: 17,
      ProductDiscountType: "Percentage",
      ProductTax: 0,
      ProductTaxType: "None",
      ProductShippingCharge: 0,
      ProductShippingChargeType: "None",
      ProductShippingTime: "2-3 days",
      ProductShippingTimeType: "Days",
      ProductShippingLocation: "Anywhere",
      ProductShippingLocationType: "Worldwide",
      ProductShippingReturnPolicy: "30-day return policy",
      ProductShippingReturnPolicyType: "Days",
      ProductShippingReturnPolicyDescription:
        "If you're not satisfied with your purchase, you can return it within 30 days for a full refund.",
      ProductShippingReturnPolicyDescriptionType: "Details",
      ProductReviews: [
        {
          ReviewId: 1,
          Name: "John Smith",
          Email: "john.smith@example.com",
          Rating: 5,
          Date: "2023-04-30",
          Review:
            "I love broccoli! This is some of the freshest and most delicious broccoli I've ever tasted.",
        },
        {
          ReviewId: 2,
          Name: "Jane Doe",
          Email: "jane.doe@example.com",
          Rating: 4,
          Date: "2023-05-01",
          Review:
            "The broccoli was good, but not as fresh as I was hoping for. Still, it tasted great and I would definitely buy it again.",
        },
        {
          ReviewId: 3,
          Name: "Bob Johnson",
          Email: "bob.johnson@example.com",
          Rating: 3,
          Date: "2023-05-02",
          Review:
            "I was disappointed with the size of the broccoli pieces. They were much smaller than I expected.",
        },
      ],
    },
    {
      ProductId: 3,
      ProductName: "Cabbage",
      ProductDescription:
        "This fresh green cabbage is perfect for making salads, coleslaw, and other delicious dishes. It is grown locally without the use of pesticides and is hand-picked for maximum freshness.",
      ProductImage: [
        {
          id: 1,
          image: prod3A,
        },
        {
          id: 2,
          image: prod3B,
        },
        {
          id: 3,
          image: prod3C,
        },
      ],
      ProductCode: "CABB01",
      ProductCategory: "Vegetables",
      ProductSubCategory: "Leafy Vegetables",
      ProductBrand: "Green Farm",
      ProductColor: "Green",
      ProductSize: "Medium",
      ProductWeight: "1 kg",
      ProductMaterial: "",
      ProductQuantity: 50,
      ProductUnit: "Piece",
      ProductPrice: 2.5,
      SalesPrice: 2,
      ProductDiscount: 0.5,
      ProductDiscountType: "Currency",
      ProductTax: 0.2,
      ProductTaxType: "Percentage",
      ProductShippingCharge: 0,
      ProductShippingChargeType: "Currency",
      ProductShippingTime: "2-3 days",
      ProductShippingTimeType: "Days",
      ProductShippingLocation: "US",
      ProductShippingLocationType: "Country",
      ProductShippingReturnPolicy: "30-day money-back guarantee",
      ProductShippingReturnPolicyType: "Days",
      ProductShippingReturnPolicyDescription:
        "If you are not satisfied with your purchase, we will provide a full refund within 30 days.",
      ProductShippingReturnPolicyDescriptionType: "Description",
      ProductReviews: [
        {
          ReviewId: 1,
          Name: "John Doe",
          Email: "johndoe@gmail.com",
          Rating: 4,
          Date: "2022-04-15",
          Review:
            "This cabbage is really fresh and tasty. I used it to make a salad and it was delicious!",
        },
        {
          ReviewId: 2,
          Name: "Jane Smith",
          Email: "janesmith@hotmail.com",
          Rating: 5,
          Date: "2022-05-01",
          Review:
            "I love this cabbage! It's always fresh and crisp, and it makes a great addition to any meal.",
        },
        {
          ReviewId: 3,
          Name: "David Lee",
          Email: "davidlee@yahoo.com",
          Rating: 3,
          Date: "2022-05-07",
          Review:
            "The cabbage was okay, but I've had better. It was a little wilted when it arrived and didn't last as long as I expected.",
        },
      ],
    },
    {
      ProductId: 4,
      ProductName: "Brinjal",
      ProductDescription:
        "Fresh and healthy brinjals handpicked from the farm. Our brinjals are of premium quality and are perfect for all your cooking needs.",
      ProductImage: [
        {
          id: 1,
          image: prod4A,
        },
        {
          id: 2,
          image: prod4B,
        },
        {
          id: 3,
          image: prod4C,
        },
      ],
      ProductCode: "BRN01",
      ProductCategory: "Vegetables",
      ProductSubCategory: "Solanaceous Vegetables",
      ProductBrand: "Farm Fresh",
      ProductColor: "Purple",
      ProductSize: "Medium",
      ProductWeight: "500g",
      ProductMaterial: "",
      ProductQuantity: 20,
      ProductUnit: "kg",
      ProductPrice: 50,
      SalesPrice: 45,
      ProductDiscount: 10,
      ProductDiscountType: "Percentage",
      ProductTax: 5,
      ProductTaxType: "Percentage",
      ProductShippingCharge: 15,
      ProductShippingChargeType: "Percentage",
      ProductShippingTime: "2-3 days",
      ProductShippingTimeType: "Days",
      ProductShippingLocation: "India",
      ProductShippingLocationType: "Country",
      ProductShippingReturnPolicy: "Easy returns within 15 days of delivery",
      ProductShippingReturnPolicyType: "Days",
      ProductShippingReturnPolicyDescription:
        "In case you are not satisfied with the product, you can initiate a return and get a full refund.",
      ProductShippingReturnPolicyDescriptionType: "Details",
      ProductReviews: [
        {
          ReviewId: 1,
          Name: "John Doe",
          Email: "johndoe@example.com",
          Rating: 4,
          Date: "2022-05-01",
          Review:
            "The brinjals were fresh and of good quality. They were perfect for the recipe I was making. I would definitely recommend this product to others.",
        },
        {
          ReviewId: 2,
          Name: "Jane Doe",
          Email: "janedoe@example.com",
          Rating: 5,
          Date: "2022-05-10",
          Review:
            "I have been ordering brinjals from this seller for a while now, and I have always been satisfied with the quality of the product. The brinjals are fresh and tasty, and they are perfect for all my cooking needs.",
        },
      ],
    },
    {
      ProductId: 5,
      ProductName: "Chillies",
      ProductDescription:
        "Chillies are the fruit of plants from the genus Capsicum, which are members of the nightshade family. They are widely used in cooking to add heat and flavor to dishes.",
      ProductImage: [
        {
          id: 1,
          image: prod5A,
        },
        {
          id: 2,
          image: prod5B,
        },
        {
          id: 3,
          image: prod5C,
        },
      ],
      ProductCode: "C5",
      ProductCategory: "Vegetables",
      ProductSubCategory: "Chillies",
      ProductBrand: "Brand 5",
      ProductColor: "Green, Red, Yellow",
      ProductSize: "Varies",
      ProductWeight: "Varies",
      ProductMaterial: "N/A",
      ProductQuantity: 50,
      ProductUnit: "kg",
      ProductPrice: 10,
      SalesPrice: 8,
      ProductDiscount: 20,
      ProductDiscountType: "Percentage",
      ProductTax: 10,
      ProductTaxType: "Percentage",
      ProductShippingCharge: 5,
      ProductShippingChargeType: "Fixed",
      ProductShippingTime: "1-3 days",
      ProductShippingTimeType: "Days",
      ProductShippingLocation: "Worldwide",
      ProductShippingLocationType: "Country",
      ProductShippingReturnPolicy: "30-day return policy",
      ProductShippingReturnPolicyType: "Days",
      ProductShippingReturnPolicyDescription:
        "If you are not satisfied with your purchase, you may return it within 30 days for a refund.",
      ProductShippingReturnPolicyDescriptionType: "Description",
      ProductReviews: [
        {
          ReviewId: 1,
          Name: "John Doe",
          Email: "johndoe@example.com",
          Rating: 4,
          Date: "2022-01-01",
          Review:
            "These chillies are great! They add just the right amount of heat to my dishes.",
        },
        {
          ReviewId: 2,
          Name: "Jane Smith",
          Email: "janesmith@example.com",
          Rating: 5,
          Date: "2022-02-01",
          Review: "I love these chillies! They are so fresh and flavorful.",
        },
        {
          ReviewId: 3,
          Name: "Bob Johnson",
          Email: "bobjohnson@example.com",
          Rating: 3,
          Date: "2022-03-01",
          Review:
            "These chillies were okay. I've had better, but they did the job.",
        },
      ],
    },
    {
      ProductId: 6,
      ProductName: "Garlic",
      ProductDescription:
        "Garlic is a plant in the onion family that is used as a seasoning in food. It has a strong, pungent flavor and aroma. Garlic is believed to have many health benefits, including boosting the immune system and reducing the risk of certain types of cancer.",
      ProductImage: [
        {
          id: 1,
          image: prod6A,
        },
        {
          id: 2,
          image: prod6B,
        },
        {
          id: 3,
          image: prod6C,
        },
      ],
      ProductCode: "GRLC001",
      ProductCategory: "Vegetables",
      ProductSubCategory: "Allium",
      ProductBrand: "Fresh Harvest",
      ProductColor: "White",
      ProductSize: "Medium",
      ProductWeight: "500 g",
      ProductMaterial: "",
      ProductQuantity: 100,
      ProductUnit: "g",
      ProductPrice: 2.99,
      SalesPrice: 2.5,
      ProductDiscount: 0,
      ProductDiscountType: "Percentage",
      ProductTax: 0.15,
      ProductTaxType: "Percentage",
      ProductShippingCharge: 5,
      ProductShippingChargeType: "Fixed",
      ProductShippingTime: "2-3 business days",
      ProductShippingTimeType: "Days",
      ProductShippingLocation: "United States",
      ProductShippingLocationType: "Country",
      ProductShippingReturnPolicy: "30 days",
      ProductShippingReturnPolicyType: "Days",
      ProductShippingReturnPolicyDescription:
        "If you are not completely satisfied with your purchase, you can return it within 30 days for a full refund.",
      ProductShippingReturnPolicyDescriptionType: "Text",
      ProductReviews: [
        {
          ReviewId: 1,
          Name: "John",
          Email: "john@example.com",
          Rating: 5,
          Date: "2022-01-01",
          Review: "Great quality garlic. Highly recommended.",
        },
        {
          ReviewId: 2,
          Name: "Jane",
          Email: "jane@example.com",
          Rating: 4,
          Date: "2022-01-05",
          Review:
            "The garlic was fresh and flavorful, but some of the cloves were quite small.",
        },
        {
          ReviewId: 3,
          Name: "Bob",
          Email: "bob@example.com",
          Rating: 3,
          Date: "2022-01-10",
          Review:
            "Decent garlic, but a bit overpriced compared to what I can get at my local grocery store.",
        },
      ],
    },
    {
      ProductId: 7,
      ProductName: "Carrot",
      ProductDescription:
        "Carrot is a root vegetable, usually orange in colour, though purple, black, red, white, and yellow varieties also exist. It has a crisp texture when fresh. The most commonly eaten part of a carrot is the taproot, although the greens are sometimes eaten as well.",
      ProductImage: [
        {
          id: 1,
          image: prod7A,
        },
        {
          id: 2,
          image: prod7B,
        },
        {
          id: 3,
          image: prod7C,
        },
      ],
      ProductCode: "CRT1",
      ProductCategory: "Vegetables",
      ProductSubCategory: "Root Vegetables",
      ProductBrand: "Farm Fresh",
      ProductColor: "Orange",
      ProductSize: "Medium",
      ProductWeight: "500g",
      ProductMaterial: "Vegetable",
      ProductQuantity: 20,
      ProductUnit: "Kg",
      ProductPrice: 40,
      SalesPrice: 35,
      ProductDiscount: 5,
      ProductDiscountType: "Percentage",
      ProductTax: 5,
      ProductTaxType: "Percentage",
      ProductShippingCharge: 10,
      ProductShippingChargeType: "Percentage",
      ProductShippingTime: "2-3 days",
      ProductShippingTimeType: "Days",
      ProductShippingLocation: "India",
      ProductShippingLocationType: "Country",
      ProductShippingReturnPolicy: "30 days",
      ProductShippingReturnPolicyType: "Days",
      ProductShippingReturnPolicyDescription:
        "Return the product in its original condition within 30 days of delivery for a full refund.",
      ProductShippingReturnPolicyDescriptionType: "Text",
      ProductReviews: [
        {
          ReviewId: 1,
          Name: "Jane Doe",
          Email: "jane@example.com",
          Rating: 4,
          Date: "2022-05-01",
          Review: "I ordered these carrots and they were fresh and tasty!",
        },
        {
          ReviewId: 2,
          Name: "John Smith",
          Email: "john@example.com",
          Rating: 5,
          Date: "2022-05-03",
          Review:
            "I'm very happy with my purchase of these carrots. They were delivered quickly and were of excellent quality.",
        },
      ],
    },
    {
      ProductId: 8,
      ProductName: "Radish",
      ProductDescription:
        "Radish is a root vegetable that is crispy, crunchy, and slightly sweet. It is rich in vitamins and minerals, and is a good source of fiber.",
      ProductImage: [
        {
          id: 1,
          image: prod8A,
        },
        {
          id: 2,
          image: prod8B,
        },
        {
          id: 3,
          image: prod8C,
        },
      ],
      ProductCode: "RDSH-001",
      ProductCategory: "Vegetables",
      ProductSubCategory: "Root Vegetables",
      ProductBrand: "Fresh Farms",
      ProductColor: "Red",
      ProductSize: "Small",
      ProductWeight: "100g",
      ProductMaterial: "N/A",
      ProductQuantity: 50,
      ProductUnit: "Bunch",
      ProductPrice: 3,
      SalesPrice: 1.5,
      ProductDiscount: 50,
      ProductDiscountType: "Amount",
      ProductTax: 0.1,
      ProductTaxType: "Percentage",
      ProductShippingCharge: 0,
      ProductShippingChargeType: "Amount",
      ProductShippingTime: "1-2 days",
      ProductShippingTimeType: "Days",
      ProductShippingLocation: "Domestic",
      ProductShippingLocationType: "Country",
      ProductShippingReturnPolicy: "30-day return policy",
      ProductShippingReturnPolicyType: "Days",
      ProductShippingReturnPolicyDescription:
        "We offer a 30-day return policy for all products. If you are not satisfied with your purchase, you can return it for a full refund.",
      ProductShippingReturnPolicyDescriptionType: "Text",
      ProductReviews: [
        {
          ReviewId: 1,
          Name: "John Doe",
          Email: "johndoe@example.com",
          Rating: 4,
          Date: "2022-04-01",
          Review: "I really enjoyed the radishes! They were fresh and tasty.",
        },
        {
          ReviewId: 2,
          Name: "Jane Smith",
          Email: "janesmith@example.com",
          Rating: 3,
          Date: "2022-04-15",
          Review:
            "The radishes were okay, but they weren't as fresh as I was hoping.",
        },
      ],
    },
  ];
  const [reloadnavbar, setreloadnavbar] = React.useState(false);

  const addtocart = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (cart) {
      // alert('1 item is already added to cart')
      let itemincart = cart.find(
        (item) => item.productdata.ProductId === productdata.ProductId
      );
      if (itemincart) {
        cart = cart.map((item) => {
          if (item.productdata.ProductId === productdata.ProductId) {
            return {
              ...item,
              quantity: item.quantity + count,
            };
          } else {
            return item;
          }
        });
        localStorage.setItem("cart", JSON.stringify(cart));
      } else {
        cart = [
          ...cart,
          {
            productdata,
            quantity: count,
          },
        ];
        localStorage.setItem("cart", JSON.stringify(cart));
      }
    } else {
      cart = [
        {
          productdata,
          quantity: count,
        },
      ];

      // console.log(cart)
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    setreloadnavbar(!reloadnavbar);
    // window.location.reload()
    toast.success("Item added to cart");
  };

  return (
    <div className="ProductPage">
      {/*
      <h1>Product id is - {prodid}</h1>
      <p>{JSON.stringify(productdata)}</p>
  */}
      <Navbar reloadnavbar={reloadnavbar} />
      <div className="pc1">
        <Link to="/">
          <button className="goback">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            Go Back
          </button>
        </Link>

        <div className="c11">
          <div className="imgset">
            {imageset &&
              imageset?.map((item, index) => {
                return (
                  <div
                    className="imgsmall"
                    onClick={() => {
                      setactiveimg(item);
                    }}
                  >
                    <img
                      src={item.image}
                      alt=""
                      className={activeimg.id == item.id ? "active" : ""}
                    />
                  </div>
                );
              })}
          </div>
          <div className="imgbig">
            <img src={activeimg.image} alt="" />
          </div>
        </div>

        <div className="c12">
          <h1 className="head1">{productdata.ProductName}</h1>
          <div className="c121">
            <p className="price">
              ${productdata.SalesPrice * count}
              <span>${productdata.ProductPrice * count}</span>
            </p>

            <div className="incrdecr">
              <button
                onClick={() => {
                  if (count > 1) {
                    setcount(count - 1);
                  }
                }}
              >
                -
              </button>
              <p>{count}</p>
              <button
                onClick={() => {
                  if (count < 10) {
                    setcount(count + 1);
                  }
                }}
              >
                +
              </button>
            </div>
          </div>

          <div className="btncont">
            <button>Add to Cart</button>
            <button
              onClick={() => {
                addtocart();
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="pc2">
        {showreview ? (
          <div className="tabs">
            <button
              className="inactive"
              onClick={() => {
                setshowreview(false);
              }}
            >
              Description
            </button>
            <button
              className="active"
              onClick={() => {
                setshowreview(true);
              }}
            >
              Reviews
            </button>
          </div>
        ) : (
          <div className="tabs">
            <button
              className="active"
              onClick={() => {
                setshowreview(false);
              }}
            >
              Description
            </button>

            <button
              className="inactive"
              onClick={() => {
                setshowreview(true);
              }}
            >
              Reviews
            </button>
          </div>
        )}
        {showreview ? (
          <div className="reviewcont">
            <form>
              <div className="fromgroup">
                <label htmlFor="">Name</label>
                <input type="text" />
              </div>

              <div className="fromgroup">
                <label htmlFor="">Email</label>
                <input type="email" />
              </div>

              <div className="fromgroup">
                <label htmlFor="">Review</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
              </div>
              <div className="fromgroup">
                <label htmlFor="">Rating</label>
                <div className="rating">
                  <div
                    className="star"
                    onClick={() => {
                      setrating(1);
                    }}
                  >
                    {rating >= 1 ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 staractive"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 starinactive"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    )}
                  </div>
                  <div
                    className="star"
                    onClick={() => {
                      setrating(2);
                    }}
                  >
                    {rating >= 2 ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 staractive"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 starinactive"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    )}
                  </div>
                  <div
                    className="star"
                    onClick={() => {
                      setrating(3);
                    }}
                  >
                    {rating >= 3 ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 staractive"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 starinactive"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    )}
                  </div>
                  <div
                    className="star"
                    onClick={() => {
                      setrating(4);
                    }}
                  >
                    {rating >= 4 ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 staractive"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 starinactive"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    )}
                  </div>
                  <div
                    className="star"
                    onClick={() => {
                      setrating(5);
                    }}
                  >
                    {rating >= 5 ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 staractive"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 starinactive"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    )}
                  </div>
                </div>
              </div>

              <button>Submit</button>
            </form>

            <div className="allreview">
              <h1 className="head1">Product Reviews</h1>
              {productdata.ProductReviews &&
                productdata.ProductReviews.map((item, index) => {
                  return (
                    <div className="review">
                      <div className="reviewhead">
                        <p className="name">{item.Name}</p>
                        <div className="rating1">
                          <div className="star">
                            {item.Rating >= 1 ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 staractive"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                />
                              </svg>
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 starinactive"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                />
                              </svg>
                            )}
                          </div>
                          <div className="star">
                            {item.Rating >= 2 ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 staractive"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                />
                              </svg>
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 starinactive"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                />
                              </svg>
                            )}
                          </div>
                          <div className="star">
                            {item.Rating >= 3 ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 staractive"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                />
                              </svg>
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 starinactive"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                />
                              </svg>
                            )}
                          </div>
                          <div className="star">
                            {item.Rating >= 4 ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 staractive"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                />
                              </svg>
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 starinactive"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                />
                              </svg>
                            )}
                          </div>
                          <div className="star">
                            {item.Rating >= 5 ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 staractive"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                />
                              </svg>
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 starinactive"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                />
                              </svg>
                            )}
                          </div>
                        </div>
                        <span className="date">{item.Date}</span>
                      </div>

                      <div className="reviewbody">{item.Review}</div>
                    </div>
                  );
                })}
            </div>
          </div>
        ) : (
          <p className="desc">{productdata.ProductDescription}</p>
        )}
      </div>

      <div className="SliderContainer">
        <ProductSlider product={products} categoryname="Related Products" />
      </div>

      <div className="SliderContainer">
        <ProductSlider product={products} categoryname="More Products" />
      </div>

      <FooterBanner />
      <Footer />
    </div>
  );
};

export default ProductPage;
