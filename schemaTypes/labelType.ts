import {defineField, defineType} from 'sanity'

export const labelType = defineType({
  name: 'label',
  title: 'Label',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Label Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'name'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'color',
      title: 'Color',
      type: 'string',
      options: {
        list: [
          {title: 'Blue', value: '#607D8B'},
          {title: 'Green', value: '#546E7A'},
          {title: 'Red', value: '#455A64'},
          {title: 'Gray', value: '#37474F'},
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'description',
    },
  },
}) 