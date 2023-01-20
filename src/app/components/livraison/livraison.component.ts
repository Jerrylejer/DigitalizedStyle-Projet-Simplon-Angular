import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-livraison',
  templateUrl: './livraison.component.html',
  styleUrls: ['./livraison.component.css']
})
export class LivraisonComponent {
  formLivraison!: FormGroup;
  validationCoordonneesError: string[] = [];
  // formLivraison: any;
  // validationPaymentError: string[] = [];



  constructor(private formBuilder: FormBuilder, private router: Router) {};
  ngOnInit(){
    this.formLivraison = this.formBuilder.group({
      nom: [null, [Validators.required]],
      prenom: [null, [Validators.required]],
      adresse: [null, [Validators.required]],
      ville: [null, [Validators.required]],
      codePostal: [null, [Validators.required]],
      pays:[null, [Validators.required]],
      telephone: [null, [Validators.required]],
    });
  }

  register() {
    this.validationCoordonneesError = [];
    if (this.formLivraison.invalid) {
      Object.keys(this.formLivraison.controls).forEach((input) => {
        const currentInput = this.formLivraison.get(input);
        console.log("currentInput", currentInput);
        if (currentInput && currentInput.status === "INVALID") {
          this.validationCoordonneesError.push(input);
        }
      });
      console.log(this.validationCoordonneesError);

    }// modale page succès else {
    //   this.router.navigate(['/paiementSucces']);
    // }

    




  }

}

// Fonction Validation

  // //  Fonction pour valider le paiement
  //  pay(){
  //   this.validationPaymentError = [];
  //   if (this.paymentForm.invalid) {
  //     Object.keys(this.paymentForm.controls).forEach((input) => {
  //       const currentInput = this.paymentForm.get(input);
  //       console.log("currentInput", currentInput);
  //       if (currentInput && currentInput.status === "INVALID") {
  //         this.validationPaymentError.push(input);
  //       }
  //     });
  //   }
  // }
// function pay() {
//   throw new Error('Function not implemented.');
// }

