const express = require("express"); // เรียกใช้ Express
const mysql = require("mysql"); // เรียกใช้ mysql
const db = mysql.createConnection({
  // config ค่าการเชื่อมต่อฐานข้อมูล
  host: "localhost",
  user: "root",
  password: "",
  database: "myproject",
});
db.connect(); // เชื่อมต่อฐานข้อมูล
const app = express(); // สร้าง Object เก็บไว้ในตัวแปร app เพื่อนำไปใช้งาน
// Select Data
app.get("/users/:No/:status", (req, res) => {
  // Router เวลาเรียกใช้งาน
  let sql =
    "UPDATE sensor SET status=" +
    Number(req.params.status) +
    " WHERE No= " +
    Number(req.params.No) +
    "";
  let query = db.query(sql, (err, results) => {
    // สั่ง Query คำสั่ง sql
    if (err) throw err; // ดัก error
    console.log(results); // แสดงผล บน Console
    res.send(results);

    // สร้างผลลัพธ์เป็น JSON ส่งออกไปบน Browser
  });
});

app.get("/users_Y/:No/:status", (req, res) => {
  // Router เวลาเรียกใช้งาน
  let sql =
    "UPDATE sensor SET status2=" +
    Number(req.params.status) +
    " WHERE No= " +
    Number(req.params.No) +
    "";
  let query = db.query(sql, (err, results) => {
    // สั่ง Query คำสั่ง sql
    if (err) throw err; // ดัก error
    console.log(results); // แสดงผล บน Console
    res.send(results);

    // สร้างผลลัพธ์เป็น JSON ส่งออกไปบน Browser
  });
});
app.get("/update_value/:topic/:value", (req, res) => {
  // Router เวลาเรียกใช้งาน
  let sql =
    "UPDATE sensor SET value_Realtime=" +
    Number(req.params.value) +
    " WHERE No= " +
    Number(req.params.topic) +
    "";
  let query = db.query(sql, (err, results) => {
    // สั่ง Query คำสั่ง sql
    if (err) throw err; // ดัก error
    console.log(results); // แสดงผล บน Console
    res.send(results);

    // สร้างผลลัพธ์เป็น JSON ส่งออกไปบน Browser
  });
});
app.get("/test", (req, res) => {
  // Router เวลาเรียกใช้งาน
  let sql = "SELECT * FROM sensor";
  let query = db.query(sql, (err, results) => {
    // สั่ง Query คำสั่ง sql
    if (err) throw err; // ดัก error
    console.log(results); // แสดงผล บน Console

    //res.json(results)   // สร้างผลลัพธ์เป็น JSON ส่งออกไปบน Browser
    res.send({ message: "Ahoy!" });
  });
});
app.get("/report/:value1/:code/:location/:username/:status", (req, res) => {
  // Router เวลาเรียกใช้งาน
  //let sql ="SELECT * FROM the_location";
  var color = "";
  if (req.params.status == 1) {
    color = "green";
  } else if (req.params.status == 2) {
    color = "red";
  }
  let sql =
    " INSERT INTO report_all (value1, code, location,username,status ,color)VALUES(" +
    Number(req.params.value1) +
    ", '" +
    req.params.code +
    "'," +
    req.params.location +
    ", '" +
    req.params.username +
    "'," +
    req.params.status +
    ",'" +
    color +
    "')";
  //let sql  = "insert into report_all (value1 ,code,location,username,status) values("+Number(req.params.value1)+"'"+req.params.code+""+Number(req.params.location)+"'"+req.params.username+"'"+Number(req.params.status)+")";
  let query = db.query(sql, (err, results) => {
    // สั่ง Query คำสั่ง sql
    if (err) throw err; // ดัก error
    console.log(results); // แสดงผล บน Console

    res.json(results); // สร้างผลลัพธ์เป็น JSON ส่งออกไปบน Browser
  });
});
app.get("/report_Y/:value2/:code/:location/:username/:status", (req, res) => {
  // Router เวลาเรียกใช้งาน
  //let sql ="SELECT * FROM the_location";
  var color = "";
  if (req.params.status == 1) {
    color = "green";
  } else if (req.params.status == 2) {
    color = "red";
  }
  let sql =
    " INSERT INTO report_all (value2, code, location,username,status ,color)VALUES(" +
    Number(req.params.value2) +
    ", '" +
    req.params.code +
    "'," +
    req.params.location +
    ", '" +
    req.params.username +
    "'," +
    req.params.status +
    ",'" +
    color +
    "')";
  //let sql  = "insert into report_all (value1 ,code,location,username,status) values("+Number(req.params.value1)+"'"+req.params.code+""+Number(req.params.location)+"'"+req.params.username+"'"+Number(req.params.status)+")";
  let query = db.query(sql, (err, results) => {
    // สั่ง Query คำสั่ง sql
    if (err) throw err; // ดัก error
    console.log(results); // แสดงผล บน Console

    res.json(results); // สร้างผลลัพธ์เป็น JSON ส่งออกไปบน Browser
  });
});


//update_GYRO_X
app.get("/update_value_GYRO/:topic/:value1", (req, res) => {
  // Router เวลาเรียกใช้งาน
  let sql =
    "UPDATE sensor SET value_Realtime=" +
    Number(req.params.value1) +
    " WHERE No= " +
    Number(req.params.topic) +
    "";
  let query = db.query(sql, (err, results) => {
    // สั่ง Query คำสั่ง sql
    if (err) throw err; // ดัก error
    console.log(results); // แสดงผล บน Console
    res.send(results);

    // สร้างผลลัพธ์เป็น JSON ส่งออกไปบน Browser
  });
});


//update_GYRO_Y
app.get("/update_value_GYRO_Y/:topic/:value1", (req, res) => {
  // Router เวลาเรียกใช้งาน
  let sql =
    "UPDATE sensor SET value_Realtime2=" +
    Number(req.params.value1) +
    " WHERE No= " +
    Number(req.params.topic) +
    "";
  let query = db.query(sql, (err, results) => {
    // สั่ง Query คำสั่ง sql
    if (err) throw err; // ดัก error
    console.log(results); // แสดงผล บน Console
    res.send(results);

    // สร้างผลลัพธ์เป็น JSON ส่งออกไปบน Browser
  });
});


app.get("/", function (req, res) {
  res.send("Hello World");
});
app.listen("3000", () => {
  //
  console.log("start port 3000");
});
