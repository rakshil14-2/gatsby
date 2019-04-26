import React, { Fragment } from 'react';
import { useGallary } from '../../hooks/gallary-hook';
import Img from "gatsby-image"
import contactsJson from '../../gallaries/contacts/contacts.json';
import styles from './contact.module.scss';

function Contact() {
    const { allImagesFixed } = useGallary('contacts');

    function getDisplayContact(contact: any, index: number) {
        const temp = <div key={index}>
            <div>
                <Img fixed={allImagesFixed[contact.image]}></Img>
            </div>
            <div>{contact.name}</div>
            <div>{contact.designation}</div>
            <div>{contact.email}</div>
            <div>{contact.mobile}</div>
        </div>
        return temp;
    }

    function getFront() {
        const temp = <Img fixed={allImagesFixed['capital-front']}></Img>
        return temp;
    }




    const Temp = <div className={styles.contact}>{
        // <div>
                contactsJson.map((contact: any, index: number) => {
                return getDisplayContact(contact, index);
            })
        // </div>
    }</div>;
    return Temp;
}

export default Contact;