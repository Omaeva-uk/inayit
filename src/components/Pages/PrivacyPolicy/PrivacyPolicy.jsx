import NavBar from "../../navbar/NavBar";
import Footer from "../../Footer/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="">
        <NavBar />
        <div className="privacy-policy max-w-[80%] mx-auto my-20 ">
          <p>
              This Privacy Policy governs the Websites operated by Inayit Ltd. (hereinafter, "us", "we", or “Inayit”), including, without limitation, the Website currently located at <a href="https://www.inayit.com">https://www.inayit.com</a>. By using the Website, you consent to the collection and use of your personal information as outlined in this Privacy Policy.
          </p>
          <p>
              We have adopted this Privacy Policy to explain what information may be collected on our Website, how we use this information, and under what circumstances we may disclose the information to third parties.
          </p>

          <h2>1. Website Visitors</h2>
          <p>
              Inayit automatically collects non-personally identifying information of the sort that web browsers and servers typically make available, such as the browser type, language preference, referring site, and the date and time of each visitor request. Inayit's purpose in collecting non-personally identifying information is to better understand how Inayit's visitors use its website.
          </p>

          <h2>2. Gathering of Information</h2>
          <p>
              Certain visitors to Inayit's websites choose to interact with Inayit in ways that require Inayit to gather personally identifying information. For example, we ask visitors to submit their details like a name and email address to discuss their projects.
          </p>

          <h2>3. Legal Basis for Processing Personal Data</h2>
          <ul>
              <li><strong>Consent:</strong> When you provide explicit consent, such as subscribing to newsletters or contacting us via forms.</li>
              <li><strong>Contractual Necessity:</strong> When processing is required to fulfill a contract or respond to your request.</li>
              <li><strong>Legitimate Interests:</strong> To improve our website, services, and customer experience while respecting your rights.</li>
          </ul>

          <h2>4. User Rights Under GDPR</h2>
          <ul>
              <li><strong>Right of Access:</strong> Request a copy of your personal data.</li>
              <li><strong>Right to Rectification:</strong> Request corrections to inaccurate or incomplete data.</li>
              <li><strong>Right to Erasure:</strong> Request the deletion of your personal data under specific circumstances.</li>
              <li><strong>Right to Object:</strong> Object to processing based on legitimate interests.</li>
          </ul>

          <h2>5. Security</h2>
          <p>
              The security of your personal information is important to us. We use commercially reasonable measures to protect your information.
          </p>

          <h2>6. Data Retention</h2>
          <p>
              We retain personal data only for as long as necessary to fulfill the purposes for which it was collected or as required by law.
          </p>

          <h2>7. Cookies</h2>
          <p>
              We use cookies to provide personalized content, store preferences, and analyze website usage. Users can manage cookie preferences via their browser settings.
          </p>

          <h2>8. Contact Us</h2>
          <p>
              For questions or to exercise your GDPR rights, contact us at: <a href="mailto:info@inayit.com">info@inayit.com</a>
          </p>
      </div>
        
        <Footer />
    </div>
  )
}

export default PrivacyPolicy;