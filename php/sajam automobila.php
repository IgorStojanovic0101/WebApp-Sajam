<?php
require_once 'php/auto.php';

class Sajam_automobila
{
    public $id;
    public $naziv;
    public $mesto;
    public $listaAutomobila;


    public function __construct($id, $naziv, $mesto) {
        $this->id = $id;
        $this->naziv = $naziv;
        $this->mesto = $mesto;
        $this->listaAutomobila = array();
    }
    
    public function dodaj($a)
    {
        $this->listaAutomobila[$a->id] = $a;
    }
    
    
}

