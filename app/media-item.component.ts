import { Component, Input } from '@angular/core';


@Component({
  selector: 'mw-media-item',
  templateUrl: 'app/media-item.component.html',
  styleUrls: ['app/media-item.component.css']
})
export class MediaItemComponent {
  //allows you to use input from above
  @Input() mediaItem;

  onDelete(){
    console.log("Deleted");
  }
//   name = 'The Redemption';
// // This method can be called in the HTML file instead of hard coding it
//   wasWatched(){
//     return true;
//   }
}
