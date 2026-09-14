export type PostCategory = 'Education' | 'Company News' | 'Product Info';
export type PostStatus = 'draft' | 'published';

export type Post = {
  id: string;
  slug: string;
  title: string;
  category: PostCategory;
  excerpt: string;
  body: string;
  featured_image: string;
  author: string;
  published_at: string;
  status: PostStatus;
  created_at: string;
  updated_at: string;
};

export const categories: PostCategory[] = ['Education', 'Company News', 'Product Info'];

export const demoPosts: Post[] = [
  {
    id: '1',
    slug: 'diabetes-and-exercise-how-physical-activity-affects-blood-glucose-levels',
    title: 'Diabetes and Exercise: How Physical Activity Affects Blood Glucose Levels',
    category: 'Education',
    excerpt: 'A practical look at how movement affects blood glucose and how to approach exercise with caution and awareness.',
    body: `<h2>Why exercise matters</h2><p>Physical activity can influence blood glucose in many ways. For people managing diabetes, understanding this relationship is essential when creating a routine that supports day-to-day wellbeing.</p><h3>What to know</h3><p>Different activities can produce different responses depending on duration, intensity and timing. A balanced plan, combined with regular monitoring and medical guidance, can help people make informed decisions about exercise.</p><p>Use your healthcare professional or product instructions as the authority for personal recommendations.</p>`,
    featured_image: 'https://colexabiosensor.com/wp-content/uploads/2023/08/Screenshot_2023-08-21_163500-removebg-preview-e1692705708812.png',
    author: 'Colexa Biosensor',
    published_at: '2025-03-14T00:00:00.000Z',
    status: 'published',
    created_at: '2025-03-01T00:00:00.000Z',
    updated_at: '2025-03-14T00:00:00.000Z',
  },
  {
    id: '2',
    slug: 'colexa-biosensor-advancing-healthcare-localization-and-self-reliance-in-africa',
    title: 'Advancing healthcare localization and self-reliance in Africa',
    category: 'Company News',
    excerpt: 'Colexa continues to build local capability, strengthen healthcare access, and support more resilient systems across the continent.',
    body: `<h2>Local manufacturing matters</h2><p>Colexa is committed to building local manufacturing capability in Nigeria and supporting more resilient healthcare systems across Africa through practical, accessible solutions.</p><p>That work depends on people, knowledge and long-term partnerships across healthcare delivery, distribution and quality assurance.</p>`,
    featured_image: 'https://colexabiosensor.com/wp-content/uploads/2025/10/Colexa-2_Copy.jpg',
    author: 'Colexa Biosensor',
    published_at: '2025-04-18T00:00:00.000Z',
    status: 'published',
    created_at: '2025-04-01T00:00:00.000Z',
    updated_at: '2025-04-18T00:00:00.000Z',
  },
  {
    id: '3',
    slug: 'standard-q-hiv-1-2-ab-3-line-test',
    title: 'STANDARD™ Q HIV 1/2 Ab 3-Line Test',
    category: 'Product Info',
    excerpt: 'Details on a rapid immunoassay product designed for rapid qualitative detection of HIV antibodies.',
    body: `<h2>Product information</h2><p>The STANDARD Q HIV 1/2 Ab 3-Line Test is a rapid chromatographic immunoassay for qualitative detection of HIV-1 and HIV-2 antibodies.</p><p>It supports healthcare professionals by helping to identify patients who may require further confirmation or follow-up care in line with clinical practice.</p>`,
    featured_image: 'https://colexabiosensor.com/wp-content/uploads/2025/03/HIV-1-2-3-2.png',
    author: 'Colexa Biosensor',
    published_at: '2025-05-05T00:00:00.000Z',
    status: 'published',
    created_at: '2025-05-01T00:00:00.000Z',
    updated_at: '2025-05-05T00:00:00.000Z',
  },
  {
    id: '4',
    slug: 'quality-policy-statement-qr-01-02',
    title: 'Quality Policy Statement QR-01-02',
    category: 'Company News',
    excerpt: 'A summary of the company’s quality policy and how it guides product development and manufacturing work.',
    body: `<h2>Our approach</h2><p>Colexa’s quality work is designed to support product reliability, transparency and healthcare confidence in the devices and diagnostics we make.</p><p>The quality policy is a practical guide for product development, process discipline and validation support.</p>`,
    featured_image: 'https://colexabiosensor.com/wp-content/uploads/2025/10/Colexa-7.jpg',
    author: 'Colexa Biosensor',
    published_at: '2025-06-12T00:00:00.000Z',
    status: 'draft',
    created_at: '2025-06-01T00:00:00.000Z',
    updated_at: '2025-06-12T00:00:00.000Z',
  },
];

export function formatDate(value: string) {
  return new Intl.DateTimeFormat('en-NG', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(value));
}

export function slugify(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export async function getPublishedPosts() {
  return demoPosts.filter((item) => item.status === 'published');
}

export async function getAllPosts() {
  return demoPosts;
}

export async function getPostBySlug(slug: string) {
  return demoPosts.find((item) => item.slug === slug) || null;
}
