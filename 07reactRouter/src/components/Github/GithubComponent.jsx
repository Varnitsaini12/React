import { useLoaderData } from "react-router-dom";

function GithubComponent() {
  // const { username } = useParams();
  // const githubInfo = Github(username);
  const data = useLoaderData();

  return (
    <>
      <div className="flex items-center">
        <img src={data.avatar_url} alt="img" className="mr-4" />
        <h1>
          {data.login} <span>Follower Count: {data.followers}</span>
        </h1>
      </div>
    </>
  );
}

export default GithubComponent;
