import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Navigate, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import { SpaceLogo, SPACE_LOGOS } from './config/navigation';
import { SpaceScene, SceneState } from './components/SpaceScene';
import { PageContainer } from './components/PageContainer';
import { PageMetadata } from './components/PageMetadata';
import { preloadImage } from './utils/preloadImage';

const SpaceRoute: React.FC = () => {
  const navigate = useNavigate();
  const [sceneState, setSceneState] = useState<SceneState>('idle');
  const [selectedLogo, setSelectedLogo] = useState<SpaceLogo | null>(null);
  const transitionTimers = useRef<number[]>([]);

  useEffect(() => () => {
    transitionTimers.current.forEach(window.clearTimeout);
  }, []);

  const handleSelectLogo = useCallback((logo: SpaceLogo) => {
    preloadImage(logo.heroImage);
    setSelectedLogo(logo);
    setSceneState('warping');
  }, []);

  const handleTransitionComplete = useCallback(() => {
    if (!selectedLogo) return;

    setSceneState('impact');
    transitionTimers.current.push(window.setTimeout(() => {
      setSceneState('flash');
      transitionTimers.current.push(window.setTimeout(() => {
        navigate(`/${selectedLogo.id}`);
      }, 250));
    }, 180));
  }, [navigate, selectedLogo]);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#000000]">
      <SpaceScene
        sceneState={sceneState}
        selectedLogo={selectedLogo}
        onSelectLogo={handleSelectLogo}
        onTransitionComplete={handleTransitionComplete}
      />
    </div>
  );
};

const AboutRoute: React.FC = () => {
  const navigate = useNavigate();

  return (
    <PageContainer
      onReturnToSpace={() => navigate('/')}
    />
  );
};

const CaseStudyRoute: React.FC = () => {
  const navigate = useNavigate();
  const { logoId } = useParams<{ logoId: string }>();
  const selectedLogo = SPACE_LOGOS.find((logo) => logo.id === logoId);

  if (!selectedLogo) {
    return <Navigate to="/" replace />;
  }

  return (
    <PageContainer
      onReturnToSpace={() => navigate('/')}
    />
  );
};

export const App: React.FC = () => (
  <>
  <PageMetadata />
  <Routes>
    <Route path="/" element={<SpaceRoute />} />
    <Route path="/about" element={<AboutRoute />} />
    <Route path="/:logoId" element={<CaseStudyRoute />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
  </>
);

export default App;
