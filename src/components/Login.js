// src/Login.js
import React from 'react';
import { Label } from './Label';
import { Input } from './Input';
import { Button } from './Button';

export default function Login() {
  return (
    <div className="mx-auto max-w-md space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Login</h1>
        <p className="text-gray-500 dark:text-gray-400">Enter your credentials to access your account</p>
      </div>
      <div className="space-y-4">
        <form>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="m@example.com" required type="email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" placeholder="******" required type="password" />
          </div>
          <Button className="w-full mt-4" type="submit">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
