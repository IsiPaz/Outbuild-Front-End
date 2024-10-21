export const getComments = async () => {
  const url = "https://jsonplaceholder.typicode.com/comments"
  try {
    const response = await fetch(
      url
    );

    if (!response.ok) {
      return null;
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching comments:", error);
    return null;
  }
};
