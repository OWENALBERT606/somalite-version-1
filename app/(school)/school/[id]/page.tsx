// import { DashboardCharts } from "@/components/school/dashboard-charts";
import { getSchoolById, getSchoolsByAdminId } from "@/actions/schools";
import { DashboardHeader } from "@/components/school/dashboard-header";
import { DashboardStats } from "@/components/school/dashboard-stats";
import { QuickActions } from "@/components/school/quick-actions";
import { RecentActivity } from "@/components/school/recent-activity";
import { getAuthenticatedUser } from "@/config/useAuth";


export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  const id=(await params).id;


    const userData = await getAuthenticatedUser();
    const userId=userData?.id;

    const schoolData= await getSchoolsByAdminId(userId)
    const school=schoolData[0];
    console.log(school)

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader school={school}/>

      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Key Performance Indicators */}
        <DashboardStats school={school}  />

        {/* Charts and Analytics */}
        {/* <DashboardCharts /> */}

        {/* Recent Activity and Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <RecentActivity />
          </div>
          <div>
            <QuickActions />
          </div>
        </div>
      </main>
    </div>
  )
}
