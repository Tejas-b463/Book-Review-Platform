const Book = require('../models/Book');

// Public: GET /api/books
exports.getAllBooks = async (req, res) => {
  const books = await Book.find();
  res.json(books);
};

// Public: GET /api/books/:id
exports.getBookById = async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) return res.status(404).json({ message: 'Book not found' });
  res.json(book);
};

// Admin Only: POST /api/books
exports.addBook = async (req, res) => {
  const { title, author, description, coverImage, rating } = req.body;
  const book = new Book({ title, author, description, coverImage, rating });
  const saved = await book.save();
  res.status(201).json(saved);
};

// Admin Only: PUT /api/books/:id
exports.updateBook = async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) return res.status(404).json({ message: 'Book not found' });

  const { title, author, description, coverImage, rating } = req.body;
  book.title = title ?? book.title;
  book.author = author ?? book.author;
  book.description = description ?? book.description;
  book.coverImage = coverImage ?? book.coverImage;
  book.rating = rating ?? book.rating;

  const updated = await book.save();
  res.json(updated);
};

// Admin Only: DELETE /api/books/:id
exports.deleteBook = async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) return res.status(404).json({ message: 'Book not found' });

  await book.deleteOne();
  res.json({ message: 'Book deleted successfully' });
};
