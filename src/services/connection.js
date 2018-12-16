export function checkLogin(user, pass){
  var Connection = require('tedious').Connection;
  var Request = require('tedious').Request;
  // var Sequelize = require('sequelize');
  //
  // var sequelize = new Sequelize('AssistiveDB', 'adminATP', 'testtest1!', {
  //   host: 'assistive.database.windows.net',
  //   dialect: 'mssql',
  //   pool: {
  //     max: 5,
  //     min: 0,
  //     idle: 10000
  //   },
  //   dialectOptions: {
  //     encrypt: true
  //   }
  // });
  //
  // queryDatabase();

  var config =
  {
      userName: 'adminATP',
      password: 'testtest1!',
      server: 'assistive.database.windows.net',
      options:
      {
          database: 'AssistiveDB',
          encrypt: true
      }
  }
  var connection = new Connection(config);

  connection.on('connect', function(err)
      {
          if (err)
          {
              console.log(err)
          }
          else
          {
              queryDatabase()
          }
      }
  );

  function queryDatabase()
  {
      console.log('Reading rows from the Table...');

      // sequelize.query("SELECT count(*) from Users where username = $1 and password = $2", [user, pass]).then(myTableRows => {
      //   console.log(myTableRows)
      // })

      var request = new Request(
          "SELECT count(*) from Users ",
          function(err, rowCount, rows)
          {
              console.log(rowCount + ' row(s) returned');
              process.exit();
          }
      );

      request.on('row', function(columns) {
          columns.forEach(function(column) {
              console.log("%s\t%s", column.metadata.colName, column.value);
          });
      });
      connection.execSql(request);
  }
}
