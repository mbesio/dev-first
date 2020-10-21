DROP DATABASE IF EXISTS firstdevs;

CREATE DATABASE firstdevs;

USE firstdevs;

CREATE TABLE users (
  id INT AUTO_INCREMENT,
  firstName VARCHAR(20),
  lastName VARCHAR(20),
  email VARCHAR(254),
  password VARCHAR(254),
  location VARCHAR(254),
  yearsExperience INT,
  language VARCHAR(20),
  languageSkill VARCHAR(10),
  frontEndFramework VARCHAR(20),
  frontEndFrameworkSkill VARCHAR(10),
  backEndFramework VARCHAR(20),
  backEndFrameworkSkill VARCHAR(10),
  aerospace VARCHAR(5),
  construction VARCHAR(5),
  education VARCHAR(5),
  energy VARCHAR(5),
  entertainment VARCHAR(5),
  finance VARCHAR(5),
  food VARCHAR(5),
  healthcare VARCHAR(5),
  hospitality VARCHAR(5),
  tech VARCHAR(5),
  telco VARCHAR(5),
  transport VARCHAR(5),
  PRIMARY KEY (id)
);

INSERT INTO users (firstName, lastName, email, password, location, yearsExperience, language, languageSkill, frontEndFramework, frontEndFrameworkSkill, backEndFramework, backEndFrameworkSkill, aerospace, construction, education, energy, entertainment, finance, food, healthcare, hospitality, tech, telco, transport) VALUES ( 'matteo', 'besio', 'matteo@abc.com', 'qwerty', 'California', 5, 'Javascript', 'High', 'React', 'Medium', 'Express', 'Medium', 'true', 'false', 'true', 'false', 'true', 'false', 'true', 'false', 'true', 'true', 'false', 'true');