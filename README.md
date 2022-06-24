# SomeProject
The project was created for my learning JS and english.
It will halp you check yourself about english structure sentences.
I going to gain amount of filters to make my app as comprehensive as possible.
To use it, go to [here](). 

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
