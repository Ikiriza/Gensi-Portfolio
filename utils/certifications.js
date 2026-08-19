import { openLink } from "./methods"

const certifications = {
    heading:  `Licenses & certifications`,
    list: [
        {
            size: 1,
            title: 'CompTIA Security+',
            platform: 'CompTIA',
            link: '',
            date: 'Issued 2026 · Expires 2029',
            logo: '/assets/aws.png',
            aos: 'zoom-out-left'
        },
        {
            size: 1,
            title: 'Certified in Cybersecurity (CC)',
            platform: 'ISC2',
            link: '',
            date: 'Issued 2026 · Expires 2029',
            logo: '/assets/cc.png',
            aos: 'zoom-out-right'
        },
        {
            size: 1,
            title: 'Certified Cyber Security Analyst',
            platform: 'Cyber Security Training',
            link: '',
            date: 'Issued 2024 · No Expiration Date',
            logo: '/assets/aws.png',
            aos: 'zoom-out-left'
        },
        {
            size: 1,
            title: 'CISA Certificate Training',
            platform: 'Udemy',
            link: '',
            date: 'Issued 2024 · No Expiration Date',
            logo: '/assets/smit.png',
            aos: 'zoom-out-right'
        },
        {
            size: 1,
            title: 'CCNA: Introduction to Networks',
            platform: 'Cisco',
            link: '',
            date: 'Issued 2024 · No Expiration Date',
            logo: '/assets/ccna.png',
            aos: 'zoom-out-left'
        },
        {
            size: 1,
            title: 'AI Security and Governance',
            platform: 'Security Training',
            link: '',
            date: 'Issued 2024 · No Expiration Date',
            logo: '/assets/Ai.png',
            aos: 'zoom-out-right'
        },
        {
            size: 1,
            title: 'API Security for PCI Compliance',
            platform: 'Security Training',
            link: '',
            date: 'Issued 2024 · No Expiration Date',
            logo: '/assets/api-security.png',
            aos: 'zoom-out-left'
        },
    ],
    handleIconClick: openLink
}

export default certifications