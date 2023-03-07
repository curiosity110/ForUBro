# Week 1, Day 4: HTML & CSS

## Agenda

- Live coding extensions

  - Go Live: Server and automatic reload

- HTML

  - Markup language (Text formatting system)
  - Skeleton
    - VSC
    - Head
      - Title
      - Styles
      - Meta -> Crawlers & SEO
    - Body
      - Rest
      - Important Tags

- CSS

  - Selectors
  - Cascading
    - Resolves style conflicts
    - **Importance\*** depends on the origin of the style sheet (Inline Style, Internal CSS, External CSS)
    - **Specificity\*** depends on the selectors
      - Element selectors
      - Class selectors
      - ID selectors
    - **Source order** depends on order in the css file
    - **\*** _!important_

---

## BREAK

---

- CSS Layout

  - Display: How the component is rendered

    - Block
    - Inline (doesn't listen to width)
    - Inline block (listens to width)
    - Flex

  - Position: Where to place itself regarding the rest of the elements

    - Static (default value)
    - Absolute
    - Relative
    - Fixed
    - Sticky

  - Flexbox

    - Full support -> [caniuse](https:canisue.com)
    - Two axis
      - Main
      - Cross

  - Grid
    - almost fully supported
    - Super powerful
    - Helpers in Browser Inspector
    - auto vs 1fr

- Media Queries

  - Different breakpoints -> Different UIs
  - Media breakpoints depending on design
  - Mobile first concept
  - Media no longer relevant: print, screen, ...
  - Responsivness without @media queries

## Bonus

- CSS variables

- calc()

- Animations

  - Transition
  - @keyframes

- Exercises

  - Games
  - Course Landing Page

- BEM methodology: Descriptive, reusable and modular
  - Component `.button`
  - Atom `.button__icon`
  - Modifier `.button--big` `.button--red`
