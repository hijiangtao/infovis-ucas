# Group B "FantasticFour" VIS Project

## Visualization Data and Task Scenario (Checkpoint I)
Project Name: <b>Analyzing taste preference by visualizing recipes in different countries</b>

### Data:

We use Ingredients, nutrition, cooking method of recipes of different countries as our data. The data can be acquired on websites Yummly.com and Allrecipes.com using a web crawler. (Yummly.com also provides API, but not free for commercial use and it only offers limited access for academic use) Using regular expression or other HTML analysis method, we can use a csv file or database to store the data.

### User and task:
* Users: everybody (especially for people who are curious about different taste preference in different countries, and those who want to gain some insights on how to eat healthy)

* Tasks:
  * Select a certain ingredient, see which country use this ingredient most. (show the ranking of number of appearance in different countries' recipes)
  * Check out which country like salty(sweet, spicy etc) food best
  * Check out which country like to bake(fry, stew etc) food best
  * Check out which country like high protein(low protein, high fat, low fat etc) dishes

### Novelty:
* Novel data source for visualization and analysis
* Using web crawler to grab data and select data that we need
* Proper visualization of ingredients, nutrition etc, users can see taste preference of different countries clearly and draw some conclusions

### Assignment:
* 何晨: Acquire data from Yummly.com and Allrecipes.com. Presentation
* 卢旺: Design how to better visualize the data, mathematical method for dimension reduction etc
* 蔡晨沁: Visualize data via D3.js
* 白梅: Design the interaction and color design of the webpage

Check out the [slide](http://ddl.escience.cn/f/BcUK)
## Visualization Design (Checkpoint II)
### Visualization selection:

There are totally 3 views in our project. We call them <b>global view</b>, <b>country's view</b> and <b>recipe similarity view</b>.
* Global view: 
  * There is a <b>world map</b> with a <b>search panel</b> on the right. Users can change the search criteria by inputting certain ingredients(i.e. searching recipes with those ingredients), setting the spiciness range etc. After modifying the search criteria, the colors of different countries change. Different colors represent the number of recipes of the country according to the search criteria. Also, a <b>bar chart</b> at the bottom reflects the ranking of the number of recipes of different countries. Move the cursor above a country and the corresponding bar in the bar chart is highlighted. Click a country to jump to the country's view.
  * To be more exact, the search panels have an <i>auto-complete textbox</i> for ingredients, <i>radio button</i> for cooking techniques, a 2-handle <i>slider</i> for flavor indices.
* Country's view: 
  * <b>Bubbles</b> with keywords emerge one after another at a certain interval. The size of the bubble indicates the number of recipes that match the keyword in this country. The color represents different properties of recipes. (e.g. cooking technique, ingredients included) Those bubbles can reflect the general characteristics of the recipes in this country.
* Recipe similarity view: 
  * Using dimensionality reduction algorithms like MDS(Multidimensional scaling), recipes are first mapped into dots in 2-D space. The distance of dots represents the similarity of recipes. Different colors of the dots indicate different countries that the recipes belong to. Then we can do a bunch of analysis. For example, we can examine whether recipes of different countries show clustering tendency or not. We can check if Japanese and Chinese recipes have similar distribution etc.
  * Move the cursor above certain dot to see the brief information of the recipe

### Novelty:
* The <i>recipe similarity view</i> is the most challenging to visualize. The reason is that only nutritional values(i.e. fat, protein etc) and flavor indices(i.e. spiciness, sweetness etc) are decimals, but they are not discriminative for recipes of different countries. Our approach is to consider non-decimal ingredients as well. We plan to adopt a weighted similarity measure of recipes(a simple way to calculate the distance between 2 sets of ingredients is <i>Jaccard similarity</i>). After calculating the distance among recipes, we perform dimensionality reduction via MDS. The selection of the similarity measure requires further consideration.
* The course of the recipes(i.e. whether the recipe is for breakfast, dessert, lunch, soup etc) lead to large nutrition variations. If we see different countries as different classes, there may be larger intra-class variations than inter-class variations. Therefore, we'd better compare recipes of different countries with the course fixed in some tasks. 

### Feasibility:
* We use <i>D3.js</i> for visualization. 
* On average, 3 team members each work on one view and another member focuses on dimensionality reduction. D3.js homepage offers many examples like <b>world map with heat color</b>, <b>bar chart</b>, <b>bubble chart</b> that we can use in our project. It is feasible to complete it in this class

Check out the [slide](http://ddl.escience.cn/f/BxxG)
## Poster Session (Mid-Term)

## Final Presentation

## Links
1. Yummly: Personalized Recipe Recommendations and Search. http://www.yummly.com/
2. Allrecipes | Food, friends, and recipe inspiration. http://allrecipes.com/
