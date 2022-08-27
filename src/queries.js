//import Pool class from pg  that allow to connect with postgreSQL

const Pool = require("pg").Pool;

/* 
create a pool object with the params necessary to start working with
database in this case PostgreSQL

const pool = new Pool({
  user: 'me', rol-user, in the database;
  host: 'localhost', 
  database: 'api', database name
  password: 'password', password from user in this case this password is from user: 'me'
  port: 5432, default port PostgreSQL
});

*/
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'api',
  password: 'password',
  port: 5432,
});

//get all users

const getUsers = (req, res) => {
  pool.query('select * from users order by id asc', (err, results) => {
    if (err) {
      throw err;
    }
    res.status(200).json(results.rows);
  });
};


//get user by id
// pool query structure
// querySQL + [params in the table] + callback()
// select * from users where id = $param, [$param], (err, results) => {}
const getUserById = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query('select * from users where id = $1', [id], (err, results) => {
    if (err) {
      throw err;
    }
    res.status(200).json(results.rows);
  });
};


//post new user

const createUser = (req, res) => {
  const { name, email } = req.body;

  pool.query('insert into users (name, email) values ($1, $2) returning id', [name, email], (err, results) => {
    if(err){
      throw err
    }
    res.status(201).send(`User added with ID: ${results.rows[0].id}`)
  })
};

// put update 

const updateUser = (req, res) => {
  const id = parseInt(req.params.id)
  const {name, email} = req.body

  pool.query(
    'update users set name=$1, email=$2 where id =$3',
    [name, email, id],
    (err, results) => {
      if(err){
        throw err
      }
      res.status(200).send(`User modified with ID: ${id}`)
    }
  )
}

//delete

const deleteUser = (req, res) => {
  const id = parseInt(req.params.id)

  pool.query('delete from users where id = $1', [id], (err, results) =>{
    if(err) {
      throw err;
    }
    res.status(200).send(`User deleted with ID: ${id}`);
  })
};

//export functions

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
