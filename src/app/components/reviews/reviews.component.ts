import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ReviewsService, IReviews } from 'src/app/Services/reviews.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  searchValue: string = "";

  reviews: IReviews[] = [];

  stars = [
    {
      label: "5 Stars",
      value: "5",
      rating: "5"
    },
    {
      label: "4 Stars",
      value: "4",
      rating: "4"
    },
    {
      label: "3 Stars",
      value: "3",
      rating: "3"
    },
    {
      label: "2 Stars",
      value: "2",
      rating: "2"
    },
    {
      label: "1 Star",
      value: "1",
      rating: "1"
    }
  ];
  selectedValue = null;

  constructor(private myReviewService: ReviewsService) { }

  ngOnInit(): void {
    this.myReviewService.getReviews().subscribe((data) => {
      this.reviews = data;
    });
  }

  //validation done inline, can be just 1 or an array of them
  RegistrationForm = new FormGroup({
    name: new FormControl<string | null>('', [Validators.required, Validators.minLength(3)]),
    rating: new FormControl<string | null>('', Validators.required),
    review: new FormControl<string | null>('', [Validators.required, Validators.maxLength(460)]),
  })

  onSubmit(ngForm: NgForm) {
    console.log(ngForm);
    console.log(ngForm.value.name!)
    console.log(ngForm.value.rating!)
    console.log(ngForm.value.review!)
    this.myReviewService.addReview(ngForm).subscribe((data) => console.log(data));
    ngForm.reset();
    this.ngOnInit();
  }
}
