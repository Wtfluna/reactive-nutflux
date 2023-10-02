import { Router } from 'express'
import { RegisterService } from '~/services/register.service'

const RegisterController = Router()

const service = new RegisterService()

RegisterController.post('/', async (req, res) => {
  const username = req.body.username
  const email = req.body.email
  const password = req.body.password
  const success: boolean = await service.createNewAccount(
    username,
    email,
    password
  )
  res.status(200)
  res.json(success)
})
export { RegisterController }
// RegisterController.post('/', async (req, res) => {
//   const username = req.body.username
//   const email = req.body.email
//   const password = req.body.password

//   const newAccount: Account = await service.createNewAccount(
//     username,
//     email,
//     password
//   )
// })
// export { RegisterController }

/*const express = require('express');
const bodyParser = require('body-parser');
const { registerUser } = require('./registerService');

const router = express.Router();
router.use(bodyParser.json());

app.post('/register', async (req: { body: { username: any; email: any; password: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error?: string; message?: string; }): void; new(): any; }; }; }) => {
    const { username, email, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const sql = 'INSERT INTO accounts (username, email, password) VALUES (?, ?, ?)';
    const values = [username, email, hashedPassword];

    db_connection.query(sql, values, (err: any, results: any) => {
        if (err) {
            console.error('Error registering user:', err);
            res.status(500).json({ error: 'Error creating the account' });
        } else {
            console.log('User registered successfully');
            res.status(201).json({ message: 'Account created successfully' });
        }
    });
});

// Define a route to handle user registration
router.post('/register', (req, res) => {
  const { username, email, password } = req.body;

  registerUser(username, email, password, (err, message) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.status(200).json({ message });
    }
  });
});

module.exports = router;

*/
/*
const express = require("express")
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const db_connection = mysql.createConnection({
        host: process.env.DATABASE_SERVER,
        user: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_DATABASE,
  })

  app.post('/register', (req: { body: { username: any; email: any; password: any; }; },res: any) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    db_connection.query("INSERT INTO accounts (username, email, password) VALUES (?, ?, ?)", [username, email, password],
    (_err: any,result: any) => {
      if(result){
        res.send(result);
      }else{
        res.send({message: "Registation failed"})
      }
    }
    )
  })

*/
/*
const express = require("express");
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcrypt'); // pour password hashing

const app = express();

app.use(express.json());
app.use(cors());
app.use(bcrypt());

// Create a MySQL database connection pool for better performance
const db_connection = mysql.createConnection({
  host: process.env.DATABASE_SERVER,
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DATABASE,
});

// Register a new user
app.post("/register", async (req: { body: { username: any; email: any; password: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; }): void; new(): any; }; }; }) => {
  const { username, email, password } = req.body;

  try {
    // Hash password 
    const hashedPassword = await bcrypt.hash(password, 10); // 10 = nombre de tours de calcul pour hasher. Plus le nombre de tours de calcul nécessaires pour obtenir le hachage final est élevé, plus le temps de calcul est important

    db_connection.query(
      "INSERT INTO accounts (username, email, password) VALUES (?, ?, ?)",
      [username, email, hashedPassword],
      (error: any, results: { insertId: any; }) => {
        if (error) {
          console.error("Registration failed:", error);
          res.status(500).json({ message: "Registration failed" });
        } else {
          console.log("User registered:", results.insertId);
          res.status(201).json({ message: "Registration successful" });
        }
      }
    );
  } catch (error) {
    console.error("Error hashing password:", error);
    res.status(500).json({ message: "Registration failed" });
  }
});

// Error handling for unhandled routes
app.use((req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; }): void; new(): any; }; }; }) => {
  res.status(404).json({ message: "Route not found" });
});

*/

