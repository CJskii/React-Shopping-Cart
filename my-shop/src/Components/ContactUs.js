import React from "react";

const ContactUs = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="mockup-window border border-base-300 my-8">
        <div className="flex flex-col justify-center items-top px-4 py-4 border-t border-base-300">
          <div className="text-center p-4 mb-12">
            <h1 className="text-4xl ">Contact Us</h1>
            <p className="text-2xl">
              If you have any questions, concerns, or feedback about our
              products or services, we're here to help.
              <p>Here are some ways to get in touch with us:</p>
            </p>
          </div>
          <div className="text-center p-4">
            <h3 className="text-2xl">Email:</h3>
            <p className="text-md">
              You can send us an email at support@cryptocave.com and we'll get
              back to you as soon as possible.
              <p>
                Our customer support team is available 24/7 to assist you with
                any questions or issues you may have.
              </p>
            </p>
          </div>
          <div className="text-center p-4">
            <h3 className="text-2xl ">Phone:</h3>
            <p className="text-md">
              If you prefer to speak with someone over the phone, you can reach
              us at (555) 123-4567 during our business hours.{" "}
              <p>We are open Monday to Friday from 9:00 am to 5:00 pm EST.</p>
            </p>
          </div>
          <div className="text-center p-4">
            <h3 className="text-2xl ">Live chat:</h3>
            <p className="text-md">
              Our website also features a live chat option, which allows you to
              connect with a customer service representative in real-time.
            </p>
            <p>
              Simply click on the chat icon located in the bottom right corner
              of our website to get started.
            </p>
          </div>
          <div className="text-center p-4">
            <h3 className="text-2xl ">Social media:</h3>
            <p className="text-md">
              We're also active on social media, so you can connect with us on
              Facebook, Twitter, and Instagram.
              <p>
                Follow us for the latest updates on our products, promotions,
                and company news.
              </p>
            </p>
          </div>
          <div className="text-center p-4">
            <h3 className="text-2xl ">In person:</h3>
            <p className="text-md">
              If you're in the area, you're welcome to visit our office located
              at 1234 Main St, Anytown, USA.
              <p>Please note that our office is open by appointment only.</p>
            </p>
          </div>

          <p className="text-center mt-12">
            We appreciate your business and strive to provide the best customer
            service possible.
          </p>
          <p className="text-center font-bold">
            Thank you for choosing CryptoCave!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
