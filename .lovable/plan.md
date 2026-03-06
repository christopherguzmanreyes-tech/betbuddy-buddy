

## Plan: Replace header flags with betting category icons

Replace the country flag buttons in the Header (both desktop and mobile) with four betting category quick-links: Deportivas, Ruleta, Mesas, and Slots.

### Changes (single file: `src/components/Header.tsx`)

1. **Remove** the `Globe` icon import and the `countries`/`selected`/`onSelectCountry` props from the component interface
2. **Add** Lucide icons: `Trophy` (Deportivas), `CircleDot` (Ruleta), `Layers` (Mesas), `Cherry` or `Gamepad2` (Slots)
3. **Desktop:** Replace the flags row with four small icon+label pill buttons linking to relevant sections/routes (e.g., `/apuestas`, `/casinos`)
4. **Mobile menu:** Same replacement — show the four category icons instead of flags
5. **Update parent components** (`Layout.tsx`) to stop passing country-related props to Header (country selector remains in the Hero and CountrySelector sections, just removed from Header)

### Visual style
- Each category rendered as a small pill/chip: icon + short label
- Use the existing `text-cta` accent color on hover
- Compact layout matching current header aesthetic

