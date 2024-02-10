import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Yeferson T | Blog',
    description: 'Mi viaje de aprendizaje de el desarrollo de software y datos interesantes de mi vida',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>es-Es</language>`,
  });
}