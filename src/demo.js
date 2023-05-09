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
//

const product = [
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
];
