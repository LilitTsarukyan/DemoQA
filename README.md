#Automation test for demoqa.com web page 
+ Open the page https://demoqa.com/text-box
+ Assert that page is opened
+ Fill in all fields on the page
+ Click on the Submit button
+ Assert a new item is added with correct information

# Run the test
+ npx mocha --no-timeouts