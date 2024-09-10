import {Rule} from '@sanity/types'

export default {
  name: 'destinations',
  type: 'document',
  title: 'Featured Destinations',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Destination Name',
      description: 'The name of the destination, e.g., Tokyo',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Short Description',
      description: "A brief description of the destination's highlights",
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'location',
      type: 'string',
      title: 'Location',
      description: 'The specific location, e.g., Tokyo, Japan',
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
      description: 'The price of the tour package in the local currency',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'categories',
      type: 'array',
      title: 'Categories',
      of: [{type: 'reference', to: [{type: 'category'}]}],
      validation: (Rule: Rule) => Rule.max(8).error('You can only add up to 8 categories.'),
    },
  ],
}
