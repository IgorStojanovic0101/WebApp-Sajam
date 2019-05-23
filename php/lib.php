<?php
require_once 'IDB.php';
require_once 'auto.php';
require_once 'sajam automobila.php';


class DB implements IDB
{
    const host = "localhost";
    const username = "root";
    const password = "";
    const dbName = "sajam automobila";
    
    public static function vratiSajam()
    {
        $con = new mysqli(self::host, self::username, self::password, self::dbName);
        if ($con->connect_errno) {
        // u slucaju greske odstampati odgovarajucu poruku
        print ("Connection error (" . $con->connect_errno . "): $con->connect_error");
        }
        else
        {
            $res = $con->query("SELECT * from sajam_automobila");
            $sajam = null;
            if ($res)
            {
                $row = array();
                if ($row = $res->fetch_assoc())
                {
                    $sajam = new Sajam_automobila($row["id"], $row["naziv"], $row["mesto"]);
                }
                
                $res->close();
                $res2 = $con->query("SELECT * from auto WHERE sajam_id=$sajam->id");
                $auto = null;
                if ($res2)
                {
                    $row2 = array();
                    while($row2 = $res2->fetch_assoc())
                    {
                        $auto = new Auto($row2["id"], $row2["naziv"], $row2["marka"], $row2["boja"], $row2["poreklo"], $row2["ks"], $row2["broj_sedista"],$row2["cena"]);
                        $sajam->dodaj($auto);
                    }
                }
                else
                {
                    print("Query prso");
                }
            }
            else
            {
                print("Queri fejlovao");
            }
            $res2->close();
            $con->close();
            return $sajam;
        }
    }
    
    public static function azurirajAuto(Auto $auto)
    {
         $con = new mysqli(self::host, self::username, self::password, self::dbName);
        if ($con->connect_errno) {
        // u slucaju greske odstampati odgovarajucu poruku
        print ("Connection error (" . $con->connect_errno . "): $con->connect_error");
        }
        else
        {
            $res = $con->query("UPDATE auto SET naziv='$auto->naziv', marka='$auto->marka',"
                    . "boja=$auto->boja, poreklo='$auto->poreklo', ks='$auto->ks',"
                    . "broj_sedista='$auto->broj_sedista', cena = '$auto->cena' WHERE id='$auto->id' ");
            
            if(!$res)
            {
                print("Query failed");
            }
            
        }
    }
}