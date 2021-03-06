const tasks = `
    [
        {
            "question": "Пара лошадей пробежала 40км. Сколько пробежала каждая лошадь?",
            "answer1": { "result": true, "value": 40 },
            "answer2": { "result": false, "value": 20 },
            "type": "Спорт"
        },
        {
            "question": "В какой игре используются мяч наибольшей величины",
            "answer1": { "result": false, "value": "Регби" },
            "answer2": { "result": true, "value": "Баскетбол" },
            "type": "Спорт"
        },
        {
            "question": "Какая длина беговой дорожки на спортивном стадионе?",
            "answer1": { "result": true, "value": 400 },
            "answer2": { "result": false, "value": 800 },
            "type": "Спорт"
        },
        {
            "question": "Ее должен взять прыгун",
            "answer1": { "result": false, "value": "Магнезию" },
            "answer2": { "result": true, "value": "Высоту" },
            "type": "Спорт"
        },
        {
            "question": "Сколько видов спорта существует в мире?",
            "answer1": { "result": true, "value": 3000 },
            "answer2": { "result": false, "value": 5000 },
            "answer3": { "result": false, "value": 4000 },
            "answer4": { "result": false, "value": 2000 },
            "type": "Спорт"
        },
        {
            "question": "Сколько игроков входит в волейбольную команду?",
            "answer1": { "result": false, "value": 5 },
            "answer2": { "result": true, "value": 6 },
            "type": "Спорт"
        },

        {
            "question": "Внутри какого HTML элемента помещается JavaScript?",
            "answer1": { "result": true, "value": "<script>" },
            "answer2": { "result": false, "value": "<head>" },
            "answer3": { "result": false, "value": "<body>" },
            "answer4": { "result": false, "value": "<div>" },
            "type": "JavaScript"
        },
        {
            "question": "Каков правильный синтаксис JavaScript для <p id=''demo''>Это демонстрация.</p>?",
            "answer1": { "result": false, "value": "document.getElementByName(''p'').innerHTML = ''Привет Мир!'';" },
            "answer2": { "result": true, "value": "document.getElementById(''demo'').innerHTML = ''Привет Мир!'';" },
            "answer3": { "result": false, "value": "#demo.innerHTML = ''Привет Мир!'';" },
            "answer4": { "result": false, "value": "document.getElement(''p'').innerHTML = ''Привет Мир!'';" },
            "type": "JavaScript"
        },
        {
            "question": "Как написать оператор IF в JavaScript?",
            "answer1": { "result": true, "value": " if (i == 5)" },
            "answer2": { "result": false, "value": "if i = 5" },
            "answer3": { "result": false, "value": "if i == 5 then" },
            "answer4": { "result": false, "value": "if i = 5 then" },
            "type": "JavaScript"
        },
        {
            "question": "Как начинается цикл WHILE?",
            "answer1": { "result": false, "value": "while i = 1 to 10" },
            "answer2": { "result": true, "value": "while (i <= 10)" },
            "answer3": { "result": false, "value": "while (i <= 10; i++)" },
            "type": "JavaScript"
        },
        {
            "question": "Как начинается цикл FOR?",
            "answer1": { "result": true, "value": "for i = 1 to 5" },
            "answer2": { "result": false, "value": "for (i = 0; i <= 5; i++)" },
            "answer3": { "result": false, "value": "for (i <= 5; i++)" },
            "answer4": { "result": false, "value": "for (i = 0; i <= 5)" },
            "type": "JavaScript"
        },
        {
            "question": "Как добавить комментарий в JavaScript?",
            "answer1": { "result": false, "value": "<!-- Это комментарий -->" },
            "answer2": { "result": true, "value": "// Это комментарий" },
            "type": "JavaScript"
        },

        {
            "question": "Что получил старший сын в наследство от отца в сказке «Кот в сапогах»?",
            "answer1": { "result": true, "value": "Мельницу" },
            "answer2": { "result": false, "value": "Осла" },
            "answer3": { "result": false, "value": "Кота" },
            "type": "Сказки"
        },
        {
            "question": "У кого были большие руки, большие уши, большие глаза, большие зубы?",
            "answer1": { "result": false, "value": "У бабушки" },
            "answer2": { "result": true, "value": "У Волка" },
            "type": "Сказки"
        },
        {
            "question": "Кто в сказке вместо удочки использовал свой хвост?",
            "answer1": { "result": true, "value": "Волк" },
            "answer2": { "result": false, "value": "Лиса" },
            "answer3": { "result": false, "value": "Пёс" },
            "type": "Сказки"
        },
        {
            "question": "Кто закопал 5 золотых монет?",
            "answer1": { "result": false, "value": "Кот Базилио" },
            "answer2": { "result": true, "value": "Буратино" },
            "answer3": { "result": false, "value": "Арлекино" },
            "type": "Сказки"
        },
        {
            "question": "На какой птице летала Дюймовочка?",
            "answer1": { "result": true, "value": "Ласточка" },
            "answer2": { "result": false, "value": "Синичка" },
            "answer3": { "result": false, "value": "Голубь" },
            "answer4": { "result": false, "value": "Стриж" },
            "type": "Сказки"
        },
        {
            "question": "Кто говорил, что он красивый и в меру упитанный мужчина?",
            "answer1": { "result": false, "value": "Винни Пух" },
            "answer2": { "result": true, "value": "Карлсон" },
            "answer3": { "result": false, "value": "Шрек" },
            "type": "Сказки"
        },

        {
            "question": "Самый большой океан?",
            "answer1": { "result": true, "value": "Тихий" },
            "answer2": { "result": false, "value": "Северный ледовитый" },
            "answer3": { "result": false, "value": "Атлантический" },
            "type": "География"
        },
        {
            "question": "В какой стране находится город Цинциннати?",
            "answer1": { "result": false, "value": "Италия" },
            "answer2": { "result": false, "value": "Испания" },
            "answer3": { "result": true, "value": "США" },
            "answer4": { "result": false, "value": "Канада" },
            "type": "География"
        },
        {
            "question": "Какая пустыня расположена в южном полушарии?",
            "answer1": { "result": true, "value": "Атакама" },
            "answer2": { "result": false, "value": "Гоби" },
            "answer3": { "result": false, "value": "Сахара" },
            "answer4": { "result": false, "value": "Кара-Кум" },
            "type": "География"
        },
        {
            "question": "Какой остров самый большой в мире?",
            "answer1": { "result": false, "value": "Мадагаскар" },
            "answer2": { "result": true, "value": "Гренландия" },
            "answer3": { "result": false, "value": "Бали" },
            "answer4": { "result": false, "value": "Новая Гвинея" },
            "type": "География"
        },
        {
            "question": "На территории какого современного государства находятся развалины древнего города Карфаген?",
            "answer1": { "result": true, "value": "Тунис" },
            "answer2": { "result": false, "value": "Египет" },
            "answer3": { "result": false, "value": "Сирия" },
            "answer4": { "result": false, "value": "Иордания" },
            "type": "География"
        },
        {
            "question": "В какой стране находится город Шлиссельбург?",
            "answer1": { "result": false, "value": "Австрия" },
            "answer2": { "result": true, "value": "Россия" },
            "answer3": { "result": false, "value": "Германия" },
            "answer4": { "result": false, "value": "Польша" },
            "type": "География"
        },

        {
            "question": "Мыши живут до 10 лет",
            "answer1": { "result": true, "value": "Ложь" },
            "answer2": { "result": false, "value": "Правда" },
            "type": "Животный мир"
        },
        {
            "question": "Кто является самым крупным представителем семейства кошачьих?",
            "answer1": { "result": false, "value": "Лев" },
            "answer2": { "result": true, "value": "Тигр" },
            "type": "Животный мир"
        },
        {
            "question": "У крокодилов нет потовых желез, поэтому они выводят тепло через рот",
            "answer1": { "result": true, "value": "Правда" },
            "answer2": { "result": false, "value": "Ложь" },
            "type": "Животный мир"
        },
        {
            "question": "Все ли бабочки являются насекомыми?",
            "answer1": { "result": false, "value": "Нет" },
            "answer2": { "result": true, "value": "Да" },
            "type": "Животный мир"
        },
        {
            "question": "Летучие мыши являются млекопитающими",
            "answer1": { "result": true, "value": "Правда" },
            "answer2": { "result": false, "value": "Ложь" },
            "type": "Животный мир"
        },
        {
            "question": "Кошки спят в среднем 13-14 часов в день",
            "answer1": { "result": false, "value": "Ложь" },
            "answer2": { "result": true, "value": "Правда" },
            "type": "Животный мир"
        }
    ]
`;
