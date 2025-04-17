import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors"
          >
            <FiArrowLeft className="mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

          {/* Introduction */}
          <section className="mb-12">
            <p className="mb-6">
              We, Twepple Technologies LLP, are committed to protecting and respecting your privacy. This Privacy Policy relates to our website 
              at <a href="https://twepple.com/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
              twepple.com
                </a>, our mobile applications and any of our other online or mobile products, content and services (collectively, the "Service"). This Privacy Policy explains how we use any personal information that we collect about you when you use the Service.
            </p>
            
            <div className="bg-red-50 p-4 rounded-lg border border-red-200 mb-6">
              <p className="text-red-700 font-medium">
                BY INSTALLING, USING, REGISTERING TO OR OTHERWISE ACCESSING THE SERVICES, YOU AGREE TO THIS PRIVACY POLICY AND GIVE AN EXPLICIT AND INFORMED CONSENT TO THE PROCESSING OF YOUR PERSONAL DATA IN ACCORDANCE WITH THIS PRIVACY POLICY. IF YOU DO NOT AGREE TO THIS PRIVACY POLICY, PLEASE DO NOT INSTALL, USE, REGISTER TO OR OTHERWISE ACCESS THE SERVICES.
              </p>
            </div>

            <p className="mb-6">
              Twepple Technologies LLP reserves the right to modify this Privacy Policy at reasonable times, so please review it frequently. Your continued use of the Services will signify your acceptance of the changes to this Privacy Policy.
            </p>
          </section>

          {/* Non-personal data */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Non-personal data</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                For purposes of this Privacy Policy, "non-personal data" means information that does not directly identify you. Additionally, non-personal data means "aggregate" and "de-personalized" information, which is data Twepple Technologies LLP collects about the use of Twepple Technologies LLP Services, from which any personally identifiable data has been removed. Twepple Technologies LLP may use tools or third party analytical software to automatically collect and use certain non-personal data that does not directly enable Twepple Technologies LLP to identify you. The types of non-personal data Twepple Technologies LLP may collect and use include, but are not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Device properties, including, but not limited to unique device identifier or other device identifier ("UDID");</li>
                <li>Device software platform and firmware;</li>
                <li>Mobile phone carrier;</li>
                <li>Geographical data such as zip code, area code and location;</li>
                <li>Game score and achievements;</li>
                <li>Other non-personal data as reasonably required by Twepple Technologies LLP to enhance the Services and other Twepple Technologies LLP products and services.</li>
              </ul>
              <p>
                Twepple Technologies LLP may use and disclose to Twepple Technologies LLP partners and contractors the collected non-personal data for purposes of analyzing usage of the Services, advertisement serving, managing and providing the Services and to further develop the Services and other Twepple Technologies LLP services and products. You recognize and agree that the analytics companies utilized by Twepple Technologies LLP may combine the information collected with other information they have independently collected from other services or products relating to your activities. These companies collect and use information under their own privacy policies.
              </p>
            </div>
          </section>

          {/* Ad Serving Technology */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Ad Serving Technology</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Twepple Technologies LLP reserves the right to use and disclose the collected non-personal data for purposes of advertisement by Twepple Technologies LLP or Twepple Technologies LLP partners and contractors. Twepple Technologies LLP may employ third party ad serving technologies that use certain methods to collect information as a result of ad serving through Services. Twepple Technologies LLP or third parties operating the ad serving technology may use demographic and location information as well as information logged from your hardware or device to ensure that appropriate advertising is presented within the Service. Twepple Technologies LLP or third parties may collect and use data for this purpose including, but not limited to IP address (including for purposes of determining your approximate geographic location), UDID, software, applications, hardware, browser information, internet and on-line usage information and in-game information. The foregoing data may be used and disclosed in accordance with this Privacy Policy and the privacy policy of the company providing the ad serving technology. You recognize and agree that the advertising companies who deliver ads for Twepple Technologies LLP may combine the information collected with other information they have independently collected from other services or products. These companies collect and use information under their own privacy policies.
              </p>
            </div>
          </section>

          {/* Personal Data */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Personal Data</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                For purposes of this Privacy Policy, "personal data" means personally identifiable information that specifically identifies you as an individual. Likely situations when you make personal data available to Twepple Technologies LLP include, but are not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Registration for Services, contests and special events;</li>
                <li>Accessing Services using a third party ID, such as social networking sites or gaming services;</li>
                <li>Subscribing to newsletters;</li>
                <li>Using "tell a friend", "email this page," or other similar features;</li>
                <li>Requesting technical support;</li>
                <li>Otherwise through use of Twepple Technologies LLP Services where personal data is required for use and/or participation.</li>
                <li>Purchasing a product or services through Twepple Technologies LLP. online stores;</li>
              </ul>
              <p>
                The types of personal data may vary depending on the type of activity you are engaged in. The personal data Twepple Technologies LLP may collect and process may include, but are not limited to your name, screen/nick name, Twepple Technologies LLP. Services' or third party service ID, e-mail address, phone number, photo or other image, birthdate, sex, address, friend connections, avatar image, credit card information, shipping information; and location (only if directly identifiable to you, otherwise we treat location as non-personal data). Twepple Technologies LLP may use collected personal data for purposes of analyzing usage of the Services, providing customer and technical support, managing and providing Services (including managing advertisement serving) and to further develop the Services and other Twepple Technologies LLP services and products. Twepple Technologies LLP may combine non-personal data with personal data. Please note that certain features of the Services may be able to connect to your social networking sites to obtain additional information about you. In such cases, Twepple Technologies LLP may be able to collect certain information from your social networking profile when your social networking site permits it, and when you consent to allow your social networking site to make that information available to Twepple Technologies LLP This information may include, but is not limited to, your name, profile picture, gender, user ID, email address, your country, your language, your time zone, the organizations and links on your profile page, the names and profile pictures of your social networking site "friends" and other information you have included in your social networking site profile. Twepple Technologies LLP may associate and/or combine as well as use information collected by Twepple Technologies LLP and/or obtained through such social networking sites in accordance with this Privacy Policy.
              </p>
            </div>
          </section>

          {/* Disclosure and Transfer of Personal Data */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Disclosure and Transfer of Personal Data</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Twepple Technologies LLP collects and processes personal data on a voluntary basis and it is not in the business of selling your personal data to third parties. Personal data may, however, occasionally be disclosed in accordance with applicable legislation and this Privacy Policy. Twepple Technologies LLP may hire agents and contractors to collect and process personal data on Twepple Technologies LLP behalf and in such cases such agents and contractors will be instructed to comply with our Privacy Policy and to use personal data only for the purposes for which the third party has been engaged by Twepple Technologies LLP These agents and contractors may not use your personal data for their own marketing purposes. Twepple Technologies LLP may use third party service providers such as credit card processors, e-mail service providers, shipping agents, data analyzers and business intelligence providers. Twepple Technologies LLP has the right to share your personal data as necessary for the aforementioned third parties to provide their services for Twepple Technologies LLP Twepple Technologies LLP is not liable for the acts and omissions of these third parties, except as provided by mandatory law. Twepple Technologies LLP may disclose your personal data to third parties as required by law enforcement or other government officials in connection with an investigation of fraud, intellectual property infringements, or other activity that is illegal or may expose you or Twepple Technologies LLP to legal liability. Twepple Technologies LLP may also disclose your personal data to third parties when Twepple Technologies LLP has a reason to believe that a disclosure is necessary to address potential or actual injury or interference with Twepple Technologies LLP rights, property, operations, users or others who may be harmed or may suffer loss or damage, or Twepple Technologies LLP believes that such disclosure is necessary to protect Twepple Technologies LLP rights, combat fraud and/or comply with a judicial proceeding, court order, or legal process served on Twepple Technologies LLP.
              </p>
            </div>
          </section>

          {/* Data Retention and Correctness */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Data Retention and Correctness</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Twepple Technologies LLP retains the data collected pursuant to this Privacy Policy for the period necessary to fulfill the purposes outlined in this Privacy Policy unless a longer retention period is required or permitted by law. Thereafter if the collected data is no longer needed for purposes specified in this Privacy Policy, Twepple Technologies LLP deletes all aforementioned data in its possession. Twepple Technologies LLP does not verify the correctness of personal data. Even if data is changed or deleted, Twepple Technologies LLP may still retain some of the data to resolve disputes, enforce Twepple Technologies LLP user agreements, and comply with technical and legal requirements and constraints related to the security, integrity and operation of Services.
              </p>
            </div>
          </section>

          {/* Cookies */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Cookies</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                A cookie is a small text file that we transfer to your computer and/or device, to identify a user's computer/device and to "remember" things about your visit, such as your preferences or a user name and password. Information contained in a cookie may be linked to your personal information for purposes such as improving the quality of our Site, tailoring recommendations to your interests, and making the Site easier to use. You can disable cookies at any time, although you may not be able to access or use features of the Site. We may feature advertisements served by third parties that deliver cookies to your computer/device so the content you access and advertisements you see can be tracked. Since the third party advertising companies associate your computer/device with a number, they will be able to recognize your computer/device each time they send you an advertisement. These advertisers may use information about your visits to our Site and third party sites and applications in order to measure advertisement performance and to provide advertisements about goods and services of interest to you. This Policy does not apply to, and we are not responsible for the data collection practices of these third party advertisers, and we encourage you to check their privacy policies to learn more about their use of cookies and other technology.
              </p>
            </div>
          </section>

          {/* Use of collected information */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Use of collected information</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                We use this information to better tailor the Site to your interests, to provide you more efficient customer support, and to overall enhance our site. In all cases of data access and collection, the information you provide will not be disclosed, rented, leased, loaned, sold, or otherwise voluntarily distributed to unaffiliated third parties and will be used solely for the purpose of providing you with and improving the Service.
              </p>
            </div>
          </section>

          {/* Security of collected information */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Security of collected information</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                No data transmissions over the Internet are completely secure. Accordingly, we cannot ensure the security of information transmitted between you and us. However, once we have received your personal information, Twepple Technologies LLP takes all reasonable precautions to safeguard the privacy of your data and use reasonable efforts to protect your personal information against loss or misuse, and against unauthorized access, use, modification, or disclosure.
              </p>
            </div>
          </section>

          {/* Third Party Terms and Conditions */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Third Party Terms and Conditions</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Please note that your access to and use of the Services may be subject to certain third party terms and conditions and privacy policies, including but not limited to application stores, mobile software platforms, on-line gaming platforms, social networking services and payment providers. You recognize and agree that Twepple Technologies LLP is not liable for any such third party terms and conditions and their use of your personal data. Twepple Technologies LLP may in its discretion make available links through advertisements or otherwise enable you to access third party products or services. Please note that, while using such products or services, you are using products or services developed and administered by people or companies not affiliated with or controlled by Twepple Technologies LLP. Twepple Technologies LLP is not responsible for the actions of those people or companies, the content of their products or services, the use of information you provide to them, or any products or services they may offer. The fact that Twepple Technologies LLP is linking to those products or services does not constitute our sponsorship of, or affiliation with, those people or companies. Please note that certain Services that Twepple Technologies LLP may offer, such as multiplayer gaming, social networking and gaming console services, may use third party services to provide authentication for the Services with a gaming console ID, social networking ID or gaming network account. When you register to join or use the Services from a third-party gaming or social networking system, certain personally identifiable user and/or membership data may be transferred automatically to and from Twepple Technologies LLP and you hereby consent to the processing, combining, disclosing and retaining of such data in accordance with this Privacy Policy by Twepple Technologies LLP.
              </p>
            </div>
          </section>

          {/* Our Policy Regarding Children */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Policy Regarding Children</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                If you are under 13 years of age or a minor in your country of residence, please ask your legal guardian's permission to use or access the Services. Twepple Technologies LLP takes children's privacy seriously, and encourages parents and/or guardians to play an active role in their children's online experience at all times. We do not seek to collect from children online contact information or distribution to third parties any personally identifiable information from children or entice children to divulge information to us. Twepple Technologies LLP hereby states that Twepple Technologies LLP as well as our products/applications does not store, but may collect and pass your data to its affiliates and partners in and outside of EU/EEA member states and the United States in accordance with mandatory legislation and this Privacy Policy. Twepple Technologies LLP also hereby states that our products/applications are not directly targeted at users under 13.
              </p>
            </div>
          </section>

          {/* Others */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Others</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Please be aware of the open nature of certain social networking and other open features of the Services Twepple Technologies LLP may make available to you. You may choose to disclose data about yourself in the course of contributing user generated content to the Services. Any Data that you disclose in any of these forums, blogs, chats or the like is public information, and there is no expectation of privacy or confidentiality. Twepple Technologies LLP is not responsible for any personal data you choose to make public in any of these forums. In addition, in the event of a merger, acquisition, reorganization, bankruptcy, or other similar event involving all or a portion of Twepple Technologies LLP, Twepple Technologies LLP customer information may be transferred to Twepple Technologies LLP successor or assign.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Us</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                For privacy questions or concerns: <br />
                <a href="mailto:support@twepple.com" className="text-cyan-600 hover:underline">
                  support@twepple.com
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;