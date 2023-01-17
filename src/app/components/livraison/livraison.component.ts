import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-livraison',
  templateUrl: './livraison.component.html',
  styleUrls: ['./livraison.component.css']
})
export class LivraisonComponent {
  formLivraison!: FormGroup;
  livraisonForm: any;
  validationCoordonneesError: string[] = [];
  // validationPaymentError: string[] = [];



  constructor(private formBuilder: FormBuilder) { };
  ngOnInit() {
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
    if (this.livraisonForm.invalid) {
      Object.keys(this.livraisonForm.controls).forEach((input) => {
        const currentInput = this.livraisonForm.get(input);
        console.log("currentInput", currentInput);
        if (currentInput && currentInput.status === "INVALID") {
          this.validationCoordonneesError.push(input);
        }
      });
    }

  }

}

// Fonction Validation

  //  Fonction pour valider le paiement
//    pay() {
//     this.validationPaymentError = [];
//     if (this.paymentForm.invalid) {
//       Object.keys(this.paymentForm.controls).forEach((input) => {
//         const currentInput = this.paymentForm.get(input);
//         console.log("currentInput", currentInput);
//         if (currentInput && currentInput.status === "INVALID") {
//           this.validationPaymentError.push(input);
//         }
//       });
//     }
//   }
// function pay() {
//   throw new Error('Function not implemented.');
// }

