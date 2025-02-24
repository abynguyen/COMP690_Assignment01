// 1.	Convert the following highlighted identifiers to Camel Case notation:
//      let some_month		          let someMonth
//      function the Month()		     function theMonth()
//      let current-month		     let currentMonth
//      let summer_month		          let summerMonth
//      let MyLibrary-function		let myLibraryFunction


// 2.	Give me an example of a numeric literal expression, a string literal expression, a Boolean literal expression, and a null literal expression.
//      - numeric literal expression	  5.0
//      - string literal expression	  ‘full stack developer’
//      - Boolean literal expression	  true
//      - null literal expression		  null


// 3.	Give me two examples of complex / variable expressions.
//        let fullStackDeveloper = 'Aby ' + 2025
//        alert(fullStackDeveloper)
//
//        let classEnds = "June " + 2025
//        console.log(classEnds)


// 4.	Declare (but do not assign) 9 variables for the following identifiers: First Name, Last Name, Address, City, State, Zip Code, Your Age, Referral Source, May We Contact You. Use Camel Casing and Hungarian Notation when naming your identifiers.
//        let strFirstName
//        let strLastName
//        let strAddress
//        let strCity
//        let strState
//        let strZipCode
//        let intYourAge
//        let strReferralSource
//        let boolMayWeContactYou


// 5.	Take the 3 of the 9 variables that you created above and demonstrate 3 ways for declaring and assigning values to those variables.
//        let strFirstName = ‘Aby’		#declare and assign in same line using let
//        const strLastName = ‘Nguyen’	#declare and assign in same line using const
//        let straddress			     #declare one line and assign on following line using let


// 6.	Create a variable.
//      Add a number and a string and display the coerced result in the browser’s console window.
//      let studentName = 'Aby'
//      window.console.log(studentName + 20)

 
// 7.	Create two variables.
//      let studentName = 'Aby'
//      let isStudent = true

//      For the first variable, add a Boolean and a string and display the coerced result.
//      console.log(studentName + ' ' + isStudent)
 
//      For the second variable, add a number and a Boolean and display the coerced result.
//      console.log(isStudent + 25)
 

// 8.	Is the following string literal valid? If not, how would you fix it?
//      let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former."'
//      console.log(someString)

//      Corrected version: include escape character for the word I’m 
//      let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."'
//      console.log(someString)


// 9.	Create a variable that produces a null value in the console window.
//      Then, create a variable that produces an undefined value in the console window.
//      null value:   
//      let myName = 'Aby'
//      console.log(myName)
//      myName = null
//      console.log()   

//      undefined value:
//      let myLastName
//      console.log(myLastName)


// 10.	Use the unary typeof operator on various literals to return the following types within the console window: string, number, Boolean, object, and undefined.
//      let myName = 'Aby'
//      let classNumber = 690
//      let isStudent = true
//      let classNumbers = [690, 691]
//      let className
//      console.log(typeof(myName))          
//      console.log(typeof(classNumber))
//      console.log(typeof(isStudent))
//      console.log(typeof(classNumbers))
//      console.log(typeof(className))
 
 
// 11.	Within an alert box, use the concatenation operator (+) to display text in the alert box that appears as follows:
//      Hello Zak Ruvalcaba, welcome to the JavaScript class!
//      alert('Hello Zak Ruvalcaba, ' + 'welcome to the JavaScript class!')

//      Substitute my name for your name. Although not necessary in practice, I want you to use 2 concatenation operators to construct this string of text. One after the text “Hello” and a second one after your name and before the comma.
//      alert('Hello ' + 'Aby Nguyen' +', welcome to the JavaScript class!')


// 12.	Declare a variable called name and set it equal to your name.
//      Substitute your name in the previous alert string with the variable instead.
//      let name = 'Aby Nguyen'
//      alert('Hello ' + name +', welcome to the JavaScript class!')


// 13.	Declare a variable called course and set it equal to “JavaScript”.
//      Rework your alert string so that it displays the string of text but using the variables as opposed to hard coded text.
//      let name = 'Aby Nguyen'
//      let course = "JavaScript"
//      alert('Hello ' + name +', welcome to the ' + course + ' class!')


// 14.	Rework the above string so that a line break is added right before the word “Welcome”. Your alert box should display as follows:
//      Hello Zak Ruvalcaba.
//      Welcome to the JavaScript class!
//      let name = 'Aby Nguyen'
//      let course = "JavaScript"
//      alert('Hello ' + name +'.\nWelcome to the ' + course + ' class!')


// 15.	Replace the hardcoded string of your name with a prompt that asks the user for their name. The prompt’s response will now be captured in the name variable.
//      let name = prompt('What\'s your name? ')
//      let course = "JavaScript"
//      alert('Hello ' + name +'.\nWelcome to the ' + course + ' class!')


// 16.	Replace the hardcoded string of the class you are taking with a prompt that asks the user for the class they are taking. The prompt’s response will now be captured in the course variable.
//    let name = prompt('What\'s your name? ')
//    let course = prompt('What class are you taking?')
//    alert('Hello ' + name +'.\nWelcome to the ' + course + ' class!')


// 17.	Declare a variable called x and assign it a value of 10.
//      Declare a variable called y and assign it a value of 20.
//      Display the sum of those two numbers in the console window.
//      let x = 10
//      let y = 20
//      console.log(x+y)


// 18.	Declare a variable called x and assign it a value of 20.
//      Add and assign 20 to that variable and display the result in the console window.
//      The result should be 40.
//      let x = 20
//      console.log(x+=20)


// 19.	Declare a variable called x and assign it a value of 20.
//      Multiply and assign 5 to that variable and display the result in the console window.
//      The result should be 100.
//      let x = 20
//      console.log(x*=5)


// 20.	Declare a variable called x and assign it a value that equals the remainder of 20 divided by 3.
//      Divide and assign 1 to that variable and display the result in the console window.
//      The result should be 2. If you got 6.66 try again.
//      let x=20%3
//      console.log(x/=1)


// 21.	Using a set of Comparison and Logical operators, write an application that evaluates to true and displays the result within the console window.
//      let myName = 'Aby'
//      if (myName == 'Aby')
//          console.log('True, user name is ' + myName)
//      else
//          console.log('False, user name is not '+ myName)


// 22.	Using a set of Comparison and Logical operators, write an application that evaluates to false and displays the result within the console window. The application cannot use the same operators used in the previous application.
//      let age = 10
//      let anotherAge = 10
//      if(age != anotherAge)
//          console.log('True, ' + age + 'is not the same value as ' + anotherAge + '.')
//      else
//          console.log('False, ' + age + ' is the same value as ' + anotherAge + '.')




