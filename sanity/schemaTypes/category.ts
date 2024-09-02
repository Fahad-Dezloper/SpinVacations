import {Rule} from '@sanity/types'

export default {
  name: 'category',
  type: 'document',
  title: 'Category',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Category Name',
      validation: (Rule: Rule) => Rule.required().min(1).error('A category name is required.'),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Category Image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'A brief description of the category.',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Category Slug',
      options: {
        source: 'name',
        maxLength: 96, // Optional: restrict slug length
      },
      validation: (Rule: Rule) => Rule.required().error('A slug is required.'),
    },
  ],
}
