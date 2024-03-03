const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const signupRoutes = require('./backend/signup'); // Import signupRoutes
const loginRoutes = require('./backend/login'); // Import loginRoutes
const homeRoutes = require('./backend/home'); // Import homeRoutes
const editAndRemoveRoutes = require('./backend/edit&remove'); // Import editAndRemoveRoutes
const editRoutes = require('./backend/edit'); // Import editRoutes
const deleteRoutes = require('./backend/delete'); // Import deleteRoutes
const carpetsRoutes = require('./backend/carpets'); // Import carpetsRoutes
const buyRoutes = require('./backend/buy'); // Import buysRoutes

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve static files from the 'styles' directory
app.use('/styles', express.static(path.join(__dirname, 'styles')));

// Serve static files from the 'images' directory
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Serve static files from the 'frontend' directory
app.use('/frontend', express.static(path.join(__dirname, 'frontend')));

// Serve static files from the 'backend' directory
app.use('/backend', express.static(path.join(__dirname, 'backend')));

// Use signupRoutes for '/' routes
app.use('/signup', signupRoutes);

// Use loginRoutes for '/' routes
app.use('/login', loginRoutes);

app.use('/home', homeRoutes);

app.use('/edit&remove', editAndRemoveRoutes);

app.use('/edit', editRoutes);

app.use('/delete', deleteRoutes);

app.use('/carpets', carpetsRoutes);

app.use('/buy', buyRoutes);

// Define routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});