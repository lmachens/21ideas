import express from 'express';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const { PORT = 3020 } = process.env;
const app = express();

// Serve storybook production bundle
app.use('/storybook', express.static('dist/storybook'));

// Serve app production bundle
app.use(express.static('dist/app'));

app.listen(PORT, () => {
  console.log(`Boilerplate listening at http://localhost:${PORT}`);
});

// Handle client routing, return all requests to the app
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'app/index.html'));
});
