import React, { useState } from 'react';

const Register = () => {
  const [email, setEmail] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [enteredOtp, setEnteredOtp] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const generateOtp = () => {
    // In real apps, OTP should be generated on backend
    const randomOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setOtp(randomOtp);
    alert(`OTP sent to ${email}: ${randomOtp}`); // Replace with real email send
    setOtpSent(true);
  };

  const verifyOtp = () => {
    if (enteredOtp === otp) {
      alert('OTP Verified Successfully!');
      setIsVerified(true);
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  const handleRegister = () => {
    if (!password || !confirmPassword) {
      alert('Please enter and confirm your password');
      return;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    alert('Registration successful!');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Register Your Account</h2>

        {/* Email Input */}
        <label className="block text-sm font-medium mb-1">Email Address</label>
        <div className="flex mb-4">
          <input
            type="email"
            className="flex-1 border border-gray-300 rounded-l px-3 py-2 focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            disabled={otpSent}
          />
          <button
            onClick={generateOtp}
            className="bg-indigo-600 text-white px-4 rounded-r hover:bg-indigo-700"
            disabled={!email || otpSent}
          >
            Send OTP
          </button>
        </div>

        {/* OTP Input */}
        {otpSent && !isVerified && (
          <>
            <label className="block text-sm font-medium mb-1">Enter OTP</label>
            <div className="flex mb-4">
              <input
                type="text"
                className="flex-1 border border-gray-300 rounded-l px-3 py-2 focus:outline-none"
                value={enteredOtp}
                onChange={(e) => setEnteredOtp(e.target.value)}
                placeholder="Enter the 6-digit OTP"
              />
              <button
                onClick={verifyOtp}
                className="bg-green-600 text-white px-4 rounded-r hover:bg-green-700"
              >
                Verify
              </button>
            </div>
          </>
        )}

        {/* Password Input - Only after OTP verified */}
        {isVerified && (
          <>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <label className="block text-sm font-medium mb-1">Confirm Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded px-3 py-2 mb-6 focus:outline-none"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <button
              onClick={handleRegister}
              className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
            >
              Register Now
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Register;
