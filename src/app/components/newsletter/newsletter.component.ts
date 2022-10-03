import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NewslettersService, INewsletter } from 'src/app/Services/newsletters.service';
@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {

  constructor(private newletter: NewslettersService) { }

  ngOnInit(): void {
  }
  response = ""
  subscribeForm = new FormGroup({
    firstname: new FormControl<string | null>('', [Validators.required]),
    email: new FormControl<string | null>(null, [Validators.required, Validators.email]),
  })
  onSubmit() {
    console.log(this.subscribeForm.value.firstname)
    console.log(this.subscribeForm.value.email)

    this.newletter.addSubscriber(
      this.subscribeForm.value.firstname!,
      this.subscribeForm.value.email!)
      .subscribe({
        next: (res: any) => {
          this.response = res.message
          alert(this.response)
        },
        error: (e) => {
          alert(e.response.errors)
        }
      })
    this.subscribeForm.reset();
  }
}
