"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { LayoutDashboard, Users, BarChart3, Settings, LifeBuoy } from "lucide-react";
import Card from "./components/Card";

export default function AdminPage() {
  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-[#faf6ed] via-[#f5e6c8] to-[#f0ddb0]">
      
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          Welcome to NCJ Admin 🚀
        </h1>
        <p className="text-gray-500">
          Manage your platform efficiently from one place
        </p>
      </motion.div>

      {/* QUICK ACCESS CARDS */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        <Link href="/admin/dashboard">
          <Card title="Dashboard" icon={LayoutDashboard}>
            View system overview and activity
          </Card>
        </Link>

        <Link href="/admin/users">
          <Card title="Users" icon={Users}>
            Manage users and roles
          </Card>
        </Link>

        <Link href="/admin/analytics">
          <Card title="Analytics" icon={BarChart3}>
            View reports and insights
          </Card>
        </Link>

        <Link href="/admin/support">
          <Card title="Support" icon={LifeBuoy}>
            Handle support tickets
          </Card>
        </Link>

        <Link href="/admin/settings">
          <Card title="Settings" icon={Settings}>
            Configure system preferences
          </Card>
        </Link>

      </div>

      {/* INFO CARD */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-8"
      >
        <Card title="System Status">
          <p>✅ All systems operational</p>
          <p>🚀 No critical issues detected</p>
        </Card>
      </motion.div>
    </div>
  );
}