import React from 'react';
import './Contact.css';
import { useForm } from 'react-hook-form';

const Contact = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <div className=" contact-container">
            <div>
                <div className="title container pt-4">
                    <h1 className="about-me d-flex justify-content-between">Contact Me.
                        <span className="user-icon"><i class="far fa-envelope user-icon"></i></span>
                    </h1>

                </div>

                <h2 className="subtitle-name services-title mb-5"><span>LET'S TALK</span></h2>

                <form onSubmit={handleSubmit(onSubmit)} className="container contact-form">
                    <input className="name-field" type="text" placeholder="Name" {...register("Name", { required: true, maxLength: 80 })} />
                    <input className="email-field" type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                    <br />
                    <textarea placeholder="How can I help you?" className="msg-field" {...register("How can I help you?", {})} />
                    <br />
                    {/* <input className="send-btn" type="submit" /> */}
                    <button className="send-btn">Send <i class="fas fa-paper-plane "></i></button>
                </form>


            </div>


        </div>
    );
};

export default Contact;