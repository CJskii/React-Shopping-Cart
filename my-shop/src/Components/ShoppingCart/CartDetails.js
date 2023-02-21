import React from "react";
import { Link } from "react-router-dom";

const CartDetails = (props) => {
  return (
    <section>
      <h1 className="text-center text-3xl p-4 bg-base-200">Checkout</h1>
      <div
        className="min-w-screen grid min-w-screen-2xl grid-cols-1 md:grid-cols-2 bg-base-200"
        style={{
          minHeight: "84vh",
          minWidth: "98vw",
        }}
      >
        <div className=" py-12 md:py-24">
          <div className="mx-auto max-w-lg space-y-8 px-4 lg:px-8">
            <div className="flex items-center gap-4">
              <span className="h-10 w-10 rounded-full bg-accent"></span>

              <h2 className="font-medium text-content">CryptoCave</h2>
            </div>

            <div>
              <p className="text-2xl font-medium tracking-tight text-gray-400">
                {props.basketTotal > 0
                  ? `$${props.basketTotal}`
                  : "Your basket is empty"}
              </p>
              {props.basketTotal > 0 ? (
                <p className="mt-1 text-sm text-gray-500">
                  For the purchase of
                </p>
              ) : (
                <Link to="/products">Explore our products</Link>
              )}
            </div>

            <div>
              <div className="flow-root">
                <ul className="-my-4 divide-y divide-gray-500">
                  {props.items.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex justify-between items-center gap-4 py-4"
                      >
                        <img
                          src={item.source}
                          alt={item.source}
                          className="h-16 w-16 rounded object-cover"
                        />

                        <div className="flex flex-col justify-center items-center">
                          <h3 className="text-sm text-gray-400">{item.name}</h3>
                          <div className="flex justify-center items-center">
                            <button
                              id="substract"
                              type="button"
                              className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                              onClick={(e) => {
                                if (item.qty > 1) {
                                  props.changeItemQuantity(item, e.target.id);
                                }
                              }}
                            >
                              -
                            </button>
                            <span className="w-1/6 text-center px-6">
                              {item.qty}
                            </span>

                            <button
                              id="add"
                              type="button"
                              className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                              onClick={(e) =>
                                props.changeItemQuantity(item, e.target.id)
                              }
                            >
                              +
                            </button>
                          </div>
                        </div>

                        <div className="flex flex-col justify-center items-center">
                          <p>${item.price * item.qty}</p>
                          <button
                            onClick={() => props.removeItem(item, item.qty)}
                          >
                            Remove
                          </button>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className=" py-12 md:py-24">
          <div className="mx-auto max-w-lg px-4 lg:px-8">
            <h1 className="text-center text-2xl p-4">Payments coming soon</h1>
            <form className="grid grid-cols-6 gap-4">
              <div className="col-span-3">
                <label
                  htmlFor="FirstName"
                  className="block text-xs font-medium text-gray-600"
                >
                  First Name
                </label>

                <input
                  type="text"
                  id="FirstName"
                  className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm bg-gray-700 pl-2"
                />
              </div>

              <div className="col-span-3">
                <label
                  htmlFor="LastName"
                  className="block text-xs font-medium text-gray-600"
                >
                  Last Name
                </label>

                <input
                  type="text"
                  id="LastName"
                  className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm bg-gray-700 pl-2"
                />
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="Email"
                  className="block text-xs font-medium text-gray-600"
                >
                  Email
                </label>

                <input
                  type="email"
                  id="Email"
                  className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm bg-gray-700 pl-2"
                />
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="Phone"
                  className="block text-xs font-medium text-gray-600"
                >
                  Phone
                </label>

                <input
                  type="tel"
                  id="Phone"
                  className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm bg-gray-700 pl-2"
                />
              </div>

              <fieldset className="col-span-6">
                <legend className="block text-sm font-medium text-gray-600">
                  Card Details
                </legend>

                <div className="mt-1 -space-y-px rounded-md  shadow-sm">
                  <div>
                    <label htmlFor="CardNumber" className="sr-only">
                      {" "}
                      Card Number{" "}
                    </label>

                    <input
                      type="text"
                      id="CardNumber"
                      placeholder="Card Number"
                      className="relative mt-1 w-full rounded-t-md border-gray-200 focus:z-10 sm:text-sm bg-gray-700 pl-2"
                    />
                  </div>

                  <div className="flex -space-x-px">
                    <div className="flex-1">
                      <label htmlFor="CardExpiry" className="sr-only">
                        {" "}
                        Card Expiry{" "}
                      </label>

                      <input
                        type="text"
                        id="CardExpiry"
                        placeholder="Expiry Date"
                        className="relative w-full rounded-bl-md border-gray-200 focus:z-10 sm:text-sm border-r-2 pl-2"
                      />
                    </div>

                    <div className="flex-1">
                      <label htmlFor="CardCVC" className="sr-only">
                        {" "}
                        Card CVC{" "}
                      </label>

                      <input
                        type="text"
                        id="CardCVC"
                        placeholder="CVC"
                        className="relative w-full rounded-br-md border-gray-200 focus:z-10 sm:text-sm pl-2"
                      />
                    </div>
                  </div>
                </div>
              </fieldset>

              <fieldset className="col-span-6">
                <legend className="block text-sm font-medium text-gray-600">
                  Billing Address
                </legend>

                <div className="mt-1 -space-y-px rounded-md  shadow-sm">
                  <div>
                    <label htmlFor="Country" className="sr-only">
                      Country
                    </label>

                    <select
                      id="Country"
                      className="relative w-full rounded-t-md border-gray-200 focus:z-10 sm:text-sm bg-gray-700"
                    >
                      <option>England</option>
                      <option>Wales</option>
                      <option>Scotland</option>
                      <option>France</option>
                      <option>Belgium</option>
                      <option>Japan</option>
                    </select>
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="PostalCode">
                      {" "}
                      ZIP/Post Code{" "}
                    </label>

                    <input
                      type="text"
                      id="PostalCode"
                      placeholder="ZIP/Post Code"
                      className="relative w-full rounded-b-md border-gray-200 focus:z-10 sm:text-sm bg-gray-700 pl-2"
                    />
                  </div>
                </div>
              </fieldset>

              <div className="col-span-6">
                <button className="block w-full rounded-md bg-black p-2.5 text-sm text-white transition hover:shadow-lg btn-disabled">
                  Pay Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    //     <div>
    //       {props.items.map((item, index) => {
    //         return (
    //           <div key={index}>
    //             <h1>{item.name}</h1>
    //             <button onClick={() => props.removeItem(item)}>Remove</button>
    //             <p>{index}</p>
    //             <img src={item.source} />
    //           </div>
    //         );
    //       })}
    //     </div>
    //   );
  );
};

export default CartDetails;
