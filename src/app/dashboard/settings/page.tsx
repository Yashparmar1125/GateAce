import { Header } from '@/components/layout/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

export default function SettingsPage() {
  return (
    <>
      <Header title="Settings" />
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>Manage how you receive notifications from us.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="flex items-center justify-between space-x-4">
                <Label htmlFor="study-reminders" className="flex flex-col space-y-1">
                  <span>Study Reminders</span>
                  <span className="font-normal leading-snug text-muted-foreground">
                    Get reminders for your scheduled study sessions.
                  </span>
                </Label>
                <Switch id="study-reminders" defaultChecked />
              </div>
              <div className="flex items-center justify-between space-x-4">
                <Label htmlFor="test-alerts" className="flex flex-col space-y-1">
                  <span>Test Alerts</span>
                  <span className="font-normal leading-snug text-muted-foreground">
                    Receive notifications about upcoming tests and new mock series.
                  </span>
                </Label>
                <Switch id="test-alerts" defaultChecked />
              </div>
              <div className="flex items-center justify-between space-x-4">
                <Label htmlFor="weekly-progress" className="flex flex-col space-y-1">
                  <span>Weekly Progress Report</span>
                  <span className="font-normal leading-snug text-muted-foreground">
                    Get a summary of your weekly performance and progress.
                  </span>
                </Label>
                <Switch id="weekly-progress" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>Manage your account settings.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <Button variant="outline">Reset Study Plan</Button>
              <Button variant="destructive">Delete Account</Button>
            </CardContent>
          </Card>
          <div className="flex justify-end">
            <Button>Save Preferences</Button>
          </div>
        </div>
      </main>
    </>
  );
}
