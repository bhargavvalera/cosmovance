# Cosmovance visual refresh

This update replaces `src/styles/index.css` with a cohesive responsive design system based on the supplied Phenytech-style reference and the approved Cosmovance palette.

## Apply
1. Back up your current project's `src` folder.
2. Copy this ZIP's `src` folder into the existing project and replace the old `src` folder.
3. Keep your existing `.git`, `node_modules`, `package.json`, and lockfile.
4. Run `npm run dev` and hard-refresh the browser (Ctrl+Shift+R).

## Palette
- Background: #F5F8FF / #FFFFFF
- Deep Navy: #0B0F24 (footer / brand contrast)
- Royal Blue: #3B82F6
- Sky Blue: #60A5FA
- Violet Purple: #A78BFA
- Soft Pink: #FBCFE8
- Accent Cyan: #22D3EE
- Heading: #1E293B
- Body: #64748B

The source project uses Vite + React + Tailwind CSS. Build verification could not be completed in this Linux environment because the uploaded Windows `node_modules` did not include the Linux Rolldown native binding. Reinstall dependencies on the target machine if needed (`npm install`).
