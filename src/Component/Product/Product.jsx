import React from "react";

function Product() {
  let Products = [
    {
      img: "https://www.hotjar.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2Flh3zuq09vnm2%2F4oQCLKmVfHS8s8gm7aQ2kb%2F2721537d299e0df64ad345aefb60aec3%2FTeam_analyzing_dashboard_with_metrics.png&w=946&q=75",
      name: "Lorem Ipsum 1",
      desc: "Lorem ipsum donor sit amet",
    },
    {
      img: "https://www.digiwebart.com/wp-content/uploads/2018/12/Best-Killer-Product-Marketing-Ideas-to-Boost-Business.jpg",
      name: "Lorem Ipsum 2",
      desc: "Lorem ipsum donor sit amet",
    },
    {
      img: "https://pimberly.com/wp-content/uploads/2023/11/products-1.png",
      name: "Lorem Ipsum 3",
      desc: "Lorem ipsum donor sit amet",
    },
    {
      img: "https://www.salesforce.com/blog/wp-content/uploads/sites/2/2023/07/product-listing-page-crop-background.jpg?w=889",
      name: "Lorem Ipsum 4",
      desc: "Lorem ipsum donor sit amet",
    },
  ];

  return (
    <section
      className="bg-white rounded-2xl flex flex-col justify-center items-center p-6 sm:p-10 gap-6 sm:gap-9"
      id="product"
    >
      <div>
        <h2 className="font-extralight text-2xl sm:text-3xl uppercase text-center mb-4 sm:mb-0">
          Product
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center gap-4 sm:gap-6 w-full max-w-6xl">
        {Products.map((product, index) => (
          <div
            key={product.name + index}
            className="flex flex-col items-center p-4 rounded-2xl bg-black/10 hover:bg-black/20 transition duration-300"
          >
            <div className="w-full mb-3">
              <img
                src={product.img}
                alt={product.desc}
                className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition duration-300 rounded-xl"
              />
            </div>
            <div className="flex flex-col text-center">
              <p className="font-light">{product.name}</p>
              <p className="text-sm font-extralight text-gray-600">
                {product.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Product;
