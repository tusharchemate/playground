import React from 'react';

const Child = (props) => {
  const { getColor } = props;
  const setInput = (e) => {
    getColor(e.target.value);
  };

  return (
    <>
    <div>
      <input style={{ marginTop: '10px', padding:'15px', width:'200px' }} type="text" onChange={setInput} />
    </div>

    <h1># comment</h1>
    <p>Implementation Child to parent by callback</p>
    </>
  );
};

export default Child;
