import sqlite3

# specifying the path to a DB we want to connect to
# if this db file doesn't exist then it will be automatically created
connection_string = 'db.sqlite'

# initializing the connection to the database itself
conn = sqlite3.connect(connection_string)

# creating a cursor, so we can execute SQL queries with it
c = conn.cursor()

# Creating tables only if they don't already exist in the DB
c.execute('''
CREATE TABLE IF NOT EXISTS countries (
  country_id integer PRIMARY KEY,
  country text UNIQUE NOT NULL,
  population integer,
  area real
);
''')

c.execute('''
CREATE TABLE IF NOT EXISTS cities (
  city_id integer PRIMARY KEY,
  city text UNIQUE NOT NULL,
  country_id integer NOT NULL,
  population real,
  area real,
  FOREIGN KEY(country_id) REFERENCES countries(country_id)
);
''')

# inserting values in our tables
c.execute('''
INSERT INTO countries
  (country, population, area)
VALUES
  ("Switzerland", 8401120, 41285),
  ("Austria", 8794267, 83879),
  ("Germany", 82349400, 357168),
  ("Liechtenstein", 37341, 160)
;
''')

c.execute('''
INSERT INTO cities
  (city, country_id, population, area)
VALUES
  ("Geneva",  1,  194565,  15.93),
  ("Zürich",  1,  391359,  87.88),
  ("Bern",    1,  130015,  51.62),
  ("Linz",    2,  198181, 196.05),
  ("Graz",    2,  273838, 127.56),
  ("Vienna",  2, 1867960, 414.65),
  ("Hamburg", 3, 1787408, 755.30),
  ("Berlin",  3, 3520031, 891.68),
  ("Munich",  3, 1450381, 310.70)
;
''')

# executing statements with python  variables

city_name = 'Berlin'
c.execute(f"SELECT * FROM cities WHERE city = '{city_name}'")

# SQL Injection example where we delete all our entries in the cities table
# c.executescript(f"SELECT * FROM cities WHERE city = '{city_name}'; DELETE FROM cities")

# preventing SQL injections is called sanitizing our inputs

# one way how to sanitize an input
# if you only have 1 input then you need to create a tuple with 1 element in it - ('Berlin',)
c.execute("SELECT * FROM cities WHERE city = ?", (city_name,))

# sanitation with named arguments
c.execute("SELECT * FROM cities WHERE area > :area", {"area": 432})

# inserting many values from a list at one go
values = [
    ("France", 67768389, 547030),
    ("Thailand", 69639500, 514000),
    ("Italy", 60340328, 301230)
]

c.executemany('''
INSERT INTO countries (country, population, area)
VALUES (?,?,?)
''', values)

# if we make changed to our DB through SQL queries
# they are only applied to the db itself if we call the commit method
conn.commit()

# using variables for column names
# not a good idea, you shouldn't let the users decide which columns they want dynamically
column_names = 'city_id, city'
c.execute(f"SELECT {column_names} FROM cities")

# If we had previously executed a SELECT statement with the cursor, then we have all the table column data in c.description
# Cool way to display the column data
column_names = list(map(lambda x: x[0], c.description))
print(column_names)

# fetchall() - returns a list of all the query results, fetchone() - returns just the first result of your query
results = c.fetchall()

for result in results:
    print(result)

# we should always close the open connection to a db before we finish executing our script
conn.close()
