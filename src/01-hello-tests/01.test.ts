import {mult, splitIntoWords, sum} from './01';

// data (подготовительные данные)
let a: number;
let b: number;
let c: number;

beforeEach(()=>{
    a = 1;
    b = 2;
    c = 3;
})

test('sum should be correct', () =>{
    // action (действия, которые мы совершаем с данными)
    a = 100;
    const result1 = sum(a,b);
    const result2 = sum(b,c);

    // expected result (ожидаемый результат теста)
    expect(result1).toBe(102)
    expect(result2).toBe(5)
})

test('multiply', ()=>{
    const result = mult(a,b);
    expect(result).toBe(2);
})

test('splitting the sentence', ()=>{
    //data
    const sent1 = 'Hello my friends!';
    const sent2 = 'JS - the best programming language';
    //action
    const result1 = splitIntoWords(sent1);
    const result2 = splitIntoWords(sent2);
    //expected result
    expect(result1.length).toBe(3);
    expect(result1[0]).toBe('hello');
    expect(result1[1]).toBe('my');
    expect(result1[2]).toBe('friends');

    expect(result2.length).toBe(5);
    expect(result2[0]).toBe('js');
    expect(result2[1]).toBe('the');
    expect(result2[2]).toBe('best');
    expect(result2[3]).toBe('programming');
    expect(result2[4]).toBe('language');
})