const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const metadataRoutes = require('./routes/metadataRoutes');

const app = express();


app.use(cors({origin:true}));

app.use(morgan('dev'));
app.use(express.json());

app.use('/', metadataRoutes);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
