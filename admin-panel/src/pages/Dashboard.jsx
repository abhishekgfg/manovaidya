import React from 'react';
import { Users, CalendarCheck, Activity, TrendingUp } from 'lucide-react';

const StatCard = ({ title, value, icon: Icon, trend }) => (
  <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10">
      <Icon className="h-5.5 w-5.5 text-primary" />
    </div>
    <div className="mt-4 flex items-end justify-between">
      <div>
        <h4 className="text-2xl font-bold text-slate-800">{value}</h4>
        <span className="text-sm font-medium text-slate-500">{title}</span>
      </div>
      <span className={`text-sm font-medium ${trend.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
        {trend}
      </span>
    </div>
  </div>
);

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-2xl font-bold text-slate-800">Dashboard Overview</h2>
        <button className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2 text-center text-sm font-medium text-white shadow-sm hover:bg-primary/90">
          Download Report
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        <StatCard title="Total Patients" value="2,450" icon={Users} trend="+12.5%" />
        <StatCard title="Consultations" value="1,210" icon={CalendarCheck} trend="+8.2%" />
        <StatCard title="Active Programs" value="45" icon={Activity} trend="+4.1%" />
        <StatCard title="Revenue (Monthly)" value="₹2.4L" icon={TrendingUp} trend="+15.3%" />
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
        <div className="col-span-1 lg:col-span-2 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800 mb-4">Recent Appointments</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-slate-50 text-xs uppercase text-slate-500">
                <tr>
                  <th className="px-4 py-3 font-medium">Patient Name</th>
                  <th className="px-4 py-3 font-medium">Date & Time</th>
                  <th className="px-4 py-3 font-medium">Type</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { name: 'Rahul Sharma', time: 'Today, 10:30 AM', type: 'Online', status: 'Upcoming' },
                  { name: 'Priya Patel', time: 'Today, 12:00 PM', type: 'Clinic Visit', status: 'Upcoming' },
                  { name: 'Amit Kumar', time: 'Yesterday', type: 'Online', status: 'Completed' },
                  { name: 'Sneha Gupta', time: 'Yesterday', type: 'Clinic Visit', status: 'Completed' },
                ].map((apt, i) => (
                  <tr key={i} className="hover:bg-slate-50/50">
                    <td className="px-4 py-3 font-medium text-slate-800">{apt.name}</td>
                    <td className="px-4 py-3">{apt.time}</td>
                    <td className="px-4 py-3">{apt.type}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        apt.status === 'Upcoming' ? 'bg-blue-50 text-blue-700' : 'bg-green-50 text-green-700'
                      }`}>
                        {apt.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800 mb-4">Quick Actions</h3>
          <div className="flex flex-col gap-3">
            <button className="flex items-center justify-between rounded-lg border border-slate-200 p-3 text-sm font-medium text-slate-700 hover:border-primary hover:text-primary transition-colors">
              <span>Add New Patient</span>
              <span className="text-xl">+</span>
            </button>
            <button className="flex items-center justify-between rounded-lg border border-slate-200 p-3 text-sm font-medium text-slate-700 hover:border-primary hover:text-primary transition-colors">
              <span>Schedule Appointment</span>
              <span className="text-xl">+</span>
            </button>
            <button className="flex items-center justify-between rounded-lg border border-slate-200 p-3 text-sm font-medium text-slate-700 hover:border-primary hover:text-primary transition-colors">
              <span>Create New Blog Post</span>
              <span className="text-xl">+</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
