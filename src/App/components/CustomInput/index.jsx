import React from "react"
import style from './style.module.css'
import { ReactComponent as EyeOff } from "../../assets/Icons/eyeIcon.svg";
import { ReactComponent as EyeOn } from "../../assets/Icons/eyeiconopen.svg";

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
                  {!show ? <EyeOff size={'1rem'} /> : <EyeOn size={'1rem'} />}
              </div>
          )}
      </div>
  );
};

export default CustomInput;