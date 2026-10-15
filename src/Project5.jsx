let Project5 = () => {
  return (
    <>
      <div className="bg-gray-100 flex justify-center items-center min-h-screen px-6 py-4">
        <form className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
          <h2 className="font-bold text-center text-2xl font-serif">
            Contact us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <input
              type="text"
              placeholder="First Name"
              className="border p-2 rounded-lg  border-blue-800 outline-none font-serif"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border p-2 rounded-lg  border-blue-800 outline-none font-serif"
            />
          </div>
          <input
            type="email"
            placeholder="Your E-mail"
            className="border p-2 rounded-lg  border-blue-800 mt-4 w-full outline-none font-serif"
          />
          <textarea
            rows="5"
            placeholder="Enter your Message"
            className="w-full border border-blue-800 rounded-lg mt-4 p-2 outline-none font-serif"
          ></textarea>
          <label className="inline-flex items-center mt-4">
            <input type="checkbox" className="w-5 h-5 rounded-lg" />
            <span className="text-gray-600 font-serif px-2 text-sm">
              I agree to the terms and conditions
            </span>
          </label>
          <button className="bg-blue-700 text-white font-semibold font-serif px-4 py-2 rounded-lg w-full mt-4">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Project5;
