import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public navCtrl: NavController,
    public toastCtrl: ToastController,
    public loaCtrl: LoadingController) { }

  busqueda: string;

  async mensaje_no_encontrado() {
    const mensaje = await this.toastCtrl.create({
      message: 'Jugador no encontrado',
      duration: 2000,
    })
    mensaje.present();
  }
  async mostrar_cargando() {
    const cargando = await this.loaCtrl.create({
      spinner: null,
      duration: 1000,
      message: 'Cargando...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    cargando.present();
  }
  ir_acerca_pagina() {
    this.navCtrl.navigateForward(`/acerca-de-pagina`);
  }
  perfil_lm() {
    this.mostrar_cargando();
    this.navCtrl.navigateForward(`/leo-messi`);
  }
  enviar_busqueda() {

    if (
        this.busqueda=="lionel messi" || 
        this.busqueda=="LIONEL MESSI" || 
        this.busqueda=="Lionel messi" ||
        this.busqueda=="messi" ||
        this.busqueda=="Messi") {
      this.mostrar_cargando();
      this.navCtrl.navigateForward(`/leo-messi`);
    } else if (this.busqueda == "cristiano ronaldo") {
      this.navCtrl.navigateForward(`/c-ronaldo`);
    } else if (this.busqueda == "neymar") {
      this.navCtrl.navigateForward(`/ney-jr`);
    } else if (this.busqueda == "kevin de bruyne") {
      this.navCtrl.navigateForward(`/k-bruy`);
    } else if (this.busqueda == "sergio aguero") {
      this.navCtrl.navigateForward(`/s-aguero`);
    } else if (this.busqueda == "alexis sanchez") {
      this.navCtrl.navigateForward(`/ale-san`);
    } else if (this.busqueda == "arturo vidal") {
      this.navCtrl.navigateForward(`/a-vidal`);
    } else if (this.busqueda == "esteban paredes") {
      this.navCtrl.navigateForward(`/e-paredes`);
    } else {
      this.mensaje_no_encontrado();
    }

  }

  /*async getAlert(nom_pla,infor) {

    const informacion = await this.alertCtrl.create({
      header: nom_pla,
      message: infor,
      buttons: [
        "Aceptar"
      ]

    });
    informacion.present();
  }

  informacion_p1() {
    var nombre_jugador:"Lionel Messi";
    var informacion_jugador = "<strong>Fecha nac : 24/06/1987<br>Edad : 31 años<br>País : Argentina<br>Altura : 170 cm<br>Partidos Internacionales : 128<br>Debut : 17/08/2005<br>Demarcación : Delantero<br>Peso : 72 kg</strong>";
    this.getAlert(nombre_jugador,informacion_jugador);
  }
*/

  /*async informacion_p1() {

    const hojaDeAccion = await this.AsheetCtrl.create({

      header: 'Informacion',
      buttons:
        [
          {
            text: 'Nac:24/06/1987',
            icon: 'information',
            
          },
          {
            text: 'Edad:31 años',
          },
          

        ]

    });
    hojaDeAccion.present();
  }*/

}
