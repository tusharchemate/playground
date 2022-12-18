import { getSuggestedQuery } from '@testing-library/react';
import React, { useEffect, useState } from 'react';

const GetAPI = () => {
  const url = 'https://jsonplaceholder.typicode.com/todos';
  const [response, setResponse] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((data) => data.json())
      .then((data) => setResponse(data));
  });

 
  return (
    <div>
      <table border={'solid'}>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>completed</th>
        </tr>

        {response?.map((item) => (
          <>
            <tr>
              <th>{item.id}</th>
              <th>{item.title}</th>
              <th>{item.id % 2 == 0 ? 'Yes' : 'No'}</th>
            </tr>
          </>
        ))}
      </table>
    </div>
  );
};

export default GetAPI;
