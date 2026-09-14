import Link from 'next/link';
import { getAllPosts, formatDate } from '@/lib/posts';

export default async function AdminDashboardPage() {
  const posts = await getAllPosts();

  return (
    <div className="admin-page">
      <div className="container admin-layout">
        <aside className="admin-list">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, marginBottom: 18 }}>
            <div>
              <p className="eyebrow">Writer area</p>
              <h2 style={{ marginTop: 10 }}>Posts</h2>
            </div>
            <Link href="/resources/admin/new" className="primary-btn">New Post</Link>
          </div>

          {posts.map((post) => (
            <div key={post.id} className="post-row">
              <div>
                <strong>{post.title}</strong>
                <div style={{ color: '#5d6763', fontSize: '0.9rem', marginTop: 4 }}>{post.category} · {formatDate(post.published_at || post.created_at)}</div>
              </div>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
                <span className={`badge ${post.status === 'published' ? 'badge-published' : 'badge-draft'}`}>{post.status}</span>
                <Link href="#" className="ghost-btn">Edit</Link>
                <button type="button" className="ghost-btn">Delete</button>
              </div>
            </div>
          ))}
        </aside>

        <section className="admin-editor">
          <h3 style={{ marginTop: 0 }}>Create a post</h3>
          <form className="editor-form">
            <label>
              Title
              <input type="text" name="title" placeholder="Article title" />
            </label>
            <label>
              Category
              <select name="category">
                <option>Education</option>
                <option>Company News</option>
                <option>Product Info</option>
              </select>
            </label>
            <label>
              Excerpt
              <textarea name="excerpt" placeholder="Short summary" />
            </label>
            <label>
              Featured image URL
              <input type="text" name="featured_image" placeholder="https://..." />
            </label>
            <label>
              Slug
              <input type="text" name="slug" placeholder="article-slug" />
            </label>
            <label>
              Status
              <select name="status">
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </label>
            <div>
              <div className="toolbar">
                <button type="button">B</button>
                <button type="button">I</button>
                <button type="button">H2</button>
                <button type="button">Link</button>
              </div>
              <div className="editor-surface" contentEditable suppressContentEditableWarning />
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12 }}>
              <button type="button" className="secondary-btn">Save draft</button>
              <button type="button" className="primary-btn">Publish</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
