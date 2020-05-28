import { FSXANavigation } from "fsxa-ui";
import { Component, Prop } from "vue-property-decorator";
import { ComposedNavigationProps } from "@/types/navigation";
import { NavigationData } from "fsxa-api";
import { FSXAActions, FSXAGetters } from "@/store";
import BaseComponent from "./BaseComponent";

@Component({
  name: "ComposedNavigation"
})
class ComposedNavigation extends BaseComponent<ComposedNavigationProps> {
  @Prop({ required: true, type: Function })
  handleNavClick!: ComposedNavigationProps["handleNavClick"];
  @Prop({ type: Function })
  isActiveItem: ComposedNavigationProps["isActiveItem"];

  serverPrefetch() {
    return this.fetchData();
  }

  mounted() {
    this.fetchData();
  }

  fetchData() {
    if (!this.navigationData) {
      return this.$store.dispatch(FSXAActions.fetchNavigation);
    }
  }

  get navigationData(): NavigationData | null {
    return this.$store.getters[FSXAGetters.navigationData];
  }

  render() {
    const items = this.navigationData ? this.navigationData.data : [];
    return (
      <FSXANavigation
        handleNavClick={this.handleNavClick}
        isActiveItem={this.isActiveItem}
        items={items}
      />
    );
  }
}
export default ComposedNavigation;
