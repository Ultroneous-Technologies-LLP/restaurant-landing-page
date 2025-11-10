export interface Dish {
  alt: string;
  description: string;
  id: number;
  image: string;
  price: string;
  title: string;
}

export interface MostPopularDishesProps {
  dishes: Dish[];
  title: string;
}
