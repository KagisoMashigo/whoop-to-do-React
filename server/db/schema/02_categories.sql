DROP TABLE IF EXISTS categories CASCADE;
CREATE TABLE categories (
  id SERIAL PRIMARY KEY NOT NULL,
  category_name VARCHAR(255) NOT NULL,
  created_at DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  main_category INTEGER NOT NULL DEFAULT 10
);