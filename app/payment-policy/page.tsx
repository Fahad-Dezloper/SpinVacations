import React from 'react'

const page = () => {
  return (
     <div className="max-w-4xl mx-auto px-6 pt-8 pb-12">
      {/* <!-- Main Heading --> */}
      <h1 className="font-sans text-4xl font-bold text-center mb-8">
        Spin Vacations Payment Policy
      </h1>

      {/* <!-- Introduction --> */}
      <p className="font-lato text-lg leading-relaxed mb-6">
        At Spin Vacations, we strive to make the booking process as smooth and
        transparent as possible. Our payment policy is designed to ensure clarity
        and mutual understanding between our clients and our company. Please take
        note of the following terms:
      </p>

      {/* <!-- Advance Booking Amount Section --> */}
      <h2 className="font-sans text-2xl font-semibold mb-4">Advance Booking Amount</h2>
      <p className="font-lato leading-relaxed mb-6">
        The advance booking amount required for your tour will be communicated to
        you at the time of booking. This amount must be paid to secure your reservation.
      </p>

      {/* <!-- Payment Deadline Section --> */}
      <h2 className="font-sans text-2xl font-semibold mb-4">Payment Deadline</h2>
      <p className="font-lato leading-relaxed mb-6">
        The booking stands liable to be cancelled if 100% payment is not received on or
        before the date written in the itinerary. No claims shall be made thereafter, and
        Spin Vacations will not be responsible for any loss or inconvenience caused due to
        non-payment.
      </p>

      {/* <!-- Refund Policy Section --> */}
      <h2 className="font-sans text-2xl font-semibold mb-4">Refund Policy</h2>
      <p className="font-lato leading-relaxed mb-6">
        Any kind of refund will take a minimum of 15 working days to process. Please note
        that refunds are subject to the terms and conditions of your booking and may be
        influenced by third-party policies, such as those of airlines, hotels, and other
        service providers.
      </p>

      {/* <!-- Closing Statement --> */}
      <p className="font-lato leading-relaxed mb-6">
        We appreciate your cooperation and understanding of our payment policy. Should you
        have any questions or require further clarification, please do not hesitate to
        contact our team.
      </p>

      {/* <!-- Contact Information --> */}
      <p className="font-lato leading-relaxed mb-6">
        Thank you for choosing Spin Vacations. We look forward to providing you with an
        exceptional travel experience.
      </p>
    </div>
  )
}

export default page