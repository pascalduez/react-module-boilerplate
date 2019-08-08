// flow-typed signature: 905be200a0a4ae64bcfcae1292e5e2ed
// flow-typed version: c6154227d1/sponge_v0.1.x/flow_>=v0.104.x

declare module "sponge" {
  declare function sponge(): stream$Transform;
  declare function sponge(file: string): stream$Writable;

  declare module.exports: typeof sponge;
}
