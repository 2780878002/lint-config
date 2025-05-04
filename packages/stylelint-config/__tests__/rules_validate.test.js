const assert = require('assert')
const stylelint = require('stylelint')
const path = require('path')

describe('test rules.test.js',()=>{
    it('validate default',async ()=>{
        const filePaths = [path.join(__dirname, './fixtures/index.css')]

        const res = await stylelint.lint({
            configFile: path.join(__dirname, '../index.js'),
            files: filePaths,
            fix: false
        })


        if(res?.errored){
            const filesResult = JSON.parse(res.output || '[]') || []
            filesResult.forEach((fileResult) => {
                console.log('filePaths error', fileResult)
            })

            assert.ok(filesResult.length >0);
        }

        

    })

    it('validate sass', async ()=>{
        const filePaths = [path.join(__dirname, './fixtures/sass-test.scss')]

        const res = await stylelint.lint({
            configFile: path.join(__dirname, '../index.js'),
            files: filePaths,
            fix: true
        })


        if(res?.errored){
            const filesResult = JSON.parse(res.output || '[]') || []

            assert.ok(filesResult.length >0);
        }

        // todo

    })

})