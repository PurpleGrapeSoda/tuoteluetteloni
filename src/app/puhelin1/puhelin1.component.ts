import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-puhelin1',
  templateUrl: './puhelin1.component.html',
  styleUrls: ['./puhelin1.component.css']
})
export class Puhelin1Component implements OnInit {
  puhelinHaku = "";
  private jsonData;
  nimi = "";
  description = ""; 
  kuvat :any[];
  saatavuus = [];
  kyllaIkoni = faCheck;
  eiIkoni = faTimes;
  isokuva = "";
  kuva1 = "";
  kuva2 = "";
  kuva3 = "";
  kuva4 = "";
  kuva5 = "";
  talktime = "";
  type = "";
  standbyTime = "";
  ram = "";
  flash = "";
  wifi = ""
  bluetooth = "";
  infrared:boolean;
  gps: boolean;
  constructor(private route: ActivatedRoute) {
  
  }

  async ngOnInit() {
    this.puhelinHaku = this.route.snapshot.paramMap.get("puhelin.id")
    await import(`src/assets/phones/${this.puhelinHaku}.json`).then(data => {
      this.jsonData = data;
    });
 
    this.nimi = this.jsonData.id;
    this.description = this.jsonData.description;
    this.kuvat = this.jsonData.images;
    this.saatavuus.push(this.jsonData.availability);
    this.isokuva = this.jsonData.images[0];
    this.kuva1= this.jsonData.images[1];
    this.kuva2= this.jsonData.images[2];
    this.kuva3= this.jsonData.images[3];
    this.kuva4= this.jsonData.images[4];
    this.kuva5= this.jsonData.images[5];
    this.type = this.jsonData.battery.type;
    this.talktime = this.jsonData.battery.talkTime;
    this.standbyTime = this.jsonData.battery.standbyTime;
    this.ram = this.jsonData.storage.ram;
    this.flash = this.jsonData.storage.flash;
    this.wifi = this.jsonData.connectivity.wifi;
    this.bluetooth = this.jsonData.connectivity.bluetooth;
    this.infrared = this.jsonData.connectivity.infrared;
    this.gps = this.jsonData.connectivity.gps;
  }
}
