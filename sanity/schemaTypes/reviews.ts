import {Rule} from '@sanity/types'

export default {
  name: 'reviews',
  type: 'document',
  title: 'Reviews',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Author Name',
      validation: (Rule: Rule) => Rule.required().min(1).error('Author name is required'),
    },
    {
      name: 'review',
      title: 'Review',
      type: 'text',
      validation: (Rule: Rule) => Rule.required().min(1),
    },
    {
      name: 'stars',
      title: 'Number of Stars',
      type: 'number',
      validation: (Rule: Rule) => Rule.required().min(1).max(5),
    },
  ],
}
