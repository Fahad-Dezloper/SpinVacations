import {Rule} from '@sanity/types'

export default {
  name: 'mainNav',
  type: 'document',
  title: 'Main Nav',
  fields: [
    {
      name: 'logo',
      type: 'image',
      title: 'Logo Image',
      options: {
        hotspot: true, // Enables hotspot for better cropping and focus
      },
    },
    {
      name: 'featuredTrips',
      type: 'array',
      title: 'Select 2 Featured Trips',
      of: [
        {
          type: 'reference',
          to: [{type: 'tripDetails'}], // Assuming 'tripDetails' is the schema for your trips
        },
      ],
      validation: (Rule: Rule) =>
        Rule.required().min(2).max(2).error('You must select exactly 2 trips'),
    },
    {
      name: 'upcomingFeaturedTrips',
      type: 'array',
      title: 'Select 3 Featured Upcoming Trips',
      of: [
        {
          type: 'reference',
          to: [{type: 'tripDetails'}],
          options: {
            // Custom query to fetch only upcoming trips
            filter: 'isUpcomingTrip == true', // Ensure this matches your field name
          }, // Assuming 'tripDetails' is the schema for your trips
        },
      ],
      validation: (Rule: Rule) =>
        Rule.required().min(3).max(3).error('You must select exactly 3 trips'),
    },
  ],
}
