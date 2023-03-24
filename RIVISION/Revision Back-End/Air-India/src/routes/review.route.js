const ReviewController=require('../controllers/review.controller');

module.exports=function(app){
    app.post('/ai/v1/api/comment', ReviewController.createComment);
    app.delete('/ai/v1/api/comment/:id', ReviewController.destroyComment);
    app.put('/ai/v1/api/comment/:id', ReviewController.updateComment);
}
