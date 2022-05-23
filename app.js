// 1 Задание

for(let i = 10; i<=50; i++){
    if(i % 2 ==0)
    console.log(i)
}

// 2 Задание

const people = {
    firstName: 'Rozalina',
    lastName: 'Zinnurova',
    age: 18,
    animal: true
}
console.log(people)

// 3 Задание

/*
"В ту же ночь приехал я в Симбирск, где должен был пробыть сутки для закупки нужных вещей,
    что и было поручено Савельичу. Я остановился в трактире. Савельич с утра отправился по лавкам"
*/

const array = [
    'я в Симбирск,',
    'в трактире.',
    'с утра',
    'В ту же ночь',
    'Я остановился',
    'для закупки',
    'что и было поручено Савельичу.',
    'приехал,',
    'где должен был',
    'нужных вещей',
    'отправился по лавкам',
    'пробыть сутки',
    'Савельич'
]
const order = [3, 7, 0, 8, 11, 5, 9, 6, 4, 12, 2, 10]
const strings = order.reduce((strings,number) => [strings,array[number]],[])
const result = strings.join()
console.log(result)

//4 Задание

const fullNameFunction = ( firstName , lastName ) => {
    const fullName = ` ${firstName} ${lastName}`;
    console.log (fullName);
};

fullNameFunction('Розалина' , 'Зиннурова');

 //5 Задание

 let i = 20
 while(i<=67) {
     i++;
     if(i%2)
     console.log(i);
 }
