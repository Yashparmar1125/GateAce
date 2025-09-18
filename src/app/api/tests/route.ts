import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { Test } from '@/lib/models/Test';
import { Question } from '@/lib/models/Question';

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const branch = searchParams.get('branch');
    const type = searchParams.get('type');
    const subject = searchParams.get('subject');
    
    let query: any = {};
    
    if (branch) query.branch = branch;
    if (type) query.type = type;
    if (subject) query.subject = subject;
    
    const tests = await Test.find(query)
      .populate('questions')
      .sort({ createdAt: -1 });
    
    return NextResponse.json(tests);
  } catch (error) {
    console.error('Error fetching tests:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    
    const body = await request.json();
    const { title, type, subject, branch, duration, questionIds, description } = body;
    
    const test = new Test({
      title,
      type,
      subject,
      branch,
      duration,
      questions: questionIds,
      totalQuestions: questionIds.length,
      description
    });
    
    await test.save();
    
    return NextResponse.json(test, { status: 201 });
  } catch (error) {
    console.error('Error creating test:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
