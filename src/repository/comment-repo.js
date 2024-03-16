const CrudRepository=require('./crud-repo')
const Comment=require('../model/comment')

class CommentRepository extends CrudRepository{
    constructor(){
        super(Comment)
    }
}

module.exports=CommentRepository;