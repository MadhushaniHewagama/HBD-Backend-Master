import { Application, Request, Response } from "express";
import Mysql from '../config/db';
import { FieldInfo, MysqlError } from "mysql";

 export const addUser = (req: Request, res: Response) => {
   // Example query that you can execute to get all the users from database
  const add_user_query = "insert into user_profile(`email`, `user_name`, `password`) values (?,?,?)";
  Mysql.getPool().query(add_user_query, [req.body.email, req.body.email,req.body.password], (err:any, results:any) =>
      {if (err) {
         console.log("Error", err);
         res.status(500)
            .json({"error": err});
      } else {
         console.log("Result: ", results);
         res.json(results);
      }
   });
 }
 export const addBDay = (req: Request, res: Response) => {
     const add_bday_query = "insert into birth_days(`date`, `name`, `phone`,`msg`) values (?,?,?,?)";
  Mysql.getPool().query(add_bday_query, [req.body.date, req.body.name,req.body.phone,req.body.msg], (err:any, results:any) =>
      {if (err) {
         console.log("Error", err);
         res.status(500)
            .json({"error": err});
      } else {
         console.log("Result: ", results);
         res.json(results);
      }
   });
 }