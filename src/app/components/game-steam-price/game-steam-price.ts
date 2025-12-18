import { Component, computed, inject, input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-game-steam-price',
  imports: [],
  templateUrl: './game-steam-price.html',
  styleUrl: './game-steam-price.css',
})
export class GameSteamPrice implements OnInit {
  private sanitizer = inject(DomSanitizer);

  appId = input<string>();
  genres = input<any[]>([]);
  scr = computed(() =>
    this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://store.steampowered.com/widget/${this.appId()}/`
    )
  );
  scr2 = `https://store.steampowered.com/widget/${this.appId()}/`;

  ngOnInit(): void {
    
  }
}
