import { Lightbox } from '../../ui/Lightbox';
import { Icon } from '../../ui/Icon';
import { type Cert } from '../../../data/education';
import { useT } from '../../../i18n/ui';

interface CertImageProps {
  readonly src: string;
  readonly title: string;
}
function CertMedia({ src, title }: CertImageProps) {
  if (src.toLowerCase().endsWith('.pdf')) {
    return <iframe src={src} title={title} className="lightbox__pdf" />;
  }
  return <img src={src} alt={title} />;
}

interface CertLightboxProps {
  readonly cert: Cert | null;
  readonly onClose: () => void;
}

export function CertLightbox({ cert, onClose }: CertLightboxProps) {
  const t = useT();
  return (
    <Lightbox isOpen={cert !== null} onClose={onClose} labelId="certLightboxTitle">
      {cert && (
        <>
          <div className="lightbox__image-wrap">
            {cert.image
              ? <CertMedia src={cert.image} title={`${t.certificatePrefix}${cert.title}`} />
              : <div className="lightbox__placeholder"><Icon id="image" /><span>{t.docPending}</span></div>
            }
          </div>
          <div className="lightbox__meta">
            <span className="lightbox__provider">{cert.provider}</span>
            <h3 id="certLightboxTitle">{cert.title}</h3>
            <p className="lightbox__obtained"><Icon id="calendar" />{cert.obtained}</p>
            <p className="lightbox__detail">{cert.detail}</p>
            {cert.links.length > 0 && (
              <div className="lightbox__verify-row">
                <div className="lightbox__verify-icons">
                  {cert.links.map((href, i) => (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={cert.links.length === 1 ? t.viewVerification : t.verificationN(i + 1)}
                      className="lightbox__verify-btn"
                      title={cert.links.length === 1 ? t.viewVerification : t.verificationN(i + 1)}
                    >
                      <Icon id="external" />
                      {cert.links.length > 1 && <span className="lightbox__verify-num">{i + 1}</span>}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </Lightbox>
  );
}
