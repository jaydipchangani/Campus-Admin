import React, { useState } from 'react';

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === 'admin' && password === 'password') {

      window.location.href = '/admin/dashboard';
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-md w-full p-4 bg-white rounded shadow-md">
        <h2 className="text-3xl font-bold mb-4">Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2">
            <span className="text-gray-700">Username</span>
            <input
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              className="w-full p-2 pl-10 text-sm text-gray-700"
              placeholder="Enter username"
            />
          </label>
          <label className="block mb-2">
            <span className="text-gray-700">Password</span>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full p-2 pl-10 text-sm text-gray-700"
              placeholder="Enter password"
            />
          </label>
          {error && (
            <div className="text-red-500 text-sm mb-2">{error}</div>
          )}
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;