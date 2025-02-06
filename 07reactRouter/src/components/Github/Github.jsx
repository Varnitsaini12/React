// import { useEffect, useState } from "react";

// export default function Github(username) {
//   const [data, setData] = useState({});

//   useEffect(() => {
//     (fetch(`https://api.github.com/users/${username}`).then((res) =>
//       res.json().then((res) => setData(res)))
//     )
//   }, [username]);
//   return data;
// }

// import { useParams } from "react-router-dom";

export const githubInfoLoader = async ({ params }) => {
  const username = params.username || "Varnitsaini12"; // Default to a username if missing
  const res = await fetch(`https://api.github.com/users/${username}`);

  if (!res.ok) {
    throw new Response("GitHub API Error", { status: res.status });
  }

  return res.json();
};
