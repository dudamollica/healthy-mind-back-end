-- CreateTable
CREATE TABLE "daily_records" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "date" TEXT NOT NULL,
    "time_slept" TIME(6),
    "time_woke_up" TIME(6),
    "total_time_sleeping" TIME(6),
    "general_emotion" VARCHAR(255),
    "emotion_event" TEXT,
    "exercise" BOOLEAN,
    "food" VARCHAR(255),
    "water" VARCHAR(255),
    "bad_habit" VARCHAR(255),
    "good_habit" VARCHAR(255),
    "thoughts" TEXT,

    CONSTRAINT "daily_records_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "habits" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "bad_habit" VARCHAR(255) NOT NULL,
    "good_habit" VARCHAR(255) NOT NULL,

    CONSTRAINT "habits_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "patient_sessions" (
    "id" SERIAL NOT NULL,
    "token" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "patient_sessions_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "psychologists" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "crp" VARCHAR(50) NOT NULL,
    "telephone" VARCHAR(20) NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "password" VARCHAR(50) NOT NULL,
    "photo" VARCHAR(50) NOT NULL,

    CONSTRAINT "psychologists_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "psychologists_sessions" (
    "id" SERIAL NOT NULL,
    "token" TEXT NOT NULL,
    "psychologist_id" INTEGER NOT NULL,

    CONSTRAINT "psychologists_sessions_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "psychologist_crp" VARCHAR(50),
    "photo" TEXT NOT NULL,
    "gender" VARCHAR(255),

    CONSTRAINT "users_pk" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "public.patient_sessions_token_key" ON "patient_sessions"("token");

-- CreateIndex
CREATE UNIQUE INDEX "public.psychologists_crp_key" ON "psychologists"("crp");

-- CreateIndex
CREATE UNIQUE INDEX "public.psychologists_telephone_key" ON "psychologists"("telephone");

-- CreateIndex
CREATE UNIQUE INDEX "public.psychologists_email_key" ON "psychologists"("email");

-- CreateIndex
CREATE UNIQUE INDEX "public.psychologists_sessions_token_key" ON "psychologists_sessions"("token");

-- CreateIndex
CREATE UNIQUE INDEX "public.users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "daily_records" ADD CONSTRAINT "daily_records_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "habits" ADD CONSTRAINT "habits_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "patient_sessions" ADD CONSTRAINT "patient_sessions_fk0" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "psychologists_sessions" ADD CONSTRAINT "psychologists_sessions_fk0" FOREIGN KEY ("psychologist_id") REFERENCES "psychologists"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_fk0" FOREIGN KEY ("psychologist_crp") REFERENCES "psychologists"("crp") ON DELETE NO ACTION ON UPDATE NO ACTION;
