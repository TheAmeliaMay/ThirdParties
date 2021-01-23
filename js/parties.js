/*the answers each party would give on the quiz
refer to questions.js for each question*/
const parties = [
    {
        'name': 'Alliance',
        'desc': 'A centrist party that supports term limits and rejects idealism.',
        'answers': [2, 2, 2, 2, 2, 1, 1, 1, -1, 2, -1, -1, -1, 0, 0, 0, 1, 1, 1]
    },
    {
        'name': 'American Solidarity',
        'desc': 'A Christian democratic party with right-wing social stances and left-wing economic stances.',
        'answers': [2, 2, 2, 2, 2, 0, 1, -2, -1, 0, -2, 0, 2, -2, 1, -1, 1, 1, 1]
    },
    {
        'name': 'Constitution',
        'desc': 'A more conservative version of the Republican party, being solidly right-wing on every issue.',
        'answers': [-2, -1, -2, -1, -2, -2, -2, -2, 0, 2, 2, -2, 2, 2, 1, 2, -2, -2, 2]
    },
    {
        'name': 'Green',
        'desc': 'A socialist party focused around environmentalism. It takes a left-wing to far-left stance on every issue.',
        'answers': [2, 2, 2, 2, 2, 2, 2, 2, -2, -2, -2, 1, -2, -2, -1, -2, 2, 2, -2]
    },
    {
        'name': 'Libertarian',
        'desc': 'Supports strong individual freedoms, a limited government, the free market, and free trade.',
        'answers': [-2, -2, -2, 0, 2, -2, 2, 2, -2, 2, 2, -2, -2, -2, -2, 2, -2, -2, 1]
    },
    {
        'name': 'Prohibition',
        'desc': 'Focused around the prohibition of intoxicaing liquors. It tends to be right-wing socially, and center-left economically.',
        'answers': [1, 2, 1, 0, 1, -2, -1, -1, 2, 2, -1, -1, 2, -2, 2, 2, 1, 0, 2]
    },
    {
        'name': 'Reform',
        'desc': 'A centrist party focused around monetary and political reform. It takes no stances on social issues.',
        'answers': [1, 2, 1, 0, 2, 0, 0, 0, -1, 2, -1, -1, 0, 0, 0, 1, 1, 1, 1]
    },
    {
        'name': 'Socialism and Liberation',
        'desc': 'A communist party that believes Capitalism is the root of all our problems, and that Socialism is the solution.',
        'answers': [2, 2, 2, 0, 1, 2, 2, 2, -2, -2, -2, 2, -2, -1, -1, -2, 2, 2, -2]
    }
];

//set the default agreements to 0
for (let i = 0; i < parties.length; i++) {
    parties[i]['agreement'] = 0;
}