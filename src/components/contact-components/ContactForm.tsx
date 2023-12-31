import { useFormik } from "formik";
import { FaArrowRight } from "react-icons/fa";

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      selectedSubject: "",
      message: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="bg-color-white px-8 py-8 rounded-b-0 xl:rounded-3xl h-full 2xl:py-40"
    >
      <div>
        <h1 className="font-roboto text-color-purple font-black text-2xl md:text-3xl">
          Send us a message
        </h1>
      </div>
      <div className="flex flex-col md:flex-row md:gap-8 ">
        <div className="flex flex-col md:w-1/2">
          <label
            htmlFor="firstName"
            className="font-roboto text-color-natural-gray mt-4 text-left 2xl:text-2xl"
          >
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
            className="border-b border-color-natural-gray h-14 focus:outline-none"
          />
        </div>

        <div className="flex flex-col md:w-1/2">
          <label
            htmlFor="lastName"
            className="font-roboto text-color-natural-gray mt-4 text-left  2xl:text-2xl"
          >
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
            className="border-b border-color-natural-gray h-14 focus:outline-none"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:gap-8">
        <div className="flex flex-col md:w-1/2">
          <label
            htmlFor="email"
            className="font-roboto text-color-natural-gray mt-4 text-left  2xl:text-2xl"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="border-b border-color-natural-gray h-14 focus:outline-none"
          />
        </div>

        <div className="flex flex-col md:w-1/2">
          <label
            htmlFor="phoneNumber"
            className="font-roboto text-color-natural-gray mt-4 text-left  2xl:text-2xl"
          >
            Phone Number
          </label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.phoneNumber}
            className="border-b border-color-natural-gray h-14 focus:outline-none"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <p className="font-roboto text-color-natural-gray mt-4 text-left 2xl:text-2xl">
          Select Subject
        </p>
        <div className="flex flex-col md:flex-row md:items-center mt-2 space-y-4 md:space-y-0">
          <div className="flex items-center">
            <input
              type="radio"
              id="subject1"
              name="selectedSubject"
              value="Subject 1"
              onChange={formik.handleChange}
              checked={formik.values.selectedSubject === "Subject 1"}
              className="cursor-pointer"
            />
            <label
              htmlFor="subject1"
              className="font-roboto text-color-purple font-light ml-2 mr-4  "
            >
              Subject 1
            </label>
          </div>

          <div className="flex items-center">
            <input
              type="radio"
              id="subject2"
              name="selectedSubject"
              value="Subject 2"
              onChange={formik.handleChange}
              checked={formik.values.selectedSubject === "Subject 2"}
              className="cursor-pointer"
            />
            <label
              htmlFor="subject2"
              className="font-roboto text-color-purple font-light ml-2 mr-4"
            >
              Subject 2
            </label>
          </div>

          <div className="flex items-center">
            <input
              type="radio"
              id="subject3"
              name="selectedSubject"
              value="Subject 3"
              onChange={formik.handleChange}
              checked={formik.values.selectedSubject === "Subject 3"}
              className="cursor-pointer"
            />
            <label
              htmlFor="subject3"
              className="font-roboto text-color-purple font-light ml-2 mr-4"
            >
              Subject 3
            </label>
          </div>

          <div className="flex items-center">
            <input
              type="radio"
              id="subject4"
              name="selectedSubject"
              value="Subject 4"
              onChange={formik.handleChange}
              checked={formik.values.selectedSubject === "Subject 4"}
              className="cursor-pointer"
            />
            <label
              htmlFor="subject4"
              className="font-roboto text-color-purple font-light ml-2"
            >
              Subject 4
            </label>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:w-full">
        <label
          htmlFor="message"
          className="font-roboto text-color-natural-gray mt-4 text-left 2xl:text-2xl"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          onChange={formik.handleChange}
          value={formik.values.message}
          placeholder="Write your message..."
          className="border-b border-color-natural-gray h-14 focus:outline-none"
        />
      </div>

      <div className="mt-4">
        <button
          type="submit"
          className="bg-primary-color text-color-white px-4 py-2 text-sm md:text-lg rounded-full flex items-center gap-2 2xl:px-8 2xl:py-4"
        >
          Submit{" "}
          <FaArrowRight style={{ fontSize: "10px", fontWeight: "lighter" }} />
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
