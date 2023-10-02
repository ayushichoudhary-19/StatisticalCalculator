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
   
   
    ![image](https://user-images.githubusercontent.com/73214455/179927038-c6d273df-5355-4021-8586-142037331ffe.png)

   - `container-sm` and `border` `rounded` `my-5` `bg-light` `text-white` `text-center` classes have been used for the main container that takes in the input. It is wrapped inside a form tag.
  
   - `alert` class used to display the alert in case of wrong output.
   
 ![image](https://user-images.githubusercontent.com/73214455/179921964-5003764e-75a5-4755-b74b-41138be7b7ab.png)


<b>JavaScript</b>
    
   - After the submit button is clicked, the `addEventListner('click',Calculate)` calls the `Calculate` function which intern calls the `checkError()` function and cleans the input array by removing the extraspaces and converting the string inputs into numeric values using `Numeric()` function. Using `IsNaN()` function any errors in the input are checked.
    
   - If error occurs, the alert message's visiblity is changed from hidden to visible.
    
   - `setTimeout(() => msg.style.visibility='hidden',3000);` is used to make the alert stay visible on screen for 3 seconds.
    
   - On successfull submittion of correct values, the visiblity of all the calculated values are changed from hidden to visible.
    
# Future Features
Other statistical calculations such as mode, median, A/B Testing, Corelation Coefficient, Lenear Regression etc. will be added later.

# Website Preview
![image](https://user-images.githubusercontent.com/73214455/179927360-9e50feb4-aed0-44aa-ad50-9f1272f23a93.png)

<b>Demo: </b> https://ayushichoudhary-19.github.io/StatisticalCalculator/
# Contributing to StatisticalCalculator

Welcome to StatisticalCalculator! We're excited to have you as a potential contributor. Before you get started, please take a moment to read this guide.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Project Overview](#project-overview)
3. [How to Contribute](#how-to-contribute)
4. [Code of Conduct](#code-of-conduct)
5. [License](#license)

## Getting Started

To contribute to this project, you will need a basic understanding of HTML, JavaScript, and Bootstrap. You should also have [Git](https://git-scm.com/) installed on your local machine.

1. Fork this repository by clicking the "Fork" button at the top right.
2. Clone your forked repository to your local machine:

   ```bash
   git clone https://github.com/your-username/StatisticalCalculator.git
   ```

3. Create a new branch for your contributions:

   ```bash
   git checkout -b feature/my-feature
   ```

4. Make your changes and commit them:

   ```bash
   git add .
   git commit -m "Add your meaningful commit message here"
   ```

5. Push your changes to your forked repository:

   ```bash
   git push origin feature/my-feature
   ```

6. Create a Pull Request (PR) from your forked repository to the main repository.

## Project Overview

**StatisticalCalculator** is a web application that takes comma-separated values as input and calculates various statistical measures, including Mean, Sample, and Population Standard Deviation, and Variance. The project utilizes HTML for structure, JavaScript for calculations, and Bootstrap for styling.

### Code Highlights

- Bootstrap: The navigation bar is created using the `navbar` class with various styling variations.

- HTML and Bootstrap: The main input container is styled using `container-sm`, `border`, `rounded`, `my-5`, `bg-light`, `text-white`, and `text-center` classes.

- JavaScript: The `Calculate` function is called when the submit button is clicked, which in turn calls the `checkError()` function to validate and clean the input. The input is converted to numeric values using the `Numeric()` function, and errors are checked using `isNaN()`. Alerts are displayed in case of errors.

- Future Features: The project plans to add more statistical calculations, such as mode, median, A/B Testing, Corelation Coefficient, and Linear Regression.

### Website Preview

You can check out the project in action at [this link](https://ayushichoudhary-19.github.io/StatisticalCalculator/).

## How to Contribute

We welcome contributions from the community to enhance this project further. Here are some ways you can contribute:

- Fix bugs and issues.
- Implement new features and calculations.
- Improve code quality and structure.
- Enhance documentation.
- Share your feedback and suggestions.

Please follow the [Getting Started](#getting-started) guide for instructions on setting up your development environment and making contributions.

## Code of Conduct

Please note that this project follows an inclusive and welcoming Code of Conduct. By participating, you are expected to adhere to this Code of Conduct. Please review it [here](CODE_OF_CONDUCT.md).

## License

This project is licensed under the MIT License. For more details, please read the [LICENSE.md](LICENSE.md) file.

We look forward to your contributions, and thank you for your interest in StatisticalCalculator!
