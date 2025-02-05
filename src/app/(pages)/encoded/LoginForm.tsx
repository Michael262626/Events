"use client";

import { useState } from "react";

export default function LoginForm() {
  const [users, setUsers] = useState<
    { id: number; fullName: string; email: string; phoneNumber: string; role: string; payments: { fileUrl: string }[] }[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch Users
  const fetchUsers = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/bacc", { method: "GET" });

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await response.json();
      console.log("API Response:", data);

      setUsers(data.users);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // Delete User
  const deleteUser = async (userId: number) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    try {
      const response = await fetch(`/api/delete?id=${userId}`, { method: "DELETE" });

      if (!response.ok) {
        throw new Error("Failed to delete user");
      }

      setUsers(users.filter((user) => user.id !== userId));
    } catch (err: any) {
      setError(err.message || "Failed to delete user");
    }
  };

  // Convert users to CSV format
  const downloadCSV = () => {
    if (users.length === 0) return;

    const headers = "ID,Full Name,Email,Phone Number,Role,Payment File URL\n";
    const rows = users
      .map(
        (user) =>
          `${user.id},"${user.fullName}","${user.email}","${user.phoneNumber}","${user.role}","${
            user.payments.length > 0 ? user.payments[0].fileUrl : ""
          }"`
      )
      .join("\n");

    const csvContent = `data:text/csv;charset=utf-8,${headers}${rows}`;
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "users.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-start p-6">
      <div className="w-full">
        <h2 className="text-3xl font-bold mb-6">User Management</h2>
  
        <button
          onClick={fetchUsers}
          className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-blue-500 transition disabled:bg-gray-700"
          disabled={loading}
        >
          {loading ? "Loading..." : "Fetch Users"}
        </button>
  
        {error && <p className="text-red-400 mt-4">{error}</p>}
  
        {users.length > 0 && (
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4">User List</h3>
  
            <button
              onClick={downloadCSV}
              className="mb-4 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-500 transition"
            >
              Download as CSV
            </button>
  
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {users.map((user) => (
                <div
                  key={user.id}
                  className="relative flex flex-col border border-gray-700 p-5 rounded-xl bg-gray-800 shadow-md text-left"
                >
                  {/* Delete Button at the Top Right */}
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-500 transition"
                  >
                    Delete
                  </button>
  
                  {/* User Info */}
                  <div className="flex-1 space-y-2">
                    <p className="text-lg font-medium">
                      <strong>Name:</strong> {user.fullName}
                    </p>
                    <p className="text-gray-300">
                      <strong>Email:</strong> {user.email}
                    </p>
                    <p className="text-gray-300">
                      <strong>Phone:</strong> {user.phoneNumber}
                    </p>
                    <p className="text-gray-300">
                      <strong>Role:</strong> {user.role}
                    </p>
                  </div>
  
                  {/* Image at the Bottom */}
                  {user.payments.length > 0 && user.payments[0]?.fileUrl && (
                    <div className="mt-4 w-full">
                      <strong>Payment Proof:</strong>
                      <img
                        src={user.payments[0].fileUrl}
                        alt="Payment Proof"
                        className="mt-2 w-full h-40 object-cover rounded-lg"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );  
}
