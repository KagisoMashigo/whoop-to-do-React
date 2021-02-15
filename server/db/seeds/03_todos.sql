INSERT INTO todos (id, title, description, created_at, category_id) VALUES
(1, 'Avengers', 'my fav', CURRENT_TIMESTAMP, 1),
(2, 'Ninetendo Switch', 'SMASH BROS BRO', CURRENT_TIMESTAMP, 2),
(3, '12 Rules for life', 'My friend told me about Jordan Peterson', CURRENT_TIMESTAMP, 3);

INSERT INTO todos (id, title, description, created_at, priority, category_id) VALUES
(4, 'Tacos', 'eat tacos with jenny', CURRENT_TIMESTAMP, 1, 4);

INSERT INTO todos (id, title, description, complete, category_id) VALUES
(5, 'sushi', 'eat sushi', TRUE, 4);

INSERT INTO todos (id, title, description, created_at, priority, category_id) VALUES
(6, 'kill bill', 'Watch it for Sunday night', CURRENT_TIMESTAMP, 1, 1),
(7, 'Ant Man', 'watch it with Sean', CURRENT_TIMESTAMP, 2, 1),
(8, 'Wonder Woman', 'Netflix maybe?', CURRENT_TIMESTAMP, 3, 1),
(9, 'Gaming Laptop', 'Check the Best Buy', CURRENT_TIMESTAMP, 1, 2),
(10, 'Pokemon Omega Ruby', 'My fav game', CURRENT_TIMESTAMP, 2, 2),
(11, 'Game of Thrones', 'The things I do for love.', CURRENT_TIMESTAMP, 1, 3),
(12, 'Foundation', 'Foundation from Isaac Asimov may be a good choice.', CURRENT_TIMESTAMP, 4, 3),
(13, 'brunch', 'eat brunch with sammy', CURRENT_TIMESTAMP, 1, 4),
(14, 'Pho', 'Pho Delicious is good!', CURRENT_TIMESTAMP, 2, 4),
(15, 'coffee', 'get coffee bean', CURRENT_TIMESTAMP, 3, 4),
(16, 'Vikings', 'Cant wait for it!!', CURRENT_TIMESTAMP, 4, 1),
(17, 'Best Chinese Food', 'In Vancouver', CURRENT_TIMESTAMP, 2, 4);

SELECT SETVAL('todos_id_seq', 50);
