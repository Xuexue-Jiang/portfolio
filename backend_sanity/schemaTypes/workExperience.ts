import { defineType, defineField } from "sanity";

export const workExperience = defineType({
  name: 'workExperience',
  title: 'WorkExperience',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string'
    }),

    defineField({
      name: 'company',
      title: 'Company',
      type: 'string'
    }),

    defineField({
      name: 'desc',
      title: 'Desc',
      type: 'string'
    }),
  ]
})