-- CREATE DATABASE portfolio_db;
-- USE portfolio_db;

-- CREATE TABLE contacts (
   -- id INT AUTO_INCREMENT PRIMARY KEY,
    -- name VARCHAR(100),
    -- email VARCHAR(100),
    -- message TEXT,
    -- created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- CREATE TABLE projects (
   --  id INT AUTO_INCREMENT PRIMARY KEY,
    -- project_name VARCHAR(255),
    -- contact_email VARCHAR(100),
    -- details TEXT,
    -- submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

CREATE DATABASE portfolio_db;

USE portfolio_db;

CREATE TABLE messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

