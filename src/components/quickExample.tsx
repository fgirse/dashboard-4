import Image from "next/image";
import {Cloudinary} from "@cloudinary/url-gen";

// Import required actions.

import {byAngle} from "@cloudinary/url-gen/actions/rotate"
import {sepia} from "@cloudinary/url-gen/actions/effect";
// Removed invalid import for textFit

  // Import the required actions and qualifiers.
  import {fill} from "@cloudinary/url-gen/actions/resize";
  import {source} from "@cloudinary/url-gen/actions/overlay";
  import {byRadius, RoundCorners} from "@cloudinary/url-gen/actions/roundCorners";
  import { FontWeightType } from "@cloudinary/url-gen/types/types";
  // Import required values.
  import {text} from "@cloudinary/url-gen/qualifiers/source";
  import {Position} from "@cloudinary/url-gen/qualifiers/position";
  import {TextStyle} from "@cloudinary/url-gen/qualifiers/textStyle";
  import {autoGravity, compass} from "@cloudinary/url-gen/qualifiers/gravity";
  import { useTranslations } from "next-intl";
// Create and configure your Cloudinary instance.

export default function QuickExamples() {

  const t = useTranslations("QuickExample" );
  // Create a Cloudinary instance.
const cld = new Cloudinary({
  cloud: {
    cloudName: 'Carlo2024'
  }
}); 

// Use the image with public ID, 'sample'.
const myImage = cld.image('/space_mt4o5t_space-sagen_di60yn');

// Transform the image.
myImage
  .resize(fill(1700, 850))
  .roundCorners(byRadius(10))
  
  .overlay(
    source(
      text(
        t("zitat"),
      
        new TextStyle("bowlby one sc", 96) // Define font and size
          .lineSpacing(0) // Define line spacing
          
      )
        .textColor("#565656") // Set text color

        .backgroundColor("transparent") // Optional: Add a background color for the text block
        
    ).position(
      new Position()
        .gravity(compass("north")) // Position the text block
        .offsetY(-16) // Adjust vertical offset
        .offsetX(0) // Adjust horizontal offset
    
  ),
)
  .rotate(byAngle(0))
  .format('png')
  .roundCorners(byRadius(10)) // Rounded corners with a radius of 10px

  // Return the delivery URL
  const myUrl = myImage.toURL()
  return(
    <div className="w-full flex flex-col items-center">
    
      <Image src={myUrl} width={400} height={400} alt="Transformed Image" className="rounded-lg shadow-lg" />
    </div>
  );
}

function rgb(r: number, g: number, b: number, a: number): string {
  return `rgba(${r},${g},${b},${a})`;
}
