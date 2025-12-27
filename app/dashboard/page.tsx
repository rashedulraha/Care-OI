import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, DollarSign, FileText } from "lucide-react";
import Link from "next/link";

// Sample booking data - in a real app this would come from a database
const bookings = [
  {
    id: "BK001",
    serviceName: "Baby Care",
    date: "2025-01-15",
    duration: "8 hours",
    cost: 2400,
    status: "confirmed",
    location: "Dhanmondi, Dhaka",
  },
  {
    id: "BK002",
    serviceName: "Elderly Care",
    date: "2025-01-20",
    duration: "3 days",
    cost: 7500,
    status: "pending",
    location: "Gulshan, Dhaka",
  },
  {
    id: "BK003",
    serviceName: "Sick People Service",
    date: "2024-12-28",
    duration: "2 days",
    cost: 6000,
    status: "completed",
    location: "Uttara, Dhaka",
  },
  {
    id: "BK004",
    serviceName: "Baby Care",
    date: "2025-02-01",
    duration: "5 hours",
    cost: 1500,
    status: "pending",
    location: "Banani, Dhaka",
  },
  {
    id: "BK005",
    serviceName: "Elderly Care",
    date: "2024-12-25",
    duration: "1 day",
    cost: 2500,
    status: "completed",
    location: "Mirpur, Dhaka",
  },
];

const getStatusVariant = (status: string) => {
  switch (status) {
    case "pending":
      return "secondary";
    case "confirmed":
      return "default";
    case "completed":
      return "outline";
    default:
      return "secondary";
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "pending":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
    case "confirmed":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
    case "completed":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
    default:
      return "";
  }
};

export default function DashboardPage() {
  const totalSpent = bookings.reduce((sum, booking) => sum + booking.cost, 0);
  const pendingBookings = bookings.filter((b) => b.status === "pending").length;
  const completedBookings = bookings.filter(
    (b) => b.status === "completed"
  ).length;

  return (
    <div className="flex flex-col min-h-screen">
      {/* <Navbar /> */}

      <main className="flex-1 py-12 bg-linear-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              My Bookings
            </h1>
            <p className="text-muted-foreground">
              View and manage your caregiving service bookings
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Bookings
                </CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{bookings.length}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {pendingBookings} pending, {completedBookings} completed
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Pending Bookings
                </CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{pendingBookings}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  Awaiting confirmation
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Spent
                </CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  ৳{totalSpent.toLocaleString()}
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Across all services
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Bookings Table */}
          <Card>
            <CardHeader>
              <CardTitle>Booking History</CardTitle>
              <CardDescription>
                A complete list of your caregiving service bookings
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Desktop Table */}
              <div className="hidden md:block overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Booking ID</TableHead>
                      <TableHead>Service Name</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Cost</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {bookings.map((booking) => (
                      <TableRow key={booking.id}>
                        <TableCell className="font-medium">
                          {booking.id}
                        </TableCell>
                        <TableCell>{booking.serviceName}</TableCell>
                        <TableCell>
                          {new Date(booking.date).toLocaleDateString()}
                        </TableCell>
                        <TableCell>{booking.duration}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          {booking.location}
                        </TableCell>
                        <TableCell className="font-medium">
                          ৳{booking.cost.toLocaleString()}
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={getStatusVariant(booking.status)}
                            className={getStatusColor(booking.status)}>
                            {booking.status.charAt(0).toUpperCase() +
                              booking.status.slice(1)}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {/* Mobile Cards */}
              <div className="md:hidden space-y-4">
                {bookings.map((booking) => (
                  <Card key={booking.id}>
                    <CardContent className="p-4 space-y-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-semibold text-foreground">
                            {booking.serviceName}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {booking.id}
                          </p>
                        </div>
                        <Badge
                          variant={getStatusVariant(booking.status)}
                          className={getStatusColor(booking.status)}>
                          {booking.status.charAt(0).toUpperCase() +
                            booking.status.slice(1)}
                        </Badge>
                      </div>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Date:</span>
                          <span className="font-medium">
                            {new Date(booking.date).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">
                            Duration:
                          </span>
                          <span className="font-medium">
                            {booking.duration}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">
                            Location:
                          </span>
                          <span className="font-medium">
                            {booking.location}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Cost:</span>
                          <span className="font-semibold text-primary">
                            ৳{booking.cost.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {bookings.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground mb-4">
                    You don't have any bookings yet
                  </p>
                  <Link href="/">
                    <Button>Browse Services</Button>
                  </Link>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>

      {/* <Footer /> */}
    </div>
  );
}
