async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json();
    console.log("Data received:", data);
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

fetchData();