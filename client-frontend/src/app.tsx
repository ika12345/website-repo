import React from "react";
import Form from "./components/Form";
import AppLogic from "./App"; // Import the class from App.ts

const App = () => {
  const appLogic = new AppLogic(); // Create an instance of the App class

  const handleFormSubmit = async (data: { age: number; height: number; weight: number }) => {
    console.log("Form submitted with data:", data);

    // Example: Call the find_insurar_caller method from App.ts
    const result = await appLogic.find_insurar_caller(data);
    console.log("Eligibility result:", result);
  };
  return (
    <div>
      <h1>Health Data Submission</h1>
      <Form onSubmit={handleFormSubmit} />
    </div>
  );
};

export default App;