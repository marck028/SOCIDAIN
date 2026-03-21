import { defineCollection, z } from 'astro:content';

const staffCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    title: z.string(),
    image: z.string(),
    email: z.string().email().optional(),
    phone: z.string().optional(),
    bio: z.string().optional(),
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

const eventsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    endDate: z.date().optional(),
    location: z.string(),
    image: z.string(),
    summary: z.string(),
    tags: z.array(z.string()).optional(),
    registrationLink: z.string().url().optional(),
    registrationRequired: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const ministriesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    logo: z.string().optional(),
    summary: z.string(),
    coordinator: z.string().optional(),
    contact: z.string().optional(),
    schedule: z.string().optional(),
    order: z.number().optional(),
    draft: z.boolean().default(false),
  }),
});

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string().default("SOCIDAIN"),
    image: z.object({
      url: z.string(),
      alt: z.string()
    }).optional(),
    coverImage: z.string().optional(),
    category: z.string().default("General"),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  staff: staffCollection,
  events: eventsCollection,
  ministries: ministriesCollection,
  blog: blogCollection,
};