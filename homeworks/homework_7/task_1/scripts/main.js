function User (id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

const users = [];
users.push(new User(1, 'John', 'Doe', 'jd@gmail.com', '0647654321'));
users.push(new User(2, 'Alisa', 'Stone', 'alisa@gmail.com', '0627654324'));
users.push(new User(3, 'Paul', 'Baul', 'pb@gmail.com', '0747654323'));
users.push(new User(4, 'Ray', 'Tember', 'ray_t@gmail.com', '0847494321'));
users.push(new User(5, 'Alex', 'Sankter', 'alex_s@gmail.com', '0357659321'));
users.push(new User(6, 'Joe', 'Nedib', 'j_nedib@gmail.com', '0897654321'));
users.push(new User(7, 'Mustafa', 'Mufasa', 'mufasa@gmail.com', '0870654321'));
users.push(new User(8, 'Riki', 'Tiki', 'rikitiki@gmail.com', '0647958321'));
users.push(new User(9, 'Samantha', 'Brown', 'samantha_b@gmail.com', '0349754321'));
users.push(new User(10, 'Fry', 'Bender', 'fb@gmail.com', '0579874589'));
