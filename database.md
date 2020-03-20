Empezar de manera `localhost`

## Modelo de la DB:

### `users`

````
- id INT
- firstname VARCHAR
- lastname VARCHAR
- username VARCHAR
- password VARCHAR
- profile_id INT
- user_type_id INT
- payment_plan_id INT
- payment_plan_status BOOLEAN
- active BOOLEAN
- date_add DATE
- date_update DATE
````

### `profile`

````
- id INT
- name VARCHAR
- description VARCHAR
- active BOOLEAN
- date_add DATE
- date_update DATE
````

### `user_type`

````
- id INT
- name VARCHAR`
- description VARCHAR
- active BOOLEAN
- date_add DATE
- date_update DATE
````

### `payment_plan`

````
- id INT
- name VARCHAR
- description VARCHAR
- price FLOAT
- available_time INT
- active BOOLEAN
- date_add DATE
- date_update DATE
````

### `employees`

````
- id INT
- firstname VARCHAR
- lastname VARCHAR
- cuil INT
- dni INT
- type_dni_id INT
- active BOOLEAN
- date_add DATE
- date_update DATE
````