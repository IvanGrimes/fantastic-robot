import React from 'react';

type CSS = string;

export class GlobalStaticStylesManager {
  static instance: GlobalStaticStylesManager;

  static getInstance = () => {
    if (!GlobalStaticStylesManager.instance) {
      GlobalStaticStylesManager.instance = new GlobalStaticStylesManager();
    }

    return GlobalStaticStylesManager.instance;
  };

  private readonly styles: CSS[] = [];

  // eslint-disable-next-line no-useless-constructor,no-empty-function
  private constructor() {}

  add(style: CSS) {
    this.styles.push(style);
  }

  get() {
    return this.styles;
  }

  renderToString() {
    return <style dangerouslySetInnerHTML={{ __html: this.styles.join('') }} />;
  }
}
