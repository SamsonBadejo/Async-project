// TASK 04

async function concurrentRequests() {
  const api1 = "https://jsonplaceholder.typicode.com/posts/1";
  const api2 = "https://jsonplaceholder.typicode.com/users/1";

  try {
    // Make both API calls concurrently
    const [response1, response2] = await Promise.all([
      fetch(api1),
      fetch(api2),
    ]);

    // Check if both responses are successful
    if (!response1.ok || !response2.ok) {
      throw new Error("One or both API calls failed");
    }

    // Parse the JSON from the responses
    const data1 = await response1.json();
    const data2 = await response2.json();

    // Log the combined results
    console.log("API 1 response:", data1);
    console.log("API 2 response:", data2);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Call the function to see the results
concurrentRequests();

// END OF TASK 04

// TASK 02

const awaitCall = async () => {
  try {
    console.log("Fetching data from the API...");

    // Make an API call using fetch
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );

    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the JSON response
    const data = await response.json();

    // Log the data
    console.log("Data received:", data);
  } catch (error) {
    // Log any errors that occur during the fetch operation
    console.error("Error fetching data:", error);
  }
};

// Example usage
awaitCall();

// END OF TASK 02

// TASK 01

// Helper function to create a delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Main async function to iterate over an array with a delay
const iterateWithAsyncAwait = async (values) => {
  for (const value of values) {
    console.log(value);
    await delay(1000); // Wait for 1 second
  }
};

// Example usage
const values = [1, 2, 3, 4, 5];
iterateWithAsyncAwait(values);

// END OF TASK 01
