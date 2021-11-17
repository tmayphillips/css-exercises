# Instructions

Practice fetching data, using a file called fetch_planets.html

**_DO NOT EDIT THE HTML FILE, ALL ADDITIONS AND STYLING SHOULD BE DONE DYNAMICALLY_**

1. The URL where our planet data is located is: "https://handlers.education.launchcode.org/static/planets.json". Add code to fetch this URL inside of a load event listener. Load event listeners execute when the page renders.

2. Peek at the response returned in the request by adding a console.log statement inside of the function.

Open your html with LiveServer. You won't see much on the page yet. Open your developer tools and examine both the Console tab for the response value, as well as the Network tab for the request status.

3. Use the .json() method on your response now to see more of the data in the console: What data type do you see printed?

4. Replace your console.log(json) with the following to view a portion of the JSON into the app.

```javascript
const destination = document.getElementById("destination");
destination.innerHTML = `<h3>Planet ${json[0].name}</h3>`;
```

Play around by changing the index number. Does the planet name change? Can you change the planet's property being printed?

5. Insert the rest of the properties of the first planet underneath its name on the web page.

6. Now edit you code and move the DOM manipulation inside of a click event handler that brings up the first planet when executed. This will mean we can remove the load event listener encasing the fetch method because we only want the information to load when we click the page now.

> Hint: Do not replace the load listener with a click listener because when do not want to recall the API with every click.

7. Finally, we want to be able to cycle to through the different planets' information by changing to the next planet with every click. AKA we would like to change the index being inserted on every click.

**_Extra Challenges_**

> Add a timer to your function. The planets automatically loop through based on a certain interval but can also be fast forwarded by click on the page as well.

> Add some css to jazz up the page a little.
