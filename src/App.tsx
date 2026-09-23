import React, { useState, useCallback, useEffect } from 'react';
import { SpaceLogo, SPACE_LOGOS } from './config/navigation';
import { SpaceScene, SceneState } from './components/SpaceScene';
import { PageContainer } from './components/PageContainer';

interface RouteState {
  sceneState: SceneState;
  selectedLogo: SpaceLogo | null;
}

const getRouteState = (): RouteState => {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';

  if (path === '/about') {
    return { sceneState: 'page', selectedLogo: null };
  }

  const selectedLogo = SPACE_LOGOS.find((logo) => `/${logo.id}` === path) ?? null;
  return selectedLogo
    ? { sceneState: 'page', selectedLogo }
    : { sceneState: 'idle', selectedLogo: null };
};

export const App: React.FC = () => {
  const initialRoute = getRouteState();
  const [sceneState, setSceneState] = useState<SceneState>(initialRoute.sceneState);
  const [selectedLogo, setSelectedLogo] = useState<SpaceLogo | null>(initialRoute.selectedLogo);

  useEffect(() => {
    const handlePopState = () => {
      const route = getRouteState();
      setSceneState(route.sceneState);
      setSelectedLogo(route.selectedLogo);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const pushPath = useCallback((path: string) => {
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
  }, []);

  // Triggered when user selects a logo in 3D Space
  const handleSelectLogo = useCallback((logo: SpaceLogo) => {
    pushPath(`/${logo.id}`);
    setSelectedLogo(logo);
    setSceneState('warping');
  }, [pushPath]);

  // Triggered when warp animation completes
  const handleTransitionComplete = useCallback(() => {
    // Sequence: Impact -> Flash -> Page
    setSceneState('impact');

    setTimeout(() => {
      setSceneState('flash');

      setTimeout(() => {
        setSceneState('page');
      }, 250);
    }, 180);
  }, []);

  // Return to Space Orbit
  const handleReturnToSpace = useCallback(() => {
    pushPath('/');
    setSceneState('idle');
    setSelectedLogo(null);
  }, [pushPath]);

  const handleShowAbout = useCallback(() => {
    pushPath('/about');
    setSelectedLogo(null);
    setSceneState('page');
  }, [pushPath]);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#000000]">
      {/* 3D Space Scene with Logos, Warp Field, and Transitions */}
      <SpaceScene
        sceneState={sceneState}
        selectedLogo={selectedLogo}
        onSelectLogo={handleSelectLogo}
        onTransitionComplete={handleTransitionComplete}
      />

      {/* Destination Page Container */}
      {sceneState === 'page' && (
        <PageContainer
          selectedLogo={selectedLogo}
          onReturnToSpace={handleReturnToSpace}
          onSelectLogo={handleSelectLogo}
          onShowAbout={handleShowAbout}
        />
      )}
    </div>
  );
};

export default App;
