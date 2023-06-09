// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface Platform {}
  }
  namespace svelte.JSX {
    interface DOMAttributes<T> {
      onfocusoutside?: CompositionEventHandler<T>;
      onfocusinside?: CompositionEventHandler<T>;
    }
  }
}

export {};
