INSERT INTO categories (id, category_name, user_id, main_category)
VALUES (1, 'Watch', 1, 1),
(2, 'Buy', 1, 2),
(3, 'Read', 1, 3),
(4, 'Eat',1, 4),
(5, 'Watch', 2, 1),
(6, 'Buy', 2, 2),
(7, 'Read', 2, 3),
(8, 'Eat',2, 4),
(9, 'Watch', 3, 1),
(10, 'Buy', 3, 2),
(11, 'Read', 3, 3),
(12, 'Eat', 3, 4);

INSERT INTO categories (id, category_name, created_at, user_id)
VALUES (13, 'Books', CURRENT_TIMESTAMP, 1),
(14, 'Movies', CURRENT_TIMESTAMP, 1),
(15, 'Sports', CURRENT_TIMESTAMP, 2),
(16, 'Restaurants', CURRENT_TIMESTAMP, 3);

SELECT SETVAL('categories_id_seq', 50);