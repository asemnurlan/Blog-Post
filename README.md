<img width="1891" height="957" alt="image" src="https://github.com/user-attachments/assets/dac0b8b9-75ee-43b5-9ec2-4bccb365703a" />
<img width="1908" height="947" alt="image" src="https://github.com/user-attachments/assets/0130742d-5671-4f5b-988f-0e0d9552982b" />
# The Forest - Blog Post

A full-stack web application featuring a RESTful API for managing blog posts. This project focuses on backend development with Node.js and MongoDB, featuring a "Mystic Forest" themed frontend interface.
1. Overview
A Full-Stack web application for managing blog posts. It consists of a RESTful API built with Node.js and a Mystic Forest themed frontend interface.

2. Core Functionality (CRUD)
The project implements all four basic operations:

Create: Add new posts via POST /blogs.

Read: Fetch all posts via GET /blogs or one by ID via GET /blogs/:id.

Update: Modify existing posts via PUT /blogs/:id.

Delete: Remove posts via DELETE /blogs/:id.

3. Database Operations
Mongoose: Used for schema definition and MongoDB interactions.

Methods: Implements find(), findById(), save(), findByIdAndUpdate(), and findByIdAndDelete().

Timestamps: Automatically generates createdAt and updatedAt for every entry.

4. Data Validation
Required Fields: Title and Body are mandatory.

Defaults: Author field defaults to "Anonymous" if left empty.

Error Handling: Returns 400 Bad Request for validation failures and 404 Not Found for missing IDs.

5. Simple Interface (Frontend)
Tech: HTML5, CSS3, and Vanilla JavaScript.

Design: Dark "Mystic" theme with glassmorphism effects.

Integration: Uses the Fetch API to communicate with the backend in real-time.

6. Tech Stack
Runtime: Node.js

Framework: Express.js

Database: MongoDB Atlas

Environment: Dotenv for secure URI storage.
