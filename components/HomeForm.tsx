"use client"
import React, { useState } from "react";


const HomeForm = () => {
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

  const handleInputData = (input: string) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };

  const handleNext = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  const handlePrevious = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion - 1);
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
      label: "Phone Number",
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
    <div className="contactFormWrapper text-white bg-[#730e0e] bg-cover p-5 h-[500px] w-[400px] flex flex-col justify-center items-center">
      <div className="formheader"></div>
      <div className="formcontact">

      {
        (firstPage && !submit)&& (
          <div className="bg-cover  gap-1 flex flex-col  justify-center items-center">
              <div className="">
                <iframe title="vimeo-player" src="https://player.vimeo.com/video/925286789?h=24dd8b7dd3" width="340" height="360" frameborder="0" allowfullscreen></iframe>
              </div>

              <div className="flex w-[300px] flex-col justify-center items-start">
                <h1>Did you know that you could potentially save $100,000 on your home loan?</h1>
                <button className="text-gray-500 my-5 font-bold bg-white rounded-sm flex justify-center items-center p-3" onClick={() => {setFirstPage(false)}}>
                  Start Saving
                </button>
              </div>
              
          </div>  
        ) 
      }

        {(submit && !firstPage) && (
          <div className="afterForm">Thanks, will get back to you soon</div>
        ) }
        
        { (!submit && !firstPage) &&
        (
            <form onSubmit={handleSubmit} target="_self">
            <fieldset className="flex flex-col justify-center">
              <div className="flex flex-col ">
              <label htmlFor={currentQuestionData.id} className="my-2">
                {currentQuestionData.label}
              </label>
              {currentQuestionData.options ? (
                currentQuestionData.options.map((option) => (
                  <React.Fragment key={option.value}>
                    <div className="border-2 border-white  my-2 p-3">
                    <div className="flex justify-between items-center">
                    <label className="">{option.label}</label>
                    <input
                      required
                      type="radio"
                      name={currentQuestionData.id}
                      value={option.value}
                      onChange={handleInputData(currentQuestionData.id)}
                      checked={formData[currentQuestionData.id as keyof typeof formData] === option.value}
                      autoComplete="off"
                      className="mr-2"
                    />
                    </div>
                    </div>
                  </React.Fragment>
                ))
              ) : (
                <input
                  required
                  type={currentQuestionData.inputType}
                  name={currentQuestionData.id}
                  onChange={handleInputData(currentQuestionData.id)}
                  value={formData[currentQuestionData.id as keyof typeof formData]}
                  autoComplete="off"
                  className="border border-gray-300 rounded-md p-2 mt-2"
                />
              )}
              </div>
            
            </fieldset>

            <div className="mt-4">
              {currentQuestion > 0 && (
                <button type="button" onClick={handlePrevious} className="bg-white text-gray-500 px-4 py-2 rounded-md mr-2">
                  Previous
                </button>
              )}
              {currentQuestion < questions.length - 1 && (
                <button type="button" onClick={handleNext} className="bg-white text-gray-500 px-4 py-2 rounded-md mr-2">
                  Next
                </button>
              )}
              {currentQuestion === questions.length - 1 && (
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
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

export default HomeForm;
