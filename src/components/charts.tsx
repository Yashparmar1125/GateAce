"use client"

import { Bar, BarChart, CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from '@/components/ui/chart';

const topicData = [
  { name: "Algo", accuracy: 85 },
  { name: "Networks", accuracy: 92 },
  { name: "OS", accuracy: 65 },
  { name: "DBMS", accuracy: 78 },
  { name: "Compilers", accuracy: 55 },
  { name: "Digital", accuracy: 95 },
  { name: "COA", accuracy: 72 },
]

const topicChartConfig = {
    accuracy: {
      label: "Accuracy",
      color: "hsl(var(--primary))",
    },
  } satisfies ChartConfig

export function TopicAccuracyChart() {
  return (
    <ChartContainer config={topicChartConfig} className="min-h-[200px] w-full">
        <BarChart accessibilityLayer data={topicData}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="name" tickLine={false} tickMargin={10} axisLine={false} />
            <YAxis tickFormatter={(value) => `${value}%`}/>
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="accuracy" fill="var(--color-accuracy)" radius={4} />
        </BarChart>
    </ChartContainer>
  )
}


const testData = [
    { name: "Test 1", score: 65 },
    { name: "Test 2", score: 72 },
    { name: "Test 3", score: 68 },
    { name: "Test 4", score: 78 },
    { name: "Test 5", score: 82 },
]

const testChartConfig = {
    score: {
      label: "Score",
      color: "hsl(var(--primary))",
    },
  } satisfies ChartConfig

export function TestPerformanceChart() {
    return (
        <ChartContainer config={testChartConfig} className="min-h-[200px] w-full">
            <LineChart accessibilityLayer data={testData}>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="name" tickLine={false} axisLine={false} tickMargin={8} />
                <YAxis domain={[0, 100]} />
                <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                <Line type="monotone" dataKey="score" stroke="var(--color-score)" strokeWidth={2} dot={false} />
            </LineChart>
        </ChartContainer>
    )
}
