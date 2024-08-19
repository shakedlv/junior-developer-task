const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const metadataRoutes = require('./routes/metadataRoutes');

const { limiter } = require('./middleware/rateLimit');

const app = express();

app.use(cookieParser());
app.use(cors({
	origin: 'https://junior-developer-task-client.vercel.app/',
	methods: ['GET'],
	allowedHeaders: ['Content-Type', 'Authorization'],
	maxAge: 600
}));
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(limiter)

app.use('/', metadataRoutes);

app.listen(5000, () => {
	console.log('Server is running on port 5000');
});
