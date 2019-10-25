# Capital One - Summit Challenge 2017

A visual representation of some Airbnb trend data from 2007 - 2016. The data showed trends in pricing, neighborhood popularity as well as hosts tendencies.

## Motivation
Keen to learn more about software engineering and pick up new skills I jumped in head first picking up a lot of new skills and working with totally unfamiliar languages and libraries like JavaScript, ChartJS, and JQuery.

Hopefully this project can be used to show consumers where to best invest their money in the city of San Francisco to remain competitive in the apartment rental industry.

## Submission summary:

I started this project without ever having touched a line of javascript or jQuery. Throughout this project I learned how to sort through arrays without a for-loop by using the javascript map and slice functions to return only the objects I need.

That was really cool for me because I initially thought the best way to sort through an array was looping because that is what I was familiar with in Java. After looking through documentation and tutorials online, I was able to go through my JSON objects much quicker using these functions.

JSON files are also new territory for me as well as parsing CSV files into JSON. I became more familiar with manipulating data and removing anomalies such as null or blanks from zip codes so it would not produce outliers in my visualizations.

My favorite part of this entire project was learning and using the chartJS library as it had strong documentation and resources for a beginner. I was able to go from never having written anything in javascript to creating a multi-element graph visualization showcasing both pricing and frequency data in one canvas.

​I implemented custom views into the charts with legends so users can see different options in the data.

NOTE: Review scores were used to gauge positive reviews and all nulls and zeroes were removed from the data to avoid outliers.


## Tech/framework used

Built with
- ChartJS library for data visualization
- Bootstrap CSS framework for templating
- Javascript and jQuery for mapping functions and returning results from JSON data​​
- Random color javascript library to add additional visual element to the charts (refresh to see new colors!)

![](c1SummitChallenge.gif)

## Challenges​:

Learning javascript was definitely a challenge for me as I had not explored web development yet beyond static HTML and CSS sites. I was able to get ahead of this obstacle by reading documentation online, resource guides, and asking for help from friends when I needed to understand a concept I wasn't familiar.

I was deploying to GitHub Pages for the first time and learned that it is not as easy as just enabling Pages. My local environment was working fine but my visualizations were not working on GitHub. I used the developer console to debug the problem and found that direct linking to the raw JSON files was the best option to feed the JSON into my scripts instead of a relative path as I had in my local environment. I was able to get rid of the 404 errors in the console and my code worked in both my local and remote environment!


## Future Updates:

I plan on incorporating Python's textblob library to create a sentiment scale of neighborhood popularity based on reviews via the Twitter API in combination with resources pulled from Zillow's getcomps API once I learn how to parse through XML data. I am really excited about this next step as I would be learning Python and adding a cool new feature to my project!

I am also interested in giving potential sellers the opportunity to visualize their earning potentials using geolocation provided.

## Conclusion​:

I am so grateful for this opportunity because it exposed me to data analysis as a possible career path and also taught me how much I could learn on my own in a short period of time.

I learned so much during this experience that I would never have received through regular lecture alone. Even more valuable to me was that I was able to apply my learning experience on this project to help mentor students during the diversity and inclusion hackathon I co-organized at Lehman College this past weekend!

I plan to continue self-learning outside of class to build on my growth as a developer. Thank you for the opportunity, Capital One.
