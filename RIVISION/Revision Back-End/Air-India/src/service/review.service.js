const ReveiwModal = require('../models/review');

exports.createCommnet = async (data) => {

    try {
        const newCommmet = {
            comment: data.comment,
            user: data.user,
            flight: data.flight
        }
        const response = await new ReveiwModal(newCommmet).save();
        return response;
    } catch (error) {
        console.log(error);
    }

}

exports.destroyComment = async (id) => {

    try {
        const response = await ReveiwModal.findeOneAndDelete({ _id: id });
        return response;
    } catch (error) {
        console.log(error);
    }
}

exports.updateCommnet = async (id,data) => {
    try {
        const response = await  ReveiwModal.fineOneAndUpdate({_id:id},data);
        return response;
    } catch (error) {
        console.log(error);
    }

}

