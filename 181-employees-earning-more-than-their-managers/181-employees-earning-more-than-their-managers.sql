# Write your MySQL query statement below
# SELECT name FROM employee WHERE managerId IS NOT null AND salary > (SELECT min(salary) FROM employee WHERE managerId is null); 

SELECT name as Employee FROM employee as e1 WHERE salary > (SELECT salary FROM employee as e2 WHERE e1.managerId = e2.id);