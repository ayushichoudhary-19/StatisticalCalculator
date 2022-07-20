# Statistical Calculator
<b>Tech Stack </b>
1. HTML
2. JavaScript
3. BootStrap

# Description
The website takes in input in the form of comma seperated values and calculates the Mean, Sample and Population Standard Deviation and Variance. I have used bootstrap to style the website and JavaScript to calculate the result. 

# Code Highlights
<b>Bootstrap:</b>
    * <code> navbar </code> class with its vaiations for styling have bee used to create the navigation bar.
    ![image](https://user-images.githubusercontent.com/73214455/179920239-e8daf83f-4356-44fd-8e3b-ff7b77a26be6.png)

    * <code> container-sm </code> and <code> border <code>rounded my-5 bg-light text-white text-center </code> classes have been used for the main container that takes in the input. It is wrapped inside a form tag.  
    ![image](https://user-images.githubusercontent.com/73214455/179921353-1ad0fb29-8866-45f1-ac53-f4d4b26f22e2.png)
    * <code>alert</code> class used to display the alert in case of wrong output.
 ![image](https://user-images.githubusercontent.com/73214455/179921964-5003764e-75a5-4755-b74b-41138be7b7ab.png)

<b>JavaScript:</b>
    * After the submit button is clicked, the <code>addEventListner('click',Calculate)</code> calls the <code>Calculate</code> function which intern calls the <code> checkError() </code> function and cleans the input array by removing the extraspaces and converting the string inputs into numeric values using <code>Numeric()</code> function. Using <code>IsNaN()</code> function any errors in the input are checked.
    * If error occurs, the alert message's visiblity is changed from hidden to visible.
    * <code>setTimeout(() => msg.style.visibility='hidden',3000); </code> is used to make the alert stay visible on screen for 3 seconds.
    * Onn successfull submittion of correct values, the visiblity of all the calculated values are changed from hidden to visible.
    
# Future Features
Other statistical calculations such as mode, median, A/B Testing, Corelation Coefficient, Lenear Regression etc. will be added later.



<b>Demo: </b> https://ayushichoudhary-19.github.io/StatisticalCalculator/
