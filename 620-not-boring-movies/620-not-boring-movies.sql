# Write your MySQL query statement below
SELECT * FROM cinema WHERE description NOT LIKE "boring" AND mod(id, 2) != 0 ORDER BY rating DESC;