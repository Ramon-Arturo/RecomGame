import {
  AfterViewInit,
  Component,
  ElementRef,
  input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import Hls from 'hls.js';

@Component({
  selector: 'app-game-player',
  imports: [],
  templateUrl: './game-player.html',
  styleUrl: './game-player.css',
})
export class GamePlayer implements AfterViewInit, OnDestroy, OnChanges {
  src = input.required<string>();

  @ViewChild('videoElement') videoRef!: ElementRef<HTMLVideoElement>;

  private hls: Hls | null = null;

  ngAfterViewInit() {
    const video = this.videoRef.nativeElement;
    const sourceUrl = this.src();

    if (!sourceUrl) {
      // Si por alguna razón la URL es nula o vacía, salimos de la función
      console.warn('HLS URL no proporcionada o vacía.');
      return;
    }

    this.initHlsPlayer(sourceUrl);
  }

  initHlsPlayer(sourceUrl: string) {
    const video = this.videoRef.nativeElement;

    // 1. Verificar si Hls.js es soportado
    if (Hls.isSupported()) {
      this.hls = new Hls();

      // La clave del error: 'sourceUrl' YA ESTÁ DEFINIDA Y NO ES NULL
      this.hls.loadSource(sourceUrl);

      this.hls.attachMedia(video);
    }
    // 2. Fallback para Safari / iOS (Soporte nativo)
    else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = sourceUrl;
    }
  }

  ngOnDestroy() {
    // Limpiar memoria al cambiar de página
    if (this.hls) {
      this.hls.destroy();
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['src'] && !changes['src'].isFirstChange()) {
      const newSrc = changes['src'].currentValue;
      this.initHlsPlayer(newSrc);
    }
  }
}
