"use client"

import { useTheme } from "next-themes"
import {
  Bar,
  BarChart as RechartsBarChart,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts"

const data = [
  { name: "Jan 1", sales: 4 },
  { name: "Jan 5", sales: 3 },
  { name: "Jan 10", sales: 5 },
  { name: "Jan 15", sales: 7 },
  { name: "Jan 20", sales: 5 },
  { name: "Jan 25", sales: 8 },
  { name: "Jan 30", sales: 12 },
]

const bookData = [
  { name: "The Great Gatsby", sales: 8 },
  { name: "To Kill a Mockingbird", sales: 6 },
  { name: "Web Development", sales: 5 },
  { name: "Digital Marketing", sales: 4 },
  { name: "Psychology of Decision Making", sales: 3 },
]

export function AreaChart() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data}>
        <XAxis dataKey="name" stroke={isDark ? "#888888" : "#888888"} fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke={isDark ? "#888888" : "#888888"}
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#333333" : "#eeeeee"} />
        <Tooltip
          contentStyle={{
            backgroundColor: isDark ? "#1f2937" : "#ffffff",
            borderColor: isDark ? "#374151" : "#e5e7eb",
            color: isDark ? "#ffffff" : "#000000",
          }}
        />
        <Line
          type="monotone"
          dataKey="sales"
          stroke="hsl(var(--primary))"
          strokeWidth={2}
          dot={{ r: 4, strokeWidth: 2 }}
          activeDot={{ r: 6, strokeWidth: 2 }}
          name="Sales"
          unit=" books"
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

export function BarChart() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <ResponsiveContainer width="100%" height={250}>
      <RechartsBarChart data={bookData} layout="vertical" barCategoryGap={12}>
        <XAxis type="number" stroke={isDark ? "#888888" : "#888888"} fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          type="category"
          dataKey="name"
          stroke={isDark ? "#888888" : "#888888"}
          fontSize={12}
          tickLine={false}
          axisLine={false}
          width={120}
          tickFormatter={(value) => (value.length > 15 ? `${value.substring(0, 15)}...` : value)}
        />
        <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#333333" : "#eeeeee"} horizontal={false} />
        <Tooltip
          contentStyle={{
            backgroundColor: isDark ? "#1f2937" : "#ffffff",
            borderColor: isDark ? "#374151" : "#e5e7eb",
            color: isDark ? "#ffffff" : "#000000",
          }}
        />
        <Bar dataKey="sales" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} name="Sales" unit=" books" />
      </RechartsBarChart>
    </ResponsiveContainer>
  )
}
