"use client";
import React from "react";
import { useForm } from "react-hook-form";

import { RiUser3Fill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { MdOutlineTitle } from "react-icons/md";

import styles from "../styles/form.module.css";

const ContactForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmitHandler = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className={styles.formContainer}
    >
      <div
        className={`col-span-1 max-md:col-span-2 ${styles.formInputcontainer}`}
      >
        <RiUser3Fill className={styles.formInputIcon} />
        <input
          className={styles.formInput}
          type="text"
          name="fullname"
          id=""
          {...register("fullname", { required: true })}
          placeholder="Full name"
        />
      </div>
      <div
        className={`col-span-1 max-md:col-span-2 ${styles.formInputcontainer}`}
      >
        <IoCall className={styles.formInputIcon} />
        <input
          className={styles.formInput}
          type="tel"
          name="contact-number"
          id=""
          maxLength={10}
          minLength={10}
          {...register("contact-number", { required: true })}
          placeholder="contact"
        />
      </div>
      <div className={`col-span-2 ${styles.formInputcontainer}`}>
        <MdEmail className={styles.formInputIcon} />
        <input
          className={styles.formInput}
          type="email"
          name="email"
          id=""
          {...register("email", { required: true })}
          placeholder="email"
        />
      </div>

      <div className={`col-span-2 ${styles.formInputcontainer}`}>
        <MdOutlineTitle className={styles.formInputIcon} />
        <input
          className={styles.formInput}
          type="text"
          name="subject"
          id=""
          {...register("subject", { required: true })}
          placeholder="subject"
        />
      </div>
      <div className={`col-span-2 h-max border  `}>
        <textarea
          className={` p-6 ${styles.formInput}`}
          name="body"
          id=""
          cols="30"
          rows="10"
          {...register("body", { required: true })}
          placeholder="Message"
        ></textarea>
      </div>
      <div>
        <input type="submit" value="Submit" className="button text-white" />
      </div>
    </form>
  );
};

export default ContactForm;
