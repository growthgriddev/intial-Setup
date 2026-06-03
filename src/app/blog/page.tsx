import { PrismaClient } from '@prisma/client';
import Link from 'next/link';

const prisma = new PrismaClient();

export default async function BlogArchive() {
  const blogs = await prisma.blog.findMany({ orderBy: { createdAt: 'desc' } });

  return (
    <div className="container" style={{ paddingTop: '120px', minHeight: '100vh' }}>
      <div className="section-header reveal visible tilt-element">
        <div className="section-label"><span className="dot"></span> Resources</div>
        <h1 className="section-title">GrowthGrid Blog</h1>
        <p className="section-subtitle">Learn how to grow your local service business.</p>
      </div>

      <div className="services-grid" style={{ marginTop: '40px' }}>
        {blogs.length === 0 ? (
          <p>No articles yet. Check back soon!</p>
        ) : (
          blogs.map(blog => (
            <Link href={`/blog/${blog.slug}`} key={blog.id}>
              <div className="service-card tilt-element" style={{ cursor: 'pointer' }}>
                <h3>{blog.title}</h3>
                <p>{blog.content.substring(0, 100)}...</p>
                <div style={{ marginTop: '20px', fontSize: '0.85rem', color: 'var(--blue-400)' }}>Read More &rarr;</div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
