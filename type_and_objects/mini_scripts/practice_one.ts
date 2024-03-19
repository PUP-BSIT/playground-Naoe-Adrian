type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  printDetails(): void;
};

type Customer = {
  customerid: number;
  name: string;
  email: string;
  printDetails(): void;
};

const book: Product = {
  id: 1,
  name: "The Great Gatsby",
  price: 15.99,
  description: "A classic novel by F. Scott Fitzgerald",
  printDetails() {
    console.log(`
      BOOK ID: ${book.id}
      BOOK NAME: ${book.name}
      BOOK PRICE: ${book.price} ${Currency.EUR}
      BOOK DESCRIPTION: ${book.description}
    `);
  },
};

const johnDoe: Customer = {
  customerid: 123,
  name: "John Doe",
  email: "john.doe@example.com",
  printDetails() {
    console.log(`
      CUSTOMER ID: ${johnDoe.customerid}
      CUSTOMER NAME: ${johnDoe.name}
      CUSTOMER EMAIL: ${johnDoe.email}
      CUSTOMER CURRENCY: ${Currency.PHP}
    `);
  },
};

enum Currency {
  USD = "DSA",
  EUR = "EURO",
  PHP = "PESO",
}

type entity = Product | Customer;

function displayInfo(Catcher: entity) {
  Catcher.printDetails();
}

displayInfo(book);
displayInfo(johnDoe);
