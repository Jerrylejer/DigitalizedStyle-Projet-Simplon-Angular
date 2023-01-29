import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css'],
})
export class PaiementComponent {
  paymentForm!: FormGroup;
  validationError: string[] = [];

  constructor(private formBuilder: FormBuilder,
    private router: Router) {}

  ngOnInit() {
    let expDate = 
    /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;

    this.paymentForm = this.formBuilder.group({
      card_username: [null, [Validators.required]],
      card_number: [null, [Validators.required,  Validators.pattern("\\d{16}$")]],
      card_exp: [null, [Validators.required, Validators.pattern(expDate)]],
      card_cvc: [
        null,
        [Validators.required, Validators.pattern("\\d{3}$")],
      ],
    });
  }

  onPay() {
    // Le tabealu va récupérer les champs invalides
    this.validationError = [];

    if (this.paymentForm.invalid) {
      Object.keys(this.paymentForm.controls).forEach((control) => {
        const currentInput = this.paymentForm.get(control);
        if (currentInput && currentInput.status === "INVALID") {
          this.validationError.push(control);
        }
        console.log(control, currentInput);
      });
      console.log(this.validationError);
    } else {
      this.router.navigate(['/validation-commande']);
    }
  }
}
