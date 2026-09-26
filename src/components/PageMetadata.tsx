import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SPACE_LOGOS } from '../config/navigation';

export function PageMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    const project = SPACE_LOGOS.find((logo) => pathname.replace(/\/$/, '') === `/${logo.id}`);
    const isAbout = pathname.replace(/\/$/, '') === '/about';
    document.title = project
      ? `${project.client} case study | Hugh Huynh portfolio`
      : isAbout
        ? 'About Hugh Huynh | Software Engineer & Tech Lead'
        : 'Hugh Huynh portfolio | Software Engineer & Tech Lead';

    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (description) {
      description.content = project
        ? `${project.client}: ${project.headline}. Explore Hugh Huynh's work as ${project.role}, using ${project.techStack.slice(0, 3).join(', ')}.`
        : isAbout
          ? 'Meet Hugh Huynh, a software engineer and tech lead with over 19 years of experience building web applications for leading travel and retail brands.'
          : "Explore Hugh Huynh's software engineering portfolio, featuring work for Qantas, SAP, Gucci, and leading retail brands.";
    }
  }, [pathname]);

  return null;
}
