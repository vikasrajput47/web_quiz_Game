import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import './LeaderBoard.css'
const LeaderBoard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // Getting the firebase for the leaderboard score
    const db = getDatabase();
    const starCountRef = ref(db, 'score/');
    onValue(starCountRef, (snapshot) => {
      const dataFromFirebase = snapshot.val();
      //converting the object into the array
      const dataArray = Object.values(dataFromFirebase);
      //sorting score from highest to lowest
      dataArray.sort((a, b) => b.score - a.score);
      setData(dataArray);
    });
  }, []);

  return (
    <div><table className='leadBox'> 
      <tr className='mainRow'>
        <td>Name</td>
        <td>Score</td>
        </tr>
      {data.map((d, i) => (
        <tr className='rows'><td>{d.username}</td><td>{d.score}</td></tr>
         
      
      ))}  </table>
    </div>
  );
};

export default LeaderBoard;
