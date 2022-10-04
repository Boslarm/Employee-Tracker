USE employee_db;

INSERT INTO department (name)
VALUES  ("Pediatrics"),
        ("Oncology"),
        ("Hemotology"),
        ("Clinic");

INSERT INTO role (title, salary, department_id)
VALUES  ("Doctor", 200000, 1),
        ("Nurse", 90000, 2),    
        ("Pharamacist", 180000, 3),
        ("Secretary", 50000, 4);

INSERT INTO employee (first_name, last_name, role_id)
VALUES  ("Caty", "Ferris", 3),
        ("Doug", "Smith", 1),
        ("Krystal", "Powers", 2),
        ("Pam", "Carter", 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Jesus", "Nazareth", 1, 1);