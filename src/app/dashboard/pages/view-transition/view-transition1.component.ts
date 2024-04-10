import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
    <app-title title="View Transition 1" />
    <section class="flex justify-start" >

     <img
      srcset="https://th.bing.com/th/id/R.3ddd8f6993e3306ef88e32484a9c4380?rik=sLqU%2bIvmO6Y%2bQg&riu=http%3a%2f%2fforum.bodybuilding.com%2fattachment.php%3fattachmentid%3d3421661%26stc%3d1%26d%3d1307615354&ehk=crCT25pe499GpFZKOKYbV79twPMoS8J4XMHsDDaEdDg%3d&risl=&pid=ImgRaw&r=0"
      alt="levrone"
      width="200"
      height="300"
      style="view-transition-name: hero1"
     />

     <div
      class="bg-blue-500 w-56 h-40"
      style="view-transition-name: hero2"
     >
     </div>


    </section>
  `
})
export default class ViewTransitionComponent {

}
