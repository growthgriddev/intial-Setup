import { PrismaClient } from '@prisma/client';
import { notFound } from 'next/navigation';
import Link from 'next/link';

const prisma = new PrismaClient();

// Next.js 13+ generateStaticParams if we want SSG, but let's use dynamic rendering for the CMS
export const dynamic = 'force-dynamic';

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const blog = await prisma.blog.findUnique({
    where: { slug: params.slug },
  });

  if (!blog) {
    notFound();
  }

  return (
    <div className="container perspective-container" style={{ paddingTop: '120px', minHeight: '100vh', maxWidth: '800px', margin: '0 auto' }}>
      
      <Link href="/blog" style={{ color: 'var(--blue-400)', textDecoration: 'none', marginBottom: '20px', display: 'inline-block' }}>
        &larr; Back to all blogs
      </Link>

      <div className="tilt-element" style={{ background: 'var(--glass-bg)', padding: '40px', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{blog.title}</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '40px', fontSize: '0.9rem' }}>
          Published on {new Date(blog.createdAt).toLocaleDateString()}
        </p>

        <div className="blog-content" style={{ lineHeight: '1.8', fontSize: '1.1rem', whiteSpace: 'pre-wrap' }}>
          {blog.content}
        </div>
      </div>

    </div>
  );
}
