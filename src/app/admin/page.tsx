import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function AdminDashboard() {
  const blogs = await prisma.blog.findMany();
  const seo = await prisma.seo.findFirst() || { title: 'Not Set', description: 'Not Set' };

  return (
    <div className="container" style={{ paddingTop: '120px', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Admin Dashboard</h1>
      
      <div className="admin-grid" style={{ display: 'grid', gap: '40px', gridTemplateColumns: '1fr 1fr' }}>
        <div className="admin-card" style={{ padding: '30px', background: 'var(--bg-card)', borderRadius: '16px', border: '1px solid var(--border-subtle)' }}>
          <h2>SEO Management</h2>
          <p>Current Title: <strong>{seo.title}</strong></p>
          <p>Current Description: <strong>{seo.description}</strong></p>
          <button className="btn-primary" style={{ marginTop: '20px' }}>Edit SEO</button>
        </div>

        <div className="admin-card" style={{ padding: '30px', background: 'var(--bg-card)', borderRadius: '16px', border: '1px solid var(--border-subtle)' }}>
          <h2>Blog Posts</h2>
          {blogs.length === 0 ? (
            <p>No blogs found.</p>
          ) : (
            <ul>
              {blogs.map(b => <li key={b.id}>{b.title}</li>)}
            </ul>
          )}
          <button className="btn-primary" style={{ marginTop: '20px' }}>Write New Post</button>
        </div>
      </div>
    </div>
  );
}
