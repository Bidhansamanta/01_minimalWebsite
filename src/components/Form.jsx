import Button from "./Button";

function Form() {
  return (
    <div className="w-full max-w-md mx-auto p-4">
      <form className="bg-white border my-10 border-gray-200 rounded-2xl p-8 sm:p-10 shadow-sm">
        <div className="mb-5">
          <label
            htmlFor="fullName"
            className="block text-sm font-medium tracking-wider text-gray-800 mb-1"
          >
            Full Name
          </label>

          <input
            id="fullName"
            type="text"
            className="w-full border-b border-gray-300 outline-none py-1 focus:border-gray-700"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-sm font-medium tracking-wider text-gray-800 mb-1"
          >
            Email Address
          </label>

          <input
            id="email"
            type="email"
            className="w-full border-b border-gray-300 outline-none py-1 focus:border-gray-700"
          />
        </div>
        <div className="mb-6 relative">
          <label
            htmlFor="interest"
            className="block font-medium tracking-wider sm:text-lg text-gray-800 mb-2"
          >
            Select an area of interest
          </label>

          <select
            id="interest"
            className="w-full  border-b border-gray-300 outline-none py-1  text-gray-800 cursor-pointer"
          >
            <option>Select</option>
            <option value="architecture">Architecture</option>
            <option value="digital">Digital</option>
            <option value="design">Design</option>
          </select>
        </div>
        <div className="mb-5">
          <label
            htmlFor="projectDetails"
            className="block text-sm font-medium tracking-wider text-gray-800 mb-2"
          >
            Project Details
          </label>

          <textarea
            id="projectDetails"
            rows="1"
            className="w-full border-b border-gray-300 outline-none resize-none py-2 focus:border-gray-700"
          ></textarea>
        </div>
        <Button buttonText="Send Inquiry →" />
      </form>
    </div>
  );
}

export default Form;
