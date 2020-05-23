## Project Overview
The COVID-19 World Tracker is designed to allow users to inquire, interact with, and explore large, complex COVID-19 data sets with ease. 

This project is a React Single Page Application using React-Router to manage routing. All data visualizations were created using D3.js, and are rendered dynamically in real-time using data fetched from the sources below.

![Imgur](https://i.imgur.com/VSivqho.png)

## Data Resources
The static base map the home page is rendered using country and vector data from [World Atlas TopoJSON](https://www.npmjs.com/package/world-atlas).

The global COVID-19 data rendered on the map, as well as the flag images, are from the [Novel COVID API](https://corona.lmao.ninja/).

The bar charts are rendered from data from the [Coronavirus COVID19 API](https://documenter.getpostman.com/view/10808728/SzS8rjbc?version=latest#00030720-fae3-4c72-8aea-ad01ba17adf8)

## Getting Started
1. Fork and clone the repository:

`$ git clone https://github.com/jessesbyers/covid19_world_tracker_frontend.git`

2. Navigate to the root directory:

`$ cd covid19_world_tracker_frontend`

3. Launch the react server from the frontend directory and navigate to the appropriate url in the browser (for example, localhost:3000).

`$ npm start`

## Using the Application and Exploring Data

### Exploring Real-Time Global Data Using the World Map Visualization
![Imgur](https://i.imgur.com/rkq732f.png)

1. From the home page, click on any of the buttons on the right sidebar to see global COVID-19 data diplayed on the base map. 

![Imgur](https://i.imgur.com/j8O1lMH.png)

2. Click on the map and drag/swipe to zoom in and out for a better view.

3. Hover over countries to highlight their boundaries and see the country name.

4. Hover over circles to view the specific data point.

5. Move between data representations by clicking on the buttons. 

6. Clear all data from the base map by clicking "Reset Map".

### Comparing Country-Specific Historical Data Using the Bar Chart Visualizations
![Imgur](https://i.imgur.com/4CAi0xT.png)

1. Click on "Create a New Collection". Use the dropdown menu to click on a number of countries that you would like to compare. You will see each country, with its flag, appear on the screen. When you are satified with your clollection, click on "View Collection" to view the data.

![Imgur](https://i.imgur.com/RDcbDAU.png)

2. Compare the countries by viewing the bar charts in ther dashboard. If a chart is blank, that means that no data has been reported (either because there have been 0 cases, OR because reliable data is not available through the API).

3. Interact with the data by hovering over each bar to see detailed information about that day, including: Day Number, Date, Total Cases, Active Cases, Recovered Cases, and Deaths. All data is cumulative data, showing the total reported from day one of the outbreak through that particular day.

![Imgur](https://i.imgur.com/S6EI6D1.png)

4. Click on any chart to see an enlarged chart.

5. Use the "Home" and "View Collection" buttons to continue exploring the map, generating questions, and looking for patterns and trends in the data.