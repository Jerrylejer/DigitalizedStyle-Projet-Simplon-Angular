import { Component, ComponentRef} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { ITEMPRODUCTDETAILS,Item_productdetails} from 'src/app/mocks/product-details.mock';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  item_productdetails: Item_productdetails[] = ITEMPRODUCTDETAILS;
  titreToDisplay = 'DOUDOUNNES';
  btnText = 'Nouveautés';
  constructor(private dialogRef : MatDialog){}
  
 openDialogClick(){
   this.dialogRef.open(ModalComponent,
    { 
      height: '700px',
      width: '900px',
      position: {
        top:"-2000px",
        left:"600px",
        

      }
    
    
   });
  }
}
