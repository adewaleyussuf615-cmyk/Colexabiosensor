import Link from 'next/link';
import { formatDate, type Post } from '@/lib/posts';

export function MediaFeedPage({
  title,
  posts,
  routeBase,
  subtitle,
}: {
  title: string;
  posts: Post[];
  routeBase: string;
  subtitle?: string;
}) {
  const sidebarPosts = posts.slice(0, 5);

  return (
    <div className="media-page">
      <div className="container media-shell">
        <main className="media-main">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span className="crumb-current">{title}</span>
          </nav>

          <div className="content-header">
            <p className="eyebrow">Media</p>
            <h1>{title}</h1>
            {subtitle ? <p className="page-intro">{subtitle}</p> : null}
          </div>

          <div className="media-tabs" aria-label="Resource categories">
            <Link href="/resources" className={routeBase === '/resources' ? 'active' : ''}>All</Link>
            <Link href="/blog" className={routeBase === '/blog' ? 'active' : ''}>Blog</Link>
            <Link href="/news" className={routeBase === '/news' ? 'active' : ''}>News</Link>
            <Link href="/resources" className={routeBase === '/resources' ? 'active' : ''}>Product Info</Link>
          </div>

          <div className="feed-list">
            {posts.map((post) => (
              <article className="feed-item" key={post.id}>
                {post.featured_image ? (
                  <Link href={`${routeBase}/${post.slug}`} className="feed-thumb" aria-label={`Read ${post.title}`}>
                    <img src={post.featured_image} alt={post.title} />
                  </Link>
                ) : null}

                <div className="feed-copy">
                  <span className="feed-kicker">{post.category}</span>
                  <Link href={`${routeBase}/${post.slug}`} className="feed-title">{post.title}</Link>
                  <div className="feed-meta">
                    <time>{formatDate(post.published_at)}</time>
                    <span>•</span>
                    <span>{post.author}</span>
                  </div>
                  <p>{post.excerpt}</p>
                  <Link href={`${routeBase}/${post.slug}`} className="read-more">
                    Read More <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="pagination" aria-label="Pagination">
            <span className="current">1</span>
            <span>2</span>
            <span>3</span>
          </div>
        </main>

        <aside className="media-sidebar">
          <div className="sidebar-box">
            <label className="search-label" htmlFor="search-posts">Search</label>
            <input id="search-posts" type="search" placeholder="Search posts" />
          </div>

          <div className="sidebar-box">
            <h3>Recent Posts</h3>
            <ul className="recent-list">
              {sidebarPosts.map((post) => (
                <li key={post.id}>
                  <Link href={`${routeBase}/${post.slug}`}>{post.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="sidebar-box">
            <h3>Categories</h3>
            <ul className="category-list">
              <li><Link href="/resources">Education</Link> <span>3</span></li>
              <li><Link href="/resources">Company News</Link> <span>2</span></li>
              <li><Link href="/resources">Product Info</Link> <span>1</span></li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

export function MediaArticlePage({
  post,
  related,
  routeBase,
}: {
  post: Post;
  related: Post[];
  routeBase: string;
}) {
  return (
    <div className="article-page">
      <div className="container article-shell">
        <main className="article-main">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href={routeBase}>{routeBase === '/resources' ? 'Resources' : routeBase === '/blog' ? 'Blog' : 'News'}</Link>
            <span>/</span>
            <span className="crumb-current">{post.title}</span>
          </nav>

          <article className="article-card">
            <p className="eyebrow">{post.category}</p>
            <h1>{post.title}</h1>
            <div className="article-meta">
              <time>{formatDate(post.published_at)}</time>
              <span>•</span>
              <span>{post.author}</span>
            </div>

            {post.featured_image ? (
              <figure className="article-feature">
                <img src={post.featured_image} alt={post.title} />
              </figure>
            ) : null}

            <div className="article-body" dangerouslySetInnerHTML={{ __html: post.body }} />

            <div style={{ marginTop: 28 }}>
              <Link href={routeBase} className="read-more back-link">
                ← Back to {routeBase === '/resources' ? 'Resources' : routeBase === '/blog' ? 'Blog' : 'News'}
              </Link>
            </div>
          </article>

          {related.length > 0 ? (
            <div className="related-block">
              <h3>Related posts</h3>
              <div className="related-grid">
                {related.map((item) => (
                  <Link key={item.id} href={`${routeBase}/${item.slug}`} className="related-item">
                    <span className="feed-kicker">{item.category}</span>
                    <strong>{item.title}</strong>
                    <span className="read-more small-link">Read More <span aria-hidden="true">→</span></span>
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </main>

        <aside className="media-sidebar">
          <div className="sidebar-box">
            <label className="search-label" htmlFor="search-posts">Search</label>
            <input id="search-posts" type="search" placeholder="Search posts" />
          </div>

          <div className="sidebar-box">
            <h3>Recent Posts</h3>
            <ul className="recent-list">
              {related.slice(0, 5).map((item) => (
                <li key={item.id}>
                  <Link href={`${routeBase}/${item.slug}`}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
