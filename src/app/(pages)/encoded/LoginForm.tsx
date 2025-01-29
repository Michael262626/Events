"use client";

import { useState } from "react";

export default function LoginForm() {
  const [users, setUsers] = useState<{ id: number; fullName: string; email: string; phoneNumber: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchUsers = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/bacc", { method: "GET" });

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await response.json();
      setUsers(data.users);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };
    return (
      <div className=" min-h-screen mx-auto p-6 border border-gray-700 shadow-lg bg-gray-900 text-white">
        <h2 className="text-2xl font-semibold text-center mb-6">Fetch Users</h2>
    
        <button
          onClick={fetchUsers}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-500 transition disabled:bg-gray-700"
          disabled={loading}
        >
          {loading ? "Loading..." : "Get Users"}
        </button>
    
        {error && <p className="text-red-400 mt-4 text-center">{error}</p>}
    
        {users.length > 0 && (
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4">User List</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {users.map((user) => (
                <div key={user.id} className="border border-gray-700 p-4 rounded-lg bg-gray-800 shadow-md">
                  <p className="text-lg font-medium">
                    <strong>Name:</strong> {user.fullName}
                  </p>
                  <p className="text-gray-300">
                    <strong>Email:</strong> {user.email}
                  </p>
                  <p className="text-gray-300">
                    <strong>Phone:</strong> {user.phoneNumber}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );    
}
