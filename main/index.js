import Book from '../modules/books.js';
import { displayBooks } from '../modules/bookList.js';

const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const book = new Book(title, author);
  book.newBook();
  if (title && author) {
    displayBooks(book.title, book.author, book.id);
  }
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
});

const list = document.getElementById('all-book');
const add = document.querySelector('.form-section');
const contacts = document.getElementById('contacts');
const listLink1 = document.getElementById('con-link1');
const listLink2 = document.getElementById('con-link2');
const listLink3 = document.getElementById('con-link3');

listLink1.addEventListener('click', () => {
  list.classList.remove('show');
  listLink1.classList.add('active');
  contacts.classList.add('show');
  listLink3.classList.remove('active');
  listLink2.classList.remove('active');
  add.classList.add('show');
});

listLink2.addEventListener('click', () => {
  listLink2.classList.add('active');
  add.classList.remove('show');
  list.classList.add('show');
  listLink1.classList.remove('active');
  contacts.classList.add('show');
  listLink3.classList.remove('active');
});

listLink3.addEventListener('click', () => {
  contacts.classList.remove('show');
  listLink3.classList.add('active');
  list.classList.add('show');
  listLink1.classList.remove('active');
  listLink2.classList.remove('active');
  add.classList.add('show');
});

const timeElement = document.querySelector('.time');
const dateElement = document.querySelector('.date');

/**
 * @param {Date} date
 */
function formatTime(date) {
  const hours12 = date.getHours() % 12 || 12;
  const minutes = date.getMinutes();
  const isAm = date.getHours() < 12;

  return `${hours12.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')} ${isAm ? 'AM' : 'PM'}`;
}

/**
 * @param {Date} date
 */
function formatDate(date) {
  const DAYS = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return `${DAYS[date.getDay()]}, ${
    MONTHS[date.getMonth()]
  } ${date.getDate()} ${date.getFullYear()}`;
}

setInterval(() => {
  const now = new Date();

  timeElement.textContent = formatTime(now);
  dateElement.textContent = formatDate(now);
}, 200);
