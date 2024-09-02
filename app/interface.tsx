export interface CategoryItem {
  title: string;
  tripCount: number;
    imageUrl: string;
    slug: string;
}

export interface Category {
  _id: string;
  categoryItems: CategoryItem[];
}
