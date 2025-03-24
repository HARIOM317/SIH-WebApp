const AdminUser = require('../models/user-model'); 
const Contact = require('../models/contact-model');
const Teams = require('../models/teamModel');
const PSModel = require('../models/problem-statement-model');

//get all users from the database
const getAllUsers = async (req,res) =>{
    try {
        const users = await AdminUser.find({},{password:0}); //as we don't want password to show
        if(!users || users.length===0){
            return res.status(404).json({message:"No Users Found"});
        }
        return res.status(200).json(users);
    } catch (error) {
        next(error);
    }
};

//get all contacts from the database
const getAllContacts = async (req,res)=>{
    try {
        const contacts = await Contact.find();
        if(!contacts || contacts.length===0){
            return res.status(404).json({message:"No Contacts Found"})
        }
        return res.status(200).json(contacts);
    } catch (error) {
        next(error); 
    }
};

const getAllTeams = async(req,res)=>{
    try{
        const teams = await Teams.find();
        if(!teams || teams.length===0){
            return res.status(404).json({message:"No Registered Teams Found"})
        }
        return res.status(200).json(teams);
    }
    catch(error){
        next(error);
    }
};

// Controller to create a new problem statement
const createProblemStatement = async (req, res) => {
    try {
        const newProblemStatement = await PSModel.ProblemStatement.create(req.body);
        res.status(201).json("Problem statement added successfully!");
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Controller to create finale results
const addFinaleTeams = async (req, res) => {
    try {
        const newResults = await PSModel.ResultStatement.create(req.body);
        res.status(201).json("Result added successfully!");
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


//getting the dashboard details - 
const getAllDataCount = async (req, res, next) => {
    try {
        const teams = await Teams.find().count();
        const users = await AdminUser.find().count();
        const contacts = await Contact.find().count();
        const problemStatementsCount = await PSModel.ProblemStatement.find().count();

        return res.status(200).json({ teams, users, contacts, problemStatementsCount });
    } catch (error) {
        next(error);
    }
};

const deleteContactById = async (req, res) =>{
    try {
      const id = req.params.id;
      await Contact.deleteOne({_id:id});
      return res.status(200).json({message:"Contact Deleted Successfully !"});
    } catch (error) {
        next(error);
    }
}

const deleteALLProblemStatement = async (req, res)=>{
    try {
        await PSModel.ProblemStatement.deleteMany();
        return res.status(200).json({message:"All PS Removed Successfully !"});
    } catch (error) {
        next(error);
    }
}

const deleteALLFinale = async (req, res)=>{
    try {
        await PSModel.ResultStatement.deleteMany();
        return res.status(200).json({message:"All Finale Teams Removed Successfully !"});
    } catch (error) {
        next(error);
    }
}


module.exports = {
    getAllUsers,
    getAllContacts,
    getAllTeams, 
    createProblemStatement, 
    addFinaleTeams,
    getAllDataCount,
    deleteContactById,
    deleteALLProblemStatement,
    deleteALLFinale,
};
