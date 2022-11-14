import {addressCheck, addSkill, makeStudentActive} from './03';
import {StudentType} from '../02/02';

let student: StudentType;

beforeEach(() => {
    student = {
        name: 'Aleks',
        age: 36,
        isActive: false,
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
});

test('new tech skill should be added to student', () => {
    expect(student.technologies.length).toBe(3);
    addSkill(student, 'JS');
    expect(student.technologies.length).toBe(4);
    expect(student.technologies[3].title).toBe('JS');
    expect(student.technologies[3].id).toBeDefined();
})

test('Student should become active', ()=> {
    makeStudentActive(student);
    expect(student.isActive).toBe(true);
})

test('Student address check', ()=>{
    let result1 = addressCheck(student, 'Moscow');
    let result2 = addressCheck(student, 'Minsk');

    expect(result1).toBe(false)
    expect(result2).toBe(true)
})