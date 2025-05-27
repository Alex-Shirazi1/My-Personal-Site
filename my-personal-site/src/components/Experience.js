const experiences = [
    {
      company: 'RapidFort',
      location: 'Sunnyvale, CA',
      duration: 'Feb 2025 – Current',
      role: 'Software Engineer Intern, Security Platform',
      logo: `${process.env.PUBLIC_URL}/rapidfort.png`,
      tasks: [
        'Developed and optimized backend features for a container security platform.',
        'Streamlined image scanning across Harbor, ECR, and ACR using Python and REST APIs.',
        'Improved CI/CD pipelines to increase deployment speed and test coverage.',
        'Worked closely with DevOps and Security teams to resolve infrastructure issues.'
      ]
    },
    {
        company: 'Apple',
        location: 'Cupertino, CA',
        duration: 'Jun 2024 – Nov 2024',
        role: 'iOS Engineer Intern, News client',
        logo: `${process.env.PUBLIC_URL}/apple-logo.png`,
        tasks: [
            'Developed Election and Liveblog live activities feature for News app using Swift which shipped in iOS 18.1.',
            'Implemented notifications for state wins and electoral vote updates during the presidential race working closely with the backend team.',
            'Delivered additional iOS features for the News app using Objective-C and Swift which is set for releases in future updates.',
            'Presented feature demos to senior management and concluded the internship with QA handoffs.'
        ]
    },
    {
        company: 'Apple',
        location: 'Cupertino, CA',
        duration: 'Jan 2023 – Jun 2023',
        role: 'iOS Engineer Intern, News client',
        logo: `${process.env.PUBLIC_URL}/apple-logo.png`,
        tasks: [
            'Developed a better End of Article feature for the news app using Swift with Viper architecture which shipped in  iOS 17.4.',
            'Completed full-cycle development working closely with Design, Product, Backend. and QA teams.',
            'Conducted end-to-end testing for the feature and completed full QA handoff.'
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