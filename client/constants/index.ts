export const bottomBarLinks = [
  {
    id: 1,
    imgUrlActive: "/assets/home-active.svg",
    imgUrl: "/assets/home.svg",
    route: "/",
    label: "Home",
    activeRoutes: ["/", "/categories"],
  },
  {
    id: 2,
    imgUrlActive: "/assets/heart-active.svg",
    imgUrl: "/assets/heart.svg",
    route: "/favorites",
    label: "Favorite",
    activeRoutes: ["/favorites"],
  },
  {
    id: 3,
    imgUrlActive: "/assets/magnifier.svg",
    imgUrl: "/assets/magnifier.svg",
    route: "/search",
    label: "Search",
    activeRoutes: ["/search"],
  },
  {
    id: 4,
    imgUrlActive: "/assets/basket-active.svg",
    imgUrl: "/assets/basket.svg",
    route: "/cart",
    label: "Cart",
    activeRoutes: ["/cart"],
  },
  {
    id: 5,
    imgUrlActive: "/assets/notification-active.svg",
    imgUrl: "/assets/notification.svg",
    route: "/notification",
    label: "Notification",
    activeRoutes: ["/notification"],
  },
];

export type BottomBarLink = {
  id: number;
  imgUrlActive: string;
  imgUrl: string;
  route: string;
  label: string;
  activeRoutes: string[];
};

export const foodCategories = [
  {
    imgUrl: "/assets/burger.svg",
    label: "Burger",
    size: 80,
    route: "burger",
  },
  {
    imgUrl: "/assets/pizza.svg",
    label: "Pizza",
    size: 80,
    route: "pizza",
  },
  {
    imgUrl: "/assets/fries.svg",
    label: "French Fries",
    size: 80,
    route: "fries",
  },
  {
    imgUrl: "/assets/chicken.svg",
    label: "Chicken",
    size: 80,
    route: "chicken",
  },
];

export const foodDeals = [
  // Burgers
  {
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1-25iM2OatqKzVGGTYy5iq6qP957P4Tq2",
    foodName: "Double Decker Beef Burger",
    price: 7.49,
    isFavorite: false,
    description:
      "Our Double Decker Beef Burger features two juicy beef patties, melted cheese, fresh lettuce, tomatoes, and onions, all sandwiched between a soft, toasted bun. A hearty meal that satisfies your hunger. Pair it with our crispy fries for the ultimate experience.",
    subtitle: "A hearty meal",
    rating: 4.7,
    timeToServe: "15-20 minutes",
  },
  {
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1-Uqz4wt6zsUPXGi_XLfsak7pxr1MXw7U",
    foodName: "Cheeseburger",
    price: 6.49,
    isFavorite: true,
    description:
      "Our Cheeseburger features a juicy beef patty, melted cheese, fresh lettuce, tomatoes, and pickles, all served on a toasted bun. A classic burger that never disappoints.",
    subtitle: "A classic burger",
    rating: 4.5,
    timeToServe: "10-15 minutes",
  },
  {
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1-Uqz4wt6zsUPXGi_XLfsak7pxr1MXw7U",
    foodName: "Grilled Chicken Sandwich",
    price: 6.99,
    isFavorite: true,
    description:
      "Our Grilled Chicken Sandwich features a tender grilled chicken breast, fresh lettuce, tomatoes, and a tangy sauce, all served on a toasted bun. A perfect choice for a light and tasty meal.",
    subtitle: "A light and tasty meal",
    rating: 4.4,
    timeToServe: "10-15 minutes",
  },
  {
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1-o-5lY9vrI4xYvfUO8gskrhcaRVdtzps",
    foodName: "Bacon Cheeseburger",
    price: 7.99,
    isFavorite: true,
    description:
      "Our Bacon Cheeseburger features a juicy beef patty, crispy bacon, melted cheese, fresh lettuce, and tomatoes, all served on a toasted bun. A burger lover's dream.",
    subtitle: "A burger lover's dream",
    rating: 4.6,
    timeToServe: "10-15 minutes",
  },
  {
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1-isusUYPrjOt6rTmoAqZjLvkAUOyO8-4",
    foodName: "BBQ Bacon Burger",
    price: 8.99,
    isFavorite: true,
    description:
      "Our BBQ Bacon Burger features a juicy beef patty, crispy bacon, tangy BBQ sauce, and melted cheese, all served on a toasted bun. A flavorful and satisfying burger.",
    subtitle: "A flavorful burger",
    rating: 4.8,
    timeToServe: "10-15 minutes",
  },
  {
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1-Q1dvdWaaY6McM4ThG6svBioFmAHRT3K",
    foodName: "Chicken Alfredo Pizza",
    price: 13.49,
    isFavorite: true,
    description:
      "Our Chicken Alfredo Pizza is topped with creamy Alfredo sauce, tender chicken pieces, and melted cheese, all on a crispy crust. A rich and indulgent pizza.",
    subtitle: "A rich pizza",
    rating: 4.8,
    timeToServe: "15-20 minutes",
  },
  {
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1-f-2ApOPBliJxuPzMmfTUd61XC1wkwEF",
    foodName: "BBQ Chicken Pizza",
    price: 11.49,
    isFavorite: true,
    description:
      "Our BBQ Chicken Pizza is topped with tender chicken pieces, tangy BBQ sauce, red onions, and melted cheese, all on a crispy crust. A delicious twist on a classic pizza.",
    subtitle: "A delicious twist",
    rating: 4.6,
    timeToServe: "15-20 minutes",
  },
  {
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1-bbQEXR_j02yzCZDdP0kZgm3RQSiDQmH",
    foodName: "Buffalo Chicken Pizza",
    price: 12.49,
    isFavorite: true,
    description:
      "Our Buffalo Chicken Pizza is topped with spicy buffalo chicken, melted cheese, and a drizzle of ranch dressing, all on a crispy crust. A spicy and flavorful pizza experience.",
    subtitle: "A spicy experience",
    rating: 4.7,
    timeToServe: "15-20 minutes",
  },
  {
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1-swv8ftxn6NEp9NHy-QGDy0VHZvDSgK2",
    foodName: "Vegetarian Pizza",
    price: 9.99,
    isFavorite: true,
    description:
      "Our Vegetarian Pizza is topped with a variety of fresh vegetables, including bell peppers, onions, mushrooms, and olives, all on a bed of melted cheese and a crispy crust. A healthy and delicious choice for pizza lovers. Enjoy it with a side of our house salad.",
    subtitle: "A healthy choice",
    rating: 4.6,
    timeToServe: "15-20 minutes",
  },
  {
    imageUrl:
      "https://drive.google.com/uc?export=view&id=102POIMYsyYyp33rgDeHKawJUmPIGwsqi",
    foodName: "Pepperoni Pizza",
    price: 10.99,
    isFavorite: false,
    description:
      "Our Pepperoni Pizza is loaded with spicy pepperoni slices, melted cheese, and a rich tomato sauce, all on a crispy crust. A classic favorite for pizza lovers.",
    subtitle: "A classic favorite",
    rating: 4.7,
    timeToServe: "15-20 minutes",
  },
  {
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1022k3RGWTlNc_lkmzWkVUBwVStQNLUVE",
    foodName: "Spicy Chicken Wings",
    price: 5.99,
    isFavorite: true,
    description:
      "Our Spicy Chicken Wings are crispy on the outside and juicy on the inside, coated with a tangy and spicy sauce that will leave your taste buds tingling. Perfect for a quick snack or a party appetizer. Enjoy them with a side of ranch or blue cheese dressing.",
    subtitle: "Perfect for a quick snack",
    rating: 4.5,
    timeToServe: "10-15 minutes",
  },
  {
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1-D5e6G_u59RJA5xS2xrjdFnvJ8T6mUoU",
    foodName: "Chicken Nuggets",
    price: 4.99,
    isFavorite: false,
    description:
      "Our Chicken Nuggets are crispy on the outside and tender on the inside, served with your choice of dipping sauce. A perfect snack or meal for chicken lovers.",
    subtitle: "A perfect snack",
    rating: 4.3,
    timeToServe: "5-10 minutes",
  },
  {
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1-ObPeQlqUMfpXveFO13nd-O31GDe-R3G",
    foodName: "Chicken Caesar Wrap",
    price: 7.99,
    isFavorite: false,
    description:
      "Our Chicken Caesar Wrap features grilled chicken, fresh romaine lettuce, parmesan cheese, and Caesar dressing, all wrapped in a soft tortilla. A healthy and tasty option.",
    subtitle: "A healthy option",
    rating: 4.4,
    timeToServe: "10-15 minutes",
  },
  {
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1-7oQzHMxcES0hqZYQv0JQ2YTYCe2lYB4",
    foodName: "Chicken Quesadilla",
    price: 6.99,
    isFavorite: false,
    description:
      "Our Chicken Quesadilla is filled with tender chicken, melted cheese, and a blend of spices, all grilled to perfection. A tasty and satisfying meal.",
    subtitle: "A tasty meal",
    rating: 4.5,
    timeToServe: "10-15 minutes",
  },
  {
    imageUrl:
      "https://drive.google.com/uc?export=view&id=10CB0xNlmfQ26zanL7i4QkEKjivDsmHgR",
    foodName: "French Fries",
    price: 2.99,
    isFavorite: true,
    description:
      "Our French Fries are crispy on the outside and fluffy on the inside, seasoned to perfection. A perfect side dish for any meal.",
    subtitle: "A perfect side dish",
    rating: 4.5,
    timeToServe: "5-10 minutes",
  },
  {
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1-XJaaAkK0K9sFN8rWWiRAABi7Zg958P5",
    foodName: "Cheese Fries",
    price: 3.99,
    isFavorite: true,
    description:
      "Our Cheese Fries are topped with melted cheese and a sprinkle of herbs, making them a cheesy and delicious side dish.",
    subtitle: "A cheesy delight",
    rating: 4.6,
    timeToServe: "5-10 minutes",
  },
  {
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1092TMvvUFwx56uBAaRLVUcTKHraxeJh4",
    foodName: "Garlic Parmesan Fries",
    price: 3.99,
    isFavorite: true,
    description:
      "Our Garlic Parmesan Fries are tossed in garlic and parmesan cheese, offering a savory and aromatic side dish.",
    subtitle: "A savory side dish",
    rating: 4.8,
    timeToServe: "5-10 minutes",
  },
  {
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1-yLcSZE_tHgP2vn6pSJI1y9_D6TTWsbK",
    foodName: "Sweet Potato Fries",
    price: 3.49,
    isFavorite: false,
    description:
      "Our Sweet Potato Fries are crispy on the outside and tender on the inside, with a hint of sweetness. A delicious alternative to regular fries.",
    subtitle: "A sweet alternative",
    rating: 4.5,
    timeToServe: "5-10 minutes",
  },
];
