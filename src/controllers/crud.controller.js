const evaluation = require("../models/evaluation.model");
const mark = require("../models/marks.model");
const student = require("../models/student.model");


const post = (model) => async (req, res) => {
    const postdetails = await model.create(req.body);
    return res.status(201).json({ postdetails });
}

const get = (model) => async (req, res) => {

    let getdetails = "";

    if (model == evaluation)
        getdetails = await model.find().populate('instructor', { createdAt: 0, updatedAt: 0 }).populate('topic_name', { createdAt: 0, updatedAt: 0 }).lean().exec();
        
    else if (model === mark)
        getdetails = await model.find().populate({
            path: 'instructor',
            populate: {
                path: 'topic_name instructor',
           }
        }).populate('student').sort({ mark: -1 }).lean().exec();
        
    else if (model === student)
        getdetails = await model.find().populate({
            path: 'evaluation',
            populate: {
                path:'instructor topic_name'
            }
    }).lean().exec();
    else
    getdetails = await model.find().lean().exec();
    

    res.status(200).json({ getdetails });
}

const update = (model) => async (req,res) => {

    const updateDetails = await model.findByIdAndUpdate(req.params.id, req.body,{new:1});
    res.status(200).json({ updateDetails });
}

const deleteOne = (model) => async (req,res) => {

    const deleteDetails = await model.findByIdAndDelete(req.params.id);
    res.status(200).json({ deleteDetails });
}

module.exports = {
    post,
    get,
    update,
    deleteOne
}
