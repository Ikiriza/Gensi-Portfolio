import { openLink } from "./methods"

const handleIconClick = (icon) => {
    const links = {
        'github': 'https://github.com/Ikiriza',
        'instagram': 'https://www.instagram.com/gensi_collin/',
        'twitter': 'https://twitter.com/gensicollin',
        'linkedin': 'https://www.linkedin.com/in/collin-gensi-454a21244/',
    }
    openLink(links[icon])
}

const sideElements = {
    emailButton: {
        label: 'collingensi5@gmail.com',
        onClick: () => openLink('mailto:collingensi5@gmail.com?subject=Hello')
    },
    handleIconClick,
}

export default sideElements