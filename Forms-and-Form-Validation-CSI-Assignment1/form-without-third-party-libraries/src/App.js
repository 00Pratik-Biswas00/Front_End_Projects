import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";
import "./App.css";

export const formData = [
  {
    type: "text",
    name: "f_name",
    placeholder: "First name",
    error_message: "First Name is required",
  },
  {
    type: "text",
    name: "l_name",
    placeholder: "Last name",
    error_message: "Last name is required",
  },
  {
    type: "text",
    name: "user_name",
    placeholder: "Username",
    error_message: "Username is required",
  },
  {
    type: "email",
    name: "user_email",
    placeholder: "Your email",
    error_message: "Email is required",
  },
  {
    type: "text",
    name: "country_name",
    placeholder: "Country",
    error_message: "Country is required",
  },
  {
    type: "text",
    name: "city_name",
    placeholder: "City",
    error_message: "City is required",
  },
  {
    type: "text",
    name: "pan_no",
    placeholder: "PAN Number",
    error_message: "PAN is required",
  },
  {
    type: "text",
    name: "adhaar_no",
    placeholder: "Adhaar Number",
    error_message: "Adhaar is required",
  },
  {
    type: "password",
    name: "password",
    placeholder: "Password",
    error_message: "Password is required",
  },
  {
    type: "phone",
    name: "phone_no",
    placeholder: "Phone Number",
    error_message: "Phone Number is required",
  },
];

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

function Form() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [visible, setVisible] = useState(false); // State for password visibility
  const navigate = useNavigate();

  const countryCodeByName = [
    { label: "Country", value: "" },
    { label: "India", value: "+91" },
    { label: "Argentina", value: "+54" },
    { label: "Brazil", value: "+55" },
  ];

  const countryName = [
    { label: "Country", value: "" },
    { label: "India", value: "India" },
    { label: "Argentina", value: "Argentina" },
    { label: "Brazil", value: "Brazil" },
  ];

  const cityData = {
    Country: [{ label: "City", value: "" }],
    India: [
      { label: "Bengal", value: "Bengal" },
      { label: "Odisha", value: "Odisha" },
      { label: "Kolkata", value: "Kolkata" },
    ],
    Argentina: [
      { label: "bang", value: "bang" },
      { label: "mango", value: "mango" },
      { label: "suri", value: "suri" },
    ],
    Brazil: [
      { label: "hui", value: "hui" },
      { label: "sui", value: "sui" },
      { label: "moye", value: "moye" },
    ],
    // Add cities for other countries as needed...
  };

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

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: formData.find((field) => field.name === name).error_message,
      }));
    }
  };

  const handlePhoneSelect = (e) => {
    const { value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      phone_no: value + (prevValues.phone_no?.substring(value.length) || ""),
    }));
  };

  const handlePhoneChange = (e) => {
    const { value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      phone_no: value,
    }));
  };

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const handleCountrySelect = (e) => {
    setSelectedCountry(e.target.value);
    const { value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      country_name:
        value + (prevValues.country_name?.substring(value.length) || ""),
    }));
  };

  const handleCitySelect = (e) => {
    setSelectedCity(e.target.value);
    const { value } = e.target;
    setSelectedCity(value); // Update selectedCity state
    setValues((prevValues) => ({
      ...prevValues,
      city_name: value, // Update city_name in the values state object
    }));
  };

  const cityOptions = selectedCountry ? cityData[selectedCountry] : [];

  const handleCountryChange = (e) => {
    const { value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      country_name: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    formData.forEach((field) => {
      if (!values[field.name]) {
        newErrors[field.name] = field.error_message;
      }
    });
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      console.log("Form data: ", values);
      navigate("/details", { state: { values } });
    }
  };

  return (
    <div className="bg-black h-screen flex items-center justify-center">
      <form
        className="grid grid-cols-2 gap-x-10 border border-solid rounded-2xl gap-y-3 py-3 px-6 items-center 
        
        
        max-[400px]:w-[19rem] max-[500px]:w-[23.5rem] max-[640px]:w-[30rem] sm:w-[35rem] md:w-[45rem] lg:w-[52rem] xl:w-[45rem]
        
        
        xl:h-[35rem]
        "
        onSubmit={handleSubmit}
      >
        {formData.map((content, i) => {
          if (content.type === "password") {
            return (
              <div key={i} className="flex flex-col">
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
                    className="text-white border p-1 rounded-md cursor-pointer"
                    onClick={() => setVisible(!visible)}
                  >
                    {visible ? "Hide" : "Unhide"}
                  </div>
                </div>
                {errors[content.name] && (
                  <p className="text-red-500">{errors[content.name]}</p>
                )}
              </div>
            );
          } else if (content.name === "country_name") {
            return (
              <div key={i} className="flex flex-col">
                <div className="flex border-b gap-x-3 items-center justify-between w-full">
                  <select
                    className="text-black border p-1 px-2 cursor-pointer rounded-none" // Added rounded-none class
                    value={selectedCountry}
                    onChange={handleCountrySelect}
                  >
                    {countryName.map((option, index) => (
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
                    value={values.country_name || ""}
                    onChange={handleCountryChange}
                    onBlur={handleBlur}
                  />
                </div>
                {errors[content.name] && (
                  <p className="text-red-500">{errors[content.name]}</p>
                )}
              </div>
            );
          } else if (content.name === "city_name") {
            return (
              <div key={i} className="flex flex-col">
                <div className="flex border-b gap-x-3 items-center justify-between w-full">
                  <select
                    className="text-black border p-1 px-2 cursor-pointer rounded-none" // Added rounded-none class
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
                    value={values.city_name || ""} // Corrected value assignment
                    onChange={handleChange} // Changed to handleCityChange
                    onBlur={handleBlur}
                  />
                </div>
                {errors[content.name] && (
                  <p className="text-red-500">{errors[content.name]}</p>
                )}
              </div>
            );
          } else if (content.name === "phone_no") {
            return (
              <div key={i} className="flex flex-col">
                <div className="flex border-b gap-x-3 items-center justify-between w-full">
                  <select
                    className="text-black border p-1 px-2 cursor-pointer rounded-none" // Added rounded-none class
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
                    value={values.phone_no || ""}
                    onChange={handlePhoneChange}
                    onBlur={handleBlur}
                  />
                </div>
                {errors[content.name] && (
                  <p className="text-red-500">{errors[content.name]}</p>
                )}
              </div>
            );
          } else {
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
                  <p className="text-red-500">{errors[content.name]}</p>
                )}
              </div>
            );
          }
        })}
        <button
          type="submit"
          className="my-1 inline-flex px-3 items-center justify-center lg:text-[1.4rem] border bg-white text-black rounded-md cursor-pointer transition-transform hover:scale-110 duration-1000 transform-cpu"
        >
          <span className="mr-[5px]">Send</span>
        </button>
      </form>
    </div>
  );
}

function Details() {
  const location = useLocation();
  const { values } = location.state || { values: {} };

  return (
    <div className="bg-black h-screen flex items-center justify-center">
      <div className="text-white">
        <h1 className="text-3xl mb-4">Submitted Details</h1>
        <ul>
          {Object.entries(values).map(([key, value]) => (
            <li key={key} className="mb-2 text-white">
              <strong>{key.replace("_", " ")}:</strong> {value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
