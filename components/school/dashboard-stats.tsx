import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, BookOpen, GraduationCap, TrendingUp } from "lucide-react"



export function DashboardStats({school}:{school:any}) {
  const stats = [
  {
    title: "Total Students",
    value: school.students.length,
    change: "+12 this term",
    icon: Users,
    color: "text-chart-1",
  },
  {
    title: "Active Teachers",
    value: school.teachers.length,
    change: "+3 new hires",
    icon: GraduationCap,
    color: "text-chart-2",
  },
  {
    title: "Classes",
    value: school.classes.length,
    change: "15 subjects",
    icon: BookOpen,
    color: "text-chart-3",
  },
  {
    title: "Average Grade",
    value: "78.5%",
    change: "+2.3% from last term",
    icon: TrendingUp,
    color: "text-chart-4",
  },
]
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card key={stat.title} className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
            <stat.icon className={`h-4 w-4 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-card-foreground">{stat.value}</div>
            <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
