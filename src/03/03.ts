import {StudentType} from '../02/02';
import {CityType, GovernmentBuildingsType, HouseType} from '../02/02_02'

export const sum = (a: number, b: number) => {
    return a + b;
}
const res = sum(2, 3);
const res2 = sum(2, 4);
const res3 = sum(sum(1, 2), sum(1, 3));
console.log(res, res2, res3)


export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(st: StudentType) {
    st.isActive = true;
}

export function addressCheck(s: StudentType, cityTitle: string){
    return s.address.city.title === cityTitle;
}

export const increaseBudget = (building: GovernmentBuildingsType, budget: number) => {
    building.budget += budget;
}

export function demolishHousesOnStreet(city: CityType, street: string){

}

export function repairHouse(houses: HouseType){
    houses.repaired = true
}

export const hiringStaff = (buildings: GovernmentBuildingsType, staffCount: number) => {
    buildings.staffCount += staffCount;
}
export const firingStaff = (buildings: GovernmentBuildingsType, staffCount: number) => {
    buildings.staffCount -= staffCount;
}

export function createMessage (city: CityType){
    return(
        `Hello ${city.title} citizens! I wish you to be happy! All ${city.citizensNumber} of you!`
    )

}