import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UserProfilePage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const userResponse = await axios.get(`/api/users/${id}`);
      setUser(userResponse.data);
    };
    fetchUserProfile();
  }, [id]);

  return (
    <div className='bg-white dark:bg-black text-black dark:text-white p-2'>
      <div>
        <h2>Activities</h2>
        {/* Render activities */}
      </div>
      {user && (
        <div>
          <h1>{user.name}님의 공간</h1>
          <p>{user.bio}</p>
          {/* Render other user details */}
        </div>
      )}
      <div>
        <h2>Activities</h2>
        {/* Render activities */}
      </div>
  </div>
  );
};
export default UserProfilePage;