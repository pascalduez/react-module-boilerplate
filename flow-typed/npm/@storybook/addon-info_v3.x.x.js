import type { RenderFunction, Story } from '@storybook/react';

declare module '@storybook/addon-info' {
  declare type Renderable = React$Element<any>;
  declare type RenderFunction = () => Renderable;

  declare type Options = {
    text?: string | Renderable,
    inline?: boolean,
    header?: boolean,
    source?: boolean,
    propTables?: ?Array<Renderable>,
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

  declare export function withInfo(options: Options): Story;
}
