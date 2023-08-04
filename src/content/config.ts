import {z, defineCollection } from 'astro:content';

const cardCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        cardTitle: z.string(),
        cardDescription: z.string().optional(),
        cardImage: z.object({
            src: image(),
            alt: z.string()
        }).optional(),
        slides: z.array(z.object({
            src: image(),
            alt: z.string()
        })).optional(),
        cardLink: z.string().optional(),
        order: z.number(),
    }),
})

const worksCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        name: z.string(),
        description: z.string(),
        thumbnail: z.object({
            src: image(),
            alt: z.string()
        }),
        linkTo: z.string(),
        secondaryLink: z.object({
            href: z.string(),
            label: z.string()
        }).optional(),
        date: z.date(),
        tech: z.array(z.string()),
    }),
})

export const collections = {
    'cards': cardCollection,
    'works': worksCollection,
}