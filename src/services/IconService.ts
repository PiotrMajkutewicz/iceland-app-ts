import * as MaterialIcons from "@mui/icons-material";

export class IconService {
  static getIcon(iconName = 'Home') {
    try {
      const name = iconName as keyof typeof MaterialIcons;
      const isIconValid = MaterialIcons[name] !== undefined;
      const IconComponent = isIconValid
        ? MaterialIcons[name]
        : MaterialIcons.Error;
  
      return IconComponent;
    } catch (error) {
      console.error(error);
      return MaterialIcons.Error;
    }
  }
}