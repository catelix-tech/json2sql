# 🛠️ json2sql

Convert simple JSON arrays into SQL `INSERT` queries easily via CLI.

---

## 🔧 Usage

```bash
node src/cli.js ./examples/data.json users
```

### 📥 Input (`examples/data.json`)

```json
[
  { "id": 1, "name": "Alice", "email": "alice@example.com" },
  { "id": 2, "name": "Bob", "email": "bob@example.com" }
]
```

### 📤 Output

```sql
INSERT INTO users (id, name, email) VALUES (1, 'Alice', 'alice@example.com');
INSERT INTO users (id, name, email) VALUES (2, 'Bob', 'bob@example.com');
```

---

## Features

- Converts arrays of objects to SQL `INSERT` statements
- Handles strings, numbers, and `null` values
- Escapes single quotes in strings
- Allows custom table name via CLI

---

## Installation (Optional Global CLI)

To install globally:

```bash
npm install -g .
```

Then you can run:

```bash
json2sql ./examples/data.json my_table
```

---

## Project Structure

```
json2sql/
├── examples/
│   └── data.json
├── src/
│   ├── cli.js
│   └── convert.js
├── package.json
├── README.md
└── LICENSE
```

---

## Roadmap Ideas

- [ ] Web-based UI (with file upload)
- [ ] Support nested objects or relations
- [ ] CSV export support
- [ ] Option to create table schema

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contributing

Pull requests are welcome!  
For major changes, please open an issue first to discuss what you'd like to change.

---

## Author

**[Catelix]**  
Feel free to fork, star, or contribute 🙌
