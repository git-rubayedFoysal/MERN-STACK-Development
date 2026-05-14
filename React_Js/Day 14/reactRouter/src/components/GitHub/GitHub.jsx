// import { useState, useEffect } from "react";
import { useLoaderData } from "react-router";

function GitHub() {
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     async function getUser() {
  //       const response = await fetch(
  //         "https://api.github.com/users/git-rubayedFoysal",
  //       );
  //       const info = await response.json();
  //       setData(info);
  //     }

  //     getUser();
  //   }, []);

  //Load data from loader
  const data = useLoaderData();

  return (
    <div className="bg-gray-600 text-white p-5 text-center text-3xl font-bold">
      GitHub Followers : {data.followers}
    </div>
  );
}

export default GitHub;

// eslint-disable-next-line react-refresh/only-export-components
export async function githubInfoLoader() {
  const response = await fetch(
    "https://api.github.com/users/git-rubayedFoysal",
  );
  return response.json();
}
