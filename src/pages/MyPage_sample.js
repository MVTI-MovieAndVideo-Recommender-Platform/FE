import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
//import { Link } from 'react-router-dom';


const MyPage_sample= () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchUserProfile = async () => {
    const userResponse = await axios.get(`/api/users/${id}`);
    const activitiesResponse = await axios.get(`/api/users/${id}/activities`);
      
    setUser(userResponse.data);
    setActivities(activitiesResponse.data);
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
        <h1>{user.name}'s Profile</h1>
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

export default MyPage_sample



