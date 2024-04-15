import React, { useState } from 'react';

const Test = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    console.log('cliked');
    setOpen((prev) => !prev);
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>
        click
      </button>
      <ul className={`${open ? '' : 'max-h-0 overflow-hidden'}`}>
        <li className="w-full h-10 bg-red-200">Hi welcome</li>
      </ul>
    </div>
  );
};

export default Test;
