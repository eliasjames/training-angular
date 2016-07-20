"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var SonglistComponent = (function () {
    function SonglistComponent() {
        this.songsList = [
            'On The Road Again',
            'Twist And Shout',
            'Miles Runs The Voodoo Down'
        ];
    }
    SonglistComponent = __decorate([
        core_1.Component({
            selector: 'sbux-song-list',
            template: '<ol> <li *ngFor="let eachSong of songsList"> {{ eachSong }} </li> </ol>'
        }), 
        __metadata('design:paramtypes', [])
    ], SonglistComponent);
    return SonglistComponent;
}());
exports.SonglistComponent = SonglistComponent;
//# sourceMappingURL=songlist.component.js.map