import {Rule} from '@sanity/types'

export default {
  name: 'categoriesList',
  type: 'document',
  title: 'Categories List',
  fields: [
    {
      name: 'categories',
      type: 'array',
      title: 'Categories',
      of: [{type: 'reference', to: [{type: 'category'}]}],
      validation: (Rule: Rule) => Rule.max(8).error('You can only add up to 8 categories.'),
    },
  ],
}
