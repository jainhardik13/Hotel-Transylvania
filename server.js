const express = require('express')
const path = require('path')
const connectDB = require('./config/config');

const PORT = 8081
//Import Middleware
const logger = require('./middlewares/logger')
const errorHandler = require('./middlewares/errorHandler')
const app = express()
connectDB() // Connect to MongoDB database
const morgan = require('morgan')
app.use(morgan('dev')) // Use morgan for logging requests in development mode
// Middleware to handle JSON and URL-encoded data in POST requests
app.use(express.json()) // To parse JSON bodies
app.use(express.urlencoded({ extended: true })) // To parse URL-encoded data
// Use logger middleware for all incoming requests
app.use(logger) // Log each request
// Serve static files (HTML, CSS, JS) from the /public directory
app.use(express.static(path.join(__dirname, 'public')))

const apiRoutes = require('./api/apiRoutes'); // Import the API routes for login, register, feedback functionality
const { connect } = require('http2');
app.use('/api', apiRoutes) // Mount the API routes on /api path

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/hotel1', (req, res) => {
    res.render('hotel', {
        title: "The Oberoi Amarvilas, Agra",
        hotel: {
            name: "The Oberoi Amarvilas, Agra, UP",
            about: "Welcome to The Oberoi Amarvilas Agra Hotel, a 5-star sanctuary nestled in the vibrant city of Agra, India. With its impeccable service, opulent accommodations, and breathtaking views of the iconic Taj Mahal, this hotel offers a truly unforgettable experience. As you step into the grand lobby of The Oberoi Amarvilas Agra Hotel, you will be instantly captivated by its timeless elegance and warm hospitality.",
            overview: "Strategically situated in Tajganj, allowing you access and proximity to local attractions and sights. Don't leave before paying a visit to the famous Taj Mahal. Rated with 5 stars, this high-quality property provides guests with access to massage, restaurant and fitness center on-site.",
            Amenities: ["Free High-Speed Wi-Fi",
                "Spa and Wellness Center",
                "Indoor & Outdoor Pools",
                "Fine Dining Restaurants",
                "Fitness Center & Gym",
                "Concierge Service",
                "Event & Conference Facilities"],
            goodToKnow: ["Value for money 8.5",
                "Distance to city center 10. km",
                "Location rating 9.8",
                "Nearest airport Agra Airport (AGR)",
                "Distance to airport 8.8 km"],
            phone: "01123890606",
            email: "reservations@theoberoi.com",
            website: "theoberoi.com",
            location: "Taj East Gate Road, Tajganj, Agra, India, 282001",
            gallery: ["hotel1.png", "hotel1ex1.jpg", "hotel1ex2.jpg", "hotel1pool1.jpg", "hotel1pool2.jpg", "hotel1room1.jpg", "hotel1room2.jpg", "hotel1view1.jpg", "hotel1view2.jpg", "hotel1benefit1.jpg", "hotel1benefit2.jpg", "hotel1meeting1.jpg", "hotel1meeting2.jpg"]
        }
    });
});

app.get('/hotel2', (req, res) => {
    res.render('hotel', {
        title: "Umaid Bhawan Palace, Jodhpur",
        hotel: {
            name: "Umaid Bhawan Palace, Jodhpur, Rajasthan",
            about: "A living palace hotel in Jodhpur with awe-inspiring architecture, boundless views, silken furnishings, and unparalleled service.",
            overview: "JODHPUR’S LAST GREAT ROYAL PALACE",
            Amenities: [
                "Car Rental",
                "Doctor on Call",
                "Games Room",
                "Heritage walk & 26 acres of area full of lush green garden",
                "Laundry and Drycleaning",
                "Standard & premium Wi-Fi",
                "Risala (Fine-Dining Continental And Indian Restaurant)",
                "Indoor swimming pool",
                "J Wellness Circle Spa"
            ],
            goodToKnow: [
                "Check-in from 2:00 pm / Check-out until noon",
                "70 rooms & suites",
                "Current temperature 16.53°C",
                "2 restaurants & 1 bar",
                "J Wellness Circle Offers Indian and International Therapies"
            ],
            phone: "+91 0291 2510101",
            email: "umaidbhawan.jodhpur@tajhotels.com",
            website: "www.uamidbhawanpalace.com",
            location: "Umaid Bhawan Palace, Jodhpur, Rajasthan, 342006, India",
            gallery: [
                "hotel2.png",
                "hotel2ex1.jpg", "hotel2ex2.jpg",
                "hotel2pool1.jpg", "hotel2pool2.jpg",
                "hotel2room1.jpg", "hotel2room2.jpg",
                "hotel2view1.jpg", "hotel2view2.jpg",
                "hotel2int1.jpg", "hotel2int2.jpg",
                "hotel2dinning1.jpg", "hotel2dinning2.jpg"
            ]
        }
    });
});


app.get('/hotel3', (req, res) => {
    res.render('hotel', {
        title: "Taj Lake Palace, Udaipur",
        hotel: {
            name: "Taj Lake Palace, Udaipur, Rajasthan",
            about: "EXPERIENCE THE ROMANCE OF ARISTOCRACY",
            overview: "Embark on an enchanting journey into the legendary lifestyle of the esteemed Mewar royal family at this lavish hotel in Udaipur, perched elegantly over the serene waters of Lake Pichola.",
            Amenities: [
                "Car Rental",
                "Doctor on Call",
                "Laundry and Drycleaning",
                "Limousine/ Yacht transfers on request",
                "Smoking Lounge",
                "Standard & premium Wi-Fi",
                "Neel Kamal (Fine-Dining Rajasthani, Indian Restaurant)",
                "Bhairo (Fine-Dining European Restaurant)",
                "Jharokha (24-hour Multi-Cuisine Restaurant)",
                "Heated swimming pool",
                "J Wellness Circle Spa",
                "Butler service"
            ],
            goodToKnow: [
                "Check-in from 2:00 pm / Check-out until noon",
                "65 rooms & 18 suites",
                "Current temperature 17.47°C",
                "3 restaurants & 1 bar",
                "J Wellness Circle offering Indian & International spa therapies (Ayurvedic and Modern Techniques)"
            ],
            phone: "+91 2942428800",
            email: "lakepalace.udaipur@tajhotels.com",
            website: "www.tajlake.com",
            location: "Lake Pichola, Udaipur, Rajasthan, 313001, Rajasthan, India",
            gallery: [
                "hotel3.png",
                "hotel3ex1.jpg",
                "hotel3ex2.jpg",
                "hotel3service1.jpg",
                "hotel3service2.jpg",
                "hotel3room1.jpg",
                "hotel3room2.jpg",
                "hotel3view1.jpg",
                "hotel3view.jpg",
                "hotel3int1.jpg",
                "hotel3int2.jpg",
                "hotel3dinning1.jpg",
                "hotel3dinning2.jpg"
            ]
        }
    });
});

app.get('/hotel4', (req, res) => {
    res.render('hotel', {
        title: "The Leela Palace, Bengaluru",
        hotel: {
            name: "The Leela Palace, Bengaluru, Karnataka",
            about: "Experience unparalleled luxury at one of India’s most iconic 5-star hotels, blending royal grandeur with modern sophistication.",
            overview: "The Leela Palace Bengaluru is a luxurious 5-star hotel located in the heart of India's tech capital. Surrounded by lush gardens and offering a range of world-class facilities, it provides an ideal setting for both business and leisure travelers.",
            Amenities: [
                "Free High-Speed Wi-Fi",
                "Spa and Wellness Center",
                "Indoor & Outdoor Pools",
                "Fine Dining Restaurants",
                "Fitness Center & Gym",
                "Concierge Service",
                "Event & Conference Facilities"
            ],
            goodToKnow: [
                "Located at 23, HAL Airport Road, Bengaluru, Karnataka 560008",
                "Ideal for business and leisure travelers",
                "Surrounded by lush gardens",
                "Easy access to corporate offices, malls, and entertainment"
            ],
            phone: "+91 80 2521 1234",
            email: "reservations@theleela.com",
            website: "https://www.theleela.com/the-leela-palace-bengaluru",
            location: "23, HAL Airport Road, Bengaluru, Karnataka 560008, India",
            gallery: [
                "hotel4.jpg",
                "hotelin4.jpg",
                "hotelin4ii.jpg",
                "hotelpool4.jpg",
                "hotelpoolii4.jpg",
                "hotelres4.jpg",
                "hotelresii4.jpg"
            ]
        }
    });
});

app.get('/hotel5', (req, res) => {
    res.render('hotel', {
        title: "Rambagh Palace, Jaipur",
        hotel: {
            name: "Rambagh Palace, Jaipur, Rajasthan",
            about: "Step into the regal world of Rajasthan at Rambagh Palace, a magnificent heritage hotel that seamlessly blends luxury with rich history.",
            overview: "Rambagh Palace is a stunning heritage hotel in Jaipur, once the residence of the Maharaja of Jaipur. Situated amidst lush gardens, the palace offers royal luxury and timeless elegance, making it an ideal destination for discerning travelers.",
            Amenities: [
                "Free High-Speed Wi-Fi",
                "Spa and Wellness Center",
                "Outdoor Pool & Jacuzzi",
                "Fine Dining Restaurants",
                "Fitness Center & Gym",
                "Royal Concierge Service",
                "Event & Conference Facilities"
            ],
            goodToKnow: [
                "Located at Bhawani Singh Road, Jaipur, Rajasthan 302005",
                "Originally a royal residence of the Maharaja of Jaipur",
                "Surrounded by lush Mughal-style gardens",
                "Close proximity to Hawa Mahal, City Palace, and Jantar Mantar"
            ],
            phone: "+91 141 238 5700",
            email: "reservations@rambaghpalace.com",
            website: "https://www.tajhotels.com/en-in/taj/rambagh-palace-jaipur/",
            location: "Bhawani Singh Road, Jaipur, Rajasthan 302005, India",
            gallery: [
                "hotel5.png",
                "hotelin5.jpg",
                "hotelin5ii.png",
                "hotel5gar.jpg",
                "hotel5garii.jpg",
                "hotel5res.jpg",
                "hotel5resii.jpg"
            ]
        }
    });
});

app.get('/hotel6', (req, res) => {
    res.render('hotel', {
        title: "Taj Mahal Tower, Colaba, Mumbai",
        hotel: {
            name: "Taj Mahal Tower, Colaba, Mumbai, Maharashtra",
            about: "Experience luxury and history at the iconic Taj Mahal Tower, located in the heart of Colaba, Mumbai, offering breathtaking views of the Arabian Sea and Gateway of India.",
            overview: "Taj Mahal Tower, part of the Taj Group, is a landmark in Mumbai. This luxury hotel offers world-class amenities and service, providing guests with an unforgettable stay amidst Mumbai's vibrant culture and heritage.",
            Amenities: [
                "Free High-Speed Wi-Fi",
                "Spa and Wellness Center",
                "Outdoor Pool & Jacuzzi",
                "Fine Dining Restaurants",
                "Fitness Center & Gym",
                "Exclusive Concierge Service",
                "Event & Conference Facilities"
            ],
            goodToKnow: [
                "Located at Apollo Bunder Road, Colaba, Mumbai 400001",
                "Iconic sea-facing hotel near Gateway of India",
                "Close to Elephanta Caves and Colaba Causeway",
                "Ideal for luxury leisure and business travel"
            ],
            phone: "+91 22 6665 3366",
            email: "reservations@tajhotels.com",
            website: "https://www.tajhotels.com/en-in/taj/taj-mahal-tower-mumbai/",
            location: "Apollo Bunder Road, Colaba, Mumbai 400001, Maharashtra, India",
            gallery: [
                "hotel6.png",
                "hotel6in.jpg",
                "hotel6inii.jpg",
                "seaview.jpg",
                "seaviewii.jpg",
                "tajdin.jpg",
                "tajdinii.jpg"
            ]
        }
    });
});

app.get('/hotel7', (req, res) => {
    res.render('hotel', {
        title: "The Imperial, Delhi",
        hotel: {
            name: "The Imperial, Janpath, Connaught Place, New Delhi",
            about: "A symbol of luxury and heritage, The Imperial, New Delhi, combines grandeur with impeccable hospitality, offering guests an exquisite experience with its colonial architecture and world-class amenities.",
            overview: "The Imperial New Delhi, opened in 1936, is one of the most iconic and luxurious hotels in India. This heritage property blends Victorian, Art Deco, and Lutyens architecture and offers a range of world-class services for both leisure and business travelers.",
            Amenities: [
                "Luxury Stays",
                "Global Cuisines",
                "Modern Fitness",
                "Colonial Exhibits",
                "Premium Venues",
                "Historic Tours"
            ],
            goodToKnow: [
                "Check-in from 3:00 pm, Check-out until noon",
                "235 rooms & suites",
                "Current Temperature: 20.1°C",
                "5 restaurants & 2 bars",
                "The Imperial Spa offers luxurious Indian and international therapies"
            ],
            phone: "+91 011 2334 1234",
            email: "reservations@theimperialindia.com",
            website: "https://www.theimperialindia.com",
            location: "The Imperial, Janpath, Connaught Place, New Delhi, India",
            gallery: [
                "hotel7.png",
                "h7e1.jpeg",
                "h7e2.jpg",
                "h7p1.jpeg",
                "h7p2.jpeg",
                "h7l1.jpeg",
                "h7l2.jpeg",
                "h7v1.jpeg",
                "h7v2.jpeg",
                "h7i1.jpg",
                "h7i2.jpeg",
                "h7d1.jpeg",
                "h7d2.jpeg"
            ]
        }
    });
});

app.get('/hotel8', (req, res) => {
    res.render('hotel', {
        title: "ITC Grand Chola, Chennai",
        hotel: {
            name: "ITC Grand Chola, Chennai",
            about: "Experience an era of magnificence & splendour at ITC Grand Chola. A tribute to Southern India’s greatest empires – the Imperial Cholas, the hotel offers unmatched grandeur with modern facilities.",
            overview: "With its awe-inspiring size and grandeur, ITC Grand Chola is a veritable destination unto itself. Located in the heart of Chennai, the hotel is a palatial tribute to Southern India’s greatest empires. It offers 522 rooms and 78 serviced apartments, featuring ten food and beverage outlets bringing regional, national, and global cuisines. It also boasts one of the largest conference and exhibition spaces in the country.",
            Amenities: [
                "Concierge Desk",
                "Butler Services",
                "Fitness Center",
                "Single Lady Traveller Rooms",
                "SPA"
            ],
            goodToKnow: [
                "Check-in from 3:00 pm, Check-out until noon",
                "522 rooms & 78 serviced apartments",
                "Current Temperature: 30°C",
                "10 restaurants & 2 bars",
                "World-class spa and fitness center"
            ],
            phone: "+91 80 2521 1234",
            email: "reservations@itcgrandchola.com",
            website: "https://www.itcgrandchola.com",
            location: "No. 63, Mount Road, Guindy, Chennai-600032, Tamil Nadu, India",
            gallery: [
                "hotel8.png",
                "h8i1.jpg",
                "h8i2.png",
                "h8p1.jpg",
                "h8p2.jpeg",
                "h8r1.png",
                "h8r2.jpg"
            ]
        }
    });
});

app.get('/hotel9', (req, res) => {
    res.render('hotel', {
        title: "Park Plaza, Ludhiana",
        hotel: {
            name: "Park Plaza, Ludhiana",
            about: "The Park Plaza, Ludhiana, is licensed to operate as a Park Plaza Hotel by the Radisson Hotel Group. The hotel is managed by Sarovar Hotels.",
            overview: "Park Plaza, Ludhiana, is a 5-star hotel located just 10 minutes from Ludhiana railway station. It offers luxurious accommodations, dining options, fitness facilities, and more.",
            Amenities: [
                "High-Speed Wi-Fi",
                "Spa and Fitness Center",
                "Indoor Swimming Pool",
                "Conference and Banquet Facilities",
                "Multi-Cuisine Restaurants",
                "24/7 Room Service"
            ],
            goodToKnow: [
                "Value for money: 8.7",
                "Location rating: 9.0",
                "Nearest airport: Sahnewal Airport (LUH)",
                "Distance to airport: 12 km"
            ],
            phone: "01123890606",
            email: "reservations@parkplaza.com",
            website: "https://www.parkplaza.com",
            location: "Ferozepur Rd, Gurdev Nagar, Ludhiana, Punjab 141001",
            gallery: [
                "hotel9.png",
                "h9e1.jpeg",
                "h9e2.jpg",
                "h9p1.jpeg",
                "h9p2.jpeg",
                "h9l1.jpeg",
                "h9l2.jpeg",
                "h9v1.jpeg",
                "h9v2.jpeg",
                "h9extra1.jpeg",
                "h9extra2.jpeg",
                "h9m1.jpeg",
                "h9m2.jpeg"
            ]
        }
    });
});

app.get('/dashboard', (req, res) => {
    res.render('dashboard', {
        title: "Dashboard",
        user: {
            welcomeMessage: "You have successfully logged in!"
        }
    });
});

app.get('/api/feedback', (req, res) => {
    res.render('feedback', {
        title: 'Feedback'
    });
});

app.get('/api/login', (req, res) => {
    res.render('login', { title: 'Login' });
});

app.get('/api/register', (req, res) => {
    res.render('register', { title: 'Register' });
});

// GET route to render the Thank You page
app.get('/thank-you', (req, res) => {
    res.render('thank-you', { title: 'Thank You' });
});

// Homepage Route
app.get('/', (req, res) => {
    res.render('index', { title: 'Hotel Transylvania' });
});
// Test route to trigger an error
app.get('/error-test', (req, res, next) => {
    // Create an error and pass it to the next middleware
    next(new Error('This is a test error'))
})

// Catch-all middleware for any routes that don't match (404 Not Found)
app.use((req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    error.status = 404;
    next(error);
})

// Use error handler middleware for catching and handling errors
app.use(errorHandler) // Handle errors globally
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})