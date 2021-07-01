import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SpinnerService } from '../service/spinner/spinner.service'

@Component({
  selector: 'app-sprinner',
  templateUrl: './sprinner.component.html',
  styleUrls: ['./sprinner.component.css']
})
export class SprinnerComponent implements OnInit {

  showSpinner = true;

  constructor(private spinnerService: SpinnerService,private changeDetect: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.init()
  }

  init(){
    this.spinnerService.getSpinnerObserver().subscribe((status) =>{
      console.log('Status  '+status)
      this.showSpinner = status === 'start'
      this.changeDetect.detectChanges();
    })
  }

}
