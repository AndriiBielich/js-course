const coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

for (const course of coursesArray) {
    const container = document.createElement('div');
    container.classList.add('card');

    const h1 = document.createElement('h1');
    h1.classList.add('heading');
    h1.innerText = course.title;

    const div = document.createElement('div');
    div.classList.add('line');

    const monthDuration = document.createElement('p');
    monthDuration.innerText = `Month duration - ${course.monthDuration} month(s)`;
    monthDuration.classList.add('month-duration-block')
    const hourDuration = document.createElement('p');
    hourDuration.innerText = `Hour duration - ${course.hourDuration} hour(s)`;
    hourDuration.classList.add('hour-duration-block')

    div.append(monthDuration, hourDuration);

    const ul = document.createElement('ul');

    course.modules.forEach((module) => {
        const li = document.createElement('li');
        li.innerText = module;
        li.classList.add('list-item');
        ul.appendChild(li);
    });

    container.append(h1, div, ul);

    document.body.appendChild(container);
}
