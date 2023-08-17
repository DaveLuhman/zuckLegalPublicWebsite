const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

dotenv.config({ path: 'src/config/.env' }); //dotenv file
const PORT = process.env.PORT || 3000
const app = express();

// Logging
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
};
app.use('/', express.static('./src/public'));
app.listen(PORT), console.log(`Server running on ${process.env.NODE_ENV} on port ${PORT}`);