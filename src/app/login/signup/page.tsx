"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserInfo } from "os";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from 'zod'


// Triaged, refactor using hookform, array maps, and resolvers.


// const userInfo = z.object({
//   companyName: z.string().min(1, { message: 'minimum character must be > 1'}),
//   email: z.string().min(1, { message: 'minimum character must be > 1'}),
//   contactPerson: z.string().min(1, { message: 'minimum character must be > 1'}),
//   contactNumber: z.string().min(1, { message: 'minimum character must be > 1'}),
//   companyAddress: z.string().min(1, { message: 'minimum character must be > 1'}),
// })
const SignUpPage = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    contactPerson: "",
    contactNumber: "",
    companyAddress: "",
  }); // hook-form with zod resolver

  // const {
  //   handleSubmit,
  //   reset,
  //   watch,
    
  // } = useForm({
  //   defaultValues: {
  //     companyName: "",
  //   email: "",
  //   contactPerson: "",
  //   contactNumber: "",
  //   companyAddress: "",
  //   },
  //   mode: 'onChange',
  //   resolver: zodResolver(userInfo)
  // })

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormSubmitted(true);
    setErrorMessage(null);
    if (
      !formData.companyName ||
      !formData.email ||
      !formData.contactPerson ||
      !formData.contactNumber ||
      !formData.companyAddress
    ) {
      setErrorMessage("Please fill out all fields.");
      return;
    }
    try {
      // Log form data in JSON format to the terminal
      console.log("Form Data:", JSON.stringify(formData));
      const response = await fetch("/api/nodemailer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log("Form submission successful:", response);
      setFormSubmitted(true); // Set to true for success as well
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/bgimage.svg')",
          filter: "blur(0px)",
        }}
      />
      <main className="relative z-10 flex justify-center items-center h-full flex-col">
        <a href="/" className="absolute top-0 left-0 m-4 text-amber-50">
          Back to Home
        </a>
        <img src="/Lapwhitelogo.svg" alt="Logo" className="w-40 h-auto mt-8" />
        <div className="bg-white rounded-lg flex items-center mt-8">
          <div className="">
            <img
              src="/signupleftimage.svg"
              alt="Image"
              className="w-64 h-3/6"
            />
          </div>
          <div className="pt-5">
            <h1 className="text-3xl font-semibold mb-1 ml-60">Sign Up</h1>
            <p className="text-lg mb-4 ml-32 mr-32">
              Your Journey Starts Here - Get Started
            </p>
            <form
              onSubmit={onSubmit}
              className="pb-20 pl-28 text-xs items-center"
            >
              <div className="mb-4 w-9/12">
                <input
                  type="text"
                  placeholder="Company Name"
                  name='Company Name'
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  value={formData.companyName}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4 w-9/12">
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="flex mb-4">
                <div className="w-1/3. mr-4">
                  <input
                    name="contactPerson"
                    type="text"
                    placeholder="Contact Person"
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    value={formData.contactPerson}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-1/3">
                  <input
                    name="contactNumber"
                    type="text"
                    placeholder="Contact Number"
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    value={formData.contactNumber}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="mb-4 w-9/12">
                <input
                  type="text"
                  placeholder="Company Address"
                  name="companyAddress"
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  value={formData.companyAddress}
                  onChange={handleChange}
                />
              </div>
              {/* ... other form fields */}
              <div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-sm hover:bg-blue-600 transition-colors duration-300 w-9/12"
                >
                  Register
                </button>
                <br />
                <br />
                <button
                  type="submit"
                  className="bg-black text-white px-4 py-2 rounded-sm hover:bg-blue-600 transition-colors duration-300 w-9/12"
                >
                  Continue with Google
                </button>
              </div>
              {/* ... */}
              {formSubmitted && (
                <div className="mt-4">
                  {errorMessage ? (
                    <p className="text-red-500">{errorMessage}</p>
                  ) : (
                    <p className="text-green-500">
                      Your request is being processed. Please check your email
                      for further instructions.
                    </p>
                  )}
                </div>
              )}
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignUpPage;
