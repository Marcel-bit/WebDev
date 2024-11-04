export async function fetchUserData() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!response.ok) throw new Error("Network response was not ok");
      const users = await response.json();
      return users.slice(0, 5); // Return only first 5 users for demo
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  }
  