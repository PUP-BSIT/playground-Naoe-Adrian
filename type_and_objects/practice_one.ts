enum CurrencyType {
  USD = "US_DOLLAR",
  EUR = "EURO",
  GBP = "BRITISH",
}

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  printDetails(): void;
};

type Customer = {
  customerId: number;
  name: string;
  email: string;
  printDetails(): void;
};

const book: Product = {
  id: 1,
  name: "The Great Gatsby",
  price: 15.99,
  description: "A classic novel by F.Scott Fitzgerald",
  printDetails() {
    console.log(`
       Book ID: ${book.id}
       Book Name: ${book.name} 
       Price: ${book.price} ${CurrencyType.EUR} 
       Description: ${book.description} `);
  },
};

const johnDoe: Customer = {
  customerId: 123,
  name: "John Doe",
  email: "john_doe@example.com",
  printDetails() {
    console.log(`
       Customer Id: ${johnDoe.customerId} 
       Customer Name: ${johnDoe.name} 
       Customer Email: ${johnDoe.email} 
       Currency: ${CurrencyType.USD}`);
  },
};

type Catcher = Product | Customer;

function printDetails(catcher: Catcher): void {
  catcher.printDetails();
}

printDetails(book);
printDetails(johnDoe);
