INSERT INTO departments (id, dept_name) VALUES (1, 'Research and Development');
INSERT INTO departments (id, dept_name) VALUES (2, 'Accounting');
INSERT INTO departments (id, dept_name) VALUES (3, 'Human Resources');
INSERT INTO departments (id, dept_name) VALUES (4, 'Marketing');
INSERT INTO departments (id, dept_name) VALUES (5, 'Client Services');


INSERT INTO roles (id, title, salary, department_id) VALUES (1, 'Accountant', 95000, 2);
INSERT INTO roles (id, title, salary, department_id) VALUES (2, 'Engineer', 120000, 1);
INSERT INTO roles (id, title, salary, department_id) VALUES (3, 'Copywriter', 60000, 4);
INSERT INTO roles (id, title, salary, department_id) VALUES (4, 'HR Specialist', 55000, 3);
INSERT INTO roles (id, title, salary, department_id) VALUES (5, 'Client Specialist', 45000, 5);
INSERT INTO roles (id, title, salary, department_id) VALUES (6, 'Manager', 700000, 1);


INSERT INTO employees (id, first_name, last_name, role_id, manager_id) VALUES (1, 'Tony', 'Soprano', 6, NULL);
INSERT INTO employees (id, first_name, last_name, role_id, manager_id) VALUES (2, 'Christopher', 'Moltisanti', 2, 1);
INSERT INTO employees (id, first_name, last_name, role_id, manager_id) VALUES (3, 'Paulie', 'Walnuts', 2, 1);
INSERT INTO employees (id, first_name, last_name, role_id, manager_id) VALUES (4, 'Jennifer', 'Melfi', 4, NULL);
INSERT INTO employees (id, first_name, last_name, role_id, manager_id) VALUES (5, 'Carmela', 'Soprano', 5, NULL);
INSERT INTO employees (id, first_name, last_name, role_id, manager_id) VALUES (6, 'Artie', 'Bucco', 3, NUll);
INSERT INTO employees (id, first_name, last_name, role_id, manager_id) VALUES (7, 'Silvio', 'Dante', 1, 1);


