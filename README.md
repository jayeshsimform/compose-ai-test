# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Demo

```
https://compose-ai-test.vercel.app/
```

## Clone Project

```
git clone https://github.com/jayeshsimform/compose-ai-test.git
```

## Install node modules

```
npm install
```

## Available Scripts

In the project directory, you can run:

### `npm start`

```Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
```

### `npm run build`

```
This command will create production builds.
```

### Here is the list of predefine command

```js
const  preDefCommand = ['/add:', '/uppercase:']

start message with / an it will show available command to choose from. Because of time limitation, manual typing command will not work as expected.

```

<h2>/add:</h2>

```
This command will add numbers. it will ignore any string.

For ex. : /add: 1 2 3 will result into 6

/add: 1 hello 2 hi 3 demo 4abcs result into 6

```

### Add Command

![alt text](https://raw.githubusercontent.com/jayeshsimform/compose-ai-test/master/src/images/add-command-code.png)

### Add Command Output

![alt text](https://github.com/jayeshsimform/compose-ai-test/blob/master/src/images/add-command-output.png?raw=true)

### Number with String

![alt text](https://github.com/jayeshsimform/compose-ai-test/blob/master/src/images/add-command-validation-code.png?raw=true)

### Number with String Output

![alt text](https://github.com/jayeshsimform/compose-ai-test/blob/master/src/images/add-command-validation-code-output.png?raw=true)

<h2>/uppercase:</h2>

```
/uppercase command will convert lower case string into uppercase.

For ex. : "/uppercase: hello world"
Output : HELLO WORLD.

```

![alt text](https://github.com/jayeshsimform/compose-ai-test/blob/master/src/images/uppercase-command-code.png?raw=true)

![alt text](https://github.com/jayeshsimform/compose-ai-test/blob/master/src/images/uppercase-command-output.png?raw=true)

### Project requirements:

```
Start a message with / an it will show the available command to choose from the suggestion.
```

### Assumptions

```
After typing slash commands, the existing text in textbox will be affected. Newly typed text after executing slash command will not affected.
```

### Limitations

```
User must choose a command from the options; manually entered command will not produce the expected results.
```

### Milestones

```
In the future, we can implement backend support to get command list, And using that we can implement many functionality Like Join group, Start meeting, Open app.
```
