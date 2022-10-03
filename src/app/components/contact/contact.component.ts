import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService, IContact } from 'src/app/Services/contact.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
  }

  response = ""
  imagePath = '../../../assets/images/res.jpeg'

  subscribeForm = new FormGroup({
    firstname: new FormControl<string | null>('', [Validators.required]),
    lastname: new FormControl<string | null>('', [Validators.required]),
    email: new FormControl<string | null>(null, [Validators.required, Validators.email]),
    subject: new FormControl<string | null>('', [Validators.required]),
  })
  onSubmit() {
    console.log(this.subscribeForm.value.firstname)
    console.log(this.subscribeForm.value.email)

    let details: IContact = {
      fname: this.subscribeForm.value.firstname!,
      lname: this.subscribeForm.value.lastname!,
      email: this.subscribeForm.value.email!,
      subject: this.subscribeForm.value.subject!,
    }


    this.contactService.sendMessage(details).subscribe({
      next: (res: any) => {
        this.response = res.message
        alert(this.response)
      },
      error: (e) => {
        this.response = e.response.data.errors
      }


    })

    this.subscribeForm.reset();
  }
}
