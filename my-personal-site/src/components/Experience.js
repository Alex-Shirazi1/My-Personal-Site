const experiences = [
    {
        company: 'Apple',
        location: 'Cupertino, CA',
        duration: 'Jan 2023 – June 2023',
        role: 'iOS Engineer Intern, News client',
        logo: `${process.env.PUBLIC_URL}/apple-logo.png`,
        tasks: [
            'Implemented an iOS feature for the News app that will be getting shipped in a future release',
            'Developed the feature using Swift with Viper architecture design pattern',
            'Did full cycle development working closely with Design, Product, Backend, and QA',
            'Worked on end-to-end testing for the feature and did full QA handoff to the team',
            'Demoed the feature to senior management and received great feedback about it'
        ]
    },
    {
        company: 'Provectus',
        location: 'Palo Alto, CA',
        duration: 'Aug 2021 – Nov 2021',
        role: 'QA Automation',
        logo: `${process.env.PUBLIC_URL}/provectus-logo.png`,
        tasks: [
            'Contributed to development of Kafka UI open source project',
            'Weekly technical cadences to review and define platform roadmap',
            'Participated in paired programming for more sophisticated technical problems',
            'Fixed over 50 support tickets submitted by beta testers'
        ]
    }
];

export default experiences;