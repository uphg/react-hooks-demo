import { useState, useEffect } from 'react';

const usePerson = (userId) => {
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState({});
  useEffect(() => {
    setLoading(true);
    fetch(`/data/${userId}/user.json`)
      .then(response => response.json())
      .then(data => {
        setPerson(data.user);
        setLoading(false);
      });
  }, [userId]);  
  return [loading, person];
};

export default usePerson