const usdToRub = (usd) => usd * 100
console.log(usdToRub(5)) // 5

const discount10 = (price) => price * 0.9
console.log(discount10(1224))

const greet = (name) => `Привет, ${name}!`
console.log(greet("Stas"))

const square = (x) => x * x
console.log(square(5)) // 25

const isEven = (num) => num % 2 === 0
console.log(isEven(10)) // true

const firstChar = (str) => str[0]
console.log(firstChar("fgghkhdjh"))

const stringLength = (str) => str.length
console.log(stringLength("fgghkhd"))

const add = (a, b) => a + b
console.log(add(1, 22))

const max = (a, b) => a > b ? a : b
console.log(max(5, 7)) // 7

const canVote = (age) => age >= 18 ? "Можно голосовать" : "Нельзя голосовать"
console.log(canVote(17)) // М

const lastChar = (str) => str[str.length - 1]
console.log(lastChar("klfjdldkh"))

const celsiusToFahrenheit = (celsius) => celsius * 1.8 + 32
console.log(celsiusToFahrenheit(25))

const fahrenheitToCelsius = (farengate) => (farengate - 32) / 1.8
console.log(fahrenheitToCelsius(75))

const minOfThree = (a, b, c) => {
    if (a < b && a < c ) return a;
    if (b < a && b < c ) return b;
    return c;
};
console.log(minOfThree(5, 5, 10))

const isPalindrome = (word) => {
    const mass = word.split('');
    const rev = mass.toReversed();
    if (JSON.stringify(mass) === JSON.stringify(rev)) return true;
    return false
}
console.log(isPalindrome("gfgfgfg"))

const isPalindromeNew = (word) => word === word.split('').reverse().join('')
console.log(isPalindromeNew("gfgfgfga"))

const convertText = (text) => {
    if (!text) return ""
    if (text[0] !== text[0].toUpperCase()) return text.split('').reverse().join('');
    return text
}
console.log(convertText('привет!'))

const getNumberExplanation = (num) => {
    switch (num) {
        case 666:
            return "devil number"
        case 42:
            return "answer for everything"
        case 7:
            return "prime number"
        default:
            return "just a number"
    }
}
console.log(getNumberExplanation(10))

const getErrorMessage = (code) => {
    switch (code) {
        case 404:
            return "Страница не найдена"
        case 403:
            return "Доступ запрещен"
        case 500:
            return "Внутренняя ошибка сервера"
        case 400:
            return "Некорректный запрос"
        default:
            return "Неизвестная ошибка"
    }
}
console.log(getErrorMessage(300))

const getWeekDay = (day) => { // Принимает дни недели, от 1 до 7
    switch (day) {
        case 1:
            return "Понедельник"
        case 2:
            return "Вторник"
        case 3:
            return "Среда"
        case 4:
            return "Четверг"
        case 5:
            return "Пятница"
        case 6:
            return "Суббота"
        case 7:
            return "Воскресенье"
        default:
            return "Неверный день"
    }
}
console.log(getWeekDay(8))

const getGradeDescription = (grade) => { // Оценки от 1 до 5
    switch (grade) {
        case 5:
            return "Отлично"
        case 4:
            return "Хорошо"
        case 3:
            return "Удовлетворительно"
        case 2:
            return "Неудовлетворительно"
        case 1:
            return "Плохо"
        default:
            return "Некорректная оценка"
    }
}
console.log(getGradeDescription(0))

const getSeason = (month) => { // 1,2,12 - зима. 3,4,5 - весна. 6,7,8 - лето. 9,10,11 - осень.
    switch (month) {
        case 1:
        case 2:
        case 12: return "Зима"
        case 3:
        case 4:
        case 5: return "Весна"
        case 6:
        case 7:
        case 8: return "Лето"
        case 9:
        case 10:
        case 11: return "Осень"
        default: return "Нет такого месяца"
    }
}
console.log(getSeason(13))
