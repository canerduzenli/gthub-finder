import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const User = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = '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'
    const fetchData = async () => {
      try {
        const userResponse = await axios.get(`https://api.github.com/users/${username}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(userResponse.data);

        const reposResponse = await axios.get(`https://api.github.com/users/${username}/repos`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setRepos(reposResponse.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [username]);

  if (error) {
    return <div className='Text-B'>User not found</div>;
  }

  if (!user) {
    return <div className='Text-B'>Loading...</div>;
  }

  return (
    <div className='container'>
      <div className='Profile'>
        <img src={user.avatar_url} alt={user.name} />
        <h1>{user.name}</h1>
        <span>{user.public_repos}</span>
        <span>{user.followers}</span>
        <span>{user.following}</span>
        <div className='Inf'>
          <p>Repositories</p>
          <p>Followers</p>
          <p>Following</p>
        </div>
        <button className='UserBttn'>
          <Link
            className='link'
            target="_blank"
            to={`https://github.com/${user.login}`}>
            Click for GitHub
          </Link>
        </button>
      </div>
      <div className='repos'>
        <h2>My Repositories</h2>
        {repos.map((repo) => (
          <div className="repo" key={repo.id}>
            <div>
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
            </div>
            <div className="date">
              Updated on {new Date(repo.updated_at).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;
