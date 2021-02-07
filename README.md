Production Read : https://bonfire-connecting.herokuapp.com/


## Inspiration
Living in Canada, it was clear to us that our cultures didn't originate here. However, many of our  group members felt isolated from their cultures; our parents hadn't taught us Igbo, even though it was the language of their home country, or we'd never been to a gathering where we were really able to celebrate our cultures. 

## What it does
Bonfire is a project we created to help young people like us learn more about where we came from, the dishes, dances, and music that're iconic for where we're from, and how our cultures and traditions have grown over time. Of course, we wanted to give back to the people offering as well—which is where our skill-trading comes in. Bonfire users can trade knowledge about each others cultures, or offer up any skills they can bring to the table, all in the interest of learning more about the world's cultures and traditions 🙂.

## How we built it
We built Bonfire with React on the frontend, Flask for the backend, and MongoDB for the database. We implemented WebRTC with Jitsi for video conferencing. To create data for the demonstration we scraped data from the web using Beautiful Soup and then applied machine learning using the Hierarchal Agglomerative Clustering algorithm in Python (Sklearn, pandas).

## Challenges we ran into
- Integrating the Google Maps API with data from a MongoDB Flask database
- Routing, UI positioning and creation, and database requests in React
- Learning how to create an authentication service in Flask
- Solving merge conflicts (ouch!) with GitHub, and collaborating in a rapid-development Git environment
- Generating fabricated user data for demonstration and testing purposes with machine learning

## Accomplishments that we're proud of
- Using machine learning to create profile data for demonstration purposes
- Some of our members didn't have much React experience, yet were still able to contribute!
- Having a full project plan before starting (UML diagrams are great :))
- Perfectly integrating our frontend with the backend Flask for authentication and profile storage

## What we learned
Over the course of Bonfire, we learned how to:
- Go from a great Figma design to a beautiful UI in React
- Plan out projects with UML
- Connect the Google Maps API on the frontend with a Flask, MongoDB backend
- Scraping fake data from randomly generated profiles online using BeautifulSoup and machine learning
- Building a recommendation system using Machine Learning to cluster similar profiles
- Communicate with completely new people to make something great!

## What's next for Bonfire
We'd love to work on/add the following to get Bonfire really up and running:
- Social media integration for quick profile creation (instagram, LinkedIn, Facebook,
- Messaging system within Bonfire to set up call times
- Blogging/posting system for people to show off their cultures and traditions on their profiles!
