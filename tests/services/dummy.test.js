const {execute}=require('../../src/service/dummy-service')
const {helper}=require('../../src/service/helper')
jest.mock('../../src/service/helper')

test('Result is true',()=>{
    helper.mockReturnValue(true)
    const result=execute()
    expect(result).toBe('learning backend')
})

test('Result is false',()=>{
    helper.mockReturnValue(false)
    const result=execute()
    expect(result).toBe('learning frontend')
})