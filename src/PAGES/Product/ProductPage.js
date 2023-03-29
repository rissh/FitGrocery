import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./ProductPage.css";
import img1 from "../../ASSETS/Images/1.png";
import img2 from "../../ASSETS/Images/2.png";
import img3 from "../../ASSETS/Images/3.png";
import Navbar from "../../COMPONENTS/Navbar/Navbar";

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
          ProductId: 1,
          ProductName: "Product 1",
          ProductDescription:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          ProductImage: [
            {
              id: 1,
              image: img1,
            },
            {
              id: 2,
              image: img2,
            },
            {
              id: 3,
              image: img3,
            },
          ],
          ProductCode: "P1",
          ProductCategory: "Category 1",
          ProductSubCategory: "Sub Category 1",
          ProductBrand: "Brand 1",
          ProductColor: "Color 1",
          ProductSize: "Size 1",
          ProductWeight: "Weight 1",
          ProductMaterial: "Material 1",
          ProductQuantity: 10,
          ProductUnit: "Unit 1",
          ProductPrice: 100,
          SalesPrice: 80,
          ProductDiscount: 20,
          ProductDiscountType: "Percentage",
          ProductTax: 20,
          ProductTaxType: "Percentage",
          ProductShippingCharge: 20,
          ProductShippingChargeType: "Percentage",
          ProductShippingTime: "1-2 days",
          ProductShippingTimeType: "Days",
          ProductShippingLocation: "Location 1",
          ProductShippingLocationType: "Country",
          ProductShippingReturnPolicy: "Return Policy 1",
          ProductShippingReturnPolicyType: "Days",
          ProductShippingReturnPolicyDescription: "Return Policy Description 1",
          ProductShippingReturnPolicyDescriptionType: "Days",
          ProductReviews: [
            {
              ReviewId: 1,
              Name: "Harshal Jain",
              Email: "",
              Rating: 5,
              Date: "2021-08-01",
              Review:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            },
            {
              ReviewId: 2,
              Name: "Viraj",
              Email: "",
              Rating: 1,
              Date: "2021-08-01",
              Review:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            },
            {
              ReviewId: 3,
              Name: "Harshal Jain",
              Email: "",
              Rating: 4,
              Date: "2021-08-01",
              Review:
                "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
  }, []);

  return (
    <div className="ProductPage">
      {/*
      <h1>Product id is - {prodid}</h1>
      <p>{JSON.stringify(productdata)}</p>
  */}
      <Navbar />
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
                alert("Buy Now");
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* <div className="Container">
        <Link to="/">
          <button className="BackButton">
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
                d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Go Back
          </button>
        </Link>

        <div className="ProductImageContainer">
          <div className="ProductImgSet">
            {imageset &&
              imageset?.map((item, index) => {
                return (
                  <div
                    className="ImageSet"
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
          <div className="ProductImage">
            <img src={activeimg.image} alt="" />
          </div>
        </div>

        <div className="ProductContainer">
          <h1 className="headline">{productdata.ProductName}</h1>
          <div className="ProdPrice">
            <p className="price">
              ${productdata.SalesPrice * count}
              <span>{productdata.ProductPrice * count}</span>
            </p>

            <div className="ProductQuantity">
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

          <div className="Buttons"></div>
          <div className="AddToCart">
            <button
              onClick={() => {
                alert("Added to cart");
              }}
            >
              Add to Cart
            </button>
          </div>

          <div className="BuyNow">
            <button
              onClick={() => {
                alert("Buy Now");
              }}
            ></button>
          </div>
        </div>
      </div>*/}
    </div>
  );
};

export default ProductPage;
