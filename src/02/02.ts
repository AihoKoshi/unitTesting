
type LocalCityType = {
    title: string
    countryTitle: string
}
type AddressType = {
    streetTitle: string
    city: LocalCityType
}
type TechType = {
    id: number
    title: string
}
type StudentType = {
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: TechType[]
}
const student: StudentType = {
    name: 'Aleks',
    age: 36,
    isActive: true,
    address: {
        streetTitle: 'Surganova 2',
        city:
            {
                title: 'Minsk',
                countryTitle: 'Belarus',
            }
    },
    technologies: [
        {
            id: 1,
            title: 'HTML',
        },
        {
            id: 2,
            title: 'CSS',
        },
        {
            id: 3,
            title: 'React',
        },
    ],
}

console.log(student.age)
console.log(student.name)
console.log(student.technologies[2].title)