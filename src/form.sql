CREATE TABLE
  contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    last_name VARCHAR(255) NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    -- fonctionnalite de suppression, on ne supprime pas les donnees, on les cache
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );