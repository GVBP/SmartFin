import "@testing-library/jest-dom";

type ResizeObserverCallback = (
  entries: ResizeObserverEntry[],
  observer: ResizeObserver,
) => void;

class MockResizeObserver {
  callback: ResizeObserverCallback;

  constructor(callback: ResizeObserverCallback) {
    this.callback = callback;
  }

  observe() {
    // Mock da funcionalidade de observar
  }

  unobserve() {
    // Mock da funcionalidade de parar de observar
  }

  disconnect() {
    // Mock da funcionalidade de desconectar o observer
  }
}

// Definindo o mock no ambiente global
global.ResizeObserver = MockResizeObserver;
