import { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const product = {
  name: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum amet unde molestias.",
  price: 192,
  href: "#",
  shipPrice: 18,
  delFreeAmt: 3,
  inStock: 21,
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: false },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductOverview() {
  const [count, setCount] = useState(1); // Initial value set to 1
  const [randomDays, setRandomDays] = useState(
    () => Math.floor(Math.random() * 9) + 1
  );

  const handleChange = (event) => {
    // Allow only numbers and backspace key
    const allowedChars = /^[0-9\b]+$/;
    if (allowedChars.test(event.target.value)) {
      const newValue = parseInt(event.target.value);
      if (newValue >= 1) {
        // Enforce minimum value of 1
        setCount(newValue);
      } else {
        setCount(1); // If the entered value is less than 1, set it to 1
      }
    }
  };
  const handleCartSubmit = () => {
    if (selectedSize) {
      // Add selected product to cart with count
      console.log("Product added to cart:", selectedSize, "Quantity:", count);
    } else {
      // Handle case when no size is selected
      console.error("Please select a size before adding to cart");
    }
  };

  const handleBuySubmit = () => {
    if (selectedSize) {
      // Proceed with buy action for selected product with count
      console.log("Product bought:", selectedSize, "Quantity:", count);
    } else {
      // Handle case when no size is selected
      console.error("Please select a size before buying");
    }
  };

  useEffect(() => {
    // Regenerate random days when the component mounts
    setRandomDays(Math.floor(Math.random() * 9) + 1);
  }, []);

  const defaultSelectedSize = product.sizes.find((size) => size.inStock);

  const [selectedSize, setSelectedSize] = useState(defaultSelectedSize);

  const formatDate = (randomDays) => {
    const options = { day: "numeric", month: "long" };
    const currentDate = new Date();
    const deliveryDate = new Date(currentDate);

    deliveryDate.setDate(currentDate.getDate() + randomDays);
    const day = deliveryDate.getDate();
    let suffix = "th";

    // Handle special cases for 11th, 12th, and 13th
    if (day === 11 || day === 12 || day === 13) {
      suffix = "th";
    } else if (day % 10 === 1) {
      suffix = "st";
    } else if (day % 10 === 2) {
      suffix = "nd";
    } else if (day % 10 === 3) {
      suffix = "rd";
    }

    const formattedDate = deliveryDate.toLocaleDateString("en-US", {
      month: "long",
    });
    // console.log(formattedDate)
    return `${day}${suffix} ${formattedDate}`;
  };
  return (
    <div className="bg-white">
      <div className="pt-6">
        <section className="grid grid-cols-12 gap-x-8 gap-y-10 px-10 pt-10">
          {/* Image gallery */}
          <div className="lg:col-span-4 md:col-span-4 col-span-12">
            <div className="flex flex-col items-center">
              <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
                <img
                  src={product.images[0].src}
                  alt={product.images[0].alt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="flex flex-wrap space-x-5 justify-center">
                {product.images.map((item, index) => (
                  <div
                    key={index}
                    className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4"
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Product info */}
          <div className="lg:col-span-6 md:col-span-6 col-span-12 mx-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24">
            <div className="lg:border-gray-200">
              <h1 className="text-2xl font-amazon-ember font-medium tracking-tight text-gray-700 sm:text-3xl">
                {product.name}
              </h1>
            </div>

            {/* Reviews */}
            <div className="mb-6 mt-1">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating
                          ? "text-yellow-500"
                          : "text-gray-200",
                        "h-5 w-5 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <a
                  href={reviews.href}
                  className="ml-3 text-sm font-medium text-sky-600 hover:text-indigo-500"
                >
                  {reviews.totalCount} ratings
                </a>
              </div>
            </div>

            {/* Options */}
            <div className="mt-4 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <div className="text-3xl tracking-tight text-gray-900 font-amazon-ember">
                ₹{product.price + product.shipPrice}
                {product.shipPrice ? (
                  <div className="text-gray-600 text-base mt-2">
                    ₹{product.shipPrice} Delivery & Packaging (included)
                  </div>
                ) : (
                  <span className="text-white bg-green-700 px-2 text-sm ms-3 py-1">
                    Free Delivery
                  </span>
                )}
              </div>

              <form className="mt-10">
                {/* Sizes */}
                {product.sizes ? (
                  <div className="mt-10">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium text-gray-900">
                        Size
                      </h3>
                    </div>

                    <RadioGroup
                      value={selectedSize}
                      onChange={setSelectedSize}
                      className="mt-4"
                    >
                      <RadioGroup.Label className="sr-only">
                        Choose a size
                      </RadioGroup.Label>
                      <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                        {product.sizes.map((size) => (
                          <RadioGroup.Option
                            key={size.name}
                            value={size}
                            disabled={!size.inStock}
                            className={({ active }) =>
                              classNames(
                                size.inStock
                                  ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                                  : "cursor-not-allowed bg-gray-50 text-gray-200",
                                active ? "ring-2 ring-indigo-500" : "",
                                "group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                              )
                            }
                          >
                            {({ active, checked }) => (
                              <>
                                <RadioGroup.Label as="span">
                                  {size.name}
                                </RadioGroup.Label>
                                {size.inStock ? (
                                  <span
                                    className={classNames(
                                      active ? "border" : "border-2",
                                      checked
                                        ? "border-indigo-500"
                                        : "border-transparent",
                                      "pointer-events-none absolute -inset-px rounded-md"
                                    )}
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <span
                                    aria-hidden="true"
                                    className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                  >
                                    <svg
                                      className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                      viewBox="0 0 100 100"
                                      preserveAspectRatio="none"
                                      stroke="currentColor"
                                    >
                                      <line
                                        x1={0}
                                        y1={100}
                                        x2={100}
                                        y2={0}
                                        vectorEffect="non-scaling-stroke"
                                      />
                                    </svg>
                                  </span>
                                )}
                              </>
                            )}
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                ) : (
                  <></>
                )}
              </form>
            </div>

            <div className="py-10 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{product.details}</p>
                </div>
              </div>
            </div>
          </div>
          {/*Buy Cart*/}
          <div className="lg:col-span-2 md:col-span-2 col-span-12 border rounded-md p-2 h-fit">
            <h2 className="sr-only">Product information</h2>
            {product.delFreeAmt <= count ? (
              <div className="text-3xl tracking-tight text-gray-900 font-amazon-ember">
                ₹{product.price*count}
                {product.shipPrice ? (
                  <>
                    <del className="block text-gray-600 text-base mt-2">
                      ₹{product.shipPrice*count} Delivery & Packaging
                    </del>
                    <div className="text-white bg-green-700 px-2 text-sm ms-3 py-1 w-fit">
                      Free Delivery
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </div>
            ) : (
              <div className="text-3xl tracking-tight text-gray-900 font-amazon-ember">
                ₹{(product.price + product.shipPrice)*count}
                {product.shipPrice ? (
                  <div className="text-gray-600 text-base mt-2">
                    ₹{product.shipPrice*count} Delivery & Packaging (included)
                  </div>
                ) : (
                  <></>
                )}
              </div>
            )}
            <div className="text-gray-600 text-base my-2">
              Delivery excepted on <br />
              <b>{formatDate(randomDays)}</b>
            </div>

            <div className="flex justify-center items-center">
              <button
                onClick={() => setCount(count - 1)}
                disabled={count === 1} // Disable if count is 1
                className={`bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded inline-flex items-center ${
                  count === 1 ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <ChevronLeftIcon />
              </button>

              <input
                type="text" // Change to text for normal input
                value={count}
                onChange={handleChange}
                className="mx-2 border border-gray-300 text-gray-700 rounded p-2 w-16 text-center"
              />
              <button
                onClick={() => setCount(count + 1)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
              >
                <ChevronRightIcon />
              </button>
            </div>
            {product.delFreeAmt ? (
              <div>Buy {product.delFreeAmt} to get free Delivery</div>
            ) : (
              ""
            )}
          <div>
        <button
          onClick={handleCartSubmit}
          className="mx-2 my-3 p-1 bg-indigo-600 w-full rounded-lg text-white hover:bg-indigo-800"
        >
          Add to Cart
        </button>
        <button
          onClick={handleBuySubmit}
          className="mx-2 my-3 p-1 bg-purple-600 w-full rounded-lg text-white hover:bg-purple-800"
        >
          Buy Now
        </button>
      </div>
          </div>
        </section>
      </div>
    </div>
  );
}
