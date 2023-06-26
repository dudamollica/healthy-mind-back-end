import authRepositories from "../repositories/authRepositories";
import registersRepositories from "../repositories/registersRepositories";
import dayjs from "dayjs";

async function todayRegister(id, timeSlept, timeWokeUp, emoticonImg, emotionEvent, exercise, food, water, goodHabit, badHabit) {
    const userExist = await authRepositories.findUserById(id);
    if (!userExist) throw new Error;

    const today = dayjs().format('DD/MM/YYYY');
    const register = await registersRepositories.createRegister(id, today, timeSlept, timeWokeUp, emoticonImg, emotionEvent, exercise, food, water, goodHabit, badHabit)
    return register
}

export default {
    todayRegister
}