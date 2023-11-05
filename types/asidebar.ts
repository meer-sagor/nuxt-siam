
type ISingleAside = {
    name: string,
    url: string,
    iconName?: string,
}


export interface IAsideBarList extends ISingleAside {
    children?: ISingleAside[]
}
