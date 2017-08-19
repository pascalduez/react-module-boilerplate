import * as React from 'react';
import type { StoryDecorator } from '@storybook/react';

declare module '@storybook/addon-knobs' {
  declare type KnobOption<T> = {
    value: T,
    type:
      | 'text'
      | 'boolean'
      | 'number'
      | 'color'
      | 'object'
      | 'select'
      | 'date',
  };

  declare type StoryContext = {
    kind: string,
    story: string,
  };

  declare type NumberOptions = {
    range: boolean,
    min: number,
    max: number,
    step: number,
  };

  declare export function knob<T>(name: string, options: KnobOption<T>): T;

  declare export function text(name: string, value: ?string): string;

  declare export function boolean(name: string, value: boolean): boolean;

  declare export function number(
    name: string,
    value: number,
    options?: NumberOptions
  ): number;

  declare export function color(name: string, value: string): string;

  declare export function object<T>(name: string, value: T): T;

  declare export function select<T>(
    name: string,
    options: { [s: string]: T },
    value: string
  ): T;

  declare export function select(
    name: string,
    options: string[],
    value: string
  ): string;

  declare export function date(name: string, value?: Date): Date;

  declare type WrapStoryProps = {
    context?: Object,
    storyFn?: Function,
    channel?: Object,
    knobStore?: Object,
    initialContent?: Object,
  };

  declare export function withKnobs(
    storyFn: Function,
    context: StoryContext
  ): React.ComponentType<WrapStoryProps>;

  declare export function withKnobsOptions(
    options: Object
  ): (
    storyFn: Function,
    context: StoryContext
  ) => React.ComponentType<WrapStoryProps>;
}
