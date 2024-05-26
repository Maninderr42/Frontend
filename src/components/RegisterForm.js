// src/components/RegisterForm.js
import React from 'react';
import { Label } from './Label';
import { Input } from './Input';
import { RadioGroup, RadioGroupItem } from './RadioGroup';
import { Button } from './Button';

export default function RegisterForm() {
  return (
    <div className="mx-auto max-w-md space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Register</h1>
        <p className="text-gray-500 dark:text-gray-400">Enter your information to create an account</p>
      </div>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="first-name">First name</Label>
            <Input id="first-name" placeholder="John" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="last-name">Last name</Label>
            <Input id="last-name" placeholder="Doe" required />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="m@example.com" required type="email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" placeholder="+1 (555) 555-5555" required type="tel" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="user-type">I am registering as a:</Label>
          <RadioGroup className="flex items-center gap-4" defaultValue="buyer" id="user-type">
            <Label className="flex items-center gap-2 cursor-pointer" htmlFor="buyer">
              <RadioGroupItem id="buyer" value="buyer" />
              Buyer
            </Label>
            <Label className="flex items-center gap-2 cursor-pointer" htmlFor="seller">
              <RadioGroupItem id="seller" value="seller" />
              Seller
            </Label>
          </RadioGroup>
        </div>
        <Button className="w-full" type="submit">
          Register
        </Button>
      </div>
    </div>
  );
}
