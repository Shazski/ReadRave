export interface IBook {
 author: string;
 title: string;
 description: string;
 reviews: {
  userId: string;
  rating: number;
  comment: string;
 };
}
