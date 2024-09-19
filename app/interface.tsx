// Category
export interface CategoryItem {
  name: string;  // Changed from 'title' to 'name'
  imageUrl: string;
  slug: {
    current: string;  // Updated to reflect the slug structure
  };
  tripsCount: number; 
}

export interface Category {
  _id: string;
  categories: CategoryItem[];  // Changed from 'categoryItems' to 'categories'
}


// Tours
export interface TripCard {
   slug: string;
  imageUrl: string;
  name: string;
  description: string;
  location: string;
  price: number;
  days: number;
  nights: number;
  meals: {
    breakfast: boolean;
    lunch: boolean;
    dinner: boolean;
  };
  transport: {
    flight: boolean;
    train: boolean;
    bus: boolean;
    localTravelVehicle: boolean;
    vehicleType?: string;
  };
}

