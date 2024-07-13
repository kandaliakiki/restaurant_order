export const bottomBarLinks = [
  {
    imgUrlActive: "/assets/home-active.svg",
    imgUrl: "/assets/home.svg",
    route: "/",
    label: "Home",
    activeRoutes: ["/", "/categories"],
  },
  {
    imgUrlActive: "/assets/heart-active.svg",
    imgUrl: "/assets/heart.svg",
    route: "/favorite",
    label: "Favorite",
    activeRoutes: ["/favorite"],
  },
  {
    imgUrlActive: "/assets/magnifier.svg",
    imgUrl: "/assets/magnifier.svg",
    route: "/search",
    label: "Search",
    activeRoutes: ["/search"],
  },
  {
    imgUrlActive: "/assets/basket-active.svg",
    imgUrl: "/assets/basket.svg",
    route: "/cart",
    label: "Cart",
    activeRoutes: ["/cart"],
  },
  {
    imgUrlActive: "/assets/notification-active.svg",
    imgUrl: "/assets/notification.svg",
    route: "/notification",
    label: "Notification",
    activeRoutes: ["/notification"],
  },
];

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
      "https://storage.googleapis.com/restaurantapp/food-menu/double-decker-beef-burger.png",
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
      "https://storage.googleapis.com/restaurantapp/food-menu/cheeseburger.png",
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
      "https://storage.googleapis.com/restaurantapp/food-menu/bacon-cheeseburger.png",
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
      "https://storage.googleapis.com/restaurantapp/food-menu/bbq-bacon-burger.png",
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
      "https://storage.googleapis.com/restaurantapp/food-menu/grilled-chicken-sandwich.png",
    foodName: "Grilled Chicken Sandwich",
    price: 6.99,
    isFavorite: true,
    description:
      "Our Grilled Chicken Sandwich features a tender grilled chicken breast, fresh lettuce, tomatoes, and a tangy sauce, all served on a toasted bun. A perfect choice for a light and tasty meal.",
    subtitle: "A light and tasty meal",
    rating: 4.4,
    timeToServe: "10-15 minutes",
  },

  // Pizzas
  {
    imageUrl:
      "https://storage.googleapis.com/restaurantapp/food-menu/vegetarian-pizza.png",
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
      "https://storage.googleapis.com/restaurantapp/food-menu/pepperoni-pizza.png",
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
      "https://storage.googleapis.com/restaurantapp/food-menu/bbq-chicken-pizza.png",
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
      "https://storage.googleapis.com/restaurantapp/food-menu/buffalo-chicken-pizza.png",
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
      "https://storage.googleapis.com/restaurantapp/food-menu/chicken-alfredo-pizza.png",
    foodName: "Chicken Alfredo Pizza",
    price: 13.49,
    isFavorite: true,
    description:
      "Our Chicken Alfredo Pizza is topped with creamy Alfredo sauce, tender chicken pieces, and melted cheese, all on a crispy crust. A rich and indulgent pizza.",
    subtitle: "A rich pizza",
    rating: 4.8,
    timeToServe: "15-20 minutes",
  },

  // Chicken
  {
    imageUrl:
      "https://storage.googleapis.com/restaurantapp/food-menu/spicy-chicken-wings.png",
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
      "https://storage.googleapis.com/restaurantapp/food-menu/chicken-nuggets.png",
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
      "https://storage.googleapis.com/restaurantapp/food-menu/chicken-caesar-wrap.png",
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
      "https://storage.googleapis.com/restaurantapp/food-menu/chicken-quesadilla.png",
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
      "https://storage.googleapis.com/restaurantapp/food-menu/chicken-tenders.png",
    foodName: "Chicken Tenders",
    price: 5.99,
    isFavorite: false,
    description:
      "Our Chicken Tenders are crispy on the outside and tender on the inside, served with your choice of dipping sauce. A perfect meal or snack for chicken lovers.",
    subtitle: "A perfect meal",
    rating: 4.4,
    timeToServe: "10-15 minutes",
  },

  // Fries
  {
    imageUrl:
      "https://storage.googleapis.com/restaurantapp/food-menu/french-fries.png",
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
      "https://storage.googleapis.com/restaurantapp/food-menu/buffalo-chicken-pizza.png",
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
      "https://storage.googleapis.com/restaurantapp/food-menu/garlic-parmesan-fries.png",
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
      "https://storage.googleapis.com/restaurantapp/food-menu/sweet-potato-fries.png",
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
