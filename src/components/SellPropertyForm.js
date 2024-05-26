// src/components/SellPropertyForm.js
import React from 'react';
import { Label } from './Label';
import { Input } from './Input';
import { Textarea } from './Textarea';
import { Button } from './Button';
import { Table, TableHead, TableRow, TableHeader, TableCell, TableBody } from './Table';
import { Select, SelectTrigger, SelectValue, SelectItem, SelectContent } from './Select';

export default function SellPropertyForm() {
  return (
    <>
      <div className="mx-auto max-w-4xl space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Sell Your Property</h1>
          <p className="text-gray-500 dark:text-gray-400">List your property for sale and reach potential buyers.</p>
        </div>
        <div className="space-y-4">
          <form>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="property-type">Property Type</Label>
                <Select id="property-type" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select property type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="house">House</SelectItem>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="condo">Condominium</SelectItem>
                    <SelectItem value="townhouse">Townhouse</SelectItem>
                    <SelectItem value="land">Land</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="bedrooms">Bedrooms</Label>
                <Select id="bedrooms" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select number of bedrooms" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5+">5 or more</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="bathrooms">Bathrooms</Label>
                <Select id="bathrooms" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select number of bathrooms" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5+">5 or more</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="area">Area (sq ft)</Label>
                <Input id="area" placeholder="Enter property area" required type="number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="price">Price</Label>
                <Input id="price" placeholder="Enter asking price" required type="number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="Enter property location" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" placeholder="Describe your property" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="nearby">Nearby Amenities</Label>
              <Textarea id="nearby" placeholder="List nearby hospitals, schools, etc." required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="images">Property Images</Label>
              <Input id="images" multiple required type="file" />
            </div>
            <Button className="w-full mt-4" type="submit">
              List Property
            </Button>
          </form>
        </div>
      </div>
      <div className="mx-auto max-w-4xl space-y-6 mt-12">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Your Listed Properties</h1>
          <p className="text-gray-500 dark:text-gray-400">Manage and update the properties you have listed.</p>
        </div>
        <div className="space-y-4">
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>Property Type</TableHeader>
                <TableHeader>Bedrooms</TableHeader>
                <TableHeader>Bathrooms</TableHeader>
                <TableHeader>Area (sq ft)</TableHeader>
                <TableHeader>Price</TableHeader>
                <TableHeader>Location</TableHeader>
                <TableHeader>Actions</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>House</TableCell>
                <TableCell>3</TableCell>
                <TableCell>2</TableCell>
                <TableCell>1800</TableCell>
                <TableCell>$450,000</TableCell>
                <TableCell>123 Main St, Anytown USA</TableCell>
                <TableCell>
                  <Button className="mr-2" size="sm" variant="outline">
                    Edit
                  </Button>
                  <Button className="text-red-500" size="sm" variant="outline">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Apartment</TableCell>
                <TableCell>2</TableCell>
                <TableCell>1</TableCell>
                <TableCell>900</TableCell>
                <TableCell>$275,000</TableCell>
                <TableCell>456 Oak Rd, Somewhere City</TableCell>
                <TableCell>
                  <Button className="mr-2" size="sm" variant="outline">
                    Edit
                  </Button>
                  <Button className="text-red-500" size="sm" variant="outline">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Townhouse</TableCell>
                <TableCell>4</TableCell>
                <TableCell>3</TableCell>
                <TableCell>1500</TableCell>
                <TableCell>$375,000</TableCell>
                <TableCell>789 Elm St, Othertown</TableCell>
                <TableCell>
                  <Button className="mr-2" size="sm" variant="outline">
                    Edit
                  </Button>
                  <Button className="text-red-500" size="sm" variant="outline">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}
