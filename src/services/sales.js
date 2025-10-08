const LoagingSales = async () => {
  const response = await fetch(
    "https://api-generator.retool.com/CB0GRT/data?_page=2&_limit=10",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  return data;
};

export default LoagingSales;
