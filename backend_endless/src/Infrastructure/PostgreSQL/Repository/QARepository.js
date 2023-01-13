const {
    queryAsync
} = require('..');

const addAsync = async (question, subiect) => {
    console.info(`Adding q in database async...`);

    const qa = await queryAsync('INSERT INTO qa (question, subiect) VALUES ($1, $2) RETURNING *',
                [question, subiect]);
    return qa[0];
};
const updateByIdAsync = async (id, answer, show) => {
    console.info(`Updating the question with id ${id} in database async...`);

    const qa =  await queryAsync('UPDATE qa SET answer = $1, show = $2 WHERE id = $3 RETURNING *', [answer, show, id]);
    return qa[0];
};
const getAllAsync = async () => {
    console.info(`Getting all questions from database async...`);
    return await queryAsync('SELECT * FROM qa');
};
const getImportantAsync = async () => {
    console.info(`Getting all important questions from database async...`);
    return await queryAsync('SELECT * FROM qa WHERE show = 1');
};
module.exports = {
    addAsync,
    getAllAsync,
    updateByIdAsync,
    getImportantAsync
   

}