import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";
import "./App.css";

// form content
export const formData = [
  {
    type: "text",
    name: "First Name",
    placeholder: "Enter your first name",
    error_message: "First Name is required",
  },
  {
    type: "text",
    name: "Last Name",
    placeholder: "Enter your last name",
    error_message: "Last name is required",
  },
  {
    type: "text",
    name: "Username",
    placeholder: "Enter your username",
    error_message: "Username is required",
  },
  {
    type: "text",
    name: "Email id",
    placeholder: "Enter your email",
    error_message: "Email is required",
  },
  {
    type: "text",
    name: "Country",
    placeholder: "Choose Country ",
    error_message: "Country is required",
  },
  {
    type: "text",
    name: "City",
    placeholder: "Choose City ",
    error_message: "City is required",
  },
  {
    type: "text",
    name: "PAN",
    placeholder: "Enter your PAN Number",
    error_message: "PAN is required",
  },
  {
    type: "text",
    name: "Aadhaar",
    placeholder: "Enter your Aadhaar Number",
    error_message: "Aadhaar is required",
  },
  {
    type: "password",
    name: "Password",
    placeholder: "Enter your password",
    error_message: "Password is required",
  },
  {
    type: "phone",
    name: "Phone",
    placeholder: "Enter your number",
    error_message: "Phone Number is required",
  },
];

// App that will call all the routes
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </Router>
  );
}

// Form component
function Form() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [visible, setVisible] = useState(false); // State for password visibility
  const navigate = useNavigate();

  // country codes for phone number
  const countryCodeByName = [
    { label: "Country", value: "" },
    { label: "India", value: "+91" },
    { label: "Argentina", value: "+54" },
    { label: "Brazil", value: "+55" },
  ];

  // country names
  const countryName = [
    { label: "Country", value: "" },
    { label: "India", value: "India" },
    { label: "Argentina", value: "Argentina" },
    { label: "Brazil", value: "Brazil" },
  ];

  // cities based on the countries
  const cityData = {
    Country: [{ label: "City", value: "" }],
    India: [
      { label: "Kolkata", value: "Kolkata" },
      { label: "Mumbai", value: "Mumbai" },
      { label: "Delhi", value: "Delhi" },
      { label: "Pune", value: "Pune" },
      { label: "Chennai", value: "Chennai" },
      { label: "Bangalore", value: "Bangalore" },
      { label: "Hyderabad", value: "Hyderabad" },
    ],
    Argentina: [
      { label: "Rosario", value: "Rosario" },
      { label: "Mendoza", value: "Mendoza" },
      { label: "Tucumán", value: "Tucumán" },
      { label: "La Plata", value: "La Plata" },
      { label: "Mar del Plata", value: "Mar del Plata" },
      { label: "Córdoba", value: "Córdoba" },
      { label: "Buenos Aires", value: "Buenos Aires" },
    ],
    Brazil: [
      { label: "São Paulo", value: "São Paulo" },
      { label: "Rio de Janeiro", value: "Rio de Janeiro" },
      { label: "Salvador", value: "Salvador" },
      { label: "Brasília", value: "Brasília" },
      { label: "Belo Horizonte", value: "Belo Horizonte" },
      { label: "Curitiba", value: "Curitiba" },
      { label: "Manaus", value: "Manaus" },
    ],
  };

  // Extracts the name and value from the input field (e.target). Updates the values state using the spread operator to maintain the previous state and only modify the relevant field. Clears the error message for the current field in the errors state.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const emailValidator =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const passwordValidator =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;

  const aadhaarCardNumber = /^\d{12}$/;
  const panCardNumber = /^[A-Z]{3}[PCHF]\d{4}[A-Z]$/;

  // Extracts the name and value from the input field. Checks if the value is empty and sets an error message if it is.Performs specific validations for password, email, Aadhaar, and PAN fields using regex. Updates the errors state with appropriate error messages if the validation fails, otherwise clears the error.

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: formData.find((field) => field.name === name).error_message,
      }));
    } else if (name === "Password" && !passwordValidator.test(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]:
          "Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one number.",
      }));
    } else if (name === "Email id" && !emailValidator.test(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "Please enter a valid email address.",
      }));
    } else if (name === "Aadhaar" && !aadhaarCardNumber.test(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "Please enter a valid Adhaar Number.",
      }));
    } else if (name === "PAN" && !panCardNumber.test(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "Please enter a valid Pan Number.",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  // Extracts the value (country code) from the select dropdown. Updates the Phone field in the values state, Replace the old value with the new one.

  const handlePhoneSelect = (e) => {
    const { value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      Phone: value,
    }));
  };

  // Extracts the value from the input field. Updates the Phone field in the values state with the new value.

  const handlePhoneChange = (e) => {
    const { value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      Phone: value,
    }));
  };

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  // Updates the selectedCountry state with the new country value. Updates the Country field in the values state, Replace the old value with the new one.
  const handleCountrySelect = (e) => {
    const { value } = e.target;
    setSelectedCountry(value); // Update selectedCountry state
    setValues((prevValues) => ({
      ...prevValues,
      Country: value, // Replace the old value with the new one
    }));
  };

  const handleCountryChange = (e) => {
    const { value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      Country: value,
    }));
  };

  // Updates the selectedCity state with the new city value. Updates the City field in the values state with the new value.

  const handleCitySelect = (e) => {
    setSelectedCity(e.target.value);
    const { value } = e.target;
    setSelectedCity(value);
    setValues((prevValues) => ({
      ...prevValues,
      City: value,
    }));
  };

  const cityOptions = selectedCountry ? cityData[selectedCountry] : [];

  // Prevents the default form submission behavior using e.preventDefault().
  // Initializes an empty newErrors object.
  // Iterates over formData to check if any field is empty, adding error messages to newErrors.
  // Updates the errors state with any new errors.
  // If there are no errors (newErrors is empty), logs the form data and navigates to the /details page, passing the form data in the state.

  const handleSubmit = (e) => {
    e.preventDefault();

    // Re-check for errors before allowing the form submission
    const newErrors = {};

    formData.forEach((field) => {
      const value = values[field.name];
      if (!value) {
        newErrors[field.name] = field.error_message;
      } else if (field.name === "Password" && !passwordValidator.test(value)) {
        newErrors[field.name] =
          "Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one number.";
      } else if (field.name === "Email id" && !emailValidator.test(value)) {
        newErrors[field.name] = "Please enter a valid email address.";
      } else if (field.name === "Aadhaar" && !aadhaarCardNumber.test(value)) {
        newErrors[field.name] = "Please enter a valid Adhaar Number.";
      } else if (field.name === "PAN" && !panCardNumber.test(value)) {
        newErrors[field.name] = "Please enter a valid Pan Number.";
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      navigate("/details", { state: { values } });
    }
  };

  return (
    <div className="flex flex-col xl:flex-row items-center justify-center  bg-[#0C0C0C] md:h-screen py-3">
      <div className=" w-[15rem] md:w-[25rem] xl:w-[32rem]  flex flex-col xl:flex-row items-center justify-center">
        <div className="flex flex-col items-center xl:items-start justify-center">
          <h3 className="text-xl md:text-2xl uppercase font-medium mb-2 tracking-wide text-[#00ffff]">
            CSI Assignment 1
          </h3>
          <h4
            className="text-[30px] lg:text-[60px] font-bold leading-none mb-12
              text-center xl:text-left text-[#fff]"
          >
            Create a form <br /> without using third-party libraries!
          </h4>
        </div>
      </div>
      <form
        className="form-design  
        flex flex-col 
        md:grid md:grid-cols-2 gap-x-10 border border-solid rounded-2xl gap-y-3 py-3 px-6 items-center 

        max-[400px]:w-[20rem] max-[500px]:w-[23.5rem] max-[640px]:w-[30rem] sm:w-[35rem] md:w-[45rem] lg:w-[52rem] xl:w-[45rem] 
        xl:h-[35rem]
        "
        onSubmit={handleSubmit}
      >
        {/* Passwords */}
        {formData.map((content, i) => {
          if (content.type === "password") {
            return (
              <div key={i} className="flex flex-col w-full">
                <div className="flex items-center justify-center w-full border-b">
                  <input
                    className="bg-transparent  py-3 outline-none w-full transition-all text-white"
                    type={visible ? "text" : "password"}
                    name={content.name}
                    placeholder={content.placeholder}
                    value={values[content.name] || ""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <div
                    className="text-white bg-[#404040] border rounded-md p-1 px-2 cursor-pointer"
                    onClick={() => setVisible(!visible)}
                  >
                    {visible ? "Hide" : "Unhide"}
                  </div>
                </div>
                {errors[content.name] && (
                  <p className="text-[#e1251a] font-semibold font-serif text-sm py-1">
                    {errors[content.name]}
                  </p>
                )}
              </div>
            );
          }
          // Country
          else if (content.name === "Country") {
            return (
              <div key={i} className="flex flex-col w-full">
                <div className="flex border-b gap-x-3 items-center justify-between ">
                  <select
                    className="text-white bg-[#404040] border rounded-md p-1 px-2 cursor-pointer" // Added rounded-none class
                    value={selectedCountry}
                    onChange={handleCountrySelect}
                  >
                    {countryName.map((option, index) => (
                      <option key={index} value={option.value} className="">
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <input
                    className="bg-transparent py-3 outline-none w-full transition-all text-white"
                    type="text"
                    name={content.name}
                    placeholder={content.placeholder}
                    value={values.Country || ""}
                    onChange={handleCountryChange}
                    onBlur={handleBlur}
                  />
                </div>
                {errors[content.name] && (
                  <p className="text-[#e1251a] font-semibold font-serif text-sm py-1">
                    {errors[content.name]}
                  </p>
                )}
              </div>
            );
          }
          // City
          else if (content.name === "City") {
            return (
              <div key={i} className="flex flex-col w-full">
                <div className="flex border-b gap-x-3 items-center justify-between w-full">
                  <select
                    className="text-white bg-[#404040] border rounded-md p-1 px-2 cursor-pointer" // Added rounded-none class
                    value={selectedCity}
                    onChange={handleCitySelect}
                  >
                    {(selectedCity === null || selectedCity === "") && (
                      <option value="">City</option>
                    )}
                    {cityOptions.map((city, index) => (
                      <option
                        key={index}
                        value={city.value}
                        className="border cursor-pointer"
                      >
                        {city.label}
                      </option>
                    ))}
                  </select>
                  <input
                    className="bg-transparent py-3 outline-none w-full transition-all text-white"
                    type="text"
                    name={content.name}
                    placeholder={content.placeholder}
                    value={values.City || ""} // Corrected value assignment
                    onChange={handleChange} // Changed to handleCityChange
                    onBlur={handleBlur}
                  />
                </div>
                {errors[content.name] && (
                  <p className="text-[#e1251a] font-semibold font-serif text-sm py-1 ">
                    {errors[content.name]}
                  </p>
                )}
              </div>
            );
          }
          // Phone
          else if (content.name === "Phone") {
            return (
              <div key={i} className="flex flex-col w-full">
                <div className="flex border-b gap-x-3 items-center justify-between w-full">
                  <select
                    className="text-white bg-[#404040] border rounded-md p-1 px-2 cursor-pointer" // Added rounded-none class
                    onChange={handlePhoneSelect}
                  >
                    {countryCodeByName.map((option, index) => (
                      <option
                        key={index}
                        value={option.value}
                        className="border cursor-pointer"
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <input
                    className="bg-transparent py-3 outline-none w-full transition-all text-white"
                    type="text"
                    name={content.name}
                    placeholder={content.placeholder}
                    value={values.Phone || ""}
                    onChange={handlePhoneChange}
                    onBlur={handleBlur}
                  />
                </div>
                {errors[content.name] && (
                  <p className="text-[#e1251a] font-semibold font-serif text-sm py-1 ">
                    {errors[content.name]}
                  </p>
                )}
              </div>
            );
          }
          // Rests
          else {
            return (
              <div key={i} className="w-full">
                <input
                  className="bg-transparent border-b py-3 outline-none w-full transition-all text-white"
                  type={content.type}
                  name={content.name}
                  placeholder={content.placeholder}
                  value={values[content.name] || ""}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors[content.name] && (
                  <p className="text-[#e1251a] font-semibold font-serif text-sm py-1 ">
                    {errors[content.name]}
                  </p>
                )}
              </div>
            );
          }
        })}
        {/* Send button */}
        <div className="col-span-2 flex justify-center">
          <button
            type="submit"
            className="my-1 inline-flex px-7 items-center justify-center lg:text-[1.4rem] border bg-white text-black rounded-md cursor-pointer transition-transform hover:scale-110 duration-1000 transform-cpu"
          >
            <span className="">Send Form</span>
          </button>
        </div>
      </form>
    </div>
  );
}

// Display function
function Details() {
  const location = useLocation();
  const { values } = location.state || { values: {} };

  return (
    <div className="bg-[#0C0C0C] h-[60rem] md:h-screen flex items-center justify-center">
      <div
        className="text-white border border-solid rounded-2xl gap-y-3 p-5 items-center justify-center 
        
        form-design
        max-[400px]:w-[19rem] max-[500px]:w-[23.5rem] max-[640px]:w-[30rem] sm:w-[35rem] md:w-[45rem] lg:w-[52rem] xl:w-[45rem]
        text-center
        
        "
      >
        <h1 className="text-3xl mb-4 font-serif font-bold underline">
          Submitted Details
        </h1>
        <ul>
          {Object.entries(values).map(([key, value]) => (
            <li key={key} className="mb-2 text-white">
              <strong className="mr-2 ">{key.replace("_", " ")}:</strong>{" "}
              {value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
