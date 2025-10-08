const loginService = async (username, password) => {
  const response = await fetch(
    `https://api-generator.retool.com/9nzz8m/data?User=${username}&Password=${password}`,
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

export default loginService;
