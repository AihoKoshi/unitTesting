type StreetType = {
    title: string
}
type AddressType = {
    number?: number
    street: StreetType
}
type GovernmentBuildingsType = {
    type: 'HOSPITAL' | 'FIRE-STATION'
    budget: number
    staffCount: number
    address: AddressType
}
type HouseType = {
    builtAt: number
    repaired: boolean
    address: AddressType
}

export type CityType = {
    title: string
    houses: HouseType[]
    governmentBuildings: GovernmentBuildingsType[]
    citizensNumber: number
}