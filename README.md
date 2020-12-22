## Currency converter with API Privatbank

### Deploy on https://ivankozhyn.github.io/zpoken-currency-converter/index.html

Розробити сторінку для переводу з однієї валюти в іншу. Для отримання курсів
використати
АПІ([https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11](https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11))

Інтерфейс:

- Селектор валютної пари (наприклад: USD/UAH)
- Два поля ввода, для першої валюти і для другої. Коли вводиш в одному полі
  данні, в іншому виводяться дані згідно нинішнього курса
- Дизайн довільний(стилізувати компоненти на свій смак)

Використовувати:

1. ReactJS (hooks)
2. Redux
3. SCSS

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best
performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about
[deployment](https://facebook.github.io/create-react-app/docs/deployment) for
more information.
