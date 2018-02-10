import * as React from 'react';
import type { Story, RenderFunction } from '@storybook/react';

declare module '@storybook/addon-info' {
  declare type Options = {
    text?: string | React.Element<any>,
    inline?: boolean,
    header?: boolean,
    source?: boolean,
    propTables?: ?Array<React.ComponentType<any>>,
    maxPropsIntoLine?: number,
    maxPropObjectKeys?: number,
    maxPropArrayLength?: number,
    maxPropStringLength?: number,
  };

  declare export function addWithInfo(
    storyName: string,
    info: string,
    callback: RenderFunction,
    options: Options
  ): Story;

  declare export function withInfo(options: Options): Story;
}
