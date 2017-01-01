import {Component} from '@angular/core';

//Import service in the component that will be used
import {MediaItemService} from './media-item.service';

@Component({
    selector: 'mw-media-item-list',
    templateUrl: 'app/media-item-list.component.html',
    styleUrls: ['app/media-item-list.component.css']
})
export class MediaItemListComponent {
    mediaItems;
//Create constructor
    constructor(private mediaItemService: MediaItemService) {

    }

//Initialize service
    ngOnInit() {
        this.mediaItems = this.mediaItemService.get();
    }

//Fill in delete body
    onMediaItemDelete(mediaItem) {
        this.mediaItemService.delete(mediaItem);
    }

}
