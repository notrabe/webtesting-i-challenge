const enhancer = require('./enhancer.js');

const { repair, success, fail, get } = require('./enhancer')

const {TestScheduler} = require('jest')

// test away!

describe('test', () => {
    it('works', () => {
        expect(2 + 2).toBe(4)
    })
})

describe('get', () => {
    it('returns item', () => {
        const item = {
            name: 'cat',
            enhancement: 19,
            durability: 9
        }
        expect(get(item)).toEqual(item)
    })
})

describe('repair', () => {
    it('restores durability to 100', () => {
        const item = {
            name: 'sword',
            enhancement: 10,
            durability: 0
        }
        expect(repair(item)).toEqual({...item, durability: 100})
    })
})

describe('success', () => {
    it('enhances item on success, unless it is 20', () => {
        const item = {
            name: 'gun',
            enhancement: 15, 
            durability: 50
        }
        expect(success(item)).toEqual({...item, enhancement: 16})

        const item2 = {
            name: 'gun2',
            enhancement: 20,
            durability: 50
        }
        expect(success(item2)).toEqual({...item2, enhancement: 20})
    })
})

describe('fail', () => {
    it('decreases durability by 5 if enhancement is less than 15', () => {
        const item = {
            name: 'spear',
            enhancement: 14,
            durability: 33
        }
        expect(fail(item)).toEqual({...item, durability: 28})
    })
    it('decreases durability by 10 if enhancement is 15 or more', () => {
        const item = {
            name: 'cow',
            enhancement: 15,
            durability: 46
        }
        expect(fail(item)).toEqual({...item, durability: 36})
    })
    it('decreases enhancement by 1 and durability by 10 if enhancement is greater that 16', () => {
        const item = {
            name: 'dog',
            enhancement: 17,
            durability: 99
        }
        expect(fail(item)).toEqual({...item, enhancement: 16, durability: 89})
    })
})