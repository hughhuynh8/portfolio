import React, { useState, useCallback } from 'react';
import { SpaceLogo, SPACE_LOGOS } from './config/navigation';
import { SpaceScene, SceneState } from './components/SpaceScene';
import { PageContainer } from './components/PageContainer';

export const App: React.FC = () => {
  const [sceneState, setSceneState] = useState<SceneState>('idle');
  const [selectedLogo, setSelectedLogo] = useState<SpaceLogo | null>(null);
  const [activeGeneralPage, setActiveGeneralPage] = useState<string | null>(null);

  // Triggered when user selects a logo in 3D Space
  const handleSelectLogo = useCallback((logo: SpaceLogo) => {
    setSelectedLogo(logo);
    setActiveGeneralPage(null);
    setSceneState('warping');
  }, []);

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
    setSceneState('idle');
    setSelectedLogo(null);
    setActiveGeneralPage(null);
  }, []);

  // Handle switching to a general page (About, Art, Contact, etc.)
  const handleSelectGeneralPage = useCallback((pageId: string) => {
    setSelectedLogo(null);
    setActiveGeneralPage(pageId);
    setSceneState('page');
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#010817]">
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
          activeGeneralPage={activeGeneralPage}
          onReturnToSpace={handleReturnToSpace}
          onSelectLogo={handleSelectLogo}
          onSelectGeneralPage={handleSelectGeneralPage}
        />
      )}
    </div>
  );
};

export default App;
