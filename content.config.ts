import { defineContentConfig, defineCollection } from '@nuxt/content';
import { z } from 'zod';

export default defineContentConfig({
  collections: {
    personalInfo: defineCollection({
      type: 'data',
      source: 'personalInfo.yml',
      schema: z.object({
        isAvailableToWork: z.boolean(),
        objective: z.string(),
        personalInfo: z.object({
          name: z.string(),
          occupation: z.string(),
          dateOfBirth: z.string(),
          address: z.string(),
          maritalStatus: z.string(),
          nationality: z.string(),
        }),
        contactInfo: z.object({
          phone: z.string(),
          email: z.string(),
        }),
        accounts: z.object({
          facebook: z.string().optional(),
          'x-twitter': z.string().optional(),
          instagram: z.string().optional(),
          linkedin: z.string().optional(),
          github: z.string().optional(),
          youtube: z.string().optional(),
        }),
        languages: z.record(z.string(), z.string()),
      }),
    }),
    skills: defineCollection({
      type: 'data',
      source: 'skills.yml',
      schema: z.object({
        soft: z.array(z.string()),
        hard: z.array(
          z.object({
            name: z.string(),
            icon: z.string(),
            website: z.string(),
            featured: z.boolean().optional(),
          }),
        ),
      }),
    }),
    experience: defineCollection({
      type: 'data',
      source: 'experience/*.yml',
      schema: z.object({
        startDate: z.string(),
        endDate: z.string(),
        position: z.string(),
        category: z.string(),
        company: z.string(),
        website: z.string().optional(),
        achievements: z.array(z.string()),
        featured: z.boolean().optional(),
      }),
    }),
    projects: defineCollection({
      type: 'data',
      source: 'projects/*.yml',
      schema: z.object({
        name: z.string(),
        type: z.string(),
        year: z.number(),
        stack: z.array(z.string()),
        url: z.string().nullable(),
        screenshot: z.string(),
        logo: z.string().optional(),
        featured: z.boolean().optional(),
      }),
    }),
    articles: defineCollection({
      type: 'data',
      source: 'articles/*.yml',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        category: z.string(),
        type: z.string(),
        datePublished: z.string(),
        url: z.string(),
        urlTo: z.string(),
        featured: z.boolean().optional(),
      }),
    }),
    education: defineCollection({
      type: 'data',
      source: 'education/*.yml',
      schema: z.object({
        degree: z.string(),
        university: z.string().optional(),
        institution: z.string().optional(),
        school: z.string().optional(),
        location: z.string(),
        startYear: z.number(),
        endYear: z.number(),
        grade: z.number().nullable().optional(),
      }),
    }),
    courses: defineCollection({
      type: 'data',
      source: 'courses/*.yml',
      schema: z.object({
        title: z.string(),
        host: z.string(),
        year: z.number(),
        featured: z.boolean().optional(),
      }),
    }),
    socialProof: defineCollection({
      type: 'data',
      source: 'social-proof/*.yml',
      schema: z.object({
        name: z.string(),
        avatarUrl: z.string(),
        degree: z.string(),
        position: z.string(),
        quote: z.string(),
        featured: z.boolean().optional(),
      }),
    }),
    references: defineCollection({
      type: 'data',
      source: 'references/*.yml',
      schema: z.object({
        name: z.string(),
        degree: z.string(),
        location: z.string(),
        position: z.string(),
        contact: z.string().optional(),
        contacts: z.array(z.string()).optional(),
      }),
    }),
    managementProjects: defineCollection({
      type: 'data',
      source: 'management-projects/*.yml',
      schema: z.object({
        project: z.string(),
        role: z.string(),
        methodology: z.string(),
      }),
    }),
    roboticsProjects: defineCollection({
      type: 'data',
      source: 'robotics-projects/*.yml',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        scope: z.string(),
        category: z.string(),
        donor: z.string(),
        year: z.number(),
        skillsUsed: z.array(z.string()),
        featured: z.boolean().optional(),
      }),
    }),
    certifications: defineCollection({
      type: 'data',
      source: 'certifications/*.yml',
      schema: z.object({
        title: z.string(),
        organization: z.string(),
        year: z.number(),
        featured: z.boolean().optional(),
      }),
    }),
    personalHighlights: defineCollection({
      type: 'data',
      source: 'personal-highlights/*.yml',
      schema: z.object({
        title: z.string(),
        achievements: z.array(z.string()),
        featured: z.boolean().optional(),
      }),
    }),
  },
});
