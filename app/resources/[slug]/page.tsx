import { notFound } from 'next/navigation';
import { getPublishedPosts, getPostBySlug } from '@/lib/posts';
import { MediaArticlePage } from '@/components/media-content';

export async function generateStaticParams() {
  const posts = await getPublishedPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function ResourceArticleRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  const related = (await getPublishedPosts())
    .filter((item) => item.category === post.category && item.slug !== post.slug)
    .slice(0, 3);

  return <MediaArticlePage post={post} related={related} routeBase="/resources" />;
}
