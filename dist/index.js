/**
 * Harbor Dusk — satellite Dripnex theme.
 * Token layer only. Same contract as a community theme repo.
 * Must be CommonJS.
 */

const TOKENS = {
  '--bg-base': '#141c26',
  '--bg-surface': '#10161e',
  '--bg-elevated': '#1c2633',
  '--bg-inset': '#0c1218',
  '--bg-hover': 'rgba(205, 214, 222, 0.06)',
  '--bg-active': 'rgba(205, 214, 222, 0.1)',
  '--text-primary': '#cdd6de',
  '--text-secondary': 'rgba(205, 214, 222, 0.74)',
  '--text-muted': 'rgba(205, 214, 222, 0.52)',
  '--text-faint': 'rgba(205, 214, 222, 0.34)',
  '--border': 'rgba(205, 214, 222, 0.12)',
  '--border-subtle': 'rgba(205, 214, 222, 0.07)',
  '--border-strong': 'rgba(205, 214, 222, 0.18)',
  '--accent': '#5e9a92',
  '--accent-hover': '#74aea6',
  '--accent-muted': 'rgba(94, 154, 146, 0.16)',
  '--accent-subtle': 'rgba(94, 154, 146, 0.1)',
  '--glass-bg': 'rgba(20, 28, 38, 0.9)',
  '--glass-border': 'rgba(205, 214, 222, 0.1)',
  '--glass-bg-menu': 'rgba(28, 38, 51, 0.96)',
  '--glass-border-menu': 'rgba(205, 214, 222, 0.1)',
  '--status-active': '#5e9a92',
  '--status-on-hold': '#d4a05a',
  '--status-completed': '#7aad8a',
  '--status-dropped': '#c46b6b',
};

module.exports = {
  id: 'theme-harbor-dusk',
  name: 'Harbor Dusk',
  version: '0.1.1',
  description: 'Coastal evening palette for long writing sessions.',

  activate(context) {
    const remove = context.registerTheme({
      id: 'dripnex-harbor-dusk',
      name: 'Harbor Dusk',
      description: 'Coastal evening palette for long writing sessions.',
      author: 'Dripnex',
      colorScheme: 'dark',
      tokens: TOKENS,
    });

    return {
      dispose() {
        remove();
      },
    };
  },
};
