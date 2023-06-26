import prisma from "../config/database";

async function createRegister(id, today, timeSlept, timeWokeUp, emoticonImg, emotionEvent, exercise, food, water, goodHabit, badHabit): Promise<any> {
    console.log(id, today, timeSlept, timeWokeUp, emoticonImg, emotionEvent, exercise, food, water, goodHabit, badHabit)
    const register = prisma.daily_records.create({
        data: { user_id: id, date: today, time_slept: timeSlept, time_woke_up: timeWokeUp },
    });
    // const register = prisma.daily_records.create({
    //     data: { user_id: id, date: today, time_slept: timeSlept, time_woke_up: timeWokeUp },
    // });
    return register
}

async function findRegister(id, today, timeSlept, timeWokeUp, emoticonImg, emotionEvent, exercise, food, water, goodHabit, badHabit): Promise<any> {
    return prisma.daily_records.findFirst({ where: { date: today } });
}

export default {
    createRegister, findRegister
}