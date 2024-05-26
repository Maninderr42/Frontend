// src/components/ui/Select.js
import React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon } from '@radix-ui/react-icons';

export const Select = SelectPrimitive.Root;
export const SelectTrigger = React.forwardRef(({ children, ...props }, ref) => (
  <SelectPrimitive.Trigger ref={ref} className="select-trigger" {...props}>
    {children}
    <SelectPrimitive.Icon className="ml-2">
      <ChevronDownIcon />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = 'SelectTrigger';

export const SelectContent = React.forwardRef(({ children, ...props }, ref) => (
  <SelectPrimitive.Content ref={ref} className="select-content" {...props}>
    <SelectPrimitive.Viewport className="select-viewport">{children}</SelectPrimitive.Viewport>
  </SelectPrimitive.Content>
));
SelectContent.displayName = 'SelectContent';

export const SelectItem = React.forwardRef(({ children, ...props }, ref) => (
  <SelectPrimitive.Item ref={ref} className="select-item" {...props}>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    <SelectPrimitive.ItemIndicator className="select-item-indicator">
      <CheckIcon />
    </SelectPrimitive.ItemIndicator>
  </SelectPrimitive.Item>
));
SelectItem.displayName = 'SelectItem';

export const SelectValue = SelectPrimitive.Value;
