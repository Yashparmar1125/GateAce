import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { StudyPlan } from '@/lib/models/StudyPlan';

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    
    if (userId) {
      const studyPlans = await StudyPlan.find({ userId }).sort({ createdAt: -1 });
      return NextResponse.json(studyPlans);
    }
    
    const studyPlans = await StudyPlan.find({}).sort({ createdAt: -1 });
    return NextResponse.json(studyPlans);
  } catch (error) {
    console.error('Error fetching study plans:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    
    const body = await request.json();
    const { userId, branch, targetGateYear, startDate, studyHoursPerWeek, planContent } = body;
    
    const studyPlan = new StudyPlan({
      userId,
      branch,
      targetGateYear,
      startDate: new Date(startDate),
      studyHoursPerWeek,
      planContent,
      status: 'active'
    });
    
    await studyPlan.save();
    
    return NextResponse.json(studyPlan, { status: 201 });
  } catch (error) {
    console.error('Error creating study plan:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    await connectDB();
    
    const body = await request.json();
    const { id, ...updateData } = body;
    
    const studyPlan = await StudyPlan.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );
    
    if (!studyPlan) {
      return NextResponse.json({ error: 'Study plan not found' }, { status: 404 });
    }
    
    return NextResponse.json(studyPlan);
  } catch (error) {
    console.error('Error updating study plan:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
