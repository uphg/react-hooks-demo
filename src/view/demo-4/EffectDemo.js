// 使用 useEffect 案例
import React, { useState, useEffect } from 'react';

// 使用控制台模拟慢网速，可以看到 loading...
const Person = ({ userId }) => {
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
  }, [userId])

  if (loading === true) {
    return <p>Loading ...</p>
  }

  return <div>
    <p>你的名字: {person.name}</p>
    <p>性别: {person.gender}</p>
    <p>身高: {person.height}</p>
  </div>
}

function Parent() {
  const [show, setShow] = useState("1");

  return (
    <div className="useEffect-parent" style={{minHeight: '137px'}}>
      <Person userId={show} />
      <div>
        显示：
        <button onClick={() => setShow("1")}>恒恒</button>
        <button onClick={() => setShow("2")}>果果</button>
      </div>
    </div>
  );
}

export default Parent