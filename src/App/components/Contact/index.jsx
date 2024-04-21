import { CustomButton } from '../Buttons';
import { ContactInput } from './input';
import style from './style.module.css';
import {useState} from 'react';

export const ContactForm = () => {
    const [formData, setFormData] = useState({firstname: "",lastname: "",email: "",whatsappnumber: "",message: "",moremessage: ""});

    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(`Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`
      );
  };
    return (<section className={style.form}>
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
            <div className={style['form-field']}>
                <div className={style.name}>
                    {/* <label className={style['input-label']}>{'First Name'}</label> */}
                    <ContactInput name="firstname" value={formData.firstname} onChange={handleChange} placeholder={'First name*'} />
                    {/* <label className={style['input-label']}>{'Last Name'}</label> */}
                    <ContactInput name="lastname" value={formData.lastname} onChange={handleChange} placeholder={'Last name*'} />
                </div>
                <br />
               <div className={style.name}>
                <ContactInput name="email" value={formData.email} onChange={handleChange} placeholder={'Email'} type="email" />
                <ContactInput name="number" value={formData.whatsappnumber} onChange={handleChange} placeholder={'Whatsapp Number(Optional)'} type="number" />
               </div>
                
                <label className={style['input-label']}>{'Message'}</label>
                <input className={style.message} name="message" value={formData.message} onChange={handleChange} placeholder={'I’m interested in*'} type="text" />
                <input className={style.message2} name="moremessage" value={formData.moremessage} onChange={handleChange} placeholder={'Tell us more....'} type="text" />
                <br />
                <div className={style.button}>
                    <CustomButton onClick={() => { }}>Send</CustomButton>
                </div>
            </div>
        </form>
    </section>)
}