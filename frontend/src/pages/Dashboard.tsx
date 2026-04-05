import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useAuth } from "@/contexts/AuthContext";
import { format } from "date-fns";
import { CalendarIcon, LogOut, Plus, User, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import UserProfileCard from "@/components/dashboard/UserProfileCard";
const problems = [
  "Hearing Loss",
  "Tinnitus",
  "Hearing Aid Fitting",
  "Pediatric Evaluation",
  "Newborn Screening",
  "Cochlear Implant",
  "Custom Ear Molds",
  "Industrial Screening",
  "Other",
];

const OnboardingForm = () => {
  const { updateProfile } = useAuth();
  const [form, setForm] = useState({ name: "", dob: "", phone: "", gender: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.dob || !form.phone || !form.gender) {
      toast.error("Please fill in all fields.");
      return;
    }
    updateProfile({ ...form, isOnboarded: true });
    toast.success("Profile completed!");
  };

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader className="text-center">
        <User className="h-10 w-10 text-primary mx-auto mb-2" />
        <CardTitle className="font-serif text-2xl">Complete Your Profile</CardTitle>
        <CardDescription>Please provide your basic information to get started.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="John Doe" />
          </div>
          <div>
            <Label htmlFor="dob">Date of Birth</Label>
            <Input id="dob" type="date" value={form.dob} onChange={(e) => setForm({ ...form, dob: e.target.value })} />
          </div>
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="(868) 000-0000" />
          </div>
          <div>
            <Label htmlFor="gender">Gender</Label>
            <Select value={form.gender} onValueChange={(v) => setForm({ ...form, gender: v })}>
              <SelectTrigger><SelectValue placeholder="Select gender" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
                <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className="w-full">Save Profile</Button>
        </form>
      </CardContent>
    </Card>
  );
};

const BookAppointment = ({ onDone }: { onDone: () => void }) => {
  const { addAppointment } = useAuth();
  const [date, setDate] = useState<Date>();
  const [problem, setProblem] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !problem) {
      toast.error("Please select a date and concern.");
      return;
    }
    addAppointment({
      date: date.toISOString(),
      problem,
      notes,
      status: "upcoming",
    });
    toast.success("Appointment booked successfully!");
    onDone();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-serif text-xl">Book New Appointment</CardTitle>
        <CardDescription>Select your preferred date and tell us about your concern.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <Label>Preferred Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}>
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={(d) => d < new Date()}
                  initialFocus
                  className="p-3 pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>
          <div>
            <Label>Concern / Problem</Label>
            <Select value={problem} onValueChange={setProblem}>
              <SelectTrigger><SelectValue placeholder="Select your concern" /></SelectTrigger>
              <SelectContent>
                {problems.map((p) => (
                  <SelectItem key={p} value={p}>{p}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Additional Notes (optional)</Label>
            <Textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Any additional details..." rows={3} />
          </div>
          <div className="flex gap-3">
            <Button type="submit" className="flex-1">Confirm Booking</Button>
            <Button type="button" variant="outline" onClick={onDone}>Cancel</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

const statusColor = {
  upcoming: "bg-primary/15 text-primary border-primary/30",
  completed: "bg-green-100 text-green-800 border-green-300",
  cancelled: "bg-destructive/15 text-destructive border-destructive/30",
};

const Dashboard = () => {
  const { user, logout, appointments, cancelAppointment } = useAuth();
  const navigate = useNavigate();
  const [showBooking, setShowBooking] = useState(false);

  if (!user) {
    navigate("/login");
    return null;
  }

  if (!user.isOnboarded) {
    return (
      <Layout>
        <section className="py-16 min-h-[60vh] flex items-center">
          <div className="container mx-auto px-4">
            <OnboardingForm />
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-10">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="font-serif text-3xl font-bold text-foreground">
                Welcome, {user.name}
              </h1>
              <p className="text-muted-foreground text-sm">{user.email}</p>
            </div>
            <div className="flex gap-2">
              <Button size="sm" onClick={() => setShowBooking(true)}>
                <Plus className="mr-1 h-4 w-4" /> Book Appointment
              </Button>
              <Button size="sm" variant="outline" onClick={() => { logout(); navigate("/"); }}>
                <LogOut className="mr-1 h-4 w-4" /> Logout
              </Button>
            </div>
          </div>

          {/* Profile Card */}
          <div className="mb-8">
            <UserProfileCard user={user} />
          </div>

          {/* Booking Form */}
          {showBooking && (
            <div className="mb-8 animate-fade-in">
              <BookAppointment onDone={() => setShowBooking(false)} />
            </div>
          )}

          {/* Appointments */}
          <div>
            <h2 className="font-serif text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" /> Your Appointments
            </h2>
            {appointments.length === 0 ? (
              <Card>
                <CardContent className="p-8 text-center text-muted-foreground">
                  No appointments yet. Book your first appointment above!
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-3">
                {appointments.map((appt) => (
                  <Card key={appt.id}>
                    <CardContent className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-semibold text-foreground">{appt.problem}</span>
                          <Badge variant="outline" className={statusColor[appt.status]}>
                            {appt.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {format(new Date(appt.date), "EEEE, MMMM d, yyyy")}
                        </p>
                        {appt.notes && (
                          <p className="text-xs text-muted-foreground">Notes: {appt.notes}</p>
                        )}
                      </div>
                      {appt.status === "upcoming" && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-destructive border-destructive/30 hover:bg-destructive/10"
                          onClick={() => {
                            cancelAppointment(appt.id);
                            toast.info("Appointment cancelled.");
                          }}
                        >
                          Cancel
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Dashboard;
