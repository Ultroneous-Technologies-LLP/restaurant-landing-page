export interface Dish {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  alt: string;
}

export interface MostPopularDishesProps {
  title: string;
  dishes: Dish[];
}
