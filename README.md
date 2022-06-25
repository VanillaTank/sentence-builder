# SomeProject
The project was created for my learning JS and english.
It will halp you check yourself about english structure sentences.
I going to gain amount of filters to make my app as comprehensive as possible.
To use it, go to [here](https://vanillatank.github.io/sentence-builder/). 

### To add new filter and data
1. Add filter name (like 'Generals' or 'Conditions') to `app.component.ts` to `filterList`. 

2. Create filter items in `filter-data` folder -> `SEARCH_ITEM.ts`. (Like 'Time' and 'past', 'present', 'future') to array marked with comment  
// ADD NEW FILTER TYPE

3. Create data in `cards-data` folder in a new .ts file.

4. Import the new files in `card-service.service.ts` to places marked with comments  
// ADD NEW CARD DATA HERE and //ADD NEW FILTER DATA HERE

5. Add new kinds of search values to `filter.component.ts` to places marked with comment  
//ADD NEW KIND OF SEARCH VALUES HERE

6. Add path to search values in `card-service.service.ts` to places marked with comment  
// ADD PATH TO SEARCH VALUES 


### How add new card data to existing filter
1. Create a new .ts file with your card data in `cards-data`
2. Import it to `card-service.service.ts`
3. Unwrap data to appreciate array (to `GENERAL_CARDS` an example)
