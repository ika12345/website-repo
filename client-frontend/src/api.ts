export const submitHealthData = async (encryptedData) => {
    const response = await fetch("http://localhost:3000/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: encryptedData }),
    });
    return response.json();
  };