SELECT *
FROM `country`
--WHERE `Population` > 20000000
ORDER BY `IndepYear` DESC
LIMIT 10;


SELECT *
FROM `country`
WHERE `Code` = 'CZE'