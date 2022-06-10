# Write your MySQL query statement below
SELECT email FROM person GROUP BY email HAVING COUNT(email) > 1;

# SELECT DISTINCT p1.email FROM person AS p1 JOIN person AS p2 WHERE p1.email = p2.email AND p1.id != p2.id;