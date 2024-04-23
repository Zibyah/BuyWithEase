import React from "react"
import style from './style.module.css'
import { FiEye, FiEyeOff } from "react-icons/fi";


const CustomInput = ({ label, ...props }) => {
  const [show, setShow] = React.useState(false);
  let type = props.type;
  if (props.type === 'password') {
      type = show ? 'text' : 'password'; // Updated to toggle between 'text' and 'password'
  }
  const handleIconToggle = () => {
      setShow(!show);
  };
  return (
      <div className={style.wrapper}>
          <label>{label}</label>
          <input {...props} type={type} /> {/* Updated type */}
          {props.type === 'password' && (
              <div onClick={handleIconToggle} className={style.icon}>
                  {!show ? <FiEyeOff size={'1rem'} /> : <FiEye size={'1rem'} />}
              </div>
          )}
      </div>
  );
};

export default CustomInput;