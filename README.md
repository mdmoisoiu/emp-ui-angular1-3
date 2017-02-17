## About

This is the Angular 1.3 version of my pet project "Employee Directory".<br/>
It contains a set of functionality common to data driven applications.<br/>

## Setup

1. Update "config.js" to point to an instance of "https://github.com/mdmoisoiu/emp-services-vanilla-php", like "http://lab.mateimoisoiu.ro/emp-services-vanilla-php/amfGateway.php"
2. Install node and grunt
3. Run "npm install" in project root folder
4. Run "grunt server" in project root folder
5. Open a browser on "http://localhost:9001/"
6. Login with "test" "test"

## Functionality
#####The ui will expose the following functionality( per screen ):

####Login:
        
    - US1.1 
        Given I am an unauthenticated user, 
        When I open the application, 
        Then I should see the login screen
    - US1.2 
        Given I am an unauthenticated user, 
        When I press "Login" button on login screen without entering values for "Username" and "Password",
        Then I should receive a meesage about this two fields beeing manatory
    - US1.3 
        Given I am an unauthenticated user, 
        When I press "Login" button on login screen, after I entered an invalid password/username combination,
        Then I should receive the message "Invalid username or password!"
    - US1.4 
        Given I am an unauthenticated user, 
        When I press "Login" button on login screen, after I entered a valid password/username combination,
        Then I should navigate to home screen

####Home:
    - US2.1
        Given I am an authenticated user, 
        When I am on home screen,
        Then I should see the current number of employees and positions 
    - US2.2
        Given I am an authenticated user, 
        When I am on home screen and I press "View Detail"( for Positions and "Employees") or "Chat" buttons,
        Then I should navigate to described screen

#####Chat:
    - US3.1
            Given I am an authenticated user, 
            When I am on chat screen,
            Then I should see the current live chat content with a delay of max 10 secs    	
    - US3.2
            Given I am an authenticated user, 
            When I am on chat screen and I press "Post" button after I writtend a message,
            Then I should see the message in the chat messages list, all the other active chat users should see the 
            message in their messages list with a delay of max 10 secs

#####Positions:
    - US3.1
            Given I am an authenticated user, 
            When I am on positions screen,
            Then I should see the current list of positions(name, employee, country) in a hierarchycal manner 
    - US3.2
            Given I am an authenticated user, 
            When I am on positions screen, for each position I should see a Delete button, and when I press that button,
            Then I should be able see a confirmation popup with two options, No that will remove the popup, Yes that will delete the position
    - US3.3
            Given I am an authenticated user, 
            When I am on positions screen, for each position I should see a Edit button, and when I press that button,
            Then I should be able see a screen where I am able to edit all position properties :
                - name - TI, required
                - line manager - DDL with all valid possible parent positions
                - employee - DDL with all system employees
                - country - DDL with all system countries, required
    - US3.4
            Given I am an authenticated user, 
            When I am on position edit screen, after I edit any property,
            Then I should be able to save any modified property and return to positions screen 
            Or cancel and return to positions screen
    - US3.5
            Given I am an authenticated user, 
            When I am on positions screen, when I press the add position button,
            Then I should be able see a screen where I am able to enter all position properties
    - US3.6
            Given I am an authenticated user, 
            When I am on add position screen, after I enter all mandatory properties,
            Then I should be able to commit this new position 
            Or I should be able to cancel adding a new position

#####Employees:
    - US3.1
            Given I am an authenticated user, 
            When I am on employees screen,
            Then I should see the current list of employees(full name, email, image thumbnail) 
            And I should have the option to search for specific employees
    - US3.2
            Given I am an authenticated user, 
            When I am on employees screen, for each employee I should see a Delete button, and when I press that button,
            Then I should be able see a confirmation popup with two options, No that will remove the popup, Yes that will delete the employee
    - US3.3
            Given I am an authenticated user, 
            When I am on employees screen, for each employee I should see a Edit button, and when I press that button,
            Then I should be able see a screen where I am able to edit all employee properties :
                - First name - TI, required 
                - Last name - TI, required 
                - Email - TI, required, valid email
                - Phone - TI, required, numeric 
                - Image - File selector
    - US3.4
            Given I am an authenticated user, 
            When I am on employee edit screen, after I edit any property,
            Then I should be able to save any modified property and return to employees screen 
            Or cancel and return to employees screen
    - US3.5
            Given I am an authenticated user, 
            When I am on employees screen, when I press the add employee button,
            Then I should be able see a screen where I am able to enter all employee properties
    - US3.6
            Given I am an authenticated user, 
            When I am on add employee screen, after I enter all mandatory properties,
            Then I should be able to commit this new employee 
            Or I should be able to cancel adding a new employee

#####Common to all screens:
    - US5.1
            Given I am a any type of user, 
            When I am on any screen mentioned in title, and I change the language, 
            Then I should see all language specific text in the new language

#####Common to Home, Chat, Positions and Employees:
    - US6.1
            Given I am an authenticated user, 
            When I am on any screen mentioned in title, and I press "Logout" button, 
            Then I should navigate to login screen and I should not be able to access any other screen untill I log in again

#####Common to Chat, Positions and Employees:
    - US7.1
            Given I am an authenticated user, 
            When I am on any screen mentioned in title, and I press "Back" button, 
            Then I should navigate to home screen




