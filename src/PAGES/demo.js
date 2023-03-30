{
  /* <div className="Container">
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
      </div>*/
}
