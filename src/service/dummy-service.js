const {helper}=require('./helper')

const execute=()=>{
    return helper()==0?"learning frontend":"learning backend";
}

module.exports={
    execute
}