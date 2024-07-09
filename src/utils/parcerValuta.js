// import axios from 'axios';
// const cheerio = require('cheerio');

// const url = 'https://www.banki.ru/products/currency/cb/';

// export const getDataParseCourseValuta = async (currency) => {
//   try {
//     const array = [];
//     const regex = new RegExp(currency);
//     const response = await axios.get(url);

//     const $ = await cheerio.load(response.data);

//     $('tr').each((e, i) => {
//       if ($(i).text().match(regex)) {
//         $(i)
//           .children()
//           .each((e, x) => {
//             array.push($(x).html());
//           });
//       }
//     });

//     return +array[3];
//   } catch (error) {
//     if (error.response) {
//       // Запрос был сделан, и сервер ответил кодом состояния, который
//       // выходит за пределы 2xx
//       console.log(error.response.data);
//       console.log(error.response.status);
//       console.log(error.response.headers);
//     } else if (error.request) {
//       // Запрос был сделан, но ответ не получен
//       // `error.request`- это экземпляр XMLHttpRequest в браузере и экземпляр
//       // http.ClientRequest в node.js
//       console.log(error.request);
//     } else {
//       // Произошло что-то при настройке запроса, вызвавшее ошибку
//       console.log('Error', error.message);
//     }
//     // console.log(error.config);
//   }
// };
