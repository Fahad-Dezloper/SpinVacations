// schemas/tripDetails.js
import {Rule} from '@sanity/types'

export default {
  name: 'tripDetails',
  title: 'Trip Details',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name of the Trip',
      type: 'string',
    },
    {
      name: 'featuredImage',
      title: 'Trip Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'tripImages',
      title: 'Trip Images',
      type: 'array',
      of: [{type: 'image'}],
    },
    {
      name: 'avgprice',
      title: 'Pricing Starting From',
      type: 'number',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'price',
      title: 'Trip Price',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'heading',
              title: 'Heading',
              type: 'string',
              validation: (Rule: Rule) => Rule.required(),
            },
            {
              name: 'subtext',
              title: 'Subtext',
              type: 'string',
              validation: (Rule: Rule) => Rule.required(),
            },
            {
              name: 'price',
              title: 'Price',
              type: 'number',
              validation: (Rule: Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
    {
      name: 'isUpcomingTrip',
      title: 'Is it an upcoming trip?',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'upcomingTripDate',
      title: 'When is it leaving?',
      type: 'date',
      hidden: ({document}) => !document?.isUpcomingTrip, // Hide if isUpcomingTrip is false
    },
    {
      name: 'isFeaturedTrip',
      title: 'Is it a Featured trip?',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'slug',
      title: 'Trip Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'categories', // Update to an array of references
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'category'}],
        },
      ],
      description: 'Select categories for this trip',
    },
    {
      name: 'packageOverview',
      title: 'Package Overview',
      type: 'object',
      fields: [
        {
          name: 'tripType',
          title: 'Trip Type',
          type: 'string',
          options: {
            list: [
              {title: 'Domestic', value: 'domestic'},
              {title: 'International', value: 'international'},
            ],
          },
        },
        {
          name: 'bestFor',
          title: 'Best For',
          type: 'array',
          of: [{type: 'string'}],
        },
        {
          name: 'tripDuration',
          title: 'Trip Duration',
          type: 'object',
          fields: [
            {
              name: 'days',
              title: 'Days',
              type: 'number',
              validation: (Rule: Rule) => Rule.required(),
            },
            {
              name: 'nights',
              title: 'Nights',
              type: 'number',
              validation: (Rule: Rule) => Rule.required(),
            },
          ],
        },
        {
          name: 'accommodation',
          title: 'Accommodation',
          type: 'array',
          of: [{type: 'string'}],
        },
        {
          name: 'meals',
          title: 'Meals Included',
          type: 'object',
          fields: [
            {
              name: 'breakfast',
              title: 'Breakfast',
              type: 'boolean',
              description: 'Toggle if breakfast is included.',
            },
            {
              name: 'lunch',
              title: 'Lunch',
              type: 'boolean',
              description: 'Toggle if lunch is included.',
            },
            {
              name: 'dinner',
              title: 'Dinner',
              type: 'boolean',
              description: 'Toggle if dinner is included.',
            },
          ],
        },
        {
          name: 'transport',
          title: 'Transport',
          type: 'object',
          fields: [
            {
              name: 'flight',
              title: 'Flight',
              type: 'boolean',
            },
            {
              name: 'train',
              title: 'Train',
              type: 'boolean',
            },
            {
              name: 'bus',
              title: 'Bus',
              type: 'boolean',
            },
            {
              name: 'localTravelVehicle',
              title: 'Local Travel Vehicle (AC/Non-AC)',
              type: 'boolean',
              description: 'Toggle if local travel vehicle is provided.',
            },
            {
              name: 'vehicleType',
              title: 'Vehicle Type',
              type: 'string',
              hidden: ({parent}) => !parent?.localTravelVehicle,
              options: {
                list: [
                  {title: 'AC', value: 'ac'},
                  {title: 'Non-AC', value: 'non-ac'},
                ],
              },
            },
          ],
        },
        {
          name: 'travelHighlights',
          title: 'Travel Highlights',
          type: 'array',
          of: [{type: 'string'}],
        },
      ],
    },
    {
      name: 'overview',
      title: 'Overview',
      type: 'text',
    },
    {
      name: 'itinerary',
      title: 'Day Wise Itinerary',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'dayNumber',
              title: 'Day Number',
              type: 'number',
            },
            {
              name: 'heading',
              title: 'Heading',
              type: 'string',
            },
            {
              name: 'overview',
              title: 'Day Overview',
              type: 'text',
            },
          ],
        },
      ],
    },
    {
      name: 'inclusionsExclusions',
      title: 'Inclusions/Exclusions',
      type: 'object',
      fields: [
        {
          name: 'inclusions',
          title: 'Inclusions',
          type: 'array',
          of: [{type: 'string'}],
        },
        {
          name: 'exclusions',
          title: 'Exclusions',
          type: 'array',
          of: [{type: 'string'}],
        },
      ],
    },
    {
      name: 'additionalInfo',
      title: 'Additional Info',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'heading',
              title: 'Heading',
              type: 'string',
            },
            {
              name: 'paragraph',
              title: 'Paragraph',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
}
