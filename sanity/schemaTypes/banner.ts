export default {
  name: 'imgBanner',
  type: 'document',
  title: 'Banner Images',
  fields: [
    {
      name: 'bannerImages',
      type: 'array',
      title: 'Banner Images',
      of: [
        {
          type: 'image',
          title: 'Image',
          options: {
            hotspot: true, // Enables hotspot for better cropping and focus
          },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
              options: {
                isHighlighted: true, // Display the caption field prominently
              },
            },
            {
              name: 'altText',
              type: 'string',
              title: 'Alternative Text',
              description: 'Important for accessibility and SEO',
            },
            {
              name: 'link',
              type: 'url',
              title: 'Link',
              description: 'Optional link for the banner image',
            },
          ],
        },
      ],
    },
  ],
}
