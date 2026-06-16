-- Users/Members Table
CREATE TABLE members (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    license_number VARCHAR(100),
    license_expiry DATE,
    member_since DATE DEFAULT CURRENT_DATE,
    is_active BOOLEAN DEFAULT TRUE,
    role VARCHAR(50) DEFAULT 'member',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Aircraft Table
CREATE TABLE aircraft (
    id SERIAL PRIMARY KEY,
    registration VARCHAR(20) UNIQUE NOT NULL,
    aircraft_type VARCHAR(100) NOT NULL,
    manufacturer VARCHAR(100),
    model VARCHAR(100),
    year_manufactured INT,
    seats INT DEFAULT 2,
    hourly_rate DECIMAL(10, 2) NOT NULL,
    fuel_type VARCHAR(50),
    is_available BOOLEAN DEFAULT TRUE,
    total_hours DECIMAL(10, 2) DEFAULT 0,
    last_maintenance DATE,
    next_maintenance DATE,
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Rentals Table
CREATE TABLE rentals (
    id SERIAL PRIMARY KEY,
    member_id INT NOT NULL REFERENCES members(id) ON DELETE CASCADE,
    aircraft_id INT NOT NULL REFERENCES aircraft(id) ON DELETE CASCADE,
    rental_start TIMESTAMP NOT NULL,
    rental_end TIMESTAMP,
    hours_used DECIMAL(10, 2),
    total_amount DECIMAL(10, 2),
    status VARCHAR(50) DEFAULT 'active',
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Payments Table
CREATE TABLE payments (
    id SERIAL PRIMARY KEY,
    rental_id INT NOT NULL REFERENCES rentals(id) ON DELETE CASCADE,
    member_id INT NOT NULL REFERENCES members(id) ON DELETE CASCADE,
    amount DECIMAL(10, 2) NOT NULL,
    payment_method VARCHAR(50),
    transaction_id VARCHAR(255),
    payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(50) DEFAULT 'completed',
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Maintenance Log Table
CREATE TABLE maintenance_logs (
    id SERIAL PRIMARY KEY,
    aircraft_id INT NOT NULL REFERENCES aircraft(id) ON DELETE CASCADE,
    maintenance_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    maintenance_type VARCHAR(100),
    description TEXT,
    cost DECIMAL(10, 2),
    completed BOOLEAN DEFAULT FALSE,
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for better performance
CREATE INDEX idx_members_email ON members(email);
CREATE INDEX idx_members_username ON members(username);
CREATE INDEX idx_aircraft_registration ON aircraft(registration);
CREATE INDEX idx_rentals_member_id ON rentals(member_id);
CREATE INDEX idx_rentals_aircraft_id ON rentals(aircraft_id);
CREATE INDEX idx_rentals_status ON rentals(status);
CREATE INDEX idx_payments_rental_id ON payments(rental_id);
CREATE INDEX idx_payments_member_id ON payments(member_id);
CREATE INDEX idx_maintenance_aircraft_id ON maintenance_logs(aircraft_id);
