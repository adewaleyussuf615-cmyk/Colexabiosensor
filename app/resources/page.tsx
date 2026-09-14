import { getPublishedPosts } from '@/lib/posts';
import { MediaFeedPage } from '@/components/media-content';

export default async function ResourcesPage() {
  const posts = await getPublishedPosts();

  return (
    <MediaFeedPage
      title="Resources"
      subtitle="Education, company updates and product information for clinicians, partners and patients."
      routeBase="/resources"
      posts={posts}
    />
  );
}
