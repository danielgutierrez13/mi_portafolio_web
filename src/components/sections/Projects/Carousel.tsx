import { useEffect, useRef } from 'react';
import { useCarousel } from '../../../hooks/useCarousel';
import { Icon } from '../../ui/Icon';
import { useT } from '../../../i18n/ui';

const PLACEHOLDER = ['__placeholder__'];

interface EmptySlideProps {
  readonly confidential?: boolean;
}
function EmptySlide({ confidential }: EmptySlideProps) {
  const t = useT();
  return (
    <div className="carousel__slide">
      <div className="lightbox__placeholder">
        <Icon id="image" />
        <span>{confidential ? t.shotsConfidential : t.shotsPending}</span>
      </div>
    </div>
  );
}

interface CarouselProps {
  readonly images: string[];
  readonly confidential?: boolean;
}

export function Carousel({ images, confidential }: CarouselProps) {
  const t = useT();
  const hasSlides = images.length > 0;
  const slides = hasSlides ? images : PLACEHOLDER;
  const { current, go, prev, next } = useCarousel(slides);
  const carouselRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const isSingle = !hasSlides || slides.length <= 1;

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    const onTouchStart = (e: TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
    const onTouchEnd = (e: TouchEvent) => {
      if (touchStartX.current === null) return;
      const delta = e.changedTouches[0].clientX - touchStartX.current;
      if (Math.abs(delta) > 40) { if (delta < 0) next(); else prev(); }
      touchStartX.current = null;
    };

    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchend', onTouchEnd);
    return () => {
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchend', onTouchEnd);
    };
  }, [next, prev]);

  return (
    <div className={`carousel${isSingle ? ' carousel--single' : ''}`} ref={carouselRef}>
      <div className="carousel__viewport" style={{ transform: `translateX(${-current * 100}%)` }}>
        {hasSlides
          ? images.map((src) => (
              <div key={src} className="carousel__slide">
                <img src={src} alt={t.screenshotAlt} />
              </div>
            ))
          : <EmptySlide confidential={confidential} />}
      </div>

      {!isSingle && (
        <>
          <button className="carousel__nav carousel__nav--prev" onClick={prev} aria-label={t.prevShot}>
            <Icon id="chevron-left" />
          </button>
          <button className="carousel__nav carousel__nav--next" onClick={next} aria-label={t.nextShot}>
            <Icon id="chevron-right" />
          </button>
          <div className="carousel__dots">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                className={`carousel__dot${i === current ? ' is-active' : ''}`}
                onClick={() => go(i)}
                aria-label={t.goToShot(i + 1)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
