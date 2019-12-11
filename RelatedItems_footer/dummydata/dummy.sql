DROP DATABASE IF EXISTS dummy;

CREATE DATABASE dummy;

USE dummy;

CREATE TABLE mando (
    id INT AUTO_INCREMENT PRIMARY KEY,
    item VARCHAR(50),
    img TEXT,
    category VARCHAR(50)
);

INSERT INTO mando (item,img,category) VALUES ('X-wing','https://static.turbosquid.com/Preview/2017/07/22__10_06_31/StarWarsXWingStarfighterYellow3dsmodel01.jpg3F48FDB7-7EB6-4F79-8081-F3A123BE5336Zoom.jpg','ship');
INSERT INTO mando (item,img,category) VALUES ('B-wing','https://vignette.wikia.nocookie.net/star-wars-canon/images/6/60/B-Wing_Starfighter.png/revision/latest?cb=20151102222051','ship');
INSERT INTO mando (item,img,category) VALUES ('E-wing','https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/770814e0-a7c0-4e13-aa31-107aed4dbaf6/dbb9isq-96a0de0e-0231-4d51-bef6-a463651d7d26.jpg/v1/fill/w_1600,h_850,q_75,strp/freitek_t_68a_e_wing_by_shoguneagle-dbb9isq.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sIm9iaiI6W1t7InBhdGgiOiIvZi83NzA4MTRlMC1hN2MwLTRlMTMtYWEzMS0xMDdhZWQ0ZGJhZjYvZGJiOWlzcS05NmEwZGUwZS0wMjMxLTRkNTEtYmVmNi1hNDYzNjUxZDdkMjYuanBnIiwid2lkdGgiOiI8PTE2MDAiLCJoZWlnaHQiOiI8PTg1MCJ9XV19.hMium52KNF_g4ZmmYymxMlGncw6GSAUwtm2KCHksPQM','ship');
INSERT INTO mando (item,img,category) VALUES ('Hornet Interceptor','https://i.imgur.com/C9uIuid.jpg','ship');
INSERT INTO mando (item,img,category) VALUES ('Star Destoryer','https://i.pinimg.com/originals/c6/45/bf/c645bfdb808a65190c883173b41f1c75.jpg','ship');
INSERT INTO mando (item,img,category) VALUES ('A280 Blaster Rifle','http://rpggamer.org/uploaded_images/SWBF2-A280C.jpg','Blaster');
INSERT INTO mando (item,img,category) VALUES ('EL-16HFE Blaster Rifle','https://vignette.wikia.nocookie.net/star-wars-canon/images/b/ba/BlasTech_El-16HFE_blaster_rifle.jpg/revision/latest?cb=20151120003954','Blaster');
INSERT INTO mando (item,img,category) VALUES ('A-3000 Blaster Rifle','https://www.therpf.com/forums/attachments/untitled-v45-png.712650/','Blaster');
INSERT INTO mando (item,img,category) VALUES ('ARC Caster','https://vignette.wikia.nocookie.net/battlefront/images/c/c2/E-11e_Full.PNG/revision/latest?cb=20111026101819','Blaster');
INSERT INTO mando (item,img,category) VALUES ('HB-9 Blaster','https://vignette.wikia.nocookie.net/starwars/images/8/81/Uterifel.jpg/revision/latest/scale-to-width-down/499?cb=20070601223148','Blaster');

