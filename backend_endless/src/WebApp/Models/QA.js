const ServerError = require('./ServerError.js');

class QAPostBody {
    constructor (body) {
        this.question = body.question;
        this.answer = body.answer;
        this.subiect = body.subiect;
        this.show = body.show;

        // if (this.question == null || this.question.length < 4) {
        //     throw new ServerError("Question is missing", 400);
        // }
    
        // if (this.answer == null || this.answer.length < 4) {
        //     throw new ServerError("Last name is missing", 400);
        // }
    }

    get Question () {
        return this.question;
    }

    get Answer () {
        return this.answer;
    }
    get Subiect () {
        return this.subiect;
    }
    get Show () {
        return this.show;
    }
}

class QAPutBody extends QAPostBody {
    constructor (body, id) {
        super(body);
        this.id = parseInt(id);

        if (!this.id || this.id < 1) {
            throw new ServerError("Id should be a positive integer", 400);
        }
    }

    get Id () {
        return this.id;
    }
}

class QAResponse {
    constructor(qa) {
        this.question = qa.question;
        this.answer = qa.answer;
        this.subiect = qa.subiect;
        this.show = qa.show;
        this.id = qa.id;
    }
}

module.exports =  {
    QAPostBody,
    QAPutBody,
    QAResponse
}