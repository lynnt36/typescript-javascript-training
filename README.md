////////ANY PACKAGE INSTALLATIONS NEEDED IF YOU DONT ALREADY HAVE THEM ??/////////

NODE.JS AND NPM

Before installing enter node --version and npm --version to see if they have already been installed. If not then follow the further instructions below.
- Node.js is needed to be installed so your IDE is able to handle Typescript/Javascript code as well as provide you with options for any typescript/javascript frameworks or scaffolding for your projects
- once installed, you can check in your terminal/command prompt (**NOT POWERSHELL**) if it has been installed correctly by entering this command, node --version (if it has been installed correctly, you should see a version appear)
- By installing node, it also install's npm which is also needed. To check enter this command, npm --version to see if it has been installed ok

BUN

Before installing enter bun --version to see if it has already been installed. If not then follow the further instructions below.
- Bun is a fast javascript/typescript runtime
- To install, go into your terminal/command prompt and enter this command, npm install -g bun
- enter bun --version to see if your presented with a version which means it has successfully installed

GIT

Before installing enter git --version to see if it has already been installed. If not then follow the further instructions below.
- Git is needed to be installed as this repository lives in GitHub so your IDE can be linked to GitHub to pull the project down
- go to this website, https://git-scm.com/download/win, download an run the installer, you will be met with several windows along this process and below is what you should click before clicking the next button
- 1st window (select destination) - keep destination location as is and click next
- 2nd window (select components) - keep as same and click next
- 3rd window (select start menu folder) - keep as is and click next
- 4th window (choosing the default editor) - keep as is and click next
- 5th window (adjusting the name of initial branch) - select override the default branch name and type main and click next
- 6th window (adjust your path environment) - select git from the command line and also from 3rd-party software and click next
- 7th window (choosing ssh executable) - click use bundled OpenSSH and click next
- 8th window (choosing https transport backend) - click use the OpenSSL library and click next
- 9th window (configuring the line ending conversions) - click checkout window-style, commit unix-style line endings and click next
- 10th window (configuring the terminal emulator) - click MinTTY the default terminal of gitBash and click next
- 11th window (choose the default behaviour of git pull) - click fast-forward merge and click next
- 12th window (choose a credential helper) - click git credential manager core and click next
- 13th window (configue extra options) - leave as is and click next
- enter git --version in the terminal/command prompt to see if it has installed

  

////////PULLING THE PROJECT DOWN TO YOUR IDE//////////

I am basing this repository cloning for Visual Studio Code, but different people may be using different IDE's
- open VS Code
- press ctrl+shift+p and type git:clone in the box provided and click enter
- paste the repo URL in the box provided and click enter
- choose a folder where you want the repo to be cloned to
- After cloning, click open when prompted to
- To test if the project is running fine, in your terminal/command prompt within the folder you chose to clone the repo to, enter bun run "and the file path to the page in the project you would like to run"

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//// LESSON 1 ///////
- We covered variables, booleans and numbers.
- The learning material and exercises for these subjetcs can be found on the following pages
      - variables.ts (within the src/core/basic folder)
      - booleans.ts (within the src/core/primitives folder)
      - numbers.ts (within the src/core/primitives folder)

//// LESSON 2 ///////
- We covered strings.
- The learning material and exercises for this subject can be found on the following page.
  - strings.ts (within the src/core/primitives folder)
   
//// LESSON 3 ///////
- We covered operators, basic functions and const functions.
- The learning material and exercises for this subject can be found on the following page.
  - myConstFunction.ts (within the src/core/basic folder)
  - myFunction.ts (within the src/core/basic folder)
  - operators.ts (within the src/core/logic folder)
 
//// LESSON 4 CHALLENGE ///////

CHALLENGE 1
- This is a calculator challenge
- Build a small calculator that takes a score and returns a result message
- We will try to output the correct answer through applying logic we have already covered from the first 3 lessons, so go into the below files to get to the desired answer.
- booleans.ts, strings.ts, numbers.ts, operators.ts, vaiables.ts, myFunction.ts and myConstFunction.ts
- This challenge now moves us from just knowing syntax of each topic covered so far, to understanding and using each topic together to build something

CHALLENGE 2
- This is another calculator challenge
- Store two numbers
-Store an operation as a string
-Create separate functions for:
-add
-subtract
-multiply
-divide
-Create a function that:
  decides which operation to run
  returns a result message

CHALLENGE 3
- Create a User object with: username(string), age(number), isAdmin(boolean)
- Create a function that: checks if the user is 18 or over, and returns a boolean
- Create a function that checks if the user can access the system. Admin users always have access
- Create a function that returns a formatted summary string, which includes name, age, and access result
- Then log  the final result

- The above challenges can be found within src/core/challenges folder

//// LESSON 5 ///////
- We covered unit tests for string, boolean and number functions
- The learning material and exercises for these subjetcs can be found on the following page
- myFunction.spec.ts (within the src/core/unit-tests folder)

//// LESSON 6 ///////
- We covered further conditionals through writing if/else and switch statements
- The learning material and exercises for these subjects can be found on the following pages
- ifs.ts (within the src/core/logic folder)
- swicthes.ts (within the src/core/logic folder)

//// LESSON 7 ///////
- We covered arrays and introduced looping through arrays
- The learning material and exercises for these subjects can be found on the following page
- arrays.ts (within the src/core/logic folder)


