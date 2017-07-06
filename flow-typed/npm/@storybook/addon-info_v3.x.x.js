import type { RenderFunction, Story } from '@storybook/react';

declare module '@storybook/addon-info' {
  declare type Options = {
    inline?: boolean,
    header?: boolean,
    source?: boolean,
    propTables?: ?Array<React$Element<*>>,
    maxPropsIntoLine?: number,
    maxPropObjectKeys?: number,
    maxPropArrayLength?: number,
    maxPropStringLength?: number,
  };

  declare export function addWithInfo(
    storyName: string,
    info: string,
    callback: RenderFunction,
    options: Options,
  ): Story;
}
