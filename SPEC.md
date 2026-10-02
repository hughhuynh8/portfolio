# Space Portfolio SPA — Specification


The user is simply floating in deep space, looking toward a collection of distant logos.

The interaction is:

```text
SPACE
   ↓
8 logos at different distances
   ↓
user clicks a logo
   ↓
camera accelerates toward selected logo
   ↓
warp speed
   ↓
logo rapidly approaches
   ↓
logo fills the screen
   ↓
white flash
   ↓
black
   ↓
selected webpage fades in
```

---

## Initial Scene

The initial scene should contain only:

```text
              ·
                     LOGO
        ·

   LOGO                         ·


                    ·

                             LOGO

       ·
             LOGO

                         LOGO
```


The exact arrangement should feel organic rather than symmetrical.

### Requirements

* Fullscreen starfield
* 8 glowing logos
* Different apparent distances
* Different apparent sizes
* Different brightness levels
* Subtle star background
* No central star
* No central navigation marker
* No obvious circular/oval orbit

---

## Updated Space Model

The user is effectively the camera.

The camera starts at:

```text
camera = viewer
```

There is no visible representation of the camera's position.

Each logo exists at a different position in a 3D space:

```ts
type SpaceLogo = {
  id: string;
  label: string;
  icon: string;

  x: number;
  y: number;
  z: number;
};
```

The `z` value determines perceived distance.

Example:

```ts
const logos = [
  {
    id: 'about',
    label: 'ABOUT',
    icon: aboutIcon,
    x: 20,
    y: 25,
    z: 5
  },
  {
    id: 'projects',
    label: 'PROJECTS',
    icon: projectsIcon,
    x: 72,
    y: 20,
    z: 12
  },
  {
    id: 'art',
    label: 'ART',
    icon: artIcon,
    x: 82,
    y: 65,
    z: 4
  }
];
```

The final positions will be supplied later.

---

# Camera / Warp Behaviour

When the user clicks a logo, the application should behave as though the camera is travelling through 3D space toward that logo.

### Before click

```text
          distant logo


   distant logo


                   nearby logo


       distant logo
```

### After click

The selected logo becomes the camera's target.

The entire world moves relative to that target.

```text
                       TARGET
                         ○
                         ↓
                       ○○○
                       ↓
                    ○○○○○
                    ↓
                 ○○○○○○○○
                 ↓
              █████████████
```

The selected logo should rapidly increase in apparent size.

---

# No Central Star

Delete any components, CSS or logic related to:

```text
CentralStar
central star
star pulse
star flight
star trajectory
star head
star trail from central star
```

Do not leave an invisible central star in the DOM as part of the animation system.

The warp effect should originate from the **camera/viewpoint**, not from an object in the scene.

---

# Warp Effect

The warp should still contain bright streaks radiating outward from the user's viewpoint.

Conceptually:

```text
                  /
             /
        /
   ----------------
        ✦ viewpoint
             \
                  \
                       \
```

The centre of the warp effect is now simply the **screen/camera centre**, not a visible star.

The viewer should feel like they are accelerating forward through the starfield.

---

# Background During Warp

The existing SVG background remains the initial environment.

During warp:

```text
normal starfield
      ↓
zoom
      ↓
streaking stars
      ↓
extreme warp
```

Use transforms rather than replacing the background.

The background can:

```css
transform: scale(...);
```

while the warp streak layer provides the high-speed effect.

---

# Other Logos During Warp

When one logo is selected, the other seven logos should participate in the sense of motion.

They should:

* move away from the viewpoint
* become smaller
* stretch slightly
* blur slightly
* fade into darkness

The selected logo should behave differently:

* move toward the viewer
* become dramatically larger
* become brighter
* remain visually identifiable
* eventually fill the screen

---

# Suggested Component Structure

Remove `CentralStar.tsx`.

Use:

```text
src/
├── App.tsx
├── main.tsx
│
├── components/
│   ├── SpaceScene.tsx
│   ├── SpaceWorld.tsx
│   ├── SpaceLogo.tsx
│   ├── WarpField.tsx
│   ├── ImpactTransition.tsx
│   └── PageContainer.tsx
│
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Art.tsx
│   ├── Music.tsx
│   ├── Photography.tsx
│   ├── Travel.tsx
│   └── Contact.tsx
│
├── config/
│   └── navigation.ts
│
├── assets/
│   └── logos/
│
└── styles/
    └── global.css
```

---

# Updated State Machine

```ts
type SceneState =
  | 'idle'
  | 'warping'
  | 'impact'
  | 'flash'
  | 'page';
```

### `idle`

* Starfield visible
* 8 logos visible
* No central star
* All logos clickable

### `warping`

* Selected logo becomes target
* Camera accelerates
* Warp streaks activate
* Other logos recede
* Selected logo approaches

### `impact`

* Selected logo fills viewport
* Brightness increases
* Glow expands

### `flash`

* Fullscreen white transition

### `page`

* Black background
* Destination page fades in

---

# Updated Visual Goal

The scene should feel less like a navigation menu and more like a **window into deep space**.

There should be no obvious centrepiece:

```text
      ·                         ·


            LOGO

   ·


                         LOGO


              ·


    LOGO


                              ·

                   LOGO

          ·
```

The user discovers the destinations in space and chooses one to travel toward.

The core interaction is therefore:

> **Choose a distant object in space → accelerate toward it at warp speed → enter that destination.**
