import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-acerca-de-pagina',
  templateUrl: './acerca-de-pagina.page.html',
  styleUrls: ['./acerca-de-pagina.page.scss'],
})
export class AcercaDePaginaPage implements OnInit {

  constructor(public AsheeCtrl: ActionSheetController, public ToastCtrl: ToastController) { }

  async mostrar_calificacion_buena() {
    const mensaje = await this.ToastCtrl.create(
      {
        message: "GRACIAS POR SU APOYO!!!",
        duration: 2000,

      }
    );
    mensaje.present();
  }

  async mostrar_calificacion_mala() {
    const mensaje = await this.ToastCtrl.create(
      {
        message: "SEGUIREMOS TRANAJANDO PARA MEJORAR :c",
        duration: 2000,

      }
    );
    mensaje.present();
  }

  async Mostrat_op() {
    const hojaDeAccion = await this.AsheeCtrl.create({

      header: 'opciones',
      buttons:
        [
          {
            text: 'Muy buena',
            icon: 'happy',
            handler: () => {
              this.mostrar_calificacion_buena();
            }

          }, {
            text: 'Falta Mejorar',
            icon: 'sad',
            handler: () => {
              this.mostrar_calificacion_mala();
            }
          }
        ]
    });
    hojaDeAccion.present();

  }

  ngOnInit() {
  }

}
