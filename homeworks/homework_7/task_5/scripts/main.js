function Client(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

const clients = [];

clients.push(new Client(1, "John", "Smith", "john.smith@example.com", "+1-555-123-4567", 5));
clients.push(new Client(2, "Anna", "Johnson", "anna.johnson@example.com", "+1-555-234-5678", 3));
clients.push(new Client(3, "Mike", "Brown", "mike.brown@example.com", "+1-555-345-6789", 8));
clients.push(new Client(4, "Emma", "Taylor", "emma.taylor@example.com", "+1-555-456-7890", 2));
clients.push(new Client(5, "David", "Anderson", "david.anderson@example.com", "+1-555-567-8901", 10));
clients.push(new Client(6, "Sophie", "Lee", "sophie.lee@example.com", "+1-555-678-9012", 6));
clients.push(new Client(7, "Chris", "Martin", "chris.martin@example.com", "+1-555-789-0123", 7));
clients.push(new Client(8, "Linda", "White", "linda.white@example.com", "+1-555-890-1234", 4));
clients.push(new Client(9, "Paul", "Walker", "paul.walker@example.com", "+1-555-901-2345", 9));
clients.push(new Client(10, "Laura", "Hall", "laura.hall@example.com", "+1-555-012-3456", 1));

clients.sort((client1, client2) => client1.order - client2.order);
