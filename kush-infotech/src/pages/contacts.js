import React, {useState} from "react";
import Layout from "../components/layout";
import axios from 'axios';
import settings from '../assets/settings.json';
import SEO from "../components/seo";
import seoJson from "../assets/seo.json";

const Contacts = () => { 
    const [name, setName] = useState("");
	const [mobile, setMobile] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");


	const resetForm = () => {
		setName("");
		setMobile("");
		setEmail("");
		setMessage("");
	}

	const sendEmail = (evt) => {
		evt.preventDefault();
		const data = {
			subject: settings.subject,
			text: 'From: '.concat(email, '\r\n', 'Name: ', name, '\r\n', 'Mobile: ', mobile, '\r\n', 'Message: ', message)
		};

		axios.post(settings.emailHost, data)
			.then((res) => {resetForm(); alert("Mail sent Successfully");})
			.catch(err => console.log(err));
    }
    

    return <Layout>
		<SEO title="Kush Infotech Contact" description={seoJson["decription"]} keywords={seoJson["keywords"]}/>
        <div className="contact-container">
            <div className="address-tile">
                <div><span className="highlight">Address -</span> 92/2A, 1st Floor, Concord Tower , Bidhan Nagar Main Road, Ultadanga VIP Crossing, Kolkata, West Bengal 700067 </div> 
                <div><span className="highlight">Email -</span> capitalch@gmail.com</div>
                <div><span className="highlight">Phone -</span> 9163877601</div> 
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.5890498416993!2d88.38124351495998!3d22.594468385171574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa70a82a434cf37bc!2sKush+Infotech!5e0!3m2!1sen!2sin!4v1559124646207!5m2!1sen!2sin" ></iframe>
            </div>
            <div className="contact-tile">
                <form onSubmit={sendEmail}>
					<table className="contact-table">
						<tbody>
							<tr>
								<td>
									<label>Name <span className="highlight">*</span></label>
								</td>
								<td>
									<input type="text" required name="name" value={name} onChange={e => setName(e.target.value)} />
								</td>
							</tr>
							<tr>
								<td>
									<label>Mobile <span className="highlight">*</span></label>
								</td>
								<td>
									<input type="text" pattern="[0-9]*" required name="mobile" minLength="10" maxLength="10" value={mobile} onChange={e => setMobile(e.target.value)} />
								</td>
							</tr>
							<tr>
								<td>
									<label>Email <span className="highlight">*</span></label>
								</td>
								<td>
									<input type="email" required pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$" name="email" value={email} onChange={e => setEmail(e.target.value)} />
								</td>
							</tr>
							<tr>
								<td>
									<label>Message</label>
								</td>
								<td>
									<textarea rows="6" name="message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
								</td>
							</tr>
							<tr>
								<td colSpan="2">
									<button type="submit" className="mailButton">Contact</button>
								</td>
							</tr>
						</tbody>
					</table>
				</form>
                <div className="notes"> Fields marked with <span className="highlight">*</span> are required</div>
            </div>
        </div>
    </Layout>
}
export default Contacts;