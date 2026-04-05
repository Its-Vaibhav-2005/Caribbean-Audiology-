import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface UserProfile {
  email: string;
  name: string;
  dob: string;
  phone: string;
  gender: string;
  isOnboarded: boolean;
}

export interface Appointment {
  id: string;
  date: string;
  problem: string;
  notes: string;
  status: "upcoming" | "completed" | "cancelled";
  createdAt: string;
}

interface AuthContextType {
  user: UserProfile | null;
  isAuthenticated: boolean;
  login: (email: string) => void;
  logout: () => void;
  updateProfile: (profile: Partial<UserProfile>) => void;
  appointments: Appointment[];
  addAppointment: (appt: Omit<Appointment, "id" | "createdAt">) => void;
  cancelAppointment: (id: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserProfile | null>(() => {
    const stored = localStorage.getItem("cah_user");
    return stored ? JSON.parse(stored) : null;
  });

  const [appointments, setAppointments] = useState<Appointment[]>(() => {
    const stored = localStorage.getItem("cah_appointments");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    if (user) localStorage.setItem("cah_user", JSON.stringify(user));
    else localStorage.removeItem("cah_user");
  }, [user]);

  useEffect(() => {
    localStorage.setItem("cah_appointments", JSON.stringify(appointments));
  }, [appointments]);

  const login = (email: string) => {
    const existing = localStorage.getItem("cah_user");
    if (existing) {
      const parsed = JSON.parse(existing);
      if (parsed.email === email) {
        setUser(parsed);
        return;
      }
    }
    setUser({ email, name: "", dob: "", phone: "", gender: "", isOnboarded: false });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("cah_user");
  };

  const updateProfile = (profile: Partial<UserProfile>) => {
    setUser((prev) => prev ? { ...prev, ...profile } : null);
  };

  const addAppointment = (appt: Omit<Appointment, "id" | "createdAt">) => {
    const newAppt: Appointment = {
      ...appt,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };
    setAppointments((prev) => [newAppt, ...prev]);
  };

  const cancelAppointment = (id: string) => {
    setAppointments((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status: "cancelled" as const } : a))
    );
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
        updateProfile,
        appointments,
        addAppointment,
        cancelAppointment,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
