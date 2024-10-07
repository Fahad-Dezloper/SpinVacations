import React from 'react'

const page = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 pb-12 pt-8">
      {/* <!-- Main Heading --> */}
      <h1 className="font-sans text-4xl font-bold text-center mb-8">
        Travel Agency Travel Policy
      </h1>

      {/* <!-- Introduction --> */}
      <p className="font-lato text-lg leading-relaxed mb-6">
        At Our Agenct, we prioritize the safety and satisfaction of our clients. Our travel policies
        are aligned with the regulations and guidelines set by the Central and State Governments of India.
        Please review the following points carefully:
      </p>

      {/* <!-- Compliance with Government Regulations Section --> */}
      <h2 className="font-sans text-2xl font-semibold mb-4">
        Compliance with Government Regulations
      </h2>
      <p className="font-lato leading-relaxed mb-6">
        Our travel policies are applied in accordance with the directives and regulations issued by the
        Central and State Governments of India. We ensure that all our tours adhere to these guidelines to
        provide a safe and compliant travel experience.
      </p>

      {/* <!-- Travel Restrictions and Rescheduling Section --> */}
      <h2 className="font-sans text-2xl font-semibold mb-4">
        Travel Restrictions and Rescheduling
      </h2>
      <p className="font-lato leading-relaxed mb-6">
        In case of any travel restrictions or cancellations due to government mandates, Our Agency will
        provide rescheduling options based on the policies of the government, airline, and hotel involved.
        We will work diligently to accommodate your travel plans within the permissible guidelines.
      </p>

      {/* <!-- Closing Statement --> */}
      <p className="font-lato leading-relaxed mb-6">
        We appreciate your understanding and cooperation in adhering to our travel policy. Should you have
        any questions or need further assistance, please feel free to contact our team.
      </p>

      {/* <!-- Contact Information --> */}
      <p className="font-lato leading-relaxed mb-6">
        Thank you for choosing Our Agency. We are committed to ensuring a safe and enjoyable travel
        experience for you.
      </p>
    </div>
  )
}

export default page