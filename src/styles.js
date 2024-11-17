export const CALLOUT_STYLES = {
    'modern-clean': {
        id: 'modern-clean',
        name: 'Modern Clean',
        styles: `
            border: none;
            background-color: var(--background-secondary);
            border-radius: 5px;
            padding: 15px;
            margin: 1em 0;
        `
    },
    'minimal-borders': {
        id: 'minimal-borders',
        name: 'Minimal Borders',
        styles: `
            border: 1px solid var(--background-modifier-border);
            background: transparent;
            padding: 15px;
            margin: 1em 0;
            border-radius: 3px;
        `
    },
    'glass-morphism': {
        id: 'glass-morphism',
        name: 'Glass Morphism',
        styles: `
            background: rgba(var(--background-primary-rgb), 0.7);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(var(--background-modifier-border-rgb), 0.3);
            border-radius: 10px;
            padding: 15px;
            margin: 1em 0;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        `
    },
    'gradient-accent': {
        id: 'gradient-accent',
        name: 'Gradient Accent',
        styles: `
            background: linear-gradient(to right, var(--background-secondary), var(--background-primary));
            border: none;
            border-radius: 8px;
            padding: 15px;
            margin: 1em 0;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        `
    },
    'vintage-paper': {
        id: 'vintage-paper',
        name: 'Vintage Paper',
        styles: `
            background-color: var(--background-primary);
            border: 1px solid var(--background-modifier-border);
            box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
            border-radius: 0;
            padding: 15px;
            margin: 1em 0;
            position: relative;
        `
    }
};

export const DEFAULT_SETTINGS = {
    activeStyle: 'modern-clean',
    enabledStyles: ['modern-clean', 'minimal-borders', 'glass-morphism', 'gradient-accent', 'vintage-paper']
};