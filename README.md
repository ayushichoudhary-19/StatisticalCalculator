# Statistical Calculator
<b>Tech Stack </b>
1. HTML
2. JavaScript
3. BootStrap

# Description
The website takes in input in the form of comma seperated values and calculates the Mean, Sample and Population Standard Deviation and Variance. I have used bootstrap to style the website and JavaScript to calculate the result. 

# Code Highlights
<b>Bootstrap</b>

  - `navbar` class with its vaiations for styling have bee used to create the navigation bar.
   
    ![image](https://user-images.githubusercontent.com/73214455/179920239-e8daf83f-4356-44fd-8e3b-ff7b77a26be6.png)
    
   - `container-sm` and `border` `rounded` `my-5` `bg-light` `text-white` `text-center` classes have been used for the main container that takes in the input. It is wrapped inside a form tag.  
   
    ![image](https://user-images.githubusercontent.com/73214455/179926727-feaf201d-a705-49d5-86f1-65ee0de56682.png)
    
   - `alert` class used to display the alert in case of wrong output.
   
 ![image](https://user-images.githubusercontent.com/73214455/179921964-5003764e-75a5-4755-b74b-41138be7b7ab.png)


<b>JavaScript</b>
    
   - After the submit button is clicked, the `addEventListner('click',Calculate)` calls the `Calculate` function which intern calls the `checkError()` function and cleans the input array by removing the extraspaces and converting the string inputs into numeric values using `Numeric()` function. Using `IsNaN()` function any errors in the input are checked.
    
   - If error occurs, the alert message's visiblity is changed from hidden to visible.
    
   - `setTimeout(() => msg.style.visibility='hidden',3000);` is used to make the alert stay visible on screen for 3 seconds.
    
   - On successfull submittion of correct values, the visiblity of all the calculated values are changed from hidden to visible.
    
# Future Features
Other statistical calculations such as mode, median, A/B Testing, Corelation Coefficient, Lenear Regression etc. will be added later.



<b>Demo: </b> https://ayushichoudhary-19.github.io/StatisticalCalculator/
