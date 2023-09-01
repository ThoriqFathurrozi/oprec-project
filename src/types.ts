
export interface BadgeInterface{
    text:String
    filled?: boolean
    icon?:JSX.Element
    style?:string
}

export interface ButtonInterface{
    text:String
    href:string
    filled?: boolean
    icon?: JSX.Element
}

export interface CardInterface{
    image?: string
    title: string
    subtitle:string
    width?: string
    height?: string
    style?:string
    topUp?:string
    topDown?:string
}

export interface PointInterface{
    icon?:JSX.Element
    title:string
    desc:string
    color?:string
}

// export interface CardPointInterface{
//     image?: string
//     title: string
//     subtitle:string
//     width?: string
//     height?: string
// }