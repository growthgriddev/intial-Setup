import { PrismaClient } from '@prisma/client';
import { createBlog, deleteBlog, updateSeo } from '@/app/actions';

const prisma = new PrismaClient();

export default async function AdminDashboard() {
  const blogs = await prisma.blog.findMany();
  const seo = await prisma.seo.findFirst() || { title: '', description: '' };

  return (
    <div className="container" style={{ paddingTop: '120px', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Admin Dashboard</h1>
      <p style={{ marginBottom: '40px' }}>Manage your website content. Password is required for all actions.</p>
      
      <div className="admin-grid" style={{ display: 'grid', gap: '40px', gridTemplateColumns: '1fr 1fr' }}>
        
        {/* SEO FORM */}
        <div className="admin-card tilt-element" style={{ padding: '30px', background: 'var(--glass-bg)', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
          <h2>Update Global SEO</h2>
          <form action={updateSeo} style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
            <input type="text" name="title" defaultValue={seo.title} placeholder="Website Title" required style={{ padding: '10px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', color: 'white', border: '1px solid var(--border-subtle)' }} />
            <textarea name="description" defaultValue={seo.description} placeholder="Meta Description" required style={{ padding: '10px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', color: 'white', border: '1px solid var(--border-subtle)', minHeight: '100px' }} />
            <input type="password" name="password" placeholder="Admin Password" required style={{ padding: '10px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', color: 'white', border: '1px solid var(--border-subtle)' }} />
            <button type="submit" className="btn-primary">Save SEO</button>
          </form>
        </div>

        {/* CREATE BLOG FORM */}
        <div className="admin-card tilt-element" style={{ padding: '30px', background: 'var(--glass-bg)', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
          <h2>Write New Blog</h2>
          <form action={createBlog} style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
            <input type="text" name="title" placeholder="Blog Title" required style={{ padding: '10px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', color: 'white', border: '1px solid var(--border-subtle)' }} />
            <input type="text" name="slug" placeholder="url-slug-like-this" required style={{ padding: '10px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', color: 'white', border: '1px solid var(--border-subtle)' }} />
            <textarea name="content" placeholder="Blog Content (Markdown or Text)" required style={{ padding: '10px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', color: 'white', border: '1px solid var(--border-subtle)', minHeight: '150px' }} />
            <input type="password" name="password" placeholder="Admin Password" required style={{ padding: '10px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', color: 'white', border: '1px solid var(--border-subtle)' }} />
            <button type="submit" className="btn-primary">Publish Blog</button>
          </form>
        </div>

      </div>

      {/* BLOG LIST */}
      <div className="admin-card tilt-element" style={{ padding: '30px', background: 'var(--glass-bg)', borderRadius: '16px', border: '1px solid var(--glass-border)', marginTop: '40px' }}>
        <h2>Manage Existing Blogs</h2>
        {blogs.length === 0 ? (
          <p style={{ marginTop: '20px' }}>No blogs found.</p>
        ) : (
          <ul style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {blogs.map(b => (
              <li key={b.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.02)', padding: '15px', borderRadius: '8px' }}>
                <span>{b.title} ({b.slug})</span>
                <form action={async (formData) => {
                  "use server";
                  await deleteBlog(b.id, formData.get('password') as string);
                }} style={{ display: 'flex', gap: '10px' }}>
                  <input type="password" name="password" placeholder="Password to delete" required style={{ padding: '5px 10px', borderRadius: '4px', background: 'rgba(255,255,255,0.05)', color: 'white', border: '1px solid var(--border-subtle)' }} />
                  <button type="submit" style={{ background: 'red', color: 'white', padding: '5px 15px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Delete</button>
                </form>
              </li>
            ))}
          </ul>
        )}
      </div>

    </div>
  );
}
