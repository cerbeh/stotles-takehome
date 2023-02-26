# Stotles work sample assignment

Tech test completed Friday 24th February

---

**Time Spent**

- 3.5hours. Completed warm up challenges in the first hour before a small break and tackled the main task afterwards.
---
**Process**
- Initially added a multiselect dropdown to pass array of ids to backend
- Expanded api module to reflect this additional field. Considered moving this module to be moved to the root of the react app and use a context provider to allow the table component to access the api but deemed it too time consuming.
- Originally added the buyers mapped from the records list but realised this was causing me issues since I would only have buyers from loaded records due to the pagination.
- Added a `GET /buyers` endpoint to api for app to get on load and provided down to table component via props.
- Reworked `searchRecords` method. I struggle getting this to work how I wanted with conditional queries if the user has sent a `buyerId` or `textSearch` or both. With more time I would've used the sequelize model and added a method that would allow Sequelize to infer my defined search criterias.
- Moved to a single `buyerId` to allow the SQL query to be simplified.
---
**Challenges**
- Coding the currency lookup, I took some time to realise that a record could have a value but no currency so I needed to adjust my function guard to accomodate, but it also allowed me to use how React handles return `null` in `render()`
- I wanted to programatically build the sql query string and spent way too long trying to write a *nice* way to do it and settled on the current way with conditionals building the string
- **BUG** Once a buyer is selected in the drop down you cant clear. This is because I was working with multiple for most of the task and when removing it at the end didn't feel I had the time to solve the solution, looking at the antd docs suggests it might be possible to have a tag still with single select.
- **Missed** I missed an instruction on the warm up exercises where I needed to check the date for a `tender` on whether it is open or closed. I must have implicitly thought that a `tender` would become a `contract` immediately and not realised they would have this third state in their lifecycle of being closed to tender but not awarded yet.
- **Missed** Formatting the dates in the `stage` column
---
**Stretch goals**
- As mentioned in my process section, I would've liked to set up the api on a Context provider to allow for React to provide the api to components that way rather than the `RecordSearchPage` and `App.tsx` instantiating their own instances
- I would've liked to add buttons to the buyer column to allow users to select a buyer from scrolling the table as well as the drop down at the top
