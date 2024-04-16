"use client"
import React, { useState } from "react";
import { useEffect } from "react";

const CustomForm = () => {
  const [submit, setSubmit] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [formData, setFormData] = useState({
    "entry.746429476": "",
    "entry.1436654493": "",
    "entry.1449253335": "",
    "entry.1976628033": "",
    "entry.766709407": "",
    "entry.463689415": "",
    "entry.2034379913": "",
    "entry.1906650329": "",
  });
  const [firstPage, setFirstPage] = useState(true);

  const [formVisible, setFormVisible] = useState(false); // Track form visibility

  // Update form visibility based on conditions
  useEffect(() => {
    if (!firstPage && !submit) {
      setFormVisible(true); // Show form
    } else {
      setFormVisible(false); // Hide form
    }
  }, [firstPage, submit, currentQuestion]);

  const [selectedOption, setSelectedOption] = useState("");

  const handleInputData = (input: string) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
    setSelectedOption(value);
  };

  const handleNext = () => {
    setFormVisible(false);
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    setFormVisible(true);
    setSelectedOption("");
    
  };

  const handlePrevious = () => {
    setFormVisible(false);
    setCurrentQuestion((prevQuestion) => prevQuestion - 1);
    setFormVisible(true);
     setSelectedOption("");
    
  };

  const handleDivClick = (optionValue: string) => () => {
    setSelectedOption(optionValue);
  
    // Programmatically find and click the radio button
    const radioBtn = document.querySelector(`input[name="${currentQuestionData.id}"][value="${optionValue}"]`) as HTMLInputElement;
    if (radioBtn) {
      radioBtn.click();
    }
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmit(true);

    let formDataEncoded = new URLSearchParams();
    formDataEncoded.append(
      "entry.746429476",
      formData["entry.746429476"]
    );
    formDataEncoded.append(
      "entry.1436654493",
      formData["entry.1436654493"]
    );
    formDataEncoded.append(
      "entry.1449253335",
      formData["entry.1449253335"]
    );
    formDataEncoded.append(
      "entry.1976628033",
      formData["entry.1976628033"]
    );
    formDataEncoded.append(
      "entry.766709407",
      formData["entry.766709407"]
    );
    formDataEncoded.append(
      "entry.463689415",
      formData["entry.463689415"]
    );
    formDataEncoded.append(
      "entry.2034379913",
      formData["entry.2034379913"]
    );
    formDataEncoded.append(
      "entry.1906650329",
      formData["entry.1906650329"]
    );

    try {
      const res = await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSdyUrQ0MbplTcnoLU2RKzbbBU3yhDh_R6fwmBUGmotO0gDAoA/formResponse",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formDataEncoded.toString(),
        }
      );
      if (res.ok) {
        // Handle success
        console.log("Form submitted successfully");
      } else {
        // Handle error
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Form submission failed:", error);
    }
  }

  const questions = [
    {
      id: "entry.746429476",
      label: "Are you looking to save money on your home loan?",
      options: [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
      ],
    },
    {
      id: "entry.1436654493",
      label: "Are you considering refinancing your home loan?",
      options: [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
      ],
    },
    {
      id: "entry.1449253335",
      label: "What are you looking for in a mortgage broker?",
      options: [
        { value: "Amazing Customer Service", label: "Amazing Customer Service" },
        { value: "Competitive Rates", label: "Competitive Rates" },
        { value: "Quick Loan Approvals", label: "Quick Loan Approvals" },
      ],
    },
    {
      id: "entry.1976628033",
      label: "How much is your current home loan?",
      options: [
        { value: "Less than $500,000", label: "Less than $500,000" },
        { value: "More than $500,000", label: "More than $500,000" },
        { value: "Not Sure", label: "Not Sure" },
      ],
    },
    {
      id: "entry.766709407",
      label: "First Name",
      inputType: "text",
    },
    {
      id: "entry.463689415",
      label: "Last Name",
      inputType: "text",
    },
    {
      id: "entry.2034379913",
      label: "Phone Number with Country Code",
      inputType: "number",
    },
    {
      id: "entry.1906650329",
      label: "Email",
      inputType: "email",
    },
  ];

  const currentQuestionData = questions[currentQuestion];

  

  return (
    <div className="contactFormWrapper text-white bg-[#000000] bg-cover h-[100vh] w-[100vw] flex flex-col justify-center items-center">
      <div className="formheader"></div>
      <div className="formcontact">

      {
        (firstPage && !submit)&& (
          <div className="bg-cover h-[100vh] w-[100vw] gap-4 flex flex-col lg:flex-row justify-center items-center">
              <div className="lg:mx-16 my-12 lg:my-0">
                <iframe title="vimeo-player" src="https://player.vimeo.com/video/925286789?h=24dd8b7dd3" width="640" height="360" className="w-[90vw] h-[360px] sm:w-[640px]" ></iframe>
              </div>

              <div className="flex flex-col justify-center items-start w-[90vw] md:w-auto">
                <h1>Did you know that you could potentially save $100,000 on your home loan?</h1>
                <button className="text-gray-500 my-5 font-bold bg-white rounded-sm flex justify-center items-center p-3 hover:bg-gray-700 hover:text-white" onClick={() => {setFirstPage(false)}}>
                  Start Saving
                </button>
              </div>
              
          </div>  
        ) 
      }

        {(submit && !firstPage) && (

           <div className="bg-cover h-[100vh] w-[100vw] gap-4 flex flex-col lg:flex-row justify-center items-center">
              <div className="lg:mx-16 my-12 lg:my-0">
                <iframe title="vimeo-player" src="https://player.vimeo.com/video/925286789?h=24dd8b7dd3" width="640" height="360" className="w-[90vw] h-[360px] sm:w-[640px]" ></iframe>
              </div>

              <div className="flex flex-col justify-center text-[18px] items-start w-[90vw] mx-auto">
                <h1 className="mx-auto">Hold your horses! Please watch this video before exiting.</h1>
                
              </div>
              
          </div>  
        ) }
        
        { (!submit && !firstPage) &&
        (
          <form onSubmit={handleSubmit} target="_self" className={`form-container transition-transform duration-700 ${formVisible ? "-translate-y-100" : "translate-y-full"}`}>
            <fieldset className={`flex flex-col justify-center form-container transition-transform duration-700 ${formVisible ? "-translate-y-100" : "translate-y-full"}`}>
              <div className={`flex flex-col form-container transition-transform duration-700 ${formVisible ? "-translate-y-100" : "translate-y-full"}`}>
              <label htmlFor={currentQuestionData.id} className="my-2">
                {currentQuestionData.label}
              </label>
              {currentQuestionData.options ? (
        currentQuestionData.options.map((option) => (
          <div
            key={option.value}
            className={`border-2 border-white my-2 p-3 cursor-pointer ${
              selectedOption === option.value ? 'bg-gray-700 text-white' : 'hover:bg-gray-700 hover:text-white hover:scale-105'
            }`}
             onClick={handleDivClick(option.value)}
           
          >
            <div className="flex justify-between items-center">
              <label>{option.label}</label>
              <input
                required
                type="radio"
                name={currentQuestionData.id}
                value={option.value}
                onChange={handleInputData(currentQuestionData.id)}
                checked={formData[currentQuestionData.id as keyof typeof formData] === option.value}
                autoComplete="off"
                className="mr-2 cursor-pointer"
              />
            </div>
          </div>
        ))
      ) : (
        <input
          required
          type={currentQuestionData.inputType}
          name={currentQuestionData.id}
          onChange={handleInputData(currentQuestionData.id)}
          value={formData[currentQuestionData.id as keyof typeof formData]}
          autoComplete="off"
          className={`border border-gray-300 rounded-md p-2 mt-2 text-black form-container transition-transform duration-700 ${
            formVisible ? '-translate-y-100' : 'translate-y-full'
          }`}
        />
      )}
              </div>
            
            </fieldset>

            <div className="mt-4" >
              {currentQuestion > 0 && (
                <button type="button" onClick={handlePrevious} className="bg-white text-gray-500 px-4 py-2 rounded-md mr-2 hover:bg-gray-700 hover:text-white">
                  Previous
                </button>
              )}
              {currentQuestion < questions.length - 1 && (
                <button type="button" onClick={handleNext} className="bg-white text-gray-500 px-4 py-2 rounded-md mr-2 hover:bg-gray-700 hover:text-white">
                  Next
                </button>
              )}
              {currentQuestion === questions.length - 1 && (
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-gray-700 hover:text-white">
                  Submit
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default CustomForm;
