DROP DATABASE IF EXISTS workoutSchedule_db;
CREATE DATABASE workoutSchedule_db;
USE workoutSchedule_db;

CREATE TABLE philippePlan
(
    workout_date date,
    lbs weight,
    calories_consumed INTEGER,
    exercised BOOLEAN,
    eight_ounce_water_consumed INTEGER
);

CREATE TABLE dawnPlan
(
    workout_date date,
    lbs weight,
    calories_consumed INTEGER,
    exercised BOOLEAN,
    eight_ounce_water_consumed INTEGER
);

SELECT * FROM philippePlan;
SELECT* FROM dawnPlan;