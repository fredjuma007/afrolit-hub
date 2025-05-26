"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  BookOpen,
  Users,
  DollarSign,
  TrendingUp,
  Search,
  Filter,
  MoreHorizontal,
  Eye,
  CheckCircle,
  XCircle,
  Clock,
  Download,
  Bell,
  Settings,
  LogOut,
  Home,
  FileText,
  CreditCard,
  BarChart3,
  UserCheck,
  AlertTriangle,
} from "lucide-react"

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock data
  const stats = {
    totalUsers: 12543,
    totalAuthors: 3421,
    totalReaders: 9122,
    totalSubmissions: 1876,
    pendingReviews: 234,
    totalRevenue: 2450000,
    monthlyGrowth: 12.5,
  }

  const recentSubmissions = [
    {
      id: 1,
      title: "The Baobab's Secret",
      author: "Amara Okafor",
      genre: "Fiction",
      submittedAt: "2024-01-15",
      status: "pending",
      fee: 2000,
    },
    {
      id: 2,
      title: "Lagos Nights",
      author: "Kwame Asante",
      genre: "Poetry",
      submittedAt: "2024-01-14",
      status: "approved",
      fee: 2000,
    },
    {
      id: 3,
      title: "Serengeti Dreams",
      author: "Zara Mthembu",
      genre: "Non-fiction",
      submittedAt: "2024-01-13",
      status: "under_review",
      fee: 6000,
    },
  ]

  const recentUsers = [
    {
      id: 1,
      name: "John Kamau",
      email: "john@example.com",
      role: "unpublished_author",
      joinedAt: "2024-01-15",
      status: "active",
    },
    {
      id: 2,
      name: "Grace Wanjiku",
      email: "grace@example.com",
      role: "reader",
      joinedAt: "2024-01-14",
      status: "active",
    },
    {
      id: 3,
      name: "David Ochieng",
      email: "david@example.com",
      role: "published_author",
      joinedAt: "2024-01-13",
      status: "active",
    },
  ]

  const recentTransactions = [
    {
      id: "TXN001",
      user: "Amara Okafor",
      amount: 2000,
      type: "submission_fee",
      status: "completed",
      date: "2024-01-15",
    },
    {
      id: "TXN002",
      user: "Kwame Asante",
      amount: 15000,
      type: "author_payout",
      status: "completed",
      date: "2024-01-14",
    },
    {
      id: "TXN003",
      user: "Zara Mthembu",
      amount: 6000,
      type: "submission_fee",
      status: "pending",
      date: "2024-01-13",
    },
  ]

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      pending: { color: "bg-yellow-100 text-yellow-800", label: "Pending" },
      approved: { color: "bg-green-100 text-green-800", label: "Approved" },
      rejected: { color: "bg-red-100 text-red-800", label: "Rejected" },
      under_review: { color: "bg-blue-100 text-blue-800", label: "Under Review" },
      active: { color: "bg-green-100 text-green-800", label: "Active" },
      completed: { color: "bg-green-100 text-green-800", label: "Completed" },
    }
    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.pending
    return <Badge className={config.color}>{config.label}</Badge>
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      {/* Header */}
      <header className="border-b border-orange-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-orange-600" />
              <span className="text-2xl font-bold text-orange-900">AfriStories</span>
              <Badge className="bg-orange-100 text-orange-800 border-orange-200">Admin</Badge>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-orange-600">
              <Bell className="h-5 w-5" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Admin" />
                    <AvatarFallback className="bg-orange-100 text-orange-600">AD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">Admin User</p>
                    <p className="text-xs leading-none text-muted-foreground">admin@afristories.com</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Home className="mr-2 h-4 w-4" />
                  <span>View Site</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 min-h-screen bg-white border-r border-orange-200">
          <nav className="p-4 space-y-2">
            <Button
              variant={activeTab === "overview" ? "default" : "ghost"}
              className={`w-full justify-start ${
                activeTab === "overview"
                  ? "bg-orange-600 text-white hover:bg-orange-700"
                  : "text-orange-700 hover:bg-orange-50"
              }`}
              onClick={() => setActiveTab("overview")}
            >
              <BarChart3 className="mr-2 h-4 w-4" />
              Overview
            </Button>
            <Button
              variant={activeTab === "users" ? "default" : "ghost"}
              className={`w-full justify-start ${
                activeTab === "users"
                  ? "bg-orange-600 text-white hover:bg-orange-700"
                  : "text-orange-700 hover:bg-orange-50"
              }`}
              onClick={() => setActiveTab("users")}
            >
              <Users className="mr-2 h-4 w-4" />
              Users
            </Button>
            <Button
              variant={activeTab === "content" ? "default" : "ghost"}
              className={`w-full justify-start ${
                activeTab === "content"
                  ? "bg-orange-600 text-white hover:bg-orange-700"
                  : "text-orange-700 hover:bg-orange-50"
              }`}
              onClick={() => setActiveTab("content")}
            >
              <FileText className="mr-2 h-4 w-4" />
              Content
            </Button>
            <Button
              variant={activeTab === "payments" ? "default" : "ghost"}
              className={`w-full justify-start ${
                activeTab === "payments"
                  ? "bg-orange-600 text-white hover:bg-orange-700"
                  : "text-orange-700 hover:bg-orange-50"
              }`}
              onClick={() => setActiveTab("payments")}
            >
              <CreditCard className="mr-2 h-4 w-4" />
              Payments
            </Button>
            <Button
              variant={activeTab === "analytics" ? "default" : "ghost"}
              className={`w-full justify-start ${
                activeTab === "analytics"
                  ? "bg-orange-600 text-white hover:bg-orange-700"
                  : "text-orange-700 hover:bg-orange-50"
              }`}
              onClick={() => setActiveTab("analytics")}
            >
              <TrendingUp className="mr-2 h-4 w-4" />
              Analytics
            </Button>
            <Button
              variant={activeTab === "settings" ? "default" : "ghost"}
              className={`w-full justify-start ${
                activeTab === "settings"
                  ? "bg-orange-600 text-white hover:bg-orange-700"
                  : "text-orange-700 hover:bg-orange-50"
              }`}
              onClick={() => setActiveTab("settings")}
            >
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-orange-900">Dashboard Overview</h1>
                <p className="text-orange-700">Welcome back! Here's what's happening on your platform.</p>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="border-orange-200">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-orange-700">Total Users</CardTitle>
                    <Users className="h-4 w-4 text-orange-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-orange-900">{stats.totalUsers.toLocaleString()}</div>
                    <p className="text-xs text-orange-600">+{stats.monthlyGrowth}% from last month</p>
                  </CardContent>
                </Card>
                <Card className="border-orange-200">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-orange-700">Authors</CardTitle>
                    <BookOpen className="h-4 w-4 text-orange-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-orange-900">{stats.totalAuthors.toLocaleString()}</div>
                    <p className="text-xs text-orange-600">Active writers on platform</p>
                  </CardContent>
                </Card>
                <Card className="border-orange-200">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-orange-700">Submissions</CardTitle>
                    <FileText className="h-4 w-4 text-orange-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-orange-900">{stats.totalSubmissions.toLocaleString()}</div>
                    <p className="text-xs text-orange-600">{stats.pendingReviews} pending review</p>
                  </CardContent>
                </Card>
                <Card className="border-orange-200">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-orange-700">Revenue</CardTitle>
                    <DollarSign className="h-4 w-4 text-orange-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-orange-900">KES {stats.totalRevenue.toLocaleString()}</div>
                    <p className="text-xs text-orange-600">Total platform revenue</p>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="border-orange-200">
                  <CardHeader>
                    <CardTitle className="text-orange-900">Recent Submissions</CardTitle>
                    <CardDescription className="text-orange-700">Latest manuscript submissions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentSubmissions.map((submission) => (
                        <div key={submission.id} className="flex items-center justify-between">
                          <div className="space-y-1">
                            <p className="text-sm font-medium text-orange-900">{submission.title}</p>
                            <p className="text-xs text-orange-600">by {submission.author}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            {getStatusBadge(submission.status)}
                            <Button variant="ghost" size="sm" className="text-orange-600">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-orange-200">
                  <CardHeader>
                    <CardTitle className="text-orange-900">Recent Transactions</CardTitle>
                    <CardDescription className="text-orange-700">Latest M-Pesa transactions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentTransactions.map((transaction) => (
                        <div key={transaction.id} className="flex items-center justify-between">
                          <div className="space-y-1">
                            <p className="text-sm font-medium text-orange-900">{transaction.user}</p>
                            <p className="text-xs text-orange-600">KES {transaction.amount.toLocaleString()}</p>
                          </div>
                          <div className="flex items-center space-x-2">{getStatusBadge(transaction.status)}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {activeTab === "users" && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-3xl font-bold text-orange-900">User Management</h1>
                  <p className="text-orange-700">Manage authors, readers, and their accounts</p>
                </div>
                <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                  <UserCheck className="mr-2 h-4 w-4" />
                  Add User
                </Button>
              </div>

              <div className="flex space-x-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-400 h-4 w-4" />
                  <Input placeholder="Search users..." className="pl-10 border-orange-200 focus:border-orange-400" />
                </div>
                <Button variant="outline" className="border-orange-200 text-orange-600 hover:bg-orange-50">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
              </div>

              <Card className="border-orange-200">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-orange-700">User</TableHead>
                      <TableHead className="text-orange-700">Role</TableHead>
                      <TableHead className="text-orange-700">Joined</TableHead>
                      <TableHead className="text-orange-700">Status</TableHead>
                      <TableHead className="text-orange-700">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>
                          <div className="flex items-center space-x-3">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback className="bg-orange-100 text-orange-600">
                                {user.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium text-orange-900">{user.name}</p>
                              <p className="text-sm text-orange-600">{user.email}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-orange-100 text-orange-800">{user.role.replace("_", " ")}</Badge>
                        </TableCell>
                        <TableCell className="text-orange-700">{user.joinedAt}</TableCell>
                        <TableCell>{getStatusBadge(user.status)}</TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" className="h-8 w-8 p-0">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>View Profile</DropdownMenuItem>
                              <DropdownMenuItem>Edit User</DropdownMenuItem>
                              <DropdownMenuItem>Send Message</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-600">Suspend User</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </div>
          )}

          {activeTab === "content" && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-3xl font-bold text-orange-900">Content Management</h1>
                  <p className="text-orange-700">Review and moderate manuscript submissions</p>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" className="border-orange-200 text-orange-600 hover:bg-orange-50">
                    <Download className="mr-2 h-4 w-4" />
                    Export
                  </Button>
                  <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Bulk Approve
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card className="border-orange-200">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-yellow-600" />
                      <div>
                        <p className="text-sm font-medium text-orange-900">Pending Review</p>
                        <p className="text-2xl font-bold text-orange-900">234</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-orange-200">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="text-sm font-medium text-orange-900">Approved</p>
                        <p className="text-2xl font-bold text-orange-900">1,542</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-orange-200">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <XCircle className="h-5 w-5 text-red-600" />
                      <div>
                        <p className="text-sm font-medium text-orange-900">Rejected</p>
                        <p className="text-2xl font-bold text-orange-900">100</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-orange-200">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <AlertTriangle className="h-5 w-5 text-orange-600" />
                      <div>
                        <p className="text-sm font-medium text-orange-900">Flagged</p>
                        <p className="text-2xl font-bold text-orange-900">12</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-orange-200">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-orange-700">Title</TableHead>
                      <TableHead className="text-orange-700">Author</TableHead>
                      <TableHead className="text-orange-700">Genre</TableHead>
                      <TableHead className="text-orange-700">Submitted</TableHead>
                      <TableHead className="text-orange-700">Status</TableHead>
                      <TableHead className="text-orange-700">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentSubmissions.map((submission) => (
                      <TableRow key={submission.id}>
                        <TableCell className="font-medium text-orange-900">{submission.title}</TableCell>
                        <TableCell className="text-orange-700">{submission.author}</TableCell>
                        <TableCell>
                          <Badge className="bg-orange-100 text-orange-800">{submission.genre}</Badge>
                        </TableCell>
                        <TableCell className="text-orange-700">{submission.submittedAt}</TableCell>
                        <TableCell>{getStatusBadge(submission.status)}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="ghost" size="sm" className="text-orange-600">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-green-600">
                              <CheckCircle className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-red-600">
                              <XCircle className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </div>
          )}

          {activeTab === "payments" && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-3xl font-bold text-orange-900">Payment Management</h1>
                  <p className="text-orange-700">Monitor M-Pesa transactions and author payouts</p>
                </div>
                <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                  <DollarSign className="mr-2 h-4 w-4" />
                  Process Payouts
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-orange-200">
                  <CardHeader>
                    <CardTitle className="text-orange-900">Total Revenue</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-orange-900">KES 2,450,000</div>
                    <p className="text-orange-600">+15% from last month</p>
                  </CardContent>
                </Card>
                <Card className="border-orange-200">
                  <CardHeader>
                    <CardTitle className="text-orange-900">Author Payouts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-orange-900">KES 1,680,000</div>
                    <p className="text-orange-600">Pending: KES 125,000</p>
                  </CardContent>
                </Card>
                <Card className="border-orange-200">
                  <CardHeader>
                    <CardTitle className="text-orange-900">Platform Fees</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-orange-900">KES 770,000</div>
                    <p className="text-orange-600">31% of total revenue</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-orange-200">
                <CardHeader>
                  <CardTitle className="text-orange-900">Recent Transactions</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-orange-700">Transaction ID</TableHead>
                        <TableHead className="text-orange-700">User</TableHead>
                        <TableHead className="text-orange-700">Amount</TableHead>
                        <TableHead className="text-orange-700">Type</TableHead>
                        <TableHead className="text-orange-700">Status</TableHead>
                        <TableHead className="text-orange-700">Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {recentTransactions.map((transaction) => (
                        <TableRow key={transaction.id}>
                          <TableCell className="font-mono text-orange-900">{transaction.id}</TableCell>
                          <TableCell className="text-orange-700">{transaction.user}</TableCell>
                          <TableCell className="font-medium text-orange-900">
                            KES {transaction.amount.toLocaleString()}
                          </TableCell>
                          <TableCell>
                            <Badge className="bg-orange-100 text-orange-800">
                              {transaction.type.replace("_", " ")}
                            </Badge>
                          </TableCell>
                          <TableCell>{getStatusBadge(transaction.status)}</TableCell>
                          <TableCell className="text-orange-700">{transaction.date}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "analytics" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-orange-900">Analytics & Reports</h1>
                <p className="text-orange-700">Platform performance and user engagement metrics</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="border-orange-200">
                  <CardHeader>
                    <CardTitle className="text-sm text-orange-700">Monthly Active Users</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-orange-900">8,542</div>
                    <Progress value={75} className="mt-2" />
                    <p className="text-xs text-orange-600 mt-1">+12% from last month</p>
                  </CardContent>
                </Card>
                <Card className="border-orange-200">
                  <CardHeader>
                    <CardTitle className="text-sm text-orange-700">Engagement Rate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-orange-900">68%</div>
                    <Progress value={68} className="mt-2" />
                    <p className="text-xs text-orange-600 mt-1">+5% from last month</p>
                  </CardContent>
                </Card>
                <Card className="border-orange-200">
                  <CardHeader>
                    <CardTitle className="text-sm text-orange-700">Conversion Rate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-orange-900">24%</div>
                    <Progress value={24} className="mt-2" />
                    <p className="text-xs text-orange-600 mt-1">+3% from last month</p>
                  </CardContent>
                </Card>
                <Card className="border-orange-200">
                  <CardHeader>
                    <CardTitle className="text-sm text-orange-700">Retention Rate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-orange-900">82%</div>
                    <Progress value={82} className="mt-2" />
                    <p className="text-xs text-orange-600 mt-1">+8% from last month</p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="border-orange-200">
                  <CardHeader>
                    <CardTitle className="text-orange-900">Top Performing Content</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {["The Baobab's Secret", "Lagos Nights", "Serengeti Dreams"].map((title, index) => (
                        <div key={title} className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-orange-900">{title}</p>
                            <p className="text-sm text-orange-600">{2500 - index * 300} views</p>
                          </div>
                          <Badge className="bg-orange-100 text-orange-800">#{index + 1}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-orange-200">
                  <CardHeader>
                    <CardTitle className="text-orange-900">Geographic Distribution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { country: "Kenya", percentage: 45 },
                        { country: "Nigeria", percentage: 25 },
                        { country: "South Africa", percentage: 15 },
                        { country: "Ghana", percentage: 10 },
                        { country: "Others", percentage: 5 },
                      ].map((item) => (
                        <div key={item.country} className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-orange-900">{item.country}</span>
                            <span className="text-orange-600">{item.percentage}%</span>
                          </div>
                          <Progress value={item.percentage} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {activeTab === "settings" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-orange-900">Platform Settings</h1>
                <p className="text-orange-700">Configure platform settings and preferences</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="border-orange-200">
                  <CardHeader>
                    <CardTitle className="text-orange-900">General Settings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-orange-700">Platform Name</label>
                      <Input defaultValue="AfriStories" className="mt-1 border-orange-200" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-orange-700">Support Email</label>
                      <Input defaultValue="support@afristories.com" className="mt-1 border-orange-200" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-orange-700">Submission Fee (KES)</label>
                      <Input defaultValue="2000" className="mt-1 border-orange-200" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-orange-200">
                  <CardHeader>
                    <CardTitle className="text-orange-900">M-Pesa Configuration</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-orange-700">Consumer Key</label>
                      <Input type="password" defaultValue="••••••••••••" className="mt-1 border-orange-200" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-orange-700">Consumer Secret</label>
                      <Input type="password" defaultValue="••••••••••••" className="mt-1 border-orange-200" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-orange-700">Shortcode</label>
                      <Input defaultValue="174379" className="mt-1 border-orange-200" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-orange-200">
                  <CardHeader>
                    <CardTitle className="text-orange-900">Email Settings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-orange-700">SMTP Host</label>
                      <Input defaultValue="smtp.gmail.com" className="mt-1 border-orange-200" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-orange-700">SMTP Port</label>
                      <Input defaultValue="587" className="mt-1 border-orange-200" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-orange-700">From Email</label>
                      <Input defaultValue="noreply@afristories.com" className="mt-1 border-orange-200" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-orange-200">
                  <CardHeader>
                    <CardTitle className="text-orange-900">Content Moderation</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium text-orange-700">Auto-approve submissions</label>
                      <input type="checkbox" className="rounded border-orange-300" />
                    </div>
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium text-orange-700">Enable content filtering</label>
                      <input type="checkbox" defaultChecked className="rounded border-orange-300" />
                    </div>
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium text-orange-700">Require manual review</label>
                      <input type="checkbox" defaultChecked className="rounded border-orange-300" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="flex justify-end space-x-4">
                <Button variant="outline" className="border-orange-200 text-orange-600 hover:bg-orange-50">
                  Cancel
                </Button>
                <Button className="bg-orange-600 hover:bg-orange-700 text-white">Save Changes</Button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
