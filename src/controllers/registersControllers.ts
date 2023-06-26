import httpStatus from "http-status";
import registersService from "../services/registersService";

async function todayRegister(req, res) {
    const { timeSlept, timeWokeUp, emoticonImg, emotionEvent, exercise, food, water, goodHabit, badHabit} = req.body;
    const { id } = res.locals.user
    try {
        await registersService.todayRegister(id, timeSlept, timeWokeUp, emoticonImg, emotionEvent, exercise, food, water, goodHabit, badHabit);
        return res.sendStatus(httpStatus.OK);
    } catch (error) {
        return res.status(httpStatus[409]).send({});
    }
}

export default {
    todayRegister
}