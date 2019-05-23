<?php

class Auto
{
    public $id;
    public $naziv;
    public $marka;
    public $boja;
    public $poreklo;
    public $ks;
    public $broj_sedista;
    public $cena;
   
    
    public function __construct($id, $naziv, $marka,$boja, $poreklo, $ks,$broj_sedista, $cena) {
        $this->id = $id;
        $this->naziv = $naziv;
        $this->marka = $marka;
        $this->boja=$boja;
        $this->poreklo = $poreklo;
        $this->ks = $ks;
        $this->broj_sedista=$broj_sedista;
        $this->cena = $cena;
       
    }
    
}
