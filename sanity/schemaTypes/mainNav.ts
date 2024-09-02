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
      name: 'menuItems',
      type: 'array',
      title: 'Menu Items',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'menuName',
              type: 'string',
              title: 'Menu Name',
            },
            {
              name: 'link',
              type: 'string',
              title: 'Menu Link',
            },
          ],
        },
      ],
    },
  ],
}
