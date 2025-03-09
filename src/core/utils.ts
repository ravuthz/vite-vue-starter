import type { App } from 'vue';

/**
 * Register layouts in the app instance
 *
 * @param {App<Element>} app
 */
export async function registerLayouts(app: App<Element>) {
    const layouts: any = import.meta.glob('@/layouts/*.vue', { eager: true });
    for (const key in layouts) {
        const layout = layouts[key].default;
        app.component(layout?.name, layout);
    }
}