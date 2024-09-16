import { useState } from 'react';


const Checkbox = ({ label, checked, ...props }) => {
    const defaultChecked = checked ? checked : false;
    const [isChecked, setIsChecked] = useState(defaultChecked);
  
    return (
      <div className="checkbox-wrapper">
        <label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked((prev) => !prev)}
            className={isChecked ? "checked" : ""}
            {...props}
          />
          <span>{label}</span>
        </label>
      </div>
    );
  };
  export default Checkbox;
  