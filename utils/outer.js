import { openLink } from "./methods"

const outer = {
    title1:  `G'day, I'm`,
    title2: 'Gensi Collin Ikiriza,',
    decrypTexts: [
        'A Cyber Security Professional',
        'Security Assurance Analyst',
        'Penetration Testing Expert',
        'Software Developer',
        'Risk Assessment Specialist',
        'Compliance Analyst',
    ],
    desciption: `A dedicated Cyber Security professional based in Kampala, Uganda, with hands-on experience in governance, risk, compliance, information security assurance, and control assessment within banking and technology sectors.`,
    button: {
        label: 'Contact me!',
        onClick: () => openLink('mailto:collingensi5@gmail.com?subject=Hello')
    }
}

export default outer
