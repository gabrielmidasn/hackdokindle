'use server';

/**
 * @fileOverview AI-powered tool which automatically generates a set of possible color palettes and typography styles for a site.
 *
 * - generateSiteStyles - A function that handles the generation of site styles.
 * - GenerateSiteStylesInput - The input type for the generateSiteStyles function.
 * - GenerateSiteStylesOutput - The return type for the generateSiteStyles function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateSiteStylesInputSchema = z.object({
  contentSummary: z.string().describe('A summary of the content of the website.'),
});

export type GenerateSiteStylesInput = z.infer<typeof GenerateSiteStylesInputSchema>;

const GenerateSiteStylesOutputSchema = z.object({
  colorPalette: z
    .array(z.string())
    .describe('An array of hex color codes for the color palette.'),
  typographyStyles: z.object({
    headerFont: z.string().describe('The font family for headers.'),
    bodyFont: z.string().describe('The font family for body text.'),
  }),
});

export type GenerateSiteStylesOutput = z.infer<typeof GenerateSiteStylesOutputSchema>;

export async function generateSiteStyles(
  input: GenerateSiteStylesInput
): Promise<GenerateSiteStylesOutput> {
  return generateSiteStylesFlow(input);
}

const generateSiteStylesPrompt = ai.definePrompt({
  name: 'generateSiteStylesPrompt',
  input: {schema: GenerateSiteStylesInputSchema},
  output: {schema: GenerateSiteStylesOutputSchema},
  prompt: `You are an AI assistant that helps generate color palettes and typography styles for websites based on their content.

  Given a summary of the website's content, you will suggest a color palette (array of hex color codes) and typography styles (header and body font families) that would be visually appealing and appropriate.

  Consider current web design trends and the overall tone of the content when making your suggestions.

  Content Summary: {{{contentSummary}}}
  `,
});

const generateSiteStylesFlow = ai.defineFlow(
  {
    name: 'generateSiteStylesFlow',
    inputSchema: GenerateSiteStylesInputSchema,
    outputSchema: GenerateSiteStylesOutputSchema,
  },
  async input => {
    const {output} = await generateSiteStylesPrompt(input);
    return output!;
  }
);
