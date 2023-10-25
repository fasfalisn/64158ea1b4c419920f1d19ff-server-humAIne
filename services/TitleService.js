/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { Title } = require('../models/Title');

/**
* Creates the data
*
* title Title data to be created
* returns title
* */
const createtitle = ({ title }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new Title(title).save();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete the element
*
* titleId String the Id parameter
* no response value expected for this operation
* */
const deletetitle = ({ titleId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Title.findOneAndDelete({ _id:titleId }).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all the data
*
* returns Object
* */
const getAlltitle = () => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Title.find().exec();
      // this is a test
      resolve(Service.successResponse(query));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all the data based on user query
*
* filter String the query based on which the search is performed
* returns Object
* */
const getByParamstitle = ({ filter }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Title.find(JSON.parse( filter )).exec();
      // this is a test
      resolve(Service.successResponse(query));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get the element
*
* titleId String the Id parameter
* returns title
* */
const gettitle = ({ titleId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Title.findById(titleId)
      .exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Updates the element
*
* titleId String the Id parameter
* title Title data to be updated (optional)
* returns title
* */
const updatetitle = ({ titleId, title }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Title.findOneAndUpdate({ _id:titleId },title).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createtitle,
  deletetitle,
  getAlltitle,
  getByParamstitle,
  gettitle,
  updatetitle,
};
