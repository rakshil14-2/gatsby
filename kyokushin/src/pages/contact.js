import React from "react"
import Layout from "../components/layout"

export default () => (
    <Layout>
      <div className="tiles-container-contact">
        <div className="long-tile-contact-map">
          <ul>
            <li>Tel: +91-33-23373259 (home)   </li>
            <li>Tel: +91-33-40044635 (office)</li>
            <li>Mob: +91-98-30025132 </li>
            <li>Fax: +91-33-28662055  </li>
            <li>Address: BA - 175, Sector 1, Salt Lake City, Kolkata 700 064</li>
            <li>Email: praseniko@yahoo.com</li>
            <li>Website: www.kyokushinkaikanindia.com</li>
          </ul>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.750815040541!2d88.39861759300794!3d22.58842131055852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275ab2ef05531%3A0x6d7e5da4a6944350!2sKyokushin+Karate+Gurukul!5e0!3m2!1sen!2sin!4v1555671865675!5m2!1sen!2sin" allowfullscreen></iframe>
        </div>
        <div className="long-tile-contact-form">
        <div className="contact-form-header">Contact Us</div>
          <table class="contact-form">
              <tr>
                <td>
                    <label>Name <span>*</span></label>
                </td>
                <td class="entryColumn">
                    <input type="text" required name="name" />
                </td>
              </tr>
              <tr>
                <td>
                    <label>Mobile <span>*</span></label>
                </td>
                <td class="entryColumn">
                    <input type="text" pattern="[0-9]*" required name="mobile" minlength="10" maxlength="10" />
                </td>
              </tr>
              <tr>
                <td>
                    <label>Email <span>*</span></label>
                </td>
                <td class="entryColumn">
                    <input type="email" required pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$" name="email" />
                </td>
              </tr>
              <tr>
                <td>
                    <label>Message</label>
                </td>
                <td>
                    <textarea rows="6" name="message"></textarea>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                    <button type="submit" class="mailButton">Contact</button>
                </td>
              </tr>
          </table>
        </div>
      </div>
    </Layout>
  )