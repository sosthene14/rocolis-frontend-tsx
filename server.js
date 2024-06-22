import express from 'express';
import axios from 'axios';
import cors from 'cors';
import jwt from 'jsonwebtoken';

const app = express();
const port = 3001;
const SECRET_KEY = 'bfvvvvvvvjklqqkjs77v747vvq.f5fff77ffhdhcbbcgytyurh@fhfh';

app.use(express.json());

app.use(cors());

const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).send('Access Denied: No Token Provided!');

  try {
    const verified = jwt.verify(token, SECRET_KEY);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send('Invalid Token');
  }
};


app.get('/api/protected-data', authenticateToken, async (req, res) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    res.json(response.data);
  } catch (error) {
    console.error('Error making API request:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.post('/api/login', (req, res) => {
  const user = { id: 1, username: 'testuser' };
  const token = jwt.sign(user, SECRET_KEY, { expiresIn: '1h' });
  res.json({ token });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
