import { Component, OnInit, ViewChild } from '@angular/core';
import { FaqService, IFaq } from 'src/app/Services/faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  
  public singleBranchExpand = false;

  faq: IFaq[] =[];

  constructor(private myFaqService: FaqService) { }

  ngOnInit(): void {
    this.myFaqService.getFaq().subscribe((data) => {
      this.faq = data;
    })
  }

}
