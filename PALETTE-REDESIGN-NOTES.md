# Cosmovance palette implementation

This update applies the approved light palette across the existing React/Vite site while preserving the existing section components, links, content, and animation code.

## Palette
- Deep Navy: #0B0F24
- Royal Blue: #3B82F6
- Sky Blue: #60A5FA
- Violet Purple: #A78BFA
- Soft Pink: #FBCFE8
- Accent Cyan: #22D3EE
- White: #FFFFFF
- Light Background: #F5F8FF
- Heading: #1E293B
- Body Text: #64748B

## Files changed
- `src/styles/index.css`: replaced the dark design tokens and global styling with the supplied light palette, updated navigation/card/hero/footer styling, and added responsive/reduced-motion rules.
- `src/App.jsx`: changed the application shell to the light background and dark text.

## Apply
Copy the `src` folder from this archive into the existing project and replace the existing `src` folder. Keep the original `.git`, `node_modules`, `.env`, and other root configuration files. Then run `npm run dev` (or `npm run build`).

The footer intentionally remains a deep-navy brand anchor, as #0B0F24 is part of the supplied palette. The rest of the site uses the light background and dark typography from the table.
