const readline = require('node:readline/promises')
// СПИСОК ФУНКЦИЙ
// для билетной кассы
function ticketPrice(category){
    switch (category){
        case 1:
            price=300;
            break
        case 2:
            price=500;
            break
        case 3:
            price=900;
            break
        default:
            price=0;
    };
    return price
};
function maxTickets(budget, price) {
    let Total =0;
    let count =0;
    while (Total+ price < budget) {
        Total =Total + price; 
        count = count + 1
    }
    return count
};
function printTicketResult(category, budget) {
    const price = ticketPrice(category);
    console.log(`Ваш выбор: билетная касса
    Категория билета ${category}, билет ${price} р., бюджет ${budget} р.: можно купить ${maxTickets(budget, price)} билета`);
}
// ДЛЯ ДОСТАВКИ ЗАКАЗА
function deliveryPrice(distance, total) {
    if (total>= 3000 || distance <=3) {
        price=0
    } else if (distance >= 4 && distance <= 10){
        price= 200
    } else if (distance > 10) {
        price= 200 + (distance - 10) * 25;
    }
    return price
};
function printDelivery(distance, total) {
    console.log(`Расстояние ${distance} км, заказ ${total} руб.: доставка ${deliveryPrice(distance, total)} руб.`)
};
// ДЛЯ ЛЕСТНИЦЫ
function printSteps(height) {
    for (let i = 1; i <= height; i = i + 1) {
  const level = i 
  console.log(`Ступенька ${level}`)
}
console.log(`
    Дальше лестница не построена
    Всего построено: ${height}`)
}

// ОСНОВНОЙ КОД ПРОГРАММЫ
async function main() {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
  console.log(`выберите задачу:
    1- биллетная касса
    2- доставка заказа
    3- лестница`);
    const action = Number(await rl.question('Ваш выбор: '))
    switch (action){
        case 1:
            // БИЛЕТНАЯ КАССА
            console.log(`Доступные категории билетов:
                1 - 300р
                2 - 500р
                3 - 900р`)
            const category= Number(await rl.question('Категория билета: '));
            const budget = Number(await rl.question('Ваш бюджет: '));
            printTicketResult(category, budget);

            break;
        case 2:
            // ДОСТАВКА ЗАКАЗА
            const distance= Number(await rl.question('Расстояниt в км: '));
            const total = Number(await rl.question('Сумма заказа: '));
            printDelivery(distance, total);
            break;
        case 3:
            // ЛЕСТНИЦА
            const height = Number(await rl.question('Высота лестницы: '));
            printSteps(height);
            break;
        default:
            console.log(`нет такой задачи`);
            
    };
    rl.close();
};
main();

