# Automated Software Testing Assignment
An solution from an automated software testing assignment

## Requeriments

-   [Docker](https://docs.docker.com/)

## Installation

```
$ docker-compose up
```

## How to check if text is palindrome

```
  const Text = require("src/Text");
  const text = new Text("bob");
  console.log(text.isPalindrome()); // Logs true
```

## How to run the tests

```
# Enter inside the container
$ docker exec -it automated-software-testing-assignment_server_1 sh

# Run tests
$ yarn test
```
# License
[MIT](https://github.com/iammateus/automated-software-testing-assignment/blob/main/LICENSE)
