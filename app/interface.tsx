// Category
export interface CategoryItem {
  name: string;  // Changed from 'title' to 'name'
  imageUrl: string;
  slug: {
    current: string;  // Updated to reflect the slug structure
  };
}

export interface Category {
  _id: string;
  categories: CategoryItem[];  // Changed from 'categoryItems' to 'categories'
}


// Tours
export interface TourCard {
  name: string;             // The name of the destination, e.g., Tokyo
  description: string;      // A short description of the destination
  imageUrl: string;         // URL of the image for the destination
  location: string;         // The location of the destination, e.g., Tokyo, Japan
  price: number;
  slug: string;// The price of the tour, e.g., ₹15,000
}

