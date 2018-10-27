// flow-typed signature: 5e6579f3af61798ccdfbb047c2c72516
// flow-typed version: 2750495c3d/sponge_v0.1.x/flow_vx.x.x

declare module "sponge" {
  declare function sponge(): stream$Transform;
  declare function sponge(file: string): stream$Writable;

  declare module.exports: typeof sponge;
}
