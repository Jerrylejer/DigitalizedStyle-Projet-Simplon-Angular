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
    this.paymentForm = this.formBuilder.group({
      card_username: [null, [Validators.required]],
      card_number: [null, [Validators.required]],
      card_exp: [null, [Validators.required]],
      card_cvc: [
        null,
        [Validators.required],
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
      this.router.navigate(['not-found']);
    }
  }
}
