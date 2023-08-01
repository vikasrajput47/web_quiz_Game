const data = [
  {
    question: "1. What is the missing number in the series? 2, 5, 10, 17, __",
    options: ["24", "26", "27", "30"],
    answer: "27",
  },
  {
    question: "2. If CAT is coded as 3120, how is DOG coded?",
    options: ["502", "503", "504", "505"],
    answer: "504",
  },
  {
    question:
      "3. A and B are brothers. C and D are sisters. A's son is D's brother. How is B related to C?",
    options: ["Father", "Brother", "Uncle", "None of the above"],
    answer: "Uncle",
  },
  {
    question: "4. What comes next in the series? 3, 6, 9, 12, __",
    options: ["13", "15", "16", "18"],
    answer: "15",
  },
  {
    question: "5. Find the odd one out: Apple, Orange, Banana, Mango, Tomato",
    options: ["Apple", "Orange", "Banana", "Tomato"],
    answer: "Tomato",
  },
  {
    question: "6. If FRIEND is coded as 612345, how is ENEMY coded?",
    options: ["56143", "56134", "65314", "53146"],
    answer: "56143",
  },
  {
    question: "7. If EARTH is coded as 52413, how is VENUS coded?",
    options: ["45123", "45132", "25413", "24513"],
    answer: "45132",
  },
  {
    question: "8. What is the next letter in the series? A, C, E, G, __",
    options: ["H", "I", "K", "M"],
    answer: "I",
  },
  {
    question:
      "9. Which word does NOT belong with the others? Train, Car, Bicycle, Plane",
    options: ["Train", "Car", "Bicycle", "Plane"],
    answer: "Bicycle",
  },
  {
    question: "10. If SHOE is coded as 1925, how is SOCK coded?",
    options: ["1822", "1819", "1722", "1725"],
    answer: "1722",
  },
  {
    question: "1. What does HTML stand for?",
    options: [
      "HyperText Markup Language",
      "Hyperlink and Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlink Text Markup Language",
    ],
    answer: "HyperText Markup Language",
  },
  {
    question:
      "2. Which programming language is often used for building dynamic web applications?",
    options: ["Python", "Java", "JavaScript", "C++"],
    answer: "JavaScript",
  },
  {
    question: "3. What does CSS stand for?",
    options: [
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Colorful Style Sheets",
      "Creative Style Sheets",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question:
      "4. What is the most popular version control system used by developers?",
    options: ["Git", "SVN", "Mercurial", "Perforce"],
    answer: "Git",
  },
  {
    question:
      "5. Which of the following is a popular front-end framework for building user interfaces?",
    options: ["Angular", "Express", "Flask", "Django"],
    answer: "Angular",
  },
  {
    question: "6. Which company developed the Android operating system?",
    options: ["Apple", "Google", "Microsoft", "Samsung"],
    answer: "Google",
  },
  {
    question: "7. What is the primary purpose of a firewall?",
    options: [
      "Speed up internet connection",
      "Enhance computer performance",
      "Protect a network from unauthorized access",
      "Improve download speeds",
    ],
    answer: "Protect a network from unauthorized access",
  },
  {
    question:
      "8. Which protocol is used to secure data transmission over the internet?",
    options: ["HTTP", "FTP", "HTTPS", "SMTP"],
    answer: "HTTPS",
  },
  {
    question:
      "9. Which data format is commonly used for exchanging data between a client and server?",
    options: ["JSON", "XML", "YAML", "CSV"],
    answer: "JSON",
  },
  {
    question:
      "10. Which type of database is known for its ability to handle vast amounts of data with high scalability?",
    options: [
      "Relational Database",
      "NoSQL Database",
      "Graph Database",
      "In-memory Database",
    ],
    answer: "NoSQL Database",
  },
  {
    question:
      '1. What is the output of the following C++ code?\n#include <iostream>\n\nint main() {\n  int x = 5;\n  std::cout << x++ << " " << ++x;\n  return 0;\n}',

    options: ["5 7", "6 6", "6 7", "5 6"],
    answer: "5 7",
  },
  {
    question: "2. What is the time complexity of the Bubble Sort algorithm?",
    options: ["O(n^2)", "O(n log n)", "O(n)", "O(log n)"],
    answer: "O(n^2)",
  },
  {
    question:
      "3. Which data structure uses the First-In-First-Out (FIFO) order?",
    options: ["Stack", "Queue", "LinkedList", "Tree"],
    answer: "Queue",
  },
  {
    question:
      "4. What is the output of the following Python code?def foo(x):\n    if x <= 0:\n        return 0\n    else:\n        return x + foo(x - 1)\n\nprint(foo(5))",
   
    options: ["15", "10", "5", "None of the above"],
    answer: "15",
  },
  {
    question: "5. Which sorting algorithm performs the best in most scenarios?",
    options: ["Selection Sort", "Merge Sort", "Insertion Sort", "Quick Sort"],
    answer: "Quick Sort",
  },
  {
    question: "6. What is the purpose of the 'this' keyword in JavaScript?",
    options: [
      "To create a new instance of an object",
      "To refer to the current instance of an object",
      "To delete an object",
      "To access global variables",
    ],
    answer: "To refer to the current instance of an object",
  },
  {
    question:
      "7. Which language is often used for developing mobile applications?",
    options: ["Java", "C#", "Swift", "All of the above"],
    answer: "All of the above",
  },
  {
    question: "8. What is the result of the following JavaScript expression?",
    code: "typeof typeof 42",
    options: ['"string"', '"number"', '"object"', '"undefined"'],
    answer: '"string"',
  },
  {
    question: "9. In Python, what does the 'lambda' keyword represent?",
    options: ["A list", "An anonymous function", "A dictionary", "A tuple"],
    answer: "An anonymous function",
  },
  {
    question: "10. Which data structure uses LIFO (Last-In-First-Out) order?",
    options: ["Stack", "Queue", "LinkedList", "Tree"],
    answer: "Stack",
  },
];
export default data;
