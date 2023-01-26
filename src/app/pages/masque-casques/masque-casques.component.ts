import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { ProductMasque, PRODUCTMASQUES } from 'src/app/mocks/masqueCasque.mock';

@Component({
  selector: 'app-masque-casques',
  templateUrl: './masque-casques.component.html',
  styleUrls: ['./masque-casques.component.css']
})
export class MasqueCasquesComponent {
  productMasque: ProductMasque[] = PRODUCTMASQUES;
  
  titreToDisplay = 'MASQUES ET CASQUES';
  btnText = 'Nouveautés';
  
  constructor(public dialog: MatDialog) {}
  
  openDialog() {
    this.dialog.open(ModalComponent,{
      height: '500px',
      width:  '600px',
      position: {
        top: "150px",
        left:"600px",
      }
    });
  }
  }



