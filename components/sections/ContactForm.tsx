'use client';

import * as React from 'react'; // This line is now fixed
import { Button } from '../ui/Button'; // Changed path for compatibility
import { Input } from '../ui/Input'; // Changed path for compatibility
import { Select } from '../ui/Select'; // Changed path for compatibility

// Helper component for form rows
const FormRow: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
    {children}
  </div>
);

// Helper component for form fields
const FormField: React.FC<{
  id: string;
  label: string;
  className?: string;
  children: React.ReactNode;
}> = ({ id, label, className, children }) => (
  <div className={cn('space-y-2', className)}>
    <label htmlFor={id} className="text-sm font-medium text-gray-700">
      {label}
    </label>
    {children}
  </div>
);

// We'd import cn from '@/lib/utils'
// This is a simplified version for this file
const cn = (...classes: (string | boolean | undefined)[]) =>
  classes.filter(Boolean).join(' ');

export const ContactForm = () => {
  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        console.log('Form submitted');
        // Handle form submission logic here
      }}
    >
      <FormRow>
        <FormField id="name" label="Name">
          <Input id="name" type="text" placeholder="John Doe" required />
        </FormField>
        <FormField id="location" label="Location">
          <Select id="location" defaultValue="" required>
            <option value="" disabled>
              Select a location
            </option>
            <option value="loc1">Location 1</option>
            <option value="loc2">Location 2</option>
            <option value="loc3">Location 3</option>
          </Select>
        </FormField>
      </FormRow>

      <FormRow>
        <FormField id="phone" label="Phone">
          <div className="flex">
            <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-100 px-3 text-sm text-gray-600">
              +91
            </span>
            <Input
              id="phone"
              type="tel"
              placeholder="9876543210"
              className="rounded-l-none"
              required
            />
          </div>
        </FormField>
        <FormField id="email" label="Email">
          <Input
            id="email"
            type="email"
            placeholder="john.doe@example.com"
            required
          />
        </FormField>
      </FormRow>

      <FormRow>
        <FormField id="company" label="Company Name">
          <Input id="company" type="text" placeholder="Vertex Inc." />
        </FormField>
        <FormField id="team-size" label="Team Size">
          <Input id="team-size" type="number" placeholder="e.g., 10" />
        </FormField>
      </FormRow>

      <FormField id="description" label="Description (Optional)">
        <textarea
          id="description"
          rows={3}
          placeholder="Tell us a bit about your needs..."
          className={cn(
            'flex w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm',
            'placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2',
            'focus-visible:ring-blue-500'
          )}
        />
        <p className="text-xs text-right text-gray-400">0/125</p>
      </FormField>

      <div className="space-y-4 pt-2">
        <div className="flex items-center">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            defaultChecked
          />
          <label
            htmlFor="consent"
            className="ml-3 block text-sm text-gray-700"
          >
            Consent to contact me via Call, SMS, Email, or WhatsApp
          </label>
        </div>

        <Button type="submit" className="w-full md:w-auto">
          Get a Quote
        </Button>
      </div>
    </form>
  );
};


