//a list of every question followed by your answer
var questions = [
    ['We need a jobs guarantee program.'],
    ['The government should do more to protect the environment.'],
    ["Healthcare should be provided to all citizens who can't afford it."],
    ['Gerrymandering should be illegal.'],
    ['I support ranked-choice or approval voting.'],
    ['The government should restrict who is allowed to own a gun.'],
    ['America should open its borders to immigration.'],
    ['Gay marriage should be legal.'],
    ['Alcohol should be banned, or at least the sale of it.'],
    ["The government shouldn't spend on a deficit."],
    ['Regulation is bad for the economy.'],
    ['The government should nationalize some or all industries.'],
    ['Abortion should be illegal in most or all cases.'],
    ['I support the death penalty.'],
    ['Gambling should be restricted, or even banned.'],
    ['Right-to-work laws help workers.'],
    ['Welfare is necessary to help the poor.'],
    ['The rich should pay more in taxes than they do now.'],
    ['States have a fundamental right to decide some issues.']
];

//set the default answers to null
for (let i = 0; i < questions.length; i++) {
    questions[i].push(null);
}