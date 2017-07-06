import type { RenderFunction, Story } from '@storybook/react';

declare module '@storybook/addon-infos' {
  declare export function addWithInfo(
    storyName: string,
    info: string,
    callback: RenderFunction,
    options: Object
  ): Story;
}
