import { Button } from "./Button"
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "./Card"
import { Label } from "./Label"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "./Select"
import { Input } from "./Input"

export default function Component() {
  return (
    <>
      <div className="mx-auto max-w-4xl space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Rental Properties</h1>
          <p className="text-gray-500 dark:text-gray-400">Browse and explore available rental properties.</p>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md dark:bg-gray-950 dark:text-gray-50">
              <div className="relative">
                <img
                  alt="Property Image"
                  className="rounded-t-lg w-full h-48 object-cover"
                  height={250}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "400/250",
                    objectFit: "cover",
                  }}
                  width={400}
                />
                <Button className="absolute top-2 right-2 bg-white dark:bg-gray-950" size="sm" variant="outline">
                  <HeartIcon className="w-4 h-4" />
                  <span className="sr-only">Save to Favorites</span>
                </Button>
              </div>
              <div className="p-4 space-y-2">
                <div className="flex justify-between items-center">
                  <div className="font-semibold text-lg">2 Bedroom Apartment</div>
                  <div className="font-bold text-primary">$1,800/mo</div>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">123 Main St, Anytown USA</div>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <BedIcon className="w-4 h-4" />
                  2 Bedrooms
                  <BathIcon className="w-4 h-4" />
                  1 Bathroom
                  <RulerIcon className="w-4 h-4" />
                  900 sq ft
                </div>
                <Button className="w-full" size="sm" variant="outline">
                  View Details
                </Button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md dark:bg-gray-950 dark:text-gray-50">
              <div className="relative">
                <img
                  alt="Property Image"
                  className="rounded-t-lg w-full h-48 object-cover"
                  height={250}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "400/250",
                    objectFit: "cover",
                  }}
                  width={400}
                />
                <Button className="absolute top-2 right-2 bg-white dark:bg-gray-950" size="sm" variant="outline">
                  <HeartIcon className="w-4 h-4" />
                  <span className="sr-only">Save to Favorites</span>
                </Button>
              </div>
              <div className="p-4 space-y-2">
                <div className="flex justify-between items-center">
                  <div className="font-semibold text-lg">3 Bedroom House</div>
                  <div className="font-bold text-primary">$2,500/mo</div>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">456 Oak Rd, Somewhere City</div>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <BedIcon className="w-4 h-4" />
                  3 Bedrooms
                  <BathIcon className="w-4 h-4" />
                  2 Bathrooms
                  <RulerIcon className="w-4 h-4" />
                  1800 sq ft
                </div>
                <Button className="w-full" size="sm" variant="outline">
                  View Details
                </Button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md dark:bg-gray-950 dark:text-gray-50">
              <div className="relative">
                <img
                  alt="Property Image"
                  className="rounded-t-lg w-full h-48 object-cover"
                  height={250}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "400/250",
                    objectFit: "cover",
                  }}
                  width={400}
                />
                <Button className="absolute top-2 right-2 bg-white dark:bg-gray-950" size="sm" variant="outline">
                  <HeartIcon className="w-4 h-4" />
                  <span className="sr-only">Save to Favorites</span>
                </Button>
              </div>
              <div className="p-4 space-y-2">
                <div className="flex justify-between items-center">
                  <div className="font-semibold text-lg">1 Bedroom Apartment</div>
                  <div className="font-bold text-primary">$1,200/mo</div>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">789 Elm St, Othertown</div>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <BedIcon className="w-4 h-4" />
                  1 Bedroom
                  <BathIcon className="w-4 h-4" />
                  1 Bathroom
                  <RulerIcon className="w-4 h-4" />
                  600 sq ft
                </div>
                <Button className="w-full" size="sm" variant="outline">
                  View Details
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-4xl space-y-6 mt-12">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Seller Details</h1>
          <p className="text-gray-500 dark:text-gray-400">Contact the seller for more information.</p>
        </div>
        <div className="space-y-4 hidden" id="seller-details">
          <Card>
            <CardHeader>
              <CardTitle>2 Bedroom Apartment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="font-semibold">Seller Name</div>
                  <div>John Doe</div>
                </div>
                <div>
                  <div className="font-semibold">Seller Email</div>
                  <div>john.doe@example.com</div>
                </div>
                <div>
                  <div className="font-semibold">Seller Phone</div>
                  <div>(123) 456-7890</div>
                </div>
                <div>
                  <div className="font-semibold">Seller Address</div>
                  <div>123 Main St, Anytown USA</div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="mr-2" size="sm" variant="outline">
                Contact Seller
              </Button>
              <Button className="text-red-500" size="sm" variant="outline">
                Remove from Favorites
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <div className="mx-auto max-w-4xl space-y-6 mt-12">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Filter Properties</h1>
          <p className="text-gray-500 dark:text-gray-400">Refine your search by applying filters.</p>
        </div>
        <div className="space-y-4">
          <form>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="property-type">Property Type</Label>
                <Select id="property-type">
                  <SelectTrigger>
                    <SelectValue placeholder="Select property type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="house">House</SelectItem>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="condo">Condominium</SelectItem>
                    <SelectItem value="townhouse">Townhouse</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="bedrooms">Bedrooms</Label>
                <Select id="bedrooms">
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
                <Select id="bathrooms">
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
                <Label htmlFor="min-price">Min Price</Label>
                <Input id="min-price" placeholder="Enter minimum price" type="number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="max-price">Max Price</Label>
                <Input id="max-price" placeholder="Enter maximum price" type="number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="min-area">Min Area (sq ft)</Label>
                <Input id="min-area" placeholder="Enter minimum area" type="number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="max-area">Max Area (sq ft)</Label>
                <Input id="max-area" placeholder="Enter maximum area" type="number" />
              </div>
            </div>
            <Button className="w-full mt-4" type="submit">
              Apply Filters
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}

function BathIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
      <line x1="10" x2="8" y1="5" y2="7" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <line x1="7" x2="7" y1="19" y2="21" />
      <line x1="17" x2="17" y1="19" y2="21" />
    </svg>
  )
}


function BedIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 4v16" />
      <path d="M2 8h18a2 2 0 0 1 2 2v10" />
      <path d="M2 17h20" />
      <path d="M6 8v9" />
    </svg>
  )
}


function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}


function RulerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z" />
      <path d="m14.5 12.5 2-2" />
      <path d="m11.5 9.5 2-2" />
      <path d="m8.5 6.5 2-2" />
      <path d="m17.5 15.5 2-2" />
    </svg>
  )
}

