import React from "react";
import BannerSlider from "../../COMPONENTS/Banners/BannerSlider";
import HomeCategories from "../../COMPONENTS/Category/HomeCategories";
import FooterBanner from "../../COMPONENTS/Footer/FooterBanner";
import Footer from "../../COMPONENTS/Footer/Footer";
import Navbar from "../../COMPONENTS/Navbar/Navbar";
import ProductSidebar from "../../COMPONENTS/Product/ProductSidebar";
import img1 from "../../ASSETS/Images/1.png";
import img2 from "../../ASSETS/Images/2.png";
import img3 from "../../ASSETS/Images/3.png";
//
//import prod1 from "../../ASSETS/Products/1.png";
//import prod2 from "../../ASSETS/Products/2.png";
//import prod3 from "../../ASSETS/Products/3.png";
//import prod4 from "../../ASSETS/Products/4.png";
//import prod5 from "../../ASSETS/Products/5.png";
//import prod6 from "../../ASSETS/Products/6.png";
//import prod7 from "../../ASSETS/Products/7.png";
//import prod8 from "../../ASSETS/Products/8.png";
//import prod9 from "../../ASSETS/Products/9.png";
//import prod10 from "../../ASSETS/Products/10.png";
//import prod11 from "../../ASSETS/Products/11.png";
//import prod12 from "../../ASSETS/Products/12.png";
//import prod13 from "../../ASSETS/Products/13.png";
//import prod14 from "../../ASSETS/Products/14.png";
//import prod15 from "../../ASSETS/Products/15.png";
//
import ProductSlider from "../../COMPONENTS/Product/ProductSlider";

const home = () => {
  const products = [
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
    {
      ProductId: 2,
      ProductName: "Product 2",
      ProductDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      ProductImage: [
        {
          id: 1,
          image: img2,
        },
        {
          id: 2,
          image: img1,
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
      SalesPrice: 90,
      ProductDiscount: 10,
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
    {
      ProductId: 3,
      ProductName: "Product 3",
      ProductDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      ProductImage: [
        {
          id: 1,
          image: img3,
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
      SalesPrice: 70,
      ProductDiscount: 30,
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
    {
      ProductId: 2,
      ProductName: "Product 2",
      ProductDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      ProductImage: [
        {
          id: 1,
          image: img2,
        },
        {
          id: 2,
          image: img1,
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
      SalesPrice: 90,
      ProductDiscount: 10,
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
    {
      ProductId: 3,
      ProductName: "Product 3",
      ProductDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      ProductImage: [
        {
          id: 1,
          image: img3,
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
      SalesPrice: 70,
      ProductDiscount: 30,
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
  ];
  return (
    <div>
      <Navbar reloadnavbar={false} />
      <BannerSlider />
      <HomeCategories />
      <ProductSidebar />
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

export default home;
