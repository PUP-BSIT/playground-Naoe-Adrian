var CurrencyType;
(function (CurrencyType) {
    CurrencyType["USD"] = "US_DOLLAR";
    CurrencyType["EUR"] = "EURO";
    CurrencyType["GBP"] = "BRITISH";
})(CurrencyType || (CurrencyType = {}));
var book = {
    id: 1,
    name: "The Great Gatsby",
    price: 15.99,
    description: "A classic novel by F.Scott Fitzgerald",
    printDetails: function () {
        console.log("\n       Book ID: ".concat(book.id, "\n       Book Name: ").concat(book.name, " \n       Price: ").concat(book.price, " ").concat(CurrencyType.EUR, " \n       Description: ").concat(book.description, " "));
    },
};
var johnDoe = {
    customerId: 123,
    name: "John Doe",
    email: "john_doe@example.com",
    printDetails: function () {
        console.log("\n       Customer Id: ".concat(johnDoe.customerId, " \n       Customer Name: ").concat(johnDoe.name, " \n       Customer Email: ").concat(johnDoe.email, " \n       Currency: ").concat(CurrencyType.USD));
    },
};
function printDetails(catcher) {
    catcher.printDetails();
}
printDetails(book);
printDetails(johnDoe);
