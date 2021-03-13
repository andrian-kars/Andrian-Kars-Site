const state = {
    navPage: {
        name: 'Andrian Karsanashvili',
        links: [
            { id: 1, href: 'https://www.linkedin.com/in/andrian-kars/', svg: '..' },
            { id: 2, href: 'https://github.com/andrian-kars', svg: '..' },
            { id: 3, href: 'https://andrian-kars.github.io/', svg: '..' }
        ]
    },
    aboutPage: {
        p1: 'I am very ambitious and fast learning Front-End developer with more than a year of experience who is looking for new opportunities. I also have a strong passion for self-improvement, and I am a very responsible person who always tries to understand how it works under the hood.',
        p2: 'Highly motivated to progress with my abilities and grow professionally. I am confident in my skills.',
        softSkills: [
            { id: 1, name: 'Adaptability'},
            { id: 2, name: 'Ability to fast-learning'},
            { id: 3, name: 'Analytical Understanding'},
            { id: 4, name: 'Attention to details'},
            { id: 5, name: 'Good Communication and Teamwork'},
        ],
        facts: [
            { id: 1, count: '9', text: 'Projects Done' },
            { id: 2, count: '2', text: 'Year Experience' },
            { id: 3, count: '5', text: 'Courses finished' },
        ],
        skillsHard: [
            { id: 1, skill: 'JavaScript', lvl: 'Intermediate', first: true, second: true, third: true, fourth: false, fifth: false},
            { id: 2, skill: 'React & Redux', lvl: 'Advanced', first: true, second: true, third: true, fourth: true, fifth: false},
            { id: 3, skill: 'CSS preprocessors (SCSS, LESS & PostCSS)', lvl: 'Expert', first: true, second: true, third: true, fourth: true, fifth: true},
            { id: 4, skill: 'CSS frameworks ‘Bootstrap & Material-UI’', lvl: 'Advanced', first: true, second: true, third: true, fourth: true, fifth: false},
            { id: 5, skill: 'Responsive Design (mobile & desktop first)', lvl: 'Expert', first: true, second: true, third: true, fourth: true, fifth: true},
            { id: 6, skill: 'Webpack & Gulp / npm scrpts', lvl: 'Advanced', first: true, second: true, third: true, fourth: true, fifth: false},
            { id: 7, skill: 'jQuery', lvl: 'Intermediate', first: true, second: true, third: true, fourth: false, fifth: false},
            { id: 8, skill: 'Git & GitHub / GitLab', lvl: 'Expert', first: true, second: true, third: true, fourth: true, fifth: true},
            { id: 9, skill: 'Photoshop / Figma', lvl: 'Advanced', first: true, second: true, third: true, fourth: true, fifth: false},
        ],
        languages: [
            { id: 1, skill: 'English', lvl: 'C1', first: true, second: true, third: true, fourth: false, fifth: false },
            { id: 2, skill: 'German', lvl: 'B2', first: true, second: true, third: true, fourth: false, fifth: false },
            { id: 3, skill: 'Japanese', lvl: 'A1', first: true, second: false, third: false, fourth: false, fifth: false },
            { id: 4, skill: 'Ukrainian', lvl: 'Native', first: true, second: true, third: true, fourth: true, fifth: true },
            { id: 5, skill: 'Russian', lvl: 'Native', first: true, second: true, third: true, fourth: true, fifth: true },
        ]
    }
}

export default state