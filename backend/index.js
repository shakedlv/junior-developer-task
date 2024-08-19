const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

const { rateLimit } = require('express-rate-limit')

const metadataRoutes = require('./routes/metadataRoutes');

const app = express();


app.use(cors({ origin: true }));
app.use(helmet());

app.use(morgan('dev'));
app.use(express.json());

const limiter = rateLimit({
	windowMs: 1000, // 1 sec
	limit: 5, // 5 req in 1 sec
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    message:"To Many Requests",
})

app.use(limiter)

app.use('/', metadataRoutes);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
