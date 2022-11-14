import {CityType} from '../02/02_02';
import {createMessage, demolishHousesOnStreet, firingStaff, hiringStaff, increaseBudget, repairHouse} from './03';


let city: CityType;

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                builtAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street:
                        {
                            title: 'White street',
                        },
                },
            },
            {
                builtAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street:
                        {
                            title: 'Happy street',
                        },
                },
            },
            {
                builtAt: 2020,
                repaired: false,
                address: {
                    number: 101,
                    street:
                        {
                            title: 'White street',
                        },
                },
            }
        ],
        governmentBuildings:[
            {
                type: 'HOSPITAL',
                budget: 200000,
                staffCount: 200,
                address: {street: {title: 'Central Str'}}
            },
            {
                type: 'FIRE-STATION',
                budget: 500000,
                staffCount: 1000,
                address: {street: {title: 'South Str'}}
            },
        ],
        citizensNumber: 1000000,
    }
})
test('HOSPITAL budget change', ()=>{
    increaseBudget(city.governmentBuildings[0], 100000);
    expect(city.governmentBuildings[0].budget).toBe(300000);
})

test('FIRE-STATION budget change', ()=>{
    increaseBudget(city.governmentBuildings[1], -100000);
    expect(city.governmentBuildings[1].budget).toBe(400000);
})

test.skip('Houses to be demolished', ()=>{
    demolishHousesOnStreet(city, 'Happy street');
    expect(city.houses.length).toBe(1);
    expect(city.houses[0]).toBe(1);
})

test('House repair', ()=>{
    repairHouse(city.houses[1]);
    expect(city.houses[1].repaired).toBeTruthy();
})

test('Staff hiring', ()=>{
    hiringStaff(city.governmentBuildings[0], 20);
    expect(city.governmentBuildings[0].staffCount).toBe(220)
})
test('Staff firing', ()=>{
    firingStaff(city.governmentBuildings[0], 20);
    expect(city.governmentBuildings[0].staffCount).toBe(180)
})

test('Hello New York!', ()=>{
    const message = createMessage(city);
    expect(message).toBe('Hello New York citizens! I wish you to be happy! All 1000000 of you!')
})