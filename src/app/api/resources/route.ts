import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { Resource } from '@/lib/models/Resource';

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const branch = searchParams.get('branch');
    const type = searchParams.get('type');
    const subject = searchParams.get('subject');
    const search = searchParams.get('search');
    
    let query: any = {};
    
    if (branch) query.branch = branch;
    if (type) query.type = type;
    if (subject) query.subject = subject;
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { tags: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }
    
    const resources = await Resource.find(query).sort({ createdAt: -1 });
    return NextResponse.json(resources);
  } catch (error) {
    console.error('Error fetching resources:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    
    const body = await request.json();
    const { title, type, subject, branch, url, tags, difficulty, duration, description } = body;
    
    const resource = new Resource({
      title,
      type,
      subject,
      branch,
      url,
      tags: tags || [],
      difficulty: difficulty || 'intermediate',
      duration,
      description
    });
    
    await resource.save();
    
    return NextResponse.json(resource, { status: 201 });
  } catch (error) {
    console.error('Error creating resource:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
