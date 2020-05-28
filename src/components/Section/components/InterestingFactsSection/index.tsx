import Component from "vue-class-component";
import "./style.css";
import "./style.css";
import BaseSection from "../BaseSection";
import { FSXARichText, FSXACounter } from "fsxa-ui";
import FSXAImage from "@/components/Image";

export interface InterestingFactsSectionPayload {
  st_background_image: {
    src: string;
    previewId: string;
  };
  st_counters: Array<{
    previewId: string;
    identifier: string;
    data: {
      st_number: number;
      st_text: string;
    };
  }>;
  st_headline: string;
  st_tagline: string;
  /** This can contain html */
  st_text: string;
}
@Component({
  name: "InterestingFactsSection"
})
class InterestingFactsSection extends BaseSection<
  InterestingFactsSectionPayload
> {
  render() {
    return (
      <div
        class="w-full py-24 relative bg-fixed bg-center bg-cover"
        style={`background-image: url(${this.payload.st_background_image.src})`}
      >
        <FSXAImage
          class="absolute top-0 left-0 overflow-hidden"
          caasUrl={this.payload.st_background_image.src}
          resolution="ORIGINAL"
          previewId={this.payload.st_background_image.previewId}
        />
        <div class="InterestingFactsSection--Background-Overlay" />
        <div class="container mx-auto flex flex-col items-center md:flex-row px-4 md:px-6 lg:px-8 relative">
          <div class="w-full md:w-1/2 px-4">
            <div class="InterestingFactsSection--Content">
              <span class="font-light text-4xl">{this.payload.st_tagline}</span>
              <h2 class="text-highlight text-5xl font-bold">
                {this.payload.st_headline}
              </h2>
              <FSXARichText
                text={this.payload.st_text}
                class="text-lg font-light mb-6 text-white"
              />
            </div>
          </div>
          <div class="w-full md:w-1/2 px-4 flex">
            {this.payload.st_counters.map(counter => (
              <div
                class={`w-1/${this.payload.st_counters.length}`}
                data-preview-id={counter.previewId}
              >
                <FSXACounter
                  value={counter.data.st_number}
                  label={counter.data.st_text}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default InterestingFactsSection;
