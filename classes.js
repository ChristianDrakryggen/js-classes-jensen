class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
  greetUser() {
    return `Hello ${this.username}`;
  }
}

class UserRole extends User {
  constructor(username, password, role) {
    super(username, password);
    this.role = role;
  }
  checkRole() {
    if (this.role === "admin") {
      return "you're an admin";
    } else {
      return "you're not an admin";
    }
  }
}

const christian = new User("christian_johannesson", "12345qwerty");
const carl = new User("carl_johannesson", "543421gtyuh");

console.log(christian.greetUser());
console.log(carl);

const admin = new UserRole("christian", "qwerty", "admin");
const user = new UserRole("carl", "12345", "user");

console.log(admin.checkRole());
console.log(user.checkRole());
