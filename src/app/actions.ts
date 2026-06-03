"use server";

import { PrismaClient } from '@prisma/client';
import nodemailer from 'nodemailer';
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

// === EMAIL ACTIONS ===
export async function sendContactEmail(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  if (!name || !email || !message) {
    return { error: 'All fields are required.' };
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Send to yourself
      subject: `New Lead from Website: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
    });
    return { success: true };
  } catch (error) {
    console.error(error);
    return { error: 'Failed to send email. Check configuration.' };
  }
}

// === BLOG ACTIONS ===
export async function createBlog(formData: FormData) {
  const password = formData.get('password') as string;
  if (password !== (process.env.ADMIN_PASSWORD || 'admin123')) {
    return { error: 'Invalid admin password' };
  }

  const title = formData.get('title') as string;
  const slug = formData.get('slug') as string;
  const content = formData.get('content') as string;

  try {
    await prisma.blog.create({
      data: { title, slug, content },
    });
    revalidatePath('/blog');
    revalidatePath('/admin');
    return { success: true };
  } catch (e) {
    return { error: 'Failed to create blog. Ensure slug is unique.' };
  }
}

export async function deleteBlog(id: number, password?: string) {
  if (password !== (process.env.ADMIN_PASSWORD || 'admin123')) {
    return { error: 'Invalid admin password' };
  }
  await prisma.blog.delete({ where: { id } });
  revalidatePath('/blog');
  revalidatePath('/admin');
  return { success: true };
}

// === SEO ACTIONS ===
export async function updateSeo(formData: FormData) {
  const password = formData.get('password') as string;
  if (password !== (process.env.ADMIN_PASSWORD || 'admin123')) {
    return { error: 'Invalid admin password' };
  }

  const title = formData.get('title') as string;
  const description = formData.get('description') as string;

  const existing = await prisma.seo.findFirst();
  if (existing) {
    await prisma.seo.update({
      where: { id: existing.id },
      data: { title, description },
    });
  } else {
    await prisma.seo.create({
      data: { title, description },
    });
  }
  
  revalidatePath('/');
  revalidatePath('/admin');
  return { success: true };
}
