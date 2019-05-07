import React, { Fragment, useState } from 'react';
import { useGallary } from '../../hooks/gallary-hook';
import Img from 'gatsby-image';
import contactsJson from '../../gallaries/contacts/contacts.json';
import styles from './contact.module.scss';
import axios from 'axios';
import settings from '../../settings.json';

function Contact() {
	const [ name, setName ] = useState('');
	const [ mobile, setMobile ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ message, setMessage ] = useState('');

	const { allImagesFixed } = useGallary('contacts');

	const resetForm = () => {
		setName('');
		setMobile('');
		setEmail('');
		setMessage('');
	};

	function sendEmail() {
		const data = {
			// senderMail: email,
			subject: settings.subject,
			text: 'From: '.concat(email,'\r\n','Name: ',name,'\r\n','Mobile: ',mobile, '\r\n', 'Message: ', message  )
		};
        axios.post(settings.emailHost, data)
        .then((res) => resetForm())
        .catch((err) => console.log(err));

		// resetForm();
	}

	function getDisplayContact(contact: any, index: number) {
		const temp = (
			<div key={index} className={styles.employeeContainer}>
				<div>
					<Img fixed={allImagesFixed[contact.image]} />
				</div>
				<div>{contact.name}</div>
				<div>{contact.designation}</div>
				<div>{contact.email}</div>
				<div>{contact.mobile}</div>
			</div>
		);
		return temp;
	}

	return (
		<div className={styles.contactContainer}>
			<div className={styles.contactDetailsForm}>
				<div className={styles.contactDetails}>
					<ul>
						<li>033-22285232</li>
						<li>033-22285233</li>
						<li>033-22285857</li>
						<li>033-22280608</li>
					</ul>
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.4386410807465!2d88.34903631495938!3d22.56269198518786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02770837058d17%3A0x9e274ebbc909cef6!2sCapital+Enterprise+Pvt+Ltd!5e0!3m2!1sen!2sin!4v1557127833197!5m2!1sen!2sin" />
				</div>
				<div className={styles.contactForm}>
					<form onSubmit={sendEmail}>
						<table className={styles.contactTable}>
							<tbody>
								<tr>
									<td>
										<label>
											Name <span className={styles.highlight}>*</span>
										</label>
									</td>
									<td>
										<input
											type="text"
											required
											name="name"
											value={name}
											onChange={(e) => setName(e.target.value)}
										/>
									</td>
								</tr>
								<tr>
									<td>
										<label>
											Mobile <span className={styles.highlight}>*</span>
										</label>
									</td>
									<td>
										<input
											type="text"
											pattern="[0-9]*"
											required
											name="mobile"
											minLength="10"
											maxLength="10"
											value={mobile}
											onChange={(e) => setMobile(e.target.value)}
										/>
									</td>
								</tr>
								<tr>
									<td>
										<label>
											Email <span className={styles.highlight}>*</span>
										</label>
									</td>
									<td>
										<input
											type="email"
											required
											pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
											name="email"
											value={email}
											onChange={(e) => setEmail(e.target.value)}
										/>
									</td>
								</tr>
								<tr>
									<td>
										<label>Message</label>
									</td>
									<td>
										<textarea
											rows="6"
											name="message"
											value={message}
											onChange={(e) => setMessage(e.target.value)}
										/>
									</td>
								</tr>
								<tr>
									<td colSpan="2">
										<button type="submit" className="mailButton">
											Contact
										</button>
									</td>
								</tr>
							</tbody>
						</table>
					</form>
					<div className={styles.notes}>
						{' '}
						Fields marked with <span className={styles.highlight}>*</span> are required
					</div>
				</div>
			</div>
			<div className={styles.contactPersons}>
				<div className={styles.wrapper}>
					{contactsJson.map((contact: any, index: number) => {
						return getDisplayContact(contact, index);
					})}
				</div>
			</div>
		</div>
	);
}

export default Contact;

// const { allImagesFixed } = useGallary('contacts');

//     function getDisplayContact(contact: any, index: number) {
//         const temp = <div key={index}>
//             <div>
//                 <Img fixed={allImagesFixed[contact.image]}></Img>
//             </div>
//             <div>{contact.name}</div>
//             <div>{contact.designation}</div>
//             <div>{contact.email}</div>
//             <div>{contact.mobile}</div>
//         </div>
//         return temp;
//     }

//     function getFront() {
//         const temp = <Img fixed={allImagesFixed['capital-front']}></Img>
//         return temp;
//     }

//     function sendmail() {
//         const data = {
//             senderMail: 'test@test.com',
//             subject: 'This is subject',
//             text: 'This is body from Capital chowringhee'
//         };
//         axios.post('http://chisel.cloudjiffy.net/email', data)
//             .then((res) => console.log(res))
//             .catch(err => console.log(err));
//     }

//     const Temp = <div><button onClick={(e) => sendmail()}>Email</button><div className={styles.contact}>{

//         contactsJson.map((contact: any, index: number) => {
//             return getDisplayContact(contact, index);
//         })
//     }</div>

//     </div>
//         ;
//     return Temp;
