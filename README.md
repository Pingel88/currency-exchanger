# _Currency Exchanger_
#### _A calculator that takes a US dollar value entered and returns a value in the currency of choice based on current exchange rates._
#### _By Mike Pingel_
## Technologies Used
* _ExchangeRate-API_ - https://www.exchangerate-api.com/
* _HTML_
* _CSS_
* _Bootstrap_
* _Javascript_
* _jQuery_
* _GitHub_
* _webpack_
* _npm_
* _Jest_
* _ESLint_
* _Babel_

## Description
#### This project calculates the value of a chosen currency when given an amount in US dollars based on current exchange rates. This project will make an API call to https://www.exchangerate-api.com/ utilizing an API key to acquire the current exchange rates. The project will then use jQuery and JavaScript functions to pull the value from the user interface and return the value in the requested currency. Various npm and webpack tools will bundle and process the code into a more "machine friendly" format.

## Setup/Installation Instructions
To view this webpage and the project contents offline:
* Copy the repository URL to your clipboard: `https://github.com/Pingel88/currency-exchanger.git`
* Open Git Bash or your preferred equivalent
* Change the current working directory to where you want the cloned directory
* Type `git clone`, then paste the URL from your clipboard and press enter
* Change the current working directory to the cloned directory
* Type `npm install` and press enter
* Acquire and add your own API key:
  * Create an account at https://app.exchangerate-api.com/sign-up
  * Upon account creation, you API key should be visible at https://app.exchangerate-api.com/dashboard
  * Copy the key to your clipboard and return to Git Bash (or equivalent)
  * Verify you are in the root directory of the project and type `touch .env` and press enter to create a .env file
  * If you are using a Windows machine, type `notepad .env` to open the .env file in Notepad
  * Paste your API key in Notepad and prepend "API_KEY=" to the beginning similarly to: `API_KEY=1n2O3t4a5Re6a78l90k9E87y654321`
  * Save and close the .env file
* To view the webpage:
  * Return to Git Bash (or equivalent), type `npm run start` and press enter
  * Your default browser will open with the webpage viewable
  
## Contact Information
#### Mike Pingel
#### [Email](mailto:mdpingel@gmail.com?subject=[GitHub]Epicodus%20Project%20-%20Currency%20Exchanger)
## Copyright & License Information
#### MIT
#### Copyright &copy; 2021 Michael Pingel