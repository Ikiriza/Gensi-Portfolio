import { openLink } from "./methods"

const outer = {
    title1:  `G'day, I'm`,
    title2: 'Gensi Collin Ikiriza,',
    decrypTexts: [
        'A Software Engineer',
        'A Full Stack Developer',
        'I build things for the web',
        'A Graphic Designer',
        'A Web3 Developer',
        'A Traveler',
    ],
    desciption: `A dedicated and disciplined Full Stack engineer who love to create things for internet, having more than 4 years of field experience I've delivered projects to many happy clients over globe.`,
    button: {
        label: 'Contact me!',
        onClick: () => openLink('mailto:collingensi5@gmail.com?subject=Hello')
    }
}

export default outer
