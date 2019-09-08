import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {

  private sellerId: number;
  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    this.sellerId = this.routeInfo.snapshot.params['id'];
  }

}
