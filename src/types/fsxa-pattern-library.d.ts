import { ComposedNavigationProps } from "./navigation";
import { ConfigProviderProps } from "./config-provider";
import { Module } from "vuex";
import { RootState, FSXAVuexState } from "./store";
import * as tsx from "vue-tsx-support";
import FSXAApi from "fsxa-api";
import { ComposedPageProps, BaseSectionProps } from "./page";

export class FSXAComposedNavigation extends tsx.Component<
  ComposedNavigationProps
> {}
export class FSXAConfigProvider extends tsx.Component<ConfigProviderProps> {}
export class FSXAComposedPage extends tsx.Component<ComposedPageProps> {}
export class FSXABaseSection<Payload = {}> extends tsx.Component<
  BaseSectionProps<Payload>
> {
  payload: Payload;
}

export function getFSXAModule<R extends RootState>(
  fsxaAPI?: FSXAApi
): Module<FSXAVuexState, R>;
export { FSXAActions, FSXAGetters } from "./../store";
export { default as FSXAApi } from "fsxa-api";
export * from "./navigation";
export * from "./config-provider";
export * from "./store";
export * from "./../constants";
