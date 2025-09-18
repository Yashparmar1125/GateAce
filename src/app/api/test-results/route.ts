import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { TestResult } from '@/lib/models/TestResult';

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    const testId = searchParams.get('testId');
    
    let query: any = {};
    
    if (userId) query.userId = userId;
    if (testId) query.testId = testId;
    
    const testResults = await TestResult.find(query)
      .populate('userId', 'name email')
      .populate('testId', 'title type')
      .sort({ completedAt: -1 });
    
    return NextResponse.json(testResults);
  } catch (error) {
    console.error('Error fetching test results:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    
    const body = await request.json();
    const { userId, testId, answers, score, percentage, timeSpent, topicWiseAccuracy } = body;
    
    const testResult = new TestResult({
      userId,
      testId,
      answers,
      score,
      percentage,
      timeSpent,
      completedAt: new Date(),
      topicWiseAccuracy
    });
    
    await testResult.save();
    
    return NextResponse.json(testResult, { status: 201 });
  } catch (error) {
    console.error('Error creating test result:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
