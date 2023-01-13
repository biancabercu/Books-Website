const express = require('express');

const QARepository = require('../../Infrastructure/PostgreSQL/Repository/QARepository.js');
const ServerError = require('../Models/ServerError.js');
const { QAPostBody, QAPutBody, QAResponse } = require('../Models/QA.js');
const AuthorizationFilter = require('../Filters/AuthorizationFilter.js');
const RoleConstants = require('../Constants/Roles.js');

const ResponseFilter = require('../Filters/ResponseFilter.js');

const Router = express.Router();

Router.post('/question', async (req, res) => {

    const qaBody = new QAPostBody(req.body);
    console.log("am intrat in post" + req.body);
    const qa = await QARepository.addAsync(qaBody.question, qaBody.subiect);  

    ResponseFilter.setResponseDetails(res, 201, new QAResponse(qa), req.originalUrl);
});

Router.put('/:id', AuthorizationFilter.authorizeRoles(RoleConstants.SUPPORT), async (req, res) => {

    const qaBody = new QAPutBody(req.body, req.params.id);

    const qa = await QARepository.updateByIdAsync(qaBody.Id, qaBody.answer, qaBody.show);
        
    if (!qa) {
        throw new ServerError(`Question with id ${id} does not exist!`, 404);
    }

    ResponseFilter.setResponseDetails(res, 200, new QAResponse(qa));
});
Router.get('/', async (req, res) => {

    const qas = await QARepository.getAllAsync();
    // res.send(`Filmele din bd sunt ${JSON.stringify(movies)}`);
    ResponseFilter.setResponseDetails(res, 200, qas.map(qa => new QAResponse(qa)));
});
Router.get('/important', async (req, res) => {

    const qas = await QARepository.getImportantAsync();
    // res.send(`Filmele din bd sunt ${JSON.stringify(movies)}`);
    ResponseFilter.setResponseDetails(res, 200, qas.map(qa => new QAResponse(qa)));
});
module.exports = Router;