import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import './Contact.styles.css';
import axios from 'axios';

function Contact() {
    const [name,setName] = useState("");
    const [phone,setPhone] = useState(0);
    const [message,setMessage] = useState("");

    const handleSubmit= async (e)=>{
        e.preventDefault();
        
        const userpost ={
            username:name,
            message:message,
            phone:phone
        }

        console.log(userpost);

        await axios.post('https://uhraysample-backend.herokuapp.com/userposts/add', userpost)
        .then(res => console.log(res.data));
        
        setName("");
        setPhone(0);
        setMessage("");

    }

    return (
        <div className="contactpage">
            <h1>Contact</h1>
            <form className="contact__form" onSubmit={handleSubmit}>
                <div className="form__row">
                    <label>Name:</label>
                    <input type="text" placeholder="Enter Name here" value={name} onChange={e=>setName(e.target.value)}/>
                </div>
                <div className="form__row">
                    <label>Phone:</label>
                    <input type="" placeholder="Enter Phone number here" value={phone} onChange={e=>setPhone(e.target.value)}/>
                </div>
                <div className="form__row">
                    <label>Message:</label>
                    <textarea type="text" placeholder="Enter your Message..." value={message} onChange={e=>setMessage(e.target.value)}/>
                </div>
            
                <Button type="submit" variant='outlined'>Submit</Button>
            </form>
        </div>
    )
}

export default Contact;
