import React from 'react'

const page = () => {
  return (
      <div className="max-w-4xl h-fit mx-auto px-6 pb-12 pt-8">
      {/* <!-- Main Heading --> */}
      <h1 className="font-sans text-4xl font-bold text-center mb-8">
        Our Agency Privacy Policy
      </h1>

      {/* <!-- Introduction --> */}
      <p className="font-lato text-lg leading-snug mb-6">
        At Our Agency, we value your privacy and are committed to protecting
        your personal information. This Privacy Policy outlines how we collect,
        use, and safeguard your information when you interact with our services.
        Please take a moment to review our practices and understand your rights
        regarding your data.
      </p>

      {/* <!-- Information Collection Section --> */}
      <h2 className="font-sans text-2xl font-semibold mb-4">Information Collection</h2>
      <p className="font-lato leading-relaxed mb-4">
        <span className="font-semibold">Personal Information:</span> We may collect
        personal information such as your name, email address, phone number, and
        travel preferences when you contact us, make inquiries, or book a tour.
      </p>
      <p className="font-lato leading-relaxed mb-6">
        <span className="font-semibold">Non-Personal Information:</span> We may
        collect non-personal information such as browser type, device information,
        and website usage data to improve our services and enhance your experience
        on our website.
      </p>

      {/* <!-- Use of Information Section --> */}
      <h2 className="font-sans text-2xl font-semibold mb-4">Use of Information</h2>
      <p className="font-lato leading-relaxed mb-4">
        <span className="font-semibold">Service Delivery:</span> We use your personal
        information to process bookings, respond to inquiries, provide customer
        support, and deliver our travel services.
      </p>
      <p className="font-lato leading-relaxed mb-4">
        <span className="font-semibold">Communication:</span> We may use your contact
        information to send you updates, and important information
        related to your travel plans. You can opt-out of receiving messages
        at any time.
      </p>
      <p className="font-lato leading-relaxed mb-6">
        <span className="font-semibold">Improvement:</span> We use non-personal
        information to analyze website usage, monitor performance, and improve
        the functionality and user experience of our website.
      </p>

      {/* <!-- Data Sharing and Disclosure Section --> */}
      <h2 className="font-sans text-2xl font-semibold mb-4">Data Sharing and Disclosure</h2>
      <p className="font-lato leading-relaxed mb-4">
        <span className="font-semibold">Third-Party Service Providers:</span> We may
        share your information with trusted third-party service providers such as
        airlines, hotels, and tour operators to facilitate your travel arrangements.
      </p>
      <p className="font-lato leading-relaxed mb-6">
        <span className="font-semibold">Legal Requirements:</span> We may disclose
        your information if required by law, in response to legal requests, or to
        protect our rights and interests.
      </p>

      {/* <!-- Data Security Section --> */}
      <h2 className="font-sans text-2xl font-semibold mb-4">Data Security</h2>
      <p className="font-lato leading-relaxed mb-6">
        We implement appropriate security measures to protect your personal
        information from unauthorized access, alteration, disclosure, or destruction.
        However, please note that no method of transmission over the internet or
        electronic storage is completely secure.
      </p>

      {/* <!-- Cookies and Tracking Technologies Section --> */}
      <h2 className="font-sans text-2xl font-semibold mb-4">Cookies and Tracking Technologies</h2>
      <p className="font-lato leading-relaxed mb-6">
        Our website may use cookies and similar tracking technologies to enhance
        your browsing experience. Cookies help us understand your preferences
        and improve our services. You can manage your cookie preferences through
        your browser settings.
      </p>

      {/* <!-- Your Rights Section --> */}
      <h2 className="font-sans text-2xl font-semibold mb-4">Your Rights</h2>
      <p className="font-lato leading-relaxed mb-4">
        <span className="font-semibold">Access and Correction:</span> You have the
        right to correct, or update your personal information. If you wish
        to make any changes, please contact us.
      </p>
      <p className="font-lato leading-relaxed mb-4">
        <span className="font-semibold">Opt-Out:</span> You can opt-out of receiving
        marketing communications from us by following the unsubscribe instructions
        provided in the email or by contacting us directly.
      </p>

      {/* <!-- Changes to Privacy Policy Section --> */}
      <h2 className="font-sans text-2xl font-semibold mb-4">Changes to Privacy Policy</h2>
      <p className="font-lato leading-relaxed mb-6">
        We may update this Privacy Policy from time to time to reflect changes in our
        practices or legal requirements. The updated policy will be posted on our website,
        and we encourage you to review it periodically.
      </p>

      {/* <!-- Contact Us Section --> */}
      <h2 className="font-sans text-2xl font-semibold mb-4">Contact Us</h2>
      <p className="font-lato leading-relaxed mb-4">
        If you have any questions or concerns about our Privacy Policy or how we handle
        your information, please contact us at:
      </p>
      <p className="font-lato leading-relaxed mb-6">
        Our Agency<br />
        xyz Address<br />
        Email: <a href="#" className="underline text-blue-600">Team@agency.in</a> / 
        <a href="#" className="underline text-blue-600">travelagency@gmail.com</a><br />
        Phone: <a href="tel:9910025306" className="underline text-blue-600">1234567891</a> / 
        <a href="tel:9810305100" className="underline text-blue-600">1987654321</a>
      </p>

      {/* <!-- Closing Statement --> */}
      <p className="font-lato leading-relaxed mb-6">
        Thank you for trusting Our Agency with your travel plans. We are committed
        to ensuring your privacy and providing you with a secure and enjoyable travel
        experience.
      </p>
    </div>
  )
}

export default page