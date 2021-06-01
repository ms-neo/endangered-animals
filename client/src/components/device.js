const size = {
    mobileS:'414px',
    mobileL:'767px',
    tablet:'1080px',
    desktop:'1940px'
}

export const device ={
    mobileS:`(max-width :${size.mobileS})`,
    mobileL:`(max-width :${size.mobileL})`,
    tablet:`(max-width :${size.tablet})`,
    desktop:`(min-width :${size.desktop})`
}