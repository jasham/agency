const fontFamily = (family) => {
  switch (family) {
    case "black": return "Poppins-Black";
    case "bitalic": return "Poppins-BlackItalic";
    case "bold": return "Poppins-Bold";
    case "boldI": return "Poppins-BoldItalic";
    case "eBold" : return "Poppins-ExtraBold";
    case "eBoldI" : return "Poppins-ExtraBoldItalic";
    case "eLight" : return "Poppins-ExtraLight";
    case "eLightI" : return "Poppins-ExtraLightItalic";
    case "eItalic" : return "Poppins-Italic";
    case "light" : return "Poppins-Light";
    case "lightI" : return "Poppins-LightItalic";
    case "medium" : return "Poppins-Medium";
    case "mediumI" : return "Poppins-MediumItalic";
    case "regular" : return "Poppins-Regular";
    case "semiB" : return "Poppins-SemiBold";
    case "semiBI" : return "Poppins-SemiBoldItalic";
    case "thin" : return "Poppins-Thin";
    case "thinI" : return "Poppins-ThinItalic";
    default : return "Poppins-Regular";
  }
};

const fSize = (size) => {
  switch (size) {
    case 'small' : return '14px';  
    case 'regular' : return '16px';
    case 'medium' : return '18px';
    default : return size
  }
};

export { fontFamily, fSize };
